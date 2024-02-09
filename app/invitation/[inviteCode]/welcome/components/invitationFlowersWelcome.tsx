"use client";

import "./invitationFlowersWelcome.scss";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";
import Image from "next/image";
import { IInvitationWelcomeProps } from "@/app/utils/models/IInvitationWelcomeProps";

//FIXME: move into mother folder
const InvitationFlowersWelcome = ({
  eventName,
  eventId,
  eventDate,
  guest,
}: IInvitationWelcomeProps) => {
  const router = useRouter();

  return (
    <>
      <section className="flowers-welcome-bg">
        <article className="flowers-welcome-container">
          <Image
            className="flowers-bg-desktop"
            src="/invitation-flowers-desktop.png"
            width={650}
            height={500}
            alt="Flowers frame Design"
            priority={true}
            placeholder="empty"
          />

          <ReactSVG
            className="invitation-envelope"
            src="/svgs/invitation-envelope.svg"
            aria-label="Invitation envelope icon"
          />
          <div className="flowers-wrapper">
            <h1 className="flowers-header">
              Welcome to <br className="flowers-br" />
              {eventName}
            </h1>

            <p className="flowers-sub-header">{eventDate}</p>
            <p className="flowers-welcome-text">A special invitation to:</p>
            <article className="flowers-invited-guests">
              <span className="flowers-span">
                <p className="flowers-invited-guestname"> {guest.name}</p>
                {guest.additionalGuest.name.length > 0 && (
                  <>
                    <p className="flowers-additional-guest-prefix"> &</p>
                    <p className="flowers-additional-guestname">
                      {guest.additionalGuest.name}
                    </p>
                  </>
                )}
              </span>
            </article>

            <div className="flowers-btn-container">
              <button
                className="flowers-next-btn"
                type="button"
                aria-label="Next page of invitation"
                onClick={() => {
                  router.push(`/invitation/${eventId}/${eventName}`);
                }}
              >
                <ReactSVG
                  className="flowers-navigation-arrow"
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

export default InvitationFlowersWelcome;
