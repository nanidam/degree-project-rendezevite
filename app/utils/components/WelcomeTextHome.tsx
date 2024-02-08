"use client";

import "./style/welcomeTextHome.scss";
import { ReactSVG } from "react-svg";

const WelcomeTextHome = () => {
  return (
    <>
      <article className="home-text-container">
        <h1 className="home-header">Easy, simple, done!</h1>
        <div className="home-icon">
          <ReactSVG src="/svgs/mail.svg" />
        </div>
        <p className="home-text">
          Whether it&apos;s a casual gathering or a special celebration, RendezEvite makes
          it easy to customize your invites and manage all the details seamlessly. <br />{" "}
          <br /> Join us and experience the simplicity of event planning at your fingertips.
        </p>
      </article>
    </>
  );
};

export default WelcomeTextHome;
