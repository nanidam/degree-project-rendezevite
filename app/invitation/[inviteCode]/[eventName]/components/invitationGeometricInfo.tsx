"use client";

import "./invitationGeometricInfo.scss";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/navigation";
import { IInvitationInfoProps } from "@/app/utils/models/IInvitationInfoProps";

const InvitationGeometricInfo = ({ header, text, eventId }: IInvitationInfoProps) => {
  const router = useRouter();

  return (
    <section className="invitation-main">
      <article className="invitation-main-container">
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
        <div className="invitation-main-wrapper">
          <h1 className="invitation-main-header">{header}</h1>
          <div className="main-text-container">
            <p className="invitation-main-text">{text}</p>
          </div>
          <div className="next-return-wrapper">
            <button
              className="invitation-btn"
              type="button"
              onClick={() => {
                router.push(`/invitation/${eventId}/welcome`);
              }}
            >
              <ReactSVG
                className="invitation-navigation-arrow"
                src="/svgs/arrow.svg"
                aria-label="Return"
              ></ReactSVG>
            </button>
            <button
              className="invitation-btn"
              type="button"
              onClick={() => {
                router.push(`/invitation/${eventId}/rsvp`);
              }}
            >
              <ReactSVG
                className="invitation-navigation-arrow-left"
                src="/svgs/arrow.svg"
                aria-label="Next"
              ></ReactSVG>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default InvitationGeometricInfo;
