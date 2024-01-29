"use client";

import { ITemplateGeometricDesignProps } from "../utils/models/ITemplateGeometricDesign";
import "./style/templateGeoDesign.scss";

const TemplateGeometricDesign: React.FC<ITemplateGeometricDesignProps> = ({
  header,
  text,
  rsvpGeneric,
  rsvpFood,
}) => {
  const headerContent = rsvpGeneric && rsvpFood ? "RSVP" : header;

  // TODO: Fix guest name
  const guestName = "Test Person 1";

  const handleRsvp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("RSVP CLICK!!! ");
  };
  const renderRSVPContent = () => (
    <>
      <form className="rsvp-form" onSubmit={handleRsvp}>
        <label htmlFor="guest">
          Guest:
          <input
            className="rsvp-input"
            type="text"
            id="guest"
            name="guest"
            value={guestName}
            readOnly
          />
        </label>

        <div className="rsvp-wrapper">
          <label htmlFor="attending">
            {" "}
            Attending: <br />
            <input type="radio" name="attending" value="yes" /> Yes
            <input type="radio" name="attending" value="no" /> No
          </label>
        </div>

        <div className="rsvp-wrapper">
          <label className="diet-label" htmlFor="diet">
            Diet: <br />
            <input className="rsvp-input" type="radio" name="diet" value="meat" /> Meat
            <input
              className="rsvp-input"
              type="radio"
              name="diet"
              value="vegan"
            /> Vegan <br />
            <input
              className="rsvp-input"
              type="radio"
              name="diet"
              value="vegetarian"
            />{" "}
            Vegetarian
          </label>
        </div>

        <label htmlFor="allergies">
          Allergies:
          <input className="rsvp-input" type="text" id="allergies" name="allergies" />
        </label>

        <label htmlFor="comments">
          Comments:
          <input className="rsvp-input" type="text" id="comments" name="comments" />
        </label>

        <button className="rsvp-btn">Send</button>
      </form>
    </>
  );

  return (
    <section className="template-bg">
      <h1 className="template-header">{headerContent}</h1>
      <article className="template-text-container">
        {" "}
        {rsvpGeneric && rsvpFood ? (
          renderRSVPContent()
        ) : (
          <p className="template-text">{text}</p>
        )}
      </article>
    </section>
  );
};

export default TemplateGeometricDesign;
