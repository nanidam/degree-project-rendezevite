"use client";

import "./style.scss";

const CreateEvent = () => {
  const handleCreateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const eventName = formData.get("event-name") as string;
    const eventDate = formData.get("event-date") as string;
    console.log(eventName, eventDate);
    // const userId = await getUserId()

    // if (userId) {
    //   const newEvent = await prisma.event.create({
    //     data: {
    //       eventName,
    //       eventDate: new Date(eventDate),
    //       eventPlannerUserId: userId,
    //     },
    //   })

    //   if (newEvent) {
    //     redirect(`/admin/event/${eventName}`)
    //   }
    // }
  };
  return (
    <section className="create-event-container">
      <h1 className="create-event-header">Create Event</h1>
      <article className="info-text-wrapper">
        <p>Please enter event details below.</p>
      </article>
      <article className="create-event-wrapper">
        <form onSubmit={handleCreateEvent} className="create-event-form">
          <label className="create-event-label" htmlFor="event-name">
            Event name:
            <input
              className="create-event-input"
              type="text"
              name="event-name"
              placeholder="Event name"
            />
          </label>
          <label className="create-event-label" htmlFor="event-date">
            Event date:
            <input className="create-event-input" type="date" name="event-date" />
          </label>
          <button className="submit-event-btn" type="submit">
            Submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default CreateEvent;
