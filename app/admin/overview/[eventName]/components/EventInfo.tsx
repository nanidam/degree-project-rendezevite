"use client";

import { useRouter } from "next/navigation";
import "./style/eventInfo.scss";

interface EventInfoProps {
  eventDate: string;
  eventId: string;
  eventName: string;
}

//TODO: copy btn
export const EventInfo = ({ eventDate, eventId, eventName }: EventInfoProps) => {
  const router = useRouter();
  const editEvent = () => {
    router.push(`/admin/edit-event/${eventName}`);
  };
  return (
    <article className="edit-event-wrapper">
      <h3>Info</h3>
      <p>Event date: {eventDate}</p>
      <p>
        Event link:
        <a href={`www.rendezevite.com/invitation/${eventId}`}>
          www.rendezevite.com/invitation/{eventId}
        </a>
      </p>
      <button className="edit-event-btn" onClick={editEvent}>
        Edit invitation
      </button>
    </article>
  );
};
