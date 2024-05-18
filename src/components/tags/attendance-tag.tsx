import React from "react";

import { Attendance } from "@/graphql/new/customSchema";
import { PlayCircleFilled, PlayCircleOutlined } from "@ant-design/icons";
import { useUpdate } from "@refinedev/core";
import { Button, Popover, Tag, TagProps } from "antd";
import dayjs from "dayjs";

export const AttendanceStatusTag: React.FC<{ status: string; id: number }> = ({
  status,
  id,
}) => {
  let icon: React.ReactNode = null;
  let color: TagProps["color"] = undefined;

  const { mutate } = useUpdate<Attendance>();

  switch (status.toUpperCase()) {
    case "ABSENT":
      icon = <PlayCircleFilled />;
      color = "red";
      break;
    case "PRESENT":
      icon = <PlayCircleFilled />;
      color = "green";
      break;
    case "LATE":
      icon = <PlayCircleFilled />;
      color = "orange";
      break;
    case "UNMARKED":
      icon = <PlayCircleOutlined />;
      color = "grey";
      break;
    default:
      break;
  }
  const handleStatusChange = (newStatus: string) => {
    mutate({
      resource: "attendance",
      id: id,
      values: {
        status: newStatus,
        updatedAt: dayjs().utc().utcOffset(7).format("YYYY-MM-DD HH:mm:ss"),
      },
      invalidates: ["all", "resourceAll"],
    });
  };

  const content = (
    <div>
      <Button
        type="text"
        onClick={() => handleStatusChange("PRESENT")}
        icon={<PlayCircleFilled />}
        style={{
          color: "#6abe39",
          background: "#162312",
          borderColor: "#274916",
          textTransform: "capitalize",
        }}
      >
        Present
      </Button>
      <Button
        type="text"
        onClick={() => handleStatusChange("ABSENT")}
        icon={<PlayCircleFilled />}
        style={{
          color: "#e84749",
          background: "#29181a",
          borderColor: "#58181c",
          textTransform: "capitalize",
        }}
      >
        Absent
      </Button>
      <Button
        type="text"
        onClick={() => handleStatusChange("LATE")}
        icon={<PlayCircleFilled />}
        style={{
          color: "#f5a623",
          background: "#2a1e12",
          borderColor: "#5a3a1c",
          textTransform: "capitalize",
        }}
      >
        Late
      </Button>
    </div>
  );

  return (
    <Popover content={content} title="Change Status">
      <Tag
        color={color}
        style={{ textTransform: "capitalize", cursor: "pointer" }}
      >
        {icon} {status.toLowerCase()}
      </Tag>
    </Popover>
  );
  // return (
  //   <Tag color={color} style={{ textTransform: "capitalize" }}>
  //     {icon} {status.toLowerCase()}
  //   </Tag>
  // );
};
