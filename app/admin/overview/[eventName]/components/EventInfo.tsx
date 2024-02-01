interface EventInfoProps {
  eventDate: string;
  eventId: string;
}

export const EventInfo = ({ eventDate, eventId }: EventInfoProps) => {
  return (
    <article className="admin-wrapper">
      <h3>Info</h3>
      <p>Event date: {eventDate}</p>
      <p>Event link: www.rendezevite.com/{eventId}</p>
      {/* <button className="admin-btn" onClick={editInvite}>
          Edit invitation
        </button> */}
    </article>
  );
};
