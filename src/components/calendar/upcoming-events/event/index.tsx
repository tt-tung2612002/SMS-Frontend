import React from "react";

import { useNavigation } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { Badge } from "antd";
import dayjs from "dayjs";

import { UpcomingEventsQuery } from "@/graphql/types";

import { Text } from "../../../text";
import styles from "../index.module.css";

type CalendarUpcomingEventProps = {
  item: GetFieldsFromList<UpcomingEventsQuery>;
};

export const CalendarUpcomingEvent: React.FC<CalendarUpcomingEventProps> = ({
  item,
}) => {
  const { show } = useNavigation();
  const { id, title, startDate, endDate, color } = item;
  const isToday = dayjs(startDate).utc().isSame(dayjs.utc(), "day");
  const isTomorrow = dayjs(startDate)
    .utc()
    .isSame(dayjs.utc().add(1, "day"), "day");
  const isAllDayEvent =
    dayjs(startDate).utc().startOf("day").isSame(startDate) &&
    dayjs(endDate).utc().endOf("day").isSame(endDate);

  const renderDate = () => {
    if (isToday) {
      return `Today`;
    }

    if (isTomorrow) {
      return `Tomorrow`;
    }

    return dayjs(startDate).utc().format("MMM DD");
  };

  const renderTime = () => {
    if (isAllDayEvent) {
      return "All day";
    }

    return `${dayjs(startDate).utc().format("HH:mm")} - ${dayjs(endDate)
      .utc()
      .format("HH:mm")}`;
  };

  return (
    <div
      onClick={() => {
        show("events", item.id);
      }}
      key={id}
      className={styles.item}
    >
      <div className={styles.date}>
        <Badge color={color} className={styles.badge} />
        <Text size="xs">{`${renderDate()}, ${renderTime()}`}</Text>
      </div>
      <Text ellipsis={{ tooltip: true }} strong className={styles.title}>
        {title}
      </Text>
    </div>
  );
};
