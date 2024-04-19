import {
  CrudFilter,
  CrudOperators,
  CrudSorting,
  LogicalFilter,
  Pagination,
} from "@refinedev/core";

import { DocumentNode, FieldNode, SelectionSetNode,visit } from "graphql";
import set from "lodash/set";

const operatorMap: { [key: string]: string } = {
  eq: "eq",
  ne: "neq",
  lt: "lt",
  gt: "gt",
  lte: "lte",
  gte: "gte",
  in: "in",
  nin: "notIn",
};

const operatorMapper = (
  operator: CrudOperators,
  value: any
): { [key: string]: any } => {
  if (operator === "contains") {
    return { includesInsensitive: `${value}` };
  }

  if (operator === "ncontains") {
    return { notILike: `${value}` };
  }

  if (operator === "startswith") {
    return { iLike: `${value}%` };
  }

  if (operator === "nstartswith") {
    return { notILike: `${value}%` };
  }

  if (operator === "endswith") {
    return { iLike: `%${value}` };
  }

  if (operator === "nendswith") {
    return { notILike: `%${value}` };
  }

  if (operator === "null") {
    return { is: null };
  }

  if (operator === "nnull") {
    return { isNot: null };
  }

  if (operator === "between") {
    if (!Array.isArray(value)) {
      throw new Error("Between operator requires an array");
    }

    if (value.length !== 2) {
      return {};
    }

    return { between: { lower: value[0], upper: value[1] } };
  }

  return { [operatorMap[operator]]: value };
};

export const generateFilters = (filters: LogicalFilter[]) => {
  const result: { [key: string]: { [key: string]: string | number } } = {};

  filters
    .filter((f) => {
      if (Array.isArray(f.value) && f.value.length === 0) {
        return false;
      }

      return !!f.value;
    })
    .map((filter: LogicalFilter | CrudFilter) => {
      if (filter.operator === "and" || filter.operator === "or") {
        return set(result, filter.operator, [
          generateFilters(filter.value as LogicalFilter[]),
        ]);
      } else if ("field" in filter) {
        return set(
          result,
          filter.field,
          operatorMapper(filter.operator, filter.value)
        );
      } else {
        return {};
      }
    });

  return result;
};

export const generateSorting = (sorters: CrudSorting) => {
  return sorters.map((sorter) => {
    return {
      field: sorter.field,
      direction: sorter.order.toUpperCase(),
    };
  });
};

export const generatePaging = (pagination: Pagination) => {
  // maximum value of 32 bit signed integer
  if (pagination.mode === "off") return { limit: 2147483647 };

  if (pagination.mode !== "server") return undefined;

  if (!pagination.current || !pagination.pageSize) return undefined;

  return {
    limit: pagination.pageSize,
    offset: (pagination.current - 1) * pagination.pageSize,
  };
};

const getChildNodesField = (node: FieldNode): FieldNode | undefined => {
  return node?.selectionSet?.selections?.find(
    (node) => node.kind === "Field" && node.name.value === "nodes"
  ) as FieldNode;
};

export const getOperationFields = (documentNode: DocumentNode) => {
  const fieldLines: string[] = [];
  let isInitialEnter = true;
  let depth = 0;
  let isNestedField = false;

  visit(documentNode, {
    Field: {
      enter(node): SelectionSetNode | void {
        if (isInitialEnter) {
          isInitialEnter = false;

          const childNodesField = getChildNodesField(node);

          const nodeToReturn = childNodesField ?? node;

          if (typeof nodeToReturn.selectionSet === "undefined") {
            throw new Error("Operation must have a selection set");
          }

          return nodeToReturn.selectionSet;
        }

        fieldLines.push(
          `${depth > 0 ? "  ".repeat(isNestedField ? depth : depth - 1) : ""}${
            node.name.value
          }${node.selectionSet ? " {" : ""}`
        );

        if (node.selectionSet) {
          depth++;
          isNestedField = true;
        }
      },
      leave(node) {
        if (node.selectionSet) {
          depth--;
          fieldLines.push(`${"  ".repeat(depth)}}`);
          isNestedField = false;
        }
      },
    },
  });

  return fieldLines.join("\n").trim();
};

export const isMutation = (documentNode: DocumentNode) => {
  let isMutation = false;

  visit(documentNode, {
    OperationDefinition: {
      enter(node) {
        if (node.operation === "mutation") {
          isMutation = true;
        }
      },
    },
  });

  return isMutation;
};

