"use client";
import Logout from "@/app/components/logout";
import "./style.scss";
import updateEventFood from "@/app/services/updateEventFood";
import { useRouter } from "next/navigation";

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

    const updatedEvent = await updateEventFood(includeFood, includeAllergies, eventName);

    if (updatedEvent) {
      router.push(`/admin/overview/${eventName}`);
    }
  };

  return (
    <section className="create-rsvp-container">
      <h1 className="choose-template-header">Create RSVP</h1>
      <Logout />
      <p className="create-rsvp-text">
        Will your event be including any food? If so, it could be a good idea to ask about
        diet or allergies
      </p>

      <form className="create-rsvp-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Ask about food preferences:</legend>
          <label htmlFor="ask-about-food-yes">
            <input
              type="radio"
              id="ask-about-food-yes"
              name="ask-about-food"
              value="true"
              defaultChecked
            />
            <span className="checkbox-option">Yes</span>
          </label>
          <label htmlFor="ask-about-food-no">
            <input
              type="radio"
              id="ask-about-food-no"
              name="ask-about-food"
              value="false"
            />
            <span className="checkbox-option">No</span>
          </label>
        </fieldset>

        <fieldset>
          <legend>Ask about allergies:</legend>
          <label htmlFor="ask-about-allergies-yes">
            <input
              type="radio"
              id="ask-about-allergies-yes"
              name="ask-about-allergies"
              value="true"
              defaultChecked
            />
            <span className="checkbox-option">Yes</span>
          </label>
          <label htmlFor="ask-about-allergies-no">
            <input
              type="radio"
              id="ask-about-allergies-no"
              name="ask-about-allergies"
              value="false"
            />
            <span className="checkbox-option">No</span>
          </label>
        </fieldset>
        <button className="done-btn" type="submit">
          Done
        </button>
      </form>
    </section>
  );
};

export default CreateRsvp;
