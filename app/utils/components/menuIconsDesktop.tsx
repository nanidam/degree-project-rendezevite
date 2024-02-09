import { ReactSVG } from "react-svg";
import Logout from "./logout";

interface IHamburgarMenuProps {
  onClick: () => void;
  isDesktop: boolean;
  isMenuOpen: boolean;
  loggedIn: boolean;
  access: string | null;
}

const MenuIconsDesktop: React.FC<IHamburgarMenuProps> = ({
  onClick,
  isDesktop,
  isMenuOpen,
  loggedIn,
  access,
}) => {
  return (
    <>
      <button
        className="menu-btn"
        onClick={onClick}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isDesktop && !isMenuOpen ? (
          <div className="menu-icons-desktop">
            {loggedIn && access === "admin" && (
              <>
                <ReactSVG
                  className="menu-desktop-icon"
                  src="/svgs/plus.svg"
                  aria-label="Register user"
                />
                <hr className="menu-desktop-hr" />
              </>
            )}
            <ReactSVG
              className="menu-desktop-icon"
              src="/svgs/home.svg"
              aria-label="Home"
            />

            {loggedIn && access === "admin" && (
              <>
                <ReactSVG
                  className="menu-desktop-icon"
                  src="/svgs/calendar.svg"
                  aria-label="My events"
                />
              </>
            )}
            <ReactSVG
              className="menu-desktop-icon"
              src="/svgs/diamond.svg"
              aria-label="About"
            />
            <ReactSVG
              className="menu-desktop-icon"
              src="/svgs/settings.svg"
              aria-label="Settings"
            />

            <hr className="menu-desktop-hr" />
            {loggedIn ? (
              <Logout />
            ) : (
              <>
                <ReactSVG
                  className="menu-desktop-icon"
                  src="/svgs/plus.svg"
                  aria-label="Register user"
                />
                <ReactSVG
                  className="menu-desktop-icon"
                  src="/svgs/profile.svg"
                  aria-label="Login"
                />
              </>
            )}
          </div>
        ) : isMenuOpen ? (
          <ReactSVG
            className="menu-close-icon"
            src="/svgs/menu-close.svg"
            aria-label="Close menu"
          />
        ) : (
          <ReactSVG
            className="menu-open-icon"
            src="/svgs/menu-open.svg"
            aria-label="Open menu"
          />
        )}
      </button>
    </>
  );
};

export default MenuIconsDesktop;
