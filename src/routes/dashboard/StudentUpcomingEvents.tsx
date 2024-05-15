import { StudentGetEventsQuery } from "@/graphql/new/customTypes";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { useNavigation, useShow } from "@refinedev/core";
import { GetFields } from "@refinedev/nestjs-query";
import { Button, Card, List, Space, Typography } from "antd";
import { STUDENT_GET_EVENTS } from "../calendar/queries/getEventsForStudent";

const { Title, Text } = Typography;

export const StudentUpcomingEvents: React.FC = () => {
  const { list } = useNavigation();

  const { queryResult } = useShow<GetFields<StudentGetEventsQuery>>({
    resource: "userInfo",
    liveMode: "auto",
    meta: {
      gqlQuery: STUDENT_GET_EVENTS,
    },
    id: 1,
  });

  const { data } = queryResult;
  const events = data?.data?.events?.nodes;

  return (
    <Card
      styles={{
        header: {
          padding: "8px 16px",
        },
        body: {
          padding: "0 1rem",
        },
      }}
      title={
        <Space
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <CalendarOutlined />
          <Text>Upcoming events</Text>
        </Space>
      }
      extra={
        <Button onClick={() => list("events")} icon={<RightCircleOutlined />}>
          See calendar
        </Button>
      }
    >
      <List
        itemLayout="vertical"
        dataSource={events}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card style={{ borderLeft: `5px solid ${item.color}` }}>
              <Title level={4}>
                <CalendarOutlined />{" "}
                {new Date(item.startDate).toLocaleDateString()}
              </Title>
              <Text>
                <ClockCircleOutlined />{" "}
                {new Date(item.startDate).toLocaleTimeString()} -{" "}
                {new Date(item.endDate).toLocaleTimeString()}
              </Text>
              <Title level={5}>{item.lessonById?.title}</Title>
              <Text>{item.lessonById?.class?.name}</Text>
              <div>
                <Text>{item.description}</Text>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};
