"use client";
import { useRouter } from "next/navigation";
import "./style.scss";
import { ReactSVG } from "react-svg";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [desktopMode, setDesktopMode] = useState(false);

  const handleLogin = () => {
    router.push("/api/auth/signin");
  };

  useEffect(() => {
    const handleResize = () => {
      setDesktopMode(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <nav className="welcome-nav">
        <a className="register-link" href="/register">
          Register
        </a>
        {desktopMode ? (
          <button className="login-btn" type="button" onClick={handleLogin}>
            Login
          </button>
        ) : (
          <ReactSVG
            className="profile-icon"
            src="/profile-icon.svg"
            onClick={handleLogin}
          />
        )}
      </nav>
      <section className="welcome-container">
        <article className="welcome-text-container">
          <h1 className="welcome-header">RendezEvite</h1>
          <p className="welcome-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea ab pariatur
            nostrum ipsum quis doloribus eveniet libero iste qui molestias quos, cumque,
            nesciunt mollitia exercitationem repudiandae! Ex, tempore nihil?
          </p>
        </article>
        <article className="overview-wrapper">
          <h2>Easy to use:</h2>
          <ul className="overview-list">
            <li className="list-card">Register or login</li>
            <li className="list-card">Create your invitations</li>
            <li className="list-card">Choose between of our templates</li>
            <li className="list-card">Choose what your invitations will say</li>
            <li className="list-card">Send invitations</li>
          </ul>
        </article>
        <article className="overview-wrapper">
          <h2>Features:</h2>
          <ul className="overview-list">
            <li className="feature-card">Personalize text</li>
            <li className="feature-card">Create guest list</li>
            <li className="feature-card">Track RSVP&apos;d guests</li>
          </ul>
        </article>
        <article className="show-templates">
          <h2>Templates:</h2>
          <div className="show-templates-wrapper">
            <div>Template 1</div>
            <div>Template 2</div>
          </div>
        </article>
      </section>
      <footer>
        <p>© 2023 RendezEvite. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
