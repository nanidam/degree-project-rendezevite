import "./style/menuBottomContainer.scss";
import { ReactSVG } from "react-svg";
import Logout from "./logout";

interface IHamburgarMenuProps {
  loggedIn: boolean;
}

const MenuBottomLinks: React.FC<IHamburgarMenuProps> = ({ loggedIn }) => {
  return (
    <>
      {loggedIn ? (
        <Logout></Logout>
      ) : (
        <>
          <a
            className="menu-bottom-link"
            aria-label="Redirects to register"
            href="/register"
          >
            <ReactSVG src="/svgs/plus.svg" />
            Register
          </a>
          <a
            className="menu-bottom-link"
            aria-label="Redirects to login"
            href="/api/auth/signin"
          >
            <ReactSVG src="/svgs/profile.svg" />
            Login
          </a>
        </>
      )}
    </>
  );
};

export default MenuBottomLinks;
