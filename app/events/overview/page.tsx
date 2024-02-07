"use client";

import "./style.scss";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllEvents } from "@/app/services/getAllEvents";
import ConfirmDelete from "@/app/utils/components/confirmDelete";
import React from "react";
import Loading from "@/app/utils/components/loading";

const EventOverview = () => {
  const [events, setEvents] = useState<string[]>([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [eventNameState, setEventNameState] = useState<string>("");
  const [pastEvents, setPastEvents] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAndSetEvents = async () => {
    const data = await getAllEvents();
    if (data) {
      const currentDate = new Date();
      const upcomingEvents = data.filter(
        (event) => new Date(event.eventDate) > currentDate
      );
      const pastEvents = data.filter((event) => new Date(event.eventDate) <= currentDate);

      setEvents(upcomingEvents.map((event) => event.eventName));
      setPastEvents(pastEvents.map((event) => event.eventName));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetEvents();
  }, []);
  const router = useRouter();

  const createEvent = () => {
    router.push("/events/create-event");
  };

  const handleDeleteEvent = async (eventName: string) => {
    setEventNameState(eventName);
    setShowConfirmDelete(true);

    // setEvents(events.filter((event) => event !== eventName));
  };

  return (
    <main>
      {loading && <Loading />}
      <h1 className="event-overview-header">Events</h1>
      <section className="event-overview-container">
        <article className="create-event">
          <button className="create-event-btn" onClick={createEvent}>
            Create Event
          </button>
        </article>

        <div className="event-wrapper">
          <article className="events-container">
            <h2>Current Events:</h2>
            <ul className="events">
              {events.map((eventName) => (
                <React.Fragment key={eventName}>
                  <li className="event">
                    <Link className="event-link" href={`/admin/overview/${eventName}`}>
                      {eventName}
                    </Link>
                    <div className="edit-delete-icons">
                      <ReactSVG
                        className="trash-icon"
                        src="/svgs/trash-can.svg"
                        onClick={() => handleDeleteEvent(eventName)}
                      />
                    </div>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </article>

          <article className="events-container">
            <h2>Past Events:</h2>

            {pastEvents.length > 0 ? (
              <ul className="events">
                {pastEvents.map((eventName) => (
                  <li key={eventName} className="event">
                    {eventName}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-past-events">
                {loading ? "" : "You currently have no past events."}
              </p>
            )}
          </article>

          {showConfirmDelete && (
            <ConfirmDelete
              setShowConfirmDelete={setShowConfirmDelete}
              eventName={eventNameState}
              setEvents={setEvents}
              events={events}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default EventOverview;
