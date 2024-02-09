"use client";

import "./style/loginRegisterForm.scss";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";
import { REGISTER_STATUS } from "@/app/utils/constants";
import React from "react";
import Link from "next/link";
import login from "../login";

interface ILoginRegisterFormProps {
  loginRegisterHeader: string;
  loginType: string;
  handleRegister?: (data: FormData) => Promise<string | undefined>;
  inviteCode?: string;
}

const LoginRegisterForm: React.FC<ILoginRegisterFormProps> = ({
  loginRegisterHeader,
  handleRegister,
  loginType,
  inviteCode,
}) => {
  const [errorMsg, setErrorMsg] = React.useState<string | undefined>(undefined);
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
          setErrorMsg(result);
          break;

        case REGISTER_STATUS.SUCCESS:
          router.push("/registration-success");
          break;

        default:
          setErrorMsg(REGISTER_STATUS.GENERIC);
          break;
      }
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) =>
    login({ e, loginType, eventId: inviteCode, router, setErrorMsg });

  return (
    <>
      <section className="login-register-container">
        <h1>{loginRegisterHeader}</h1>
        <article className="login-register-wrapper">
          <p className="login-register-text">
            {loginType === "" &&
              "To register a new account, you need to enter a valid email and choose a password."}
            {loginType === "admin" &&
              "To login you need to use your registered email and password."}
            {loginType === "guest" &&
              "To see the invitation please login with your email and event password."}
          </p>
          <ReactSVG className="invitation-mail-svg" src="/svgs/invitation-card.svg" />
        </article>
        <article className="login-register-wrapper">
          <form
            className="login-register-form"
            onSubmit={handleRegister ? undefined : (e) => handleLogin(e)}
            action={handleAction}
          >
            <fieldset className="login-register-fieldset">
              <legend className="login-register-legend">Account Information</legend>
              <div className="input-container">
                <label className="login-register-label" htmlFor="email">
                  Email:
                </label>
                <input
                  className="login-register-inputfield"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="input-container">
                <label className="login-register-label" htmlFor="password">
                  Password:
                </label>
                <div className="inputfield-svg-wrapper">
                  <input
                    className="login-register-inputfield"
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
                      src="/svgs/closed-eye.svg"
                      onClick={handleTogglePasswordVisibility}
                    />
                  ) : (
                    <ReactSVG
                      className="svg-eye"
                      src="/svgs/opened-eye.svg"
                      onClick={handleTogglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <div className="password-terms">
                {loginRegisterHeader === "Login" ? (
                  <Link className="forgot-password" href="/forgot-password">
                    Forgot password?
                  </Link>
                ) : (
                  <>
                    <input
                      className="terms-checkbox"
                      type="checkbox"
                      name="terms"
                      required
                    />
                    <label className="terms-conditions" htmlFor="terms">
                      By checking this, you agree to the <br />
                      <Link href="/terms-and-conditions">
                        <b>Terms and Conditions</b>
                      </Link>
                      .
                    </label>
                  </>
                )}
              </div>
            </fieldset>

            {errorMsg && <p className="login-register-errorMsg">{errorMsg}</p>}

            <div className="btns-container">
              <button
                className="login-register-btn"
                type="submit"
                aria-label={loginRegisterHeader !== "Register" ? "Login" : "Register"}
              >
                {loginRegisterHeader !== "Register" ? "Login" : "Register"}
              </button>
              <button
                className="cancel-login-register-btn"
                type="button"
                onClick={handleCancel}
                aria-label="Return to the previous step"
              >
                Return
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default LoginRegisterForm;
