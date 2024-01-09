"use client";

import { useState } from "react";
import "./style.scss";
import getUserId from "@/app/services/getUserId";
import createEvent from "@/app/services/createEvent";
import { useRouter } from "next/navigation";
import Logout from "@/app/components/logout";

const CREATE_EVENT_STATUS = {
  EMPTY_NAME: "Please give your event a name",
  EMPTY_DATE: "Please choose a date",
  EMPTY_PASSWORD: "Please enter a password",
  EVENT_NAME_EXISTS: "Event name already exists",
  GENERIC: "Something went wrong. Please try again",
  INVALID: "Invalid date",
  SUCCESS: "Event created",
};

const CreateEvent = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const handleCreateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const eventName = formData.get("event-name") as string;
    const eventDate = formData.get("event-date") as string;
    const eventPassword = formData.get("event-password") as string;

    switch (true) {
      case eventName === "":
        setErrorMsg(CREATE_EVENT_STATUS.EMPTY_NAME);
        break;

      case eventDate !== "" && eventName !== "":
        const userId = await getUserId();

        if (userId) {
          const newEvent = await createEvent({
            eventDate,
            eventName,
            userId,
            eventPassword,
          });

          if (newEvent) {
            router.push(`/events/create-event/${eventName}/template`);
          } else {
            setErrorMsg(CREATE_EVENT_STATUS.EVENT_NAME_EXISTS);
          }
        }
        break;

      case eventDate === "":
        setErrorMsg(CREATE_EVENT_STATUS.EMPTY_DATE);
        break;

      case new Date(eventDate) < new Date():
        setErrorMsg(CREATE_EVENT_STATUS.INVALID);
        break;

      case eventPassword === "":
        setErrorMsg(CREATE_EVENT_STATUS.EMPTY_PASSWORD);
        break;

      default:
        setErrorMsg(CREATE_EVENT_STATUS.GENERIC);
        break;
    }
  };

  return (
    <section className="create-event-container">
      <h1 className="create-event-header">Create Event</h1>
      <Logout />
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
          <label className="create-event-password" htmlFor="event-date">
            Event password:
            <input
              className="create-event-input"
              type="text"
              name="event-password"
              placeholder="Password"
            />
          </label>
          {errorMsg && <span className="error-message">{errorMsg}</span>}
          <button className="submit-event-btn" type="submit">
            Submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default CreateEvent;