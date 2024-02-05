"use client";

import "./style.scss";
import AccordionHomePage from "./utils/components/AccordionHomePage";
import ShortInstructions from "./utils/components/ShortInstructions";
import WelcomeTextHome from "./utils/components/WelcomeTextHome";
import RegisterLoginHome from "./utils/components/registerLoginHome";

const Home = () => {
  return (
    <main>
      <span className="welcome-span">
        <RegisterLoginHome />
      </span>
      <section className="welcome-container">
        <WelcomeTextHome />
        <ShortInstructions />
        <AccordionHomePage />
      </section>
    </main>
  );
};

export default Home;
