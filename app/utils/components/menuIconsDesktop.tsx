import { ReactSVG } from "react-svg";
import Logout from "./logout";

interface IHamburgarMenuProps {
  onClick: () => void;
  isDesktop: boolean;
  isMenuOpen: boolean;
  loggedIn: boolean;
}

const MenuIconsDesktop: React.FC<IHamburgarMenuProps> = ({
  onClick,
  isDesktop,
  isMenuOpen,
  loggedIn,
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
    </>
  );
};

export default MenuIconsDesktop;
