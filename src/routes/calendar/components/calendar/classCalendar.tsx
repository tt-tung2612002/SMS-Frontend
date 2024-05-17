import React, { lazy, Suspense, useRef, useState } from "react";

import { useList } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import FullCalendar from "@fullcalendar/react";
import { Button, Card } from "antd";
import dayjs from "dayjs";

import { Text } from "@/components";
import { Event } from "@/graphql/new/customSchema";
import { CalendarEventsQuery } from "@/graphql/new/customTypes";

import { NEW_CALENDAR_EVENTS_QUERY as CALENDAR_EVENTS_QUERY } from "./getEvents";
import styles from "./index.module.css";

const FullCalendarWrapper = lazy(() => import("./full-calendar"));

type View =
  | "dayGridMonth"
  | "timeGridWeek"
  | "timeGridDay"
  | "listMonth"
  | "listDay"
  | "listWeek";

type CalendarProps = {
  onClickEvent?: (event: Event) => void;
  lessonIds: number[];
};

export const ClassCalendar: React.FC<CalendarProps> = ({
  onClickEvent,
  lessonIds,
}) => {
  // const [calendarView, setCalendarView] = useState<View>("listMonth");
  // const calendarView = "listWeek";

  const calendarRef = useRef<FullCalendar>(null);
  const [title, setTitle] = useState(calendarRef.current?.getApi().view.title);

  const { data } = useList<GetFieldsFromList<CalendarEventsQuery>>({
    resource: "events",
    pagination: {
      mode: "off",
    },
    filters: [
      {
        field: "id",
        operator: "in",
        value: lessonIds,
      },
    ],
    meta: {
      gqlQuery: CALENDAR_EVENTS_QUERY,
    },
  });

  const events = (data?.data ?? []).map(
    ({ id, title, startDate, endDate, color }) => ({
      id: id,
      title: title,
      start: startDate,
      end: endDate,
      color: color,
      allDay: dayjs(endDate).utc().diff(dayjs(startDate).utc(), "hours") >= 23,
    })
  );

  return (
    <Card>
      <div className={styles.calendar_header}>
        <div className={styles.actions}>
          <Button
            onClick={() => {
              calendarRef.current?.getApi().prev();
            }}
            shape="circle"
            icon={<LeftOutlined />}
          />
          <Button
            onClick={() => {
              calendarRef.current?.getApi().next();
            }}
            shape="circle"
            icon={<RightOutlined />}
          />
          <Text className={styles.title} size="lg">
            {title}
          </Text>
        </div>
      </div>
      <Suspense>
        <FullCalendarWrapper
          {...{ calendarRef, events, onClickEvent, setTitle }}
        />
      </Suspense>
    </Card>
  );
};
