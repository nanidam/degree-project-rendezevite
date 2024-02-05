import "./style/accordionHomePage.scss";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

const AccordionHomePage = () => {
  const [showFeatures, setShowFeatures] = useState<boolean>(true);
  const intervalId: number = 0;

  const showFeaturesClick = () => {
    setShowFeatures(true);
    clearInterval(intervalId);
  };

  const showTemplatesClick = () => {
    setShowFeatures(false);
    clearInterval(intervalId);
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setShowFeatures((prevShowFeatures) => !prevShowFeatures);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [setShowFeatures]);

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
            <div>https://www.npmjs.com/package/react-multi-carousel ?</div>
            <div>Template 2</div>
          </div>
        )}
      </article>
    </>
  );
};

export default AccordionHomePage;
