"use client";
import { IEvent } from "../models/IEvent";
import { ISession } from "../models/ISession";
import { useRouter } from "next/navigation";
import "./style/guestWelcome.scss";

interface IGuestWelcomeProps {
  event: IEvent;
  session: ISession;
}

// TODO: Only send in relevant info, check if event.guestlist contains all guests. if so remove.
const GuestWelcome = ({ event, session }: IGuestWelcomeProps) => {
  const router = useRouter();
  return (
    <>
      <section className="wrapper-invitation">
        <h1 className="welcome-title">Welcome to {event.eventName}</h1>
        <h4 className="sub-title">{event.eventDate}</h4>
        <p className="welcome-text">A special invitation to:</p>
        <span className="welcome-span">
          <p className="guest-name"> {event.guestList[0].name}</p>
          {event.guestList[0].additionalGuest.name.length > 0 && (
            <>
              <p className="additional-guest-prefix"> &</p>
              <p className="additional-guest-name">
                {event.guestList[0].additionalGuest.name}
              </p>
            </>
          )}
        </span>
        <div className="next-return-wrapper">
          <button className="submit-event-btn" type="button" disabled>
            Previous
          </button>
          <button
            className="submit-event-btn"
            type="button"
            onClick={() => {
              router.push(`/invitation/${event.id}/${event.eventName}`);
            }}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default GuestWelcome;
