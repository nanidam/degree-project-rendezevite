"use client";

import { useRouter } from "next/navigation";

interface EventInfoProps {
  eventDate: string;
  eventId: string;
  eventName: string;
}

export const EventInfo = ({
  eventDate,
  eventId,
  eventName,
}: EventInfoProps) => {
  const router = useRouter();
  const editEvent = () => {
    router.push(`/admin/edit-event/${eventName}`);
  };
  return (
    <article className="admin-wrapper">
      <h3>Info</h3>
      <p>Event date: {eventDate}</p>
      <p>Event link: www.rendezevite.com/{eventId}</p>
      <button className="admin-btn" onClick={editEvent}>
        Edit invitation
      </button>
    </article>
  );
};
