"use client";

import "./style/createEditInvitations.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IEvent } from "../models/IEvent";
import ReturnBtn from "./returnBtn";
import createEditInvitations from "../createEditInvitations";

//TODO: add character counter
// Eventname length must be limited by smallest template
// header and body must be conditionally limited based on templates chosen
interface ICreateEditInvitationsProps {
  eventName: string;
  event?: IEvent;
}
const CreateEditInvitations = ({ eventName, event }: ICreateEditInvitationsProps) => {
  const router = useRouter();

  const [header, setHeader] = useState<string>(event?.header || "");
  const [text, setText] = useState<string>(event?.text || "");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  return (
    <section className="create-inv-container">
      <h1 className="create-inv-header">{event ? "Edit" : "Create"} invitation</h1>
      <article className="create-inv-wrapper">
        <p>Select a header for your invitations and craft the desired message.</p>
        <p>
          Kindly note that, currently, there is no option to modify fonts and colors, as
          they are optimized to best suit the overall design of the invitations.
        </p>
      </article>
      <article className="create-inv-wrapper">
        <form
          className="create-inv-form"
          onSubmit={(e) =>
            createEditInvitations({
              e,
              router,
              setErrorMsg,
              header,
              text,
              eventName,
              event,
            })
          }
        >
          <label className="create-inv-label" htmlFor="create-inv-header">
            Header:
          </label>
          <input
            className="create-inv-input"
            id="create-inv-header"
            placeholder="Header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            maxLength={22}
          ></input>

          <label className="create-inv-label" htmlFor="create-inv-text">
            Text:
          </label>
          <textarea
            className="create-inv-textarea"
            id="create-inv-text"
            placeholder="What do you want your invitation to say?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={415}
          ></textarea>

          {errorMsg && <p className="create-inv-error">{errorMsg}</p>}

          <div className="next-return-wrapper">
            <ReturnBtn />
            <button className="submit-event-btn" type="submit">
              Next
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreateEditInvitations;
