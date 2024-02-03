"use client";

import { useRouter } from "next/navigation";
import "./style/eventInfo.scss";
import { ReactSVG } from "react-svg";
import { useState } from "react";

interface EventInfoProps {
  eventDate: string;
  eventId: string;
  eventName: string;
}

//TODO: copy btn
export const EventInfo = ({ eventDate, eventId, eventName }: EventInfoProps) => {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const editEvent = () => {
    router.push(`/admin/edit-event/${eventName}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`www.rendezevite.com/invitation/${eventId}`);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <article className="edit-event-wrapper">
      <h3>Information</h3>
      <p className="event-info">
        <b>Event Date: </b>
        {eventDate}
      </p>
      <p className="event-info">
        <b>Event Link: </b>
      </p>
      <div className="event-link-wrapper">
        <a className="event-link" href={`www.rendezevite.com/invitation/${eventId}`}>
          www.rendezevite.com/invitation/{eventId}{" "}
        </a>
        <ReactSVG className="copy-svg" onClick={copyToClipboard} src="/svgs/copy.svg" />
      </div>
      {isCopied && <p className="copy-confirmation">Link copied to clipboard!</p>}
      <button className="edit-event-btn" onClick={editEvent}>
        Edit Invitation
      </button>
    </article>
  );
};
