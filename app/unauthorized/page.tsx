"use client";

import { ReactSVG } from "react-svg";
import "./style.scss";

const Unauthorized = () => {
  return (
    <section className="unauthorized">
      <h1>Unauthorized Access</h1>
      <article className="unauthorized-wrapper">
        <ReactSVG className="unauthorized-svg" src="/svgs/denied.svg" />
        <p className="unauthorized-text">
          The page you are trying to access is restricted or requires proper authorization.
          This security measure is in place to protect your privacy and ensure a secure
          online environment.
        </p>
        <p className="unauthorized-text">
          Kindly contact our{" "}
          <a className="support-link" href="mailto:rendezevite@gmail.com">
            support
          </a>{" "}
          for assistance. Thank you for your understanding.
        </p>
        <button className="unauthorized-return-btn" type="button">
          Return to main page
        </button>
      </article>
    </section>
  );
};
export default Unauthorized;
