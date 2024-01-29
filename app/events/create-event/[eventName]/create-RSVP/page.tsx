"use client";
import Logout from "@/app/utils/components/logout";
import "./style.scss";
import updateEventFood from "@/app/services/updateEventFood";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";

const CreateRsvp = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const router = useRouter();

  if (eventName.includes(".")) {
    return null;
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const includeFood = formData.get("ask-about-food") === "true";
    const includeAllergies = formData.get("ask-about-allergies") === "true";

    const updatedEvent = await updateEventFood(
      includeFood,
      includeAllergies,
      eventName.toLocaleLowerCase()
    );

    if (updatedEvent) {
      router.push(`/admin/overview/${eventName}`);
    }
  };

  return (
    <section className="create-rsvp-container">
      <h1 className="choose-template-header">Create RSVP</h1>
      <Logout />
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
            {/* <ReactSVG src="/cutlery.svg" /> */}
            <ReactSVG src="/dinner.svg" />
            <ReactSVG src="/cake-piece.svg" />
            <ReactSVG src="/pink-cocktail.svg" />
          </div>
        </article>

        <article className="create-rsvp-form-container">
          <form className="create-rsvp-form" onSubmit={handleSubmit}>
            <fieldset className="create-rsvp-fieldset">
              <legend className="create-rsvp-legend">Ask about food preferences?</legend>
              <label className="create-rsvp-label" htmlFor="ask-about-food-yes">
                <input
                  className="create-rsvp-radio"
                  type="radio"
                  id="ask-about-food-yes"
                  name="ask-about-food"
                  value="true"
                  defaultChecked
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
                  defaultChecked
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

export default CreateRsvp;
