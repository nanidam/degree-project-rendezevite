"use client";
import { ReactSVG } from "react-svg";
import "./style/logoutBtn.scss";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    router.push("/registration-success");
    await signOut();
  };
  return (
    <section className="logout-btn-container">
      <ReactSVG className="logout-icon" src="/logout.svg" onClick={handleLogout} />
    </section>
  );
};

export default Logout;
