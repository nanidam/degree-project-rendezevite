"use client";

import "./invitationFlowersInfo.scss";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/navigation";
import { IInvitationInfoProps } from "@/app/utils/models/IInvitationInfoProps";

const InvitationFlowersInfo = ({ header, text, eventId }: IInvitationInfoProps) => {
  const router = useRouter();

  return (
    <>
      <section className="flowers-invitation-info">
        <article className="flowers-info-container">
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
          <div className="flowers-info-wrapper">
            <h1 className="flowers-info-header">{header}</h1>
            <div className="flowers-text-container">
              <p className="flowers-info-text">{text}</p>
            </div>
            <div className="flowers-btn-container">
              <button
                className="flowers-back-btn"
                type="button"
                onClick={() => {
                  router.push(`/invitation/${eventId}/welcome`);
                }}
              >
                <ReactSVG
                  className="flowers-return-arrow"
                  src="/svgs/arrow.svg"
                  aria-label="Return to previous page of invitation"
                ></ReactSVG>
              </button>

              <button
                className="flowers-next-info-btn"
                type="button"
                onClick={() => {
                  router.push(`/invitation/${eventId}/rsvp`);
                }}
              >
                <ReactSVG
                  className="flowers-next-arrow"
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

export default InvitationFlowersInfo;
