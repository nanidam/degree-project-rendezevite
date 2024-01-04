"use client";
import { sendMail } from "@/utils/sendMail";
import "./style.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [msg, setMsg] = useState<string | null>(null);
  const router = useRouter();
  const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget["forgot-password"].value;

    const result = sendMail(email);

    if (result === null) {
      setMsg("Email not found");
    } else {
      router.push("/password-sent");
    }
  };

  return (
    <section className="forgot-password-container">
      <h1>Forgot Password</h1>
      <p>Enter your email address to reset your password. You will recieve an email.</p>
      <form className="forgot-password-form" onSubmit={handleForgotPassword}>
        <label htmlFor="forgot-password">Email:</label>
        <input
          className="forgot-input"
          type="email"
          id="forgot-password"
          name="forgot-password"
          placeholder="Your email"
        />
        <button type="submit" className="reset-password-btn">
          Send
        </button>
      </form>
    </section>
  );
};

export default ForgotPassword;
