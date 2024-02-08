"use client";

import "./style/editRsvp.scss";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";
import createEditRsvp from "../createEditRsvp";
import { IEvent } from "../models/IEvent";

interface IEditRsvpProps {
  eventName: string;
  event?: IEvent;
}
const EditRsvp = ({ eventName, event }: IEditRsvpProps) => {
  const router = useRouter();

  return (
    <section className="create-rsvp-container">
      <h1 className="choose-template-header">Create RSVP</h1>
      <div className="create-rsvp-wrapper">
        <article className="create-rsvp-text-container">
          <h2 className="create-rsvp-subheader">
            Will you be serving food or maybe drinks?
          </h2>
          <p className="create-rsvp-text">
            If so, it could be a good idea to ask about diet or allergies.
          </p>
          <p className="create-rsvp-text">
            By selecting <strong>Yes</strong>, your guests will have the option to choose
            their food preferences, which include choices such as meat, vegetarian, or
            vegan.
          </p>
          <p>
            Opting for <strong>Yes</strong> in the allergies section allows guests to
            specify their allergies freely in a text field.
          </p>
          <div className="svgs-wrapper">
            <ReactSVG src="/svgs/dinner.svg" />
            <ReactSVG src="/svgs/cake-piece.svg" />
            <ReactSVG src="/svgs/pink-cocktail.svg" />
          </div>
        </article>

        <article className="create-rsvp-form-container">
          <form
            className="create-rsvp-form"
            onSubmit={(e) => createEditRsvp({ e, eventName, router })}
          >
            <fieldset className="create-rsvp-fieldset">
              <legend className="create-rsvp-legend">Ask about food preferences?</legend>
              <label className="create-rsvp-label" htmlFor="ask-about-food-yes">
                <input
                  className="create-rsvp-radio"
                  type="radio"
                  id="ask-about-food-yes"
                  name="ask-about-food"
                  value="true"
                  defaultChecked={event?.includeFood ? true : false}
                />
                Yes
              </label>

              <label className="create-rsvp-label" htmlFor="ask-about-food-no">
                <input
                  className="create-rsvp-radio"
                  type="radio"
                  id="ask-about-food-no"
                  name="ask-about-food"
                  value="false"
                  defaultChecked={event?.includeFood ? false : true}
                />
                No
              </label>
            </fieldset>

            <fieldset className="create-rsvp-fieldset">
              <legend className="create-rsvp-legend">Ask about allergies?</legend>
              <label className="create-rsvp-label" htmlFor="ask-about-allergies-yes">
                <input
                  className="create-rsvp-radio"
                  type="radio"
                  id="ask-about-allergies-yes"
                  name="ask-about-allergies"
                  value="true"
                  defaultChecked={event?.includeAllergies ? true : false}
                />
                Yes
              </label>
              <label className="create-rsvp-label" htmlFor="ask-about-allergies-no">
                <input
                  className="create-rsvp-radio"
                  type="radio"
                  id="ask-about-allergies-no"
                  name="ask-about-allergies"
                  value="false"
                  defaultChecked={event?.includeAllergies ? false : true}
                />
                No
              </label>
            </fieldset>
            <button className="submit-inv-btn" type="submit">
              Finish!
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default EditRsvp;
