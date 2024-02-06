"use client";

import "./style/hamburgerMenu.scss";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import MenuIconsDesktop from "./menuIconsDesktop";
import { ISession } from "../models/ISession";
import MenuBottomLinks from "./menuBottomLinks";

const HamburgerMenu = ({ session }: { session: ISession }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [glideOut, setGlideOut] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    if (glideOut === false) {
      setGlideOut(!glideOut);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`menu ${isMenuOpen ? "open" : "close"} ${glideOut ? "glide-out" : ""}  `}
      >
        <MenuIconsDesktop
          onClick={toggleMenu}
          isDesktop={isDesktop}
          isMenuOpen={isMenuOpen}
          loggedIn={session !== null && session.access === "admin"}
          access={session?.access}
        />

        <ul
          className={`menu-items ${isMenuOpen ? "open" : "close"} ${
            glideOut ? "glide-out" : ""
          } `}
        >
          {session !== null && session.access === "admin" && (
            <>
              <a className="menu-opt-link" href="/events/create-event">
                <li className="menu-opt">
                  <ReactSVG src="/svgs/plus.svg" />
                  <span>Create Event</span>
                </li>
                <hr className="menu-hr" />
              </a>
            </>
          )}

          <a className="menu-opt-link" href="/">
            <li className="menu-opt">
              <ReactSVG src="/svgs/home.svg" />
              <span>Home</span>
            </li>
          </a>

          {session !== null && session.access === "admin" && (
            <a className="menu-opt-link" href="/events">
              <li className="menu-opt">
                <ReactSVG src="/svgs/calendar.svg" />
                <span>Events</span>
              </li>
            </a>
          )}

          <a className="menu-opt-link" href="/about">
            <li className="menu-opt">
              <ReactSVG src="/svgs/diamond.svg" />
              <span>About</span>
            </li>
          </a>

          <a className="menu-opt-link" href="/support">
            <li className="menu-opt">
              <ReactSVG className="menu-opt-icon" src="/svgs/settings.svg" />
              <span>Support</span>
            </li>
          </a>

          <hr className="menu-hr" />

          <div className="menu-bottom-container">
            <MenuBottomLinks session={session} />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
