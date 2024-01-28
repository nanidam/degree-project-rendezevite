"use client";

import "./style.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import updateEventText from "@/app/services/updateEventText";
import Logout from "@/app/components/logout";

const CREATE_INVITATION_STATUS = {
  EMPTY_HEADER: "Please give your invitation a header",
  EMPTY_TEXTAREA: "Please add some text",
  GENERIC: "Something went wrong. Please try again",
};

//TODO: add character counter
const Invitations = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const router = useRouter();

  const [headerValue, setHeaderValue] = useState<string>("");
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (eventName.includes(".")) {
    return null;
  }
  const createInvitation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (true) {
      case headerValue === "":
        setErrorMsg(CREATE_INVITATION_STATUS.EMPTY_HEADER);
        break;
      case textareaValue === "":
        setErrorMsg(CREATE_INVITATION_STATUS.EMPTY_TEXTAREA);
        break;
      case headerValue !== "" && textareaValue !== "":
        const updatedEvent = await updateEventText(
          headerValue,
          textareaValue,
          eventName.toLowerCase()
        );
        if (updatedEvent) {
          router.push(`/events/create-event/${eventName}/create-RSVP`);
        }
        break;
      default:
        setErrorMsg(CREATE_INVITATION_STATUS.GENERIC);
        break;
    }
  };

  return (
    <section className="create-inv-container">
      <Logout />
      <h1>Create invitation</h1>
      <article className="create-inv-wrapper">
        <p>Select a header for your invitations and craft the desired message.</p>
        <p>
          Kindly note that, currently, there is no option to modify fonts and colors, as
          they are optimized to best suit the overall design of the invitations.
        </p>
      </article>
      <article className="create-inv-wrapper">
        <form className="create-inv-form" onSubmit={createInvitation}>
          <label className="create-inv-label" htmlFor="create-inv-header">
            Header:
          </label>
          <input
            className="create-inv-input"
            id="create-inv-header"
            placeholder="Header"
            value={headerValue}
            onChange={(e) => setHeaderValue(e.target.value)}
          ></input>

          <label className="create-inv-label" htmlFor="create-inv-text">
            Text:
          </label>
          <textarea
            className="create-inv-textarea"
            id="create-inv-text"
            placeholder="What do you want your invitation to say?"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          ></textarea>
          {errorMsg && <p className="create-inv-error">{errorMsg}</p>}
          <button className="create-inv-btn">Next -{">"}</button>
        </form>
      </article>
    </section>
  );
};

export default Invitations;
