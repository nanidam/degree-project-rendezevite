"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import "./style/loginRegisterForm.scss";

interface LoginRegisterFormProps {
  loginRegisterHeader: string;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // Updated type
  handleRegister?: (data: FormData) => Promise<void>;
}
const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({
  loginRegisterHeader,
  handleSubmit,
  handleRegister,
}) => {
  const router = useRouter();
  const handleCancel = () => {
    router.push("/");
  };

  return (
    <>
      <section className="login-register-container">
        <h1>{loginRegisterHeader}</h1>
        <form onSubmit={handleSubmit} action={handleRegister}>
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
