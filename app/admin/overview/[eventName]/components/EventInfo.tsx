interface EventInfoProps {
  eventDate: string;
  eventId: string;
}

export const EventInfo = ({ eventDate, eventId }: EventInfoProps) => {
  const editEvent = () => {};
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
