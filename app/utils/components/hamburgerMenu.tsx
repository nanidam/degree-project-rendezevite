"use client";

import "./style/hamburgerMenu.scss";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import MenuIconsDesktop from "./menuIconsDesktop";
import MenuBottomLinks from "./menuBottomLinks";
import { useSession } from "next-auth/react";
import { IClientSession } from "../models/IClientSession";

const HamburgerMenu = () => {
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

  const { data, status } = useSession();
  let access = "";
  if (data) {
    const clientSession = data as IClientSession;
    access = clientSession.access;
  }

  return (
    <>
      <nav
        className={`menu ${isMenuOpen ? "open" : "close"} ${glideOut ? "glide-out" : ""}  `}
      >
        <MenuIconsDesktop
          onClick={toggleMenu}
          isDesktop={isDesktop}
          isMenuOpen={isMenuOpen}
          loggedIn={status === "authenticated" && access === "admin"}
          access={access}
        />

        <ul
          className={`menu-items ${isMenuOpen ? "open" : "close"} ${
            glideOut ? "glide-out" : ""
          } `}
        >
          {status === "authenticated" && access === "admin" && (
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

          {status === "authenticated" && access === "admin" && (
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
            <MenuBottomLinks isLoggedIn={status === "authenticated"} />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
