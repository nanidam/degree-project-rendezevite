"use client";

import { ReactSVG } from "react-svg";
import "./style.scss";
import ReturnBtn from "../utils/components/returnBtn";

const Support = () => {
  return (
    <section className="support">
      <h1>Support Page</h1>
      <article className="support-wrapper">
        <p className="support-text">
          If you encounter any issues with the application, please don&apos;t
          hesitate to contact our {""}
          <a href="mailto:rendezevite@gmail.com">support</a>.
        </p>
        <div className="support-svgs">
          <ReactSVG src="/svgs/settings.svg" />
          <ReactSVG src="/svgs/setting-tools.svg" />
        </div>

        <ReturnBtn />
      </article>
    </section>
  );
};

export default Support;
