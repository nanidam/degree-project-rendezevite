"use client";

import "./style/template.scss";
import chooseTemplate from "@/app/services/chooseTemplate";
import { useRouter } from "next/navigation";
import { IEvent } from "../models/IEvent";
import ReturnBtn from "./returnBtn";
import PreviewGeometricCarousel from "@/app/events/create-event/[eventName]/template/components/PreviewGeometricCarousel";
import PreviewFlowersCarousel from "@/app/events/create-event/[eventName]/template/components/PreviewFlowersCarousel";
import { useState } from "react";

interface ITemplateProps {
  eventName: string;
  event?: IEvent;
}
const Template = ({ eventName, event }: ITemplateProps) => {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState<string>("templateGeoDesign");

  if (eventName.includes(".")) {
    return null;
  }

  const choosingTemplate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const template = formData.get("options") as string;
    chooseTemplate(template, eventName);

    if (!event) router.push(`/events/create-event/${eventName}/invitations`);
    else router.push(`/admin/edit-event/${eventName}/invitations`);
  };

  return (
    <section className="choose-template-container">
      <h1 className="choose-template-header">
        Choose your <br className="choose-template-br" />
        template
      </h1>
      <article className="choose-template">
        <form onSubmit={choosingTemplate} className="choose-template-form">
          <h2>
            Template:
            <select
              className="template-options"
              id="options"
              name="options"
              defaultValue={event?.template ? event?.template : "templateGeoDesign"}
              onChange={(e) => setSelectedTemplate(e.target.value)}
            >
              <option className="template-option" value="templateGeoDesign">
                Geometric
              </option>
              <option className="template-option" value="templateFlowerDesign">
                Flowers
              </option>
            </select>
          </h2>

          <div className="preview-template">
            {selectedTemplate === "templateGeoDesign" && <PreviewGeometricCarousel />}
            {selectedTemplate === "templateFlowerDesign" && <PreviewFlowersCarousel />}
          </div>

          <div className="next-return-wrapper">
            <ReturnBtn />
            <button className="submit-event-btn" type="submit">
              Next
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Template;
