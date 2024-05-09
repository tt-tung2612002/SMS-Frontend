import { FC } from "react";
import { useParams } from "react-router-dom";

import { Text } from "@/components";
import { useTable } from "@refinedev/antd";

import { Lesson } from "@/graphql/new/schema.types";
import { AuditOutlined, EyeFilled } from "@ant-design/icons";
import { Button, Card, Space, Table } from "antd";
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
      headStyle={{
        borderBottom: "1px solid #D9D9D9",
        marginBottom: "1px",
      }}
      bodyStyle={{ padding: 0 }}
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
          <Table.Column<Lesson> title="Subject" dataIndex="title" />
          <Table.Column<Lesson>
            // title="Deal amount"
            // dataIndex="value"
            render={(_, record) => {
              return <Text>{}</Text>;
            }}
          />
          <Table.Column<Lesson>
            dataIndex="id"
            width={112}
            render={(value, record) => {
              return (
                <Space>
                  <Button
                    size="small"
                    icon={<EyeFilled />}
                    onClick={() => {
                      onLessonClick(value);
                    }}
                  />
                </Space>
              );
            }}
          />
        </Table>
      )}
    </Card>
  );
};
