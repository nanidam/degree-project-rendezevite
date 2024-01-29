"use client";
import { sendMail } from "@/app/utils/sendMail";
import "./style.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [msg, setMsg] = useState<string | null>(null);
  const router = useRouter();
  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget["forgot-password"].value;

    const result = await sendMail(email);

    console.log(result);
    if (!result) {
      setMsg("Invalid email");
    } else {
      router.push("/password-sent");
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
          />

          {msg && <p className="forgot-password-error">{msg}</p>}
          <div className="forgot-return-btn">
            <button type="submit" className="reset-password-btn">
              Send
            </button>
            <button type="button" className="return-btn" onClick={() => router.push("/")}>
              Back
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ForgotPassword;
