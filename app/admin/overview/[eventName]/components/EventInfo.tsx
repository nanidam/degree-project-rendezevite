"use client";

import "./style/eventInfo.scss";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";
import { useState } from "react";

interface IEventInfoProps {
  eventDate: string;
  eventId: string;
  eventName: string;
}

export const EventInfo = ({ eventDate, eventId, eventName }: IEventInfoProps) => {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);

  const INVITATION_LINK = `www.rendezevite.com/invitation/${eventId}`;

  const editEvent = () => {
    router.push(`/admin/edit-event/${eventName}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(INVITATION_LINK);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <article className="edit-event-wrapper">
      <h3>Information</h3>
      <p className="event-info">
        Event Date:
        <span className="event-date">{eventDate}</span>
      </p>
      <p className="event-info">Invitation Link:</p>
      <div className="event-link-wrapper">
        <a className="event-link" href={INVITATION_LINK}>
          {INVITATION_LINK}
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
