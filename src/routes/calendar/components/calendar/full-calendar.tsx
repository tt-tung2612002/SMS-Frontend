import { Dispatch, FC, RefObject, SetStateAction } from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

import { Event } from "@/graphql/new/customSchema";
import styled from "@emotion/styled";
type FullCalendarWrapperProps = {
  calendarRef: RefObject<FullCalendar>;
  events: (Partial<Event> & { allDay: boolean })[];
  onClickEvent?: (event: Event) => void;
  setTitle: Dispatch<SetStateAction<string | undefined>>;
};

export const StyleWrapper = styled.div`
  .fc-daygrid-day-number,
  .fc-col-header-cell-cushion {
    float: left;
    font-size: 14px;
  }

  .fc-direction-ltr .fc-list-day-text,
  .fc-direction-rtl .fc-list-day-side-text {
    color: white;
    font-size: 16px;
    line-height: 2em;
  }

  .fc tr {
    height: 10px;
  }

  .fc .fc-list-event:hover td {
    background-color: #424242;
  }

  .fc-event .fc-event-title,
  .fc-list-event-time,
  .fc-list-event-title,
  .fc-event .fc-event-time {
    font-size: 14px;
  }

  .fc-theme-standard td,
  .fc-theme-standard th,
  .fc-theme-standard .fc-list-day-cushion {
    background-color: #232323;
  }

}
`;

const FullCalendarWrapper: FC<FullCalendarWrapperProps> = ({
  calendarRef,
  events,
  onClickEvent,
  setTitle,
}) => {
  return (
    <StyleWrapper>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView={`dayGridMonth`}
        events={events}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
        }}
        eventClick={({ event }) => {
          onClickEvent?.(
            events.find(({ id }) => id?.toString() === event.id) as Event
          );
        }}
        datesSet={({ view }) => {
          setTitle(view.title);
        }}
        headerToolbar={false}
        timeZone="UTC"
        height={600}
      />
    </StyleWrapper>
  );
};

export default FullCalendarWrapper;
