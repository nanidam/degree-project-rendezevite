"use client";
import { sendMail } from "@/utils/sendMail";
import "./style.scss";

const ForgotPassword = () => {
  const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Forgot Password clicked");
    sendMail();
  };

  return (
    <section className="forgot-password-container">
      <h1>Forgot Password</h1>
      <p>Enter your email address to reset your password. You will recieve an email.</p>
      <form className="forgot-password-form" onClick={handleForgotPassword}>
        <label htmlFor="forgot-password">Email:</label>
        <input
          className="forgot-input"
          type="email"
          id="forgot-password"
          name="forgot-password"
          placeholder="Your email"
        />
        <button className="reset-password-btn">Send</button>
      </form>
    </section>
  );
};

export default ForgotPassword;
