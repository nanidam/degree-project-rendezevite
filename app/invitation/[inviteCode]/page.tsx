"use client";
import LoginRegisterForm from "@/app/utils/components/loginRegisterForm";
import { signIn } from "next-auth/react";

const Invitation = () => {
  const loginAsGuest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    await signIn("credentials", {
      email,
      password,
      loginType: "guest",
      redirect: false,
      // callbackUrl: "/events",
    });
  };
  return (
    <LoginRegisterForm
      loginRegisterHeader={"Login"}
      handleSubmit={loginAsGuest}
      loginType="guest"
    />
  );
};

export default Invitation;
