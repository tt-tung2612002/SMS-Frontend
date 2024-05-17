import { Class } from "@/graphql/new/customSchema";
import { useGo, useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";
import { ClassCalendar } from "../calendar/components/calendar/classCalendar";
import LessonsManager from "./components/lessons/lesson-manager";
import { CLASS_GET_LESSON_IDS } from "./components/lessons/queries/getLessons";

export const ClassShowPage = () => {
  const { id } = useParams<{ id: string }>();

  const go = useGo();

  const { data: lessonsQuery } = useOne<Class>({
    resource: "class",
    liveMode: "auto",
    meta: {
      gqlQuery: CLASS_GET_LESSON_IDS,
    },
    id: parseInt(id ?? ""),
  });

  const lessonIds = lessonsQuery?.data?.lessons?.nodes?.map(
    (lesson) => lesson.id
  );

  return (
    <div className="page-container">
      <ClassCalendar
        lessonIds={lessonIds ?? []}
        onClickEvent={(event) => {
          go({
            to: {
              resource: "events", // resource name or identifier
              action: "show",
              id: event.id,
            },
            type: "push",
          });
        }}
      />
      <LessonsManager />
    </div>
  );
};
