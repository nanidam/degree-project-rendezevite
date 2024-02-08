import "./style.scss";

import AccordionHomePage from "./utils/components/accordionHomePage";
import RegisterLoginHomeContainer from "./utils/components/registerLoginHomeContainer";
import ShortInstructions from "./utils/components/shortInstructions";
import WelcomeTextHome from "./utils/components/welcomeTextHome";

const Home = () => {
  return (
    <main>
      <span className="welcome-span">
        <RegisterLoginHomeContainer />
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
