"use client";

import { signIn } from "next-auth/react";
import LoginRegisterForm from "../components/loginRegisterForm";

const Login = () => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/eventOverview",
    });
  };

  return <LoginRegisterForm loginRegisterHeader="Login" handleSubmit={handleLogin} />;
};

export default Login;