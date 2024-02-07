"use client";

import "./style/invitationGeometricWelcome.scss";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";
import Image from "next/image";
import { IInvitationWelcomeProps } from "../models/IInvitationWelcomeProps";
//FIXME: move into mother folder

const InvitationGeometricWelcome = ({
  eventName,
  eventId,
  eventDate,
  guest,
}: IInvitationWelcomeProps) => {
  const router = useRouter();

  return (
    <>
      <section className="welcome-bg">
        <article className="welcome-container">
          <Image
            className="gemetric-desktop"
            src="/geometricDesignDesktop.png"
            width={650}
            height={500}
            alt="Geometric background Design"
            priority={true}
            placeholder="empty"
          />
          <ReactSVG className="invitation-envelope" src="/svgs/invitation-envelope.svg" />
          <div className="welcome-wrapper">
            <h1 className="welcome-header">
              Welcome to <br className="welcome-br" />
              {eventName}
            </h1>
            <p className="sub-header">{eventDate}</p>
            <p className="invitation-welcome-text">A special invitation to:</p>
            <article className="invitation-guests">
              <span className="invitation-span">
                <p className="invitation-guestname"> {guest.name}</p>
                {guest.additionalGuest.name.length > 0 && (
                  <>
                    <p className="additional-guest-prefix"> &</p>
                    <p className="additional-guestname">{guest.additionalGuest.name}</p>
                  </>
                )}
              </span>
            </article>

            <div className="next-return-wrapper">
              <button
                className="invitation-next-btn"
                type="button"
                onClick={() => {
                  router.push(`/invitation/${eventId}/${eventName}`);
                }}
              >
                <ReactSVG
                  className="invitation-navigation-arrow"
                  src="/svgs/arrow.svg"
                  aria-label="Next page of invitation"
                ></ReactSVG>
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default InvitationGeometricWelcome;
