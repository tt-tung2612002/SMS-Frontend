import { FC } from "react";
import { useParams } from "react-router-dom";

import { Text } from "@/components";
import { useTable } from "@refinedev/antd";

import { Lesson } from "@/graphql/new/schema.types";
import { AuditOutlined } from "@ant-design/icons";
import { Card, Space, Table } from "antd";
import { CLASS_LESSONS_TABLE_QUERY } from "./queries/getLessons";

type Props = {
  style?: React.CSSProperties;
  onLessonClick: any;
  classId: number;
};

export const ClassLessonsTable: FC<Props> = ({
  onLessonClick,
  classId,
  style,
}: any) => {
  // const { listUrl } = useNavigation();
  const params = useParams();

  const { tableQueryResult, tableProps } = useTable<Lesson>({
    resource: "lessons",
    filters: {
      permanent: [
        {
          field: "classId",
          operator: "eq",
          value: classId,
        },
      ],
    },
    meta: {
      gqlQuery: CLASS_LESSONS_TABLE_QUERY,
    },
  });

  const hasData = tableProps.loading
    ? true
    : tableProps?.dataSource?.length || 0 > 0;

  return (
    <Card
      style={style}
      styles={{
        header: {
          borderBottom: "0.1px solid #bebebe",
          marginBottom: "10px",
        },
        body: {
          padding: 10,
          // backgroundColor: "black",
        },
      }}
      title={
        <Space size="middle">
          <AuditOutlined />
          <Text>Lessons</Text>
        </Space>
      }
      extra={
        <>
          <Text className="tertiary">Total lessons: </Text>
          <Text strong>{tableQueryResult?.data?.total ?? 0}</Text>
        </>
      }
    >
      {hasData && (
        <Table
          {...tableProps}
          rowKey="id"
          pagination={{
            ...tableProps.pagination,
            showSizeChanger: false,
          }}
        >
          <Table.Column<Lesson>
            title="Subject"
            dataIndex="title"
            onCell={(record) => {
              return {
                onClick: () => {
                  onLessonClick(record.id);
                },
              };
            }}
          />
          <Table.Column<Lesson>
            // title="Deal amount"
            // dataIndex="value"
            render={(_, record) => {
              return <Text>{}</Text>;
            }}
            onCell={(record) => {
              return {
                onClick: () => {
                  onLessonClick(record.id);
                },
              };
            }}
          />
        </Table>
      )}
    </Card>
  );
};
