"use client";

import "./style/accordionHomePage.scss";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import ImageCarouselHomePage from "./imageCarouselHomePage";

const AccordionHomePage = () => {
  const [showFeatures, setShowFeatures] = useState<boolean>(true);

  const showFeaturesClick = () => {
    setShowFeatures(true);
  };

  const showTemplatesClick = () => {
    setShowFeatures(false);
  };

  return (
    <>
      <article className="accordion">
        <div className="accordion-headers">
          <button
            onClick={showFeaturesClick}
            className={`accordion-header ${showFeatures ? "active" : ""}`}
          >
            Features
          </button>
          <button
            onClick={showTemplatesClick}
            className={`accordion-header ${!showFeatures ? "active" : ""}`}
          >
            Templates
          </button>
        </div>

        {showFeatures ? (
          <div className="accordion-features">
            <ul className="feature-list">
              <li className="feature-card">
                <ReactSVG className="feature-svg" src="/svgs/pen-feature.svg" />{" "}
                <p>Personalize your text</p>
              </li>
              <li className="feature-card">
                <ReactSVG className="feature-svg" src="/svgs/add-guests.svg" />{" "}
                <p>Create your guest list</p>
              </li>
              <li className="feature-card">
                <ReactSVG className="feature-svg" src="/svgs/star-feature.svg" />{" "}
                <p> Track RSVP&apos;d guests</p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="accordion-templates">
            <ImageCarouselHomePage deviceType={"desktop"} />
          </div>
        )}
      </article>
    </>
  );
};

export default AccordionHomePage;
