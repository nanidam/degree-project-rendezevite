"use client";

import handleRegister from "@/app/utils/register";
import LoginRegisterForm from "../utils/components/loginRegisterForm";

const Register = () => {
  return (
    <LoginRegisterForm
      loginRegisterHeader="Register"
      handleRegister={handleRegister}
      loginType=""
    />
  );
};

export default Register;
