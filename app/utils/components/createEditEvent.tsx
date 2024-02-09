"use client";

import { useState } from "react";
import "./style/createEditEvent.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ReturnBtn from "@/app/utils/components/returnBtn";
import { handleCreateEditEvent } from "../handleCreateEditEvent";
import { IEvent } from "../models/IEvent";

interface CreateEditEventProps {
  event?: IEvent;
  userId: string;
}
const CreateEditEvent = ({ event, userId }: CreateEditEventProps) => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  return (
    <>
      <section className="create-event-container">
        <h1 className="create-event-header">{event ? "Edit Event" : "Create Event"}</h1>
        <article className="info-text-wrapper">
          <p className="info-text">
            Your first step is to furnish essential information for your event, including an
            event name to help you track invitations.
          </p>
          <p className="info-text">
            Select a date for your occasion, and the password will functions as a secure
            access key for your guests to retrieve their invitations.
          </p>
        </article>
        <article className="create-event-wrapper">
          <form
            onSubmit={(e) =>
              handleCreateEditEvent({ e, router, setErrorMsg, event, userId })
            }
            className="create-event-form"
          >
            <div className="create-event-form-wrapper">
              <label className="create-event-label" htmlFor="event-name">
                Event Name:
                <input
                  className="create-event-input"
                  type="text"
                  name="event-name"
                  placeholder="Name"
                  defaultValue={event?.eventName}
                  maxLength={13}
                />
              </label>
              <label className="create-event-label" htmlFor="event-date">
                Event Date:
                <input
                  className="create-event-input"
                  type="date"
                  name="event-date"
                  defaultValue={event?.eventDate}
                />
              </label>
              <label className="create-event-label" htmlFor="event-date">
                Event Password:
                <input
                  className="create-event-input"
                  type="text"
                  name="event-password"
                  placeholder="Password"
                  defaultValue={event?.eventPassword}
                  maxLength={24}
                />
              </label>
              {errorMsg && <span className="error-message">{errorMsg}</span>}
              <div className="next-return-wrapper">
                <ReturnBtn aria-label="Return to previous step" />
                <button
                  className="submit-event-btn"
                  type="submit"
                  aria-label="Proceed to the next step"
                >
                  Next
                </button>
              </div>
            </div>
            <div className="envelope-wrapper">
              <Image
                src="/gold-envelope.png"
                alt="envelope"
                width={200}
                height={200}
                priority
                aria-label="Gold envelope"
                role="img"
              />
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default CreateEditEvent;
