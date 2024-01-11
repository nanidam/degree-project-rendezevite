"use client";

import Logout from "@/app/components/logout";
import "./style.scss";
import chooseTemplate from "@/app/services/chooseTemplate";
import { useRouter } from "next/navigation";

const Template = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const router = useRouter();

  if (eventName.includes(".")) {
    return null;
  }

  const choosingTemplate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const template = formData.get("options") as string;
    chooseTemplate(template, eventName);

    router.push(`/events/create-event/${eventName}/invitations`);
  };
  return (
    <section className="choose-template-container">
      <h1 className="choose-template-header">Choose template</h1>
      <Logout />
      <article className="choose-template">
        <form onSubmit={choosingTemplate} className="choose-template-form">
          <label htmlFor="options">Select a template:</label>
          <select className="template-options" id="options" name="options">
            <option value="templateGeoDesign">Geometric</option>
            <option value="templateFlowerDesign">Flowers</option>
          </select>

          <article className="preview-template">
            <div>Preview?</div>
          </article>
          <button className="template-btn" type="submit">
            Confirm
          </button>
        </form>
      </article>
    </section>
  );
};

export default Template;
