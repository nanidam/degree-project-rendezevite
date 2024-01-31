"use client";

import { useEffect, useState } from "react";
import "./style/hamburgarMenu.scss";
import { ReactSVG } from "react-svg";
import Logout from "./logout";
import { useRouter } from "next/navigation";

const HambugarMenu = () => {
  const router = useRouter();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [glideOut, setGlideOut] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  //TODO: Add logic to check if user is logged in
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
        <button className="menu-btn" onClick={toggleMenu}>
          {isDesktop && !isMenuOpen ? (
            <div className="menu-icons-desktop">
              {loggedIn && (
                <>
                  <ReactSVG className="menu-desktop-icon" src="/svgs/plus.svg" />
                  <hr className="menu-desktop-hr" />
                </>
              )}
              <ReactSVG className="menu-desktop-icon" src="/svgs/home.svg" />

              {loggedIn && (
                <>
                  <ReactSVG className="menu-desktop-icon" src="/svgs/calendar.svg" />
                </>
              )}
              <ReactSVG className="menu-desktop-icon" src="/svgs/diamond.svg" />
              <ReactSVG className="menu-desktop-icon" src="/svgs/settings.svg" />

              <hr className="menu-desktop-hr" />
              {loggedIn ? (
                <Logout />
              ) : (
                <>
                  <ReactSVG className="menu-desktop-icon" src="/svgs/plus.svg" />
                  <ReactSVG className="menu-desktop-icon" src="/svgs/profile.svg" />
                </>
              )}
            </div>
          ) : isMenuOpen ? (
            <ReactSVG className="menu-close-icon" src="/svgs/menu-close.svg" />
          ) : (
            <ReactSVG className="menu-open-icon" src="/svgs/menu-open.svg" />
          )}
        </button>

        <ul
          className={`menu-items ${isMenuOpen ? "open" : "close"} ${
            glideOut ? "glide-out" : ""
          } `}
        >
          {loggedIn && (
            <>
              <a className="menu-opt-link" href="/create-event">
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

          {loggedIn && (
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
            {loggedIn ? (
              <Logout></Logout>
            ) : (
              <>
                <button
                  className="menu-bottom"
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  <ReactSVG src="/svgs/plus.svg" />
                  Register
                </button>
                <button
                  className="menu-bottom"
                  onClick={() => {
                    router.push("/api/auth/signin");
                  }}
                >
                  <ReactSVG src="/svgs/profile.svg" />
                  Login
                </button>
              </>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default HambugarMenu;
