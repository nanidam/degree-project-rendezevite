"use client";

import { useRouter } from "next/navigation";
import handleRegister from "@/app/utils/register";
import LoginRegisterForm from "../utils/components/loginRegisterForm";

const Register = () => {
  return (
    <LoginRegisterForm loginRegisterHeader="Register" handleRegister={handleRegister} />
  );
};

export default Register;
