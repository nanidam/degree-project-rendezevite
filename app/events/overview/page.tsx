"use client";

import "./style.scss";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllEvents } from "@/app/services/getAllEvents";
import { deleteEvent } from "@/app/services/deleteEvent";
import ConfirmDelete from "@/app/utils/components/confirmDelete";
import React from "react";

const EventOverview = () => {
  const [events, setEvents] = useState<string[]>([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [eventNameState, setEventNameState] = useState<string>("");

  const fetchAndSetEvents = async () => {
    const data = await getAllEvents();
    if (data) {
      setEvents(data.map((event) => event.eventName));
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
      <h1 className="event-overview-header">Events Overview</h1>
      <section className="event-overview-container">
        <article className="create-event">
          <button className="create-event-btn" onClick={createEvent}>
            Create event
          </button>
        </article>

        <div className="event-wrapper">
          <article className="current-events-container">
            <h2>Current events:</h2>
            <ul className="current-events">
              {events.map((eventName) => (
                <React.Fragment key={eventName}>
                  <li className="current-event">
                    <Link className="event" href={`/admin/overview/${eventName}`}>
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

          <article className="past-events-container">
            <h2>Past events:</h2>
            <ul>
              <li>event 3</li>
              <li>event 4</li>
            </ul>
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
