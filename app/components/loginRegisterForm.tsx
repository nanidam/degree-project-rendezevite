"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import "./style/loginRegisterForm.scss";
import React from "react";

interface LoginRegisterFormProps {
  loginRegisterHeader: string;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // Updated type
  handleRegister?: (data: FormData) => Promise<{ error?: string }>;
}
const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({
  loginRegisterHeader,
  handleSubmit,
  handleRegister,
}) => {
  const [error, setError] = React.useState<string | undefined>(undefined);
  const router = useRouter();
  const handleCancel = () => {
    router.push("/");
  };

  const handleAction = async (data: FormData) => {
    if (handleRegister) {
      const result = await handleRegister(data);

      if (result.error) {
        setError(result.error);
      }
    }
  };

  return (
    <>
      <section className="login-register-container">
        <h1>{loginRegisterHeader}</h1>
        <form onSubmit={handleSubmit} action={handleAction}>
          <fieldset>
            <legend>Account Information</legend>
            <article className="input-container">
              <label htmlFor="email">Email:</label>
              <input
                className="inputfield"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </article>
            <article className="input-container">
              <label htmlFor="password">Password:</label>
              <input
                className="inputfield"
                type="password"
                id="password"
                name="password"
                placeholder={
                  loginRegisterHeader === "Register" ? "Choose a password" : "Password"
                }
                required
              />
            </article>
          </fieldset>

          {error && <p className="error-message">{error}</p>}

          <article className="btns-container">
            <button className="login-register-btn" type="submit">
              {loginRegisterHeader}
            </button>
            <button className="cancel-btn" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </article>
        </form>
      </section>
    </>
  );
};

export default LoginRegisterForm;
