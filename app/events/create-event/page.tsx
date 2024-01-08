"use client";
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
    <section className="container">
      <h1>Create Event</h1>
      <article className="info-text">
        <p>Please enter event details below.</p>
      </article>
      <article className="form-container">
        <form onSubmit={handleCreateEvent}>
          <label htmlFor="event-name">
            Event name:
            <input type="text" name="event-name" placeholder="Event Name" />
          </label>
          <label htmlFor="event-date">
            Event date:
            <input type="date" name="event-date" />
          </label>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default CreateEvent;
