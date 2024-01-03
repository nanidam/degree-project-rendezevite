"use client";

import { useRouter } from "next/navigation";
import "./style.scss";
import handleRegister from "@/utils/register";

const Register = () => {
  const router = useRouter();
  const handleCancel = () => {
    router.push("/");
  };

  return (
    <>
      <section className="register-container">
        <h1>Register new user</h1>
        <form action={handleRegister}>
          <fieldset>
            <legend>Account Information</legend>
            <article className="register-input-container">
              <label htmlFor="email">Email:</label>
              <input
                className="register-input"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </article>
            <article className="register-input-container">
              <label htmlFor="password">Password:</label>
              <input
                className="register-input"
                type="password"
                id="password"
                name="password"
                placeholder="Choose a password"
                required
              />
            </article>
          </fieldset>
          <article className="btn-container">
            <button className="register-btn" type="submit">
              Register
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

export default Register;
