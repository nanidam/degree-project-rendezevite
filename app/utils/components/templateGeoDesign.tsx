"use client";

import "./style/templateGeoDesign.scss";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/navigation";
import { ITemplateGeometricDesignProps } from "../models/ITemplateGeometricDesign";

const TemplateGeometricDesign: React.FC<ITemplateGeometricDesignProps> = ({
  header,
  text,
  eventId,
}) => {
  const router = useRouter();

  return (
    <section className="template-bg">
      <article className="template-container">
        <h1 className="template-header">{header}</h1>
        <div className="template-text-container">
          <p className="template-text">{text}</p>
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
      </article>
    </section>
  );
};

export default TemplateGeometricDesign;
