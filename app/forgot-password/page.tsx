"use client";

import "./style.scss";
import { sendMail } from "@/app/utils/sendMail";
import { useSession } from "next-auth/react";
import { useState } from "react";

const ForgotPassword = () => {
  const [msg, setMsg] = useState<string | null>(null);
  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget["forgot-password"].value;

    const result = await sendMail({ email, mailType: "forgot-password" });

    if (!result) {
      setMsg("Invalid email");
    } else {
      setMsg("Email sent. If you don't receive it, please check your junk folder.");
    }
  };

  return (
    <section className="forgot-password-container">
      <h1 className="forgot-password-header">Forgot Password</h1>
      <article className="forgot-password-wrapper">
        <p className="forgot-password-text">
          Receive your password in your email by entering your registered email.
        </p>
        <form className="forgot-password-form" onSubmit={handleForgotPassword}>
          <label htmlFor="forgot-password">Your Email:</label>
          <input
            className="forgot-input"
            type="email"
            id="forgot-password"
            name="forgot-password"
            placeholder="Email"
            required
            aria-describedby={msg ? "forgot-password-error" : undefined}
          />

          {msg && (
            <p id="forgot-password-error" className="forgot-password-error" role="alert">
              {msg}
            </p>
          )}
          <div className="forgot-return-btn">
            <button type="submit" className="reset-password-btn" aria-live="assertive">
              Send
            </button>
            <a className="return-btn" href="/login">
              To login
            </a>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ForgotPassword;
