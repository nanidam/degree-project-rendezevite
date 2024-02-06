"use client";

import { ReactSVG } from "react-svg";
import "./style.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1 className="not-found-title">Page not found</h1>
      <article className="not-found-wrapper">
        <ReactSVG src="/svgs/page-not-found.svg" />
        <p className="not-found-text">We could not find the page you were looking for.</p>
        <p className="not-found-text">Please check the URL and try again.</p>
        <a className="return-to-main-btn" href="/">
          To main page
        </a>
      </article>
    </section>
  );
};
export default NotFound;
