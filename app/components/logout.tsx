"use client";
import { ReactSVG } from "react-svg";
import "./style/logoutBtn.scss";

const Logout = () => {
  const handleLogout = () => {
    //   localStorage.clear();
    //   window.location.reload();

    alert("Logged out");
  };
  return (
    <section className="logout-btn-container">
      <ReactSVG className="logout-icon" src="/logout.svg" onClick={handleLogout} />
    </section>
  );
};

export default Logout;
