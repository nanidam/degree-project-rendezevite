import "./style/menuBottomContainer.scss";
import { ReactSVG } from "react-svg";
import Logout from "./logout";
import { ISession } from "../models/ISession";

interface IHamburgarMenuProps {
  isLoggedIn: boolean;
}

const MenuBottomLinks: React.FC<IHamburgarMenuProps> = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <Logout />
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
