"use client";

import "./style/guestWelcome.scss";
import { IEvent } from "../models/IEvent";
import { ISession } from "../models/ISession";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";

interface IGuestWelcomeProps {
  event: IEvent;
  session: ISession;
}
// Show real guest
// TODO: Only send in relevant info, check if event.guestlist contains all guests. if so remove.
const GuestWelcome = ({ event, session }: IGuestWelcomeProps) => {
  const router = useRouter();
  return (
    <>
      <section className="welcome-bg">
        <article className="welcome-container">
          <h1 className="welcome-header">
            Welcome to <br />
            {event.eventName}
          </h1>
          <p className="sub-header">{event.eventDate}</p>
          <p className="invitation-welcome-text">A special invitation to:</p>
          <article className="invitation-guests">
            <span className="invitation-span">
              <p className="invitation-guestname"> {event.guestList[0].name}</p>
              {event.guestList[0].additionalGuest.name.length > 0 && (
                <>
                  <p className="additional-guest-prefix"> &</p>
                  <p className="additional-guestname">
                    {event.guestList[0].additionalGuest.name}
                  </p>
                </>
              )}
            </span>
          </article>

          <div className="next-return-wrapper">
            <button
              className="invitation-next-btn"
              type="button"
              onClick={() => {
                router.push(`/invitation/${event.id}/${event.eventName}`);
              }}
            >
              <ReactSVG
                className="invitation-navigation-arrow"
                src="/svgs/arrow.svg"
                aria-label="Next page of invitation"
              ></ReactSVG>
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default GuestWelcome;
