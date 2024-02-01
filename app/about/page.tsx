"use client";

import { ReactSVG } from "react-svg";
import "./style.scss";
import ReturnBtn from "../utils/components/returnBtn";

const About = () => {
  return (
    <section className="about">
      <h1>About Page</h1>
      <article className="about-wrapper">
        <span className="about-greetings">
          Welcome to my degree project!
          <ReactSVG src="/svgs/waving-hand.svg" />
        </span>
        <p className="about-text">
          I present an online invitation creation application designed to
          simplify the event planning process.
        </p>
        <p className="about-text">
          This user-friendly application craft invitations, sending them
          directly to guests&apos; online mailboxes. Bid farewell to cumbersome
          mailing lists and manual RSVPs; this application streamlines the
          entire process, making event planning a seamless experience.
        </p>

        <p className="about-text">
          However, it&apos;s essential to acknowledge the current limitations.
          Given the project&apos;s timeframe of six weeks, users have limited
          selection of templates available, providing a glimpse into the
          application&apos;s potential. Additionally, as of today, the
          application operates exclusively in English, reflecting a current
          language constraint.
        </p>

        <ReturnBtn />
      </article>
    </section>
  );
};

export default About;
