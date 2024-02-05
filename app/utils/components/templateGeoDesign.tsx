"use client";

import "./style/templateGeoDesign.scss";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/navigation";
import { ITemplateGeometricDesignProps } from "../models/ITemplateGeometricDesign";

const TemplateGeometricDesign: React.FC<ITemplateGeometricDesignProps> = ({
  header,
  text,
  eventId,
  eventName,
}) => {
  const router = useRouter();
  // TODO: Fix guest name
  // const guestName = "Test Person 1";

  // const handleRsvp = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("RSVP CLICK!!! ");
  // };
  // const renderRSVPContent = () => (
  //   <>
  //     <form className="rsvp-form" onSubmit={handleRsvp}>
  //       <label htmlFor="guest">
  //         Guest:
  //         <input
  //           className="rsvp-input"
  //           type="text"
  //           id="guest"
  //           name="guest"
  //           value={guestName}
  //           readOnly
  //         />
  //       </label>

  //       <div className="rsvp-wrapper">
  //         <label htmlFor="attending">
  //           {" "}
  //           Attending: <br />
  //           <input type="radio" name="attending" value="yes" /> Yes
  //           <input type="radio" name="attending" value="no" /> No
  //         </label>
  //       </div>

  //       <div className="rsvp-wrapper">
  //         <label className="diet-label" htmlFor="diet">
  //           Diet: <br />
  //           <input className="rsvp-input" type="radio" name="diet" value="meat" /> Meat
  //           <input
  //             className="rsvp-input"
  //             type="radio"
  //             name="diet"
  //             value="vegan"
  //           /> Vegan <br />
  //           <input
  //             className="rsvp-input"
  //             type="radio"
  //             name="diet"
  //             value="vegetarian"
  //           />{" "}
  //           Vegetarian
  //         </label>
  //       </div>

  //       <label htmlFor="allergies">
  //         Allergies:
  //         <input className="rsvp-input" type="text" id="allergies" name="allergies" />
  //       </label>

  //       <label htmlFor="comments">
  //         Comments:
  //         <input className="rsvp-input" type="text" id="comments" name="comments" />
  //       </label>

  //       <button className="rsvp-btn">Send</button>
  //     </form>
  //   </>
  // );

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
