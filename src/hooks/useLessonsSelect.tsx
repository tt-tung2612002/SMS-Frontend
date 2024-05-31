import { ClassGetLessonsQuery } from "@/graphql/new/customTypes";
import { CLASS_LESSONS_TABLE_QUERY } from "@/routes/classes/components/lessons/queries/getLessons";
import { useSelect } from "@refinedev/antd";
import { CrudFilters } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

export const useLessonsSelect = (filters?: CrudFilters) => {
  const serverFilter = filters || [];
  const { queryResult } = useSelect<GetFieldsFromList<ClassGetLessonsQuery>>({
    resource: "lessons",
    optionLabel: "title",
    filters: serverFilter,
    meta: {
      gqlQuery: CLASS_LESSONS_TABLE_QUERY,
    },
  });

  const options = queryResult.data?.data.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  return options;
};
