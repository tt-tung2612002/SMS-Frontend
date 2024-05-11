import { Space, Typography } from "antd";
import { FC } from "react";

type PaginationTotalProps = {
  total: number;
  entityName: string;
};

export const PaginationTotal: FC<PaginationTotalProps> = ({
  total,
  entityName,
}) => {
  return (
    <Space
      style={{
        paddingLeft: "5px",
      }}
    >
      <Typography
        style={{
          marginTop: "1px",
          color: "#fff",
          textEmphasis: "bold",
          fontSize: "15px",
        }}
      >
        {total}
      </Typography>{" "}
      <Typography
        style={{
          fontSize: "14px",
        }}
      >
        {entityName} in total
      </Typography>{" "}
    </Space>
  );
};
