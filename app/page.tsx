import "./style.scss";
import AccordionHomePage from "./utils/components/accordionHomePage";
import RegisterLoginHomeContainer from "./utils/components/RegisterLoginHomeContainer";
import ShortInstructions from "./utils/components/ShortInstructions";
import WelcomeTextHome from "./utils/components/WelcomeTextHome";

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
