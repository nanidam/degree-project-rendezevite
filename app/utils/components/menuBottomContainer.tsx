import "./style/menuBottomContainer.scss";
import Logout from "./logout";
import { ReactSVG } from "react-svg";

interface IHamburgarMenuProps {
  loggedIn: boolean;
}

const MenuBottomLinks: React.FC<IHamburgarMenuProps> = ({ loggedIn }) => {
  return (
    <>
      {loggedIn ? (
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
