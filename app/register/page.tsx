"use client";

import { useRouter } from "next/navigation";
import handleRegister from "@/utils/register";
import LoginRegisterForm from "../components/loginRegisterForm";

const Register = () => {
  return (
    <LoginRegisterForm loginRegisterHeader="Register" handleRegister={handleRegister} />
  );
};

export default Register;
