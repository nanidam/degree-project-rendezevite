"use client";
import "./style/registerLoginHome.scss";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { ISession } from "../models/ISession";

interface IRegisterLoginHomeProps {
  readonly session: ISession | null;
}
const RegisterLoginHome = ({ session }: IRegisterLoginHomeProps) => {
  const router = useRouter();
  const [desktopMode, setDesktopMode] = useState(false);

  const handleLogin = () => {
    router.push("/api/auth/signin");
  };

  useEffect(() => {
    const handleResize = () => {
      setDesktopMode(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (session) return null;

  return (
    <>
      <a className="register-link" href="/register">
        Register
      </a>
      {desktopMode ? (
        <button className="login-btn" type="button" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <ReactSVG className="profile-icon" src="/svgs/profile.svg" onClick={handleLogin} />
      )}
    </>
  );
};

export default RegisterLoginHome;
