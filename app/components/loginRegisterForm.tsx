"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import "./style/loginRegisterForm.scss";
import SVG, { ReactSVG } from "react-svg";
import React from "react";
import { REGISTER_STATUS } from "@/utils/constants";

interface LoginRegisterFormProps {
  loginRegisterHeader: string;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // Updated type
  handleRegister?: (data: FormData) => Promise<string | undefined>;
}

const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({
  loginRegisterHeader,
  handleSubmit,
  handleRegister,
}) => {
  const [registerMsg, setRegisterMsg] = React.useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const router = useRouter();
  const handleCancel = () => {
    router.push("/");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleAction = async (data: FormData) => {
    if (handleRegister) {
      const result = await handleRegister(data);

      switch (result) {
        case REGISTER_STATUS.EMAIL_EXISTS:
        case REGISTER_STATUS.INVALID_PASSWORD_MAX_LENGTH:
        case REGISTER_STATUS.INVALID_PASSWORD_MIN_LENGTH:
        case REGISTER_STATUS.INVALID_PASSWORD_DIGITS:
        case REGISTER_STATUS.INVALID_PASSWORD_LOWERCASE:
        case REGISTER_STATUS.INVALID_PASSWORD_UPPERCASE:
        case REGISTER_STATUS.INVALID_PASSWORD_SPACES:
          setRegisterMsg(result);
          break;

        case REGISTER_STATUS.SUCCESS:
          router.push("/registration-success");
          break;

        default:
          setRegisterMsg(REGISTER_STATUS.GENERIC);
          break;
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
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder={
                  loginRegisterHeader === "Register" ? "Choose a password" : "Password"
                }
                required
              />
              {showPassword ? (
                <ReactSVG
                  className="svg-eye"
                  src="/closed-eye.svg"
                  onClick={handleTogglePasswordVisibility}
                />
              ) : (
                <ReactSVG
                  className="svg-eye"
                  src="/opened-eye.svg"
                  onClick={handleTogglePasswordVisibility}
                />
              )}
            </article>
          </fieldset>

          {registerMsg && <p className="error-message">{registerMsg}</p>}

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
