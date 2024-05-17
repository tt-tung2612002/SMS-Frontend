import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import { CrudFilter, useList, useOne } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import FullCalendar from "@fullcalendar/react";
import { Button, Card, Grid, Radio } from "antd";
import dayjs from "dayjs";

import { Text } from "@/components";
import { Event, User } from "@/graphql/new/customSchema";
import { CalendarEventsQuery } from "@/graphql/new/customTypes";

import useRoleCheck from "@/hooks/useRoleCheck";
import {
  GET_ACTIVE_STUDENT_FOR_EVENTS,
  GET_ACTIVE_TEACHER_FOR_EVENTS,
} from "@/routes/classes/queries/getOneUser";
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
  categoryId?: string[];
  onClickEvent?: (event: Event) => void;
};

export const Calendar: React.FC<CalendarProps> = ({
  categoryId,
  onClickEvent,
}) => {
  const [calendarView, setCalendarView] = useState<View>("dayGridMonth");
  const calendarRef = useRef<FullCalendar>(null);
  const [title, setTitle] = useState(calendarRef.current?.getApi().view.title);
  const { md } = Grid.useBreakpoint();
  const { isStudent, isTeacher } = useRoleCheck();
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    calendarRef.current?.getApi().changeView(calendarView);
  }, [calendarView]);

  useEffect(() => {
    if (md) {
      setCalendarView("dayGridMonth");
    } else {
      setCalendarView("listMonth");
    }
  }, [md]);

  const filters: CrudFilter[] = [
    {
      field: "category.id",
      operator: "in",
      value: categoryId?.length ? categoryId : undefined,
    },
  ];

  const { data: lessonsQueryStudent } = useOne<User>({
    resource: "user",
    liveMode: "auto",
    meta: {
      gqlQuery: GET_ACTIVE_STUDENT_FOR_EVENTS,
    },
    id: parseInt(userId ?? ""),
  });

  const { data: lessonsQueryTeacher } = useOne<User>({
    resource: "user",
    liveMode: "auto",
    meta: {
      gqlQuery: GET_ACTIVE_TEACHER_FOR_EVENTS,
    },
    id: parseInt(userId ?? ""),
  });

  const studentLessonIds =
    lessonsQueryStudent?.data?.classes?.nodes
      .flatMap((classNode) => classNode.lessons.nodes)
      .map((lessonNode) => lessonNode.id) ?? [];

  const teacherLessonIds =
    lessonsQueryTeacher?.data?.classesByTeacherId?.nodes
      .flatMap((classNode) => classNode.lessons.nodes)
      .map((lessonNode) => lessonNode.id) ?? [];

  if (isStudent) {
    filters.push({
      field: "id",
      operator: "in",
      value: studentLessonIds,
    });
  } else if (isTeacher) {
    filters.push({
      field: "id",
      operator: "in",
      value: teacherLessonIds,
    });
  }

  const { data } = useList<GetFieldsFromList<CalendarEventsQuery>>({
    resource: "events",
    pagination: {
      mode: "off",
    },
    filters: filters,
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

        <Radio.Group value={calendarView}>
          {[
            {
              label: "Month",
              desktopView: "dayGridMonth",
              mobileView: "listMonth",
            },
            {
              label: "Week",
              desktopView: "timeGridWeek",
              mobileView: "listWeek",
            },
            {
              label: "Day",
              desktopView: "timeGridDay",
              mobileView: "listDay",
            },
          ].map(({ label, desktopView, mobileView }) => {
            const view = md ? desktopView : mobileView;
            return (
              <Radio.Button
                key={label}
                value={view}
                onClick={() => {
                  setCalendarView(view as View);
                }}
              >
                {label}
              </Radio.Button>
            );
          })}
          {md && (
            <Radio.Button
              value="listMonth"
              onClick={() => {
                setCalendarView("listMonth");
              }}
            >
              List
            </Radio.Button>
          )}
        </Radio.Group>
      </div>
      <Suspense>
        <FullCalendarWrapper
          {...{ calendarRef, events, onClickEvent, setTitle }}
        />
      </Suspense>
    </Card>
  );
};
