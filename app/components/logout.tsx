"use client";
import { ReactSVG } from "react-svg";
import "./style/logoutBtn.scss";
import { signOut } from "next-auth/react";

const Logout = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <section className="logout-btn-container">
      <ReactSVG className="logout-icon" src="/logout.svg" onClick={handleLogout} />
    </section>
  );
};

export default Logout;
