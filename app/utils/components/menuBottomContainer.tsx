import "./style/menuBottomContainer.scss";
import { ReactSVG } from "react-svg";
import Logout from "./logout";
import { useRouter } from "next/navigation";

interface IHamburgarMenuProps {
  loggedIn: boolean;
}

const MenuBottomLinks: React.FC<IHamburgarMenuProps> = ({ loggedIn }) => {
  const router = useRouter();

  return (
    <>
      {loggedIn ? (
        <Logout></Logout>
      ) : (
        <>
          <a
            className="menu-bottom-link"
            aria-label="Register"
            onClick={() => {
              router.push("/register");
            }}
          >
            <ReactSVG src="/svgs/plus.svg" />
            Register
          </a>
          <a
            className="menu-bottom-link"
            aria-label="Login"
            onClick={() => {
              router.push("/api/auth/signin");
            }}
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
