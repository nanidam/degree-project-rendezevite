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
    </>
  );
};

export default MenuBottomLinks;
