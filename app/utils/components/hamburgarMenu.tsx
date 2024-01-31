"use client";

import { useState } from "react";
import "./style/menu.scss";
import { ReactSVG } from "react-svg";
import Logout from "./logout";
import { useRouter } from "next/navigation";

const HambugarMenu = () => {
  const router = useRouter();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [glideOut, setGlideOut] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  //TODO: Add logic to check if user is logged in

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    if (glideOut === false) {
      setGlideOut(!glideOut);
    }
  };

  return (
    <>
      <nav className={`menu ${isMenuOpen ? "open" : "close"} `}>
        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? (
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

          <a className="menu-opt-link" href="/create-event">
            <li className="menu-opt">
              <ReactSVG src="/svgs/home.svg" />
              <span>Home</span>
            </li>
          </a>

          {loggedIn && (
            <a className="menu-opt-link" href="/create-event">
              <li className="menu-opt">
                <ReactSVG src="/svgs/calendar.svg" />
                <span>Events</span>
              </li>
            </a>
          )}

          <a className="menu-opt-link" href="/create-event">
            <li className="menu-opt">
              <ReactSVG src="/svgs/diamond.svg" />
              <span>About</span>
            </li>
          </a>

          <a className="menu-opt-link" href="/create-event">
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
