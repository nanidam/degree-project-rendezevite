"use client";
import { useRouter } from "next/navigation";
import "./style.scss";

const RegistrationSuccess = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/api/auth/signin");
  };
  return (
    <section>
      <h1>Registration successful!</h1>
      <article className="registration-success-container">
        <p> Click here to login and start creating invitations :)</p>
        <button
          className="return-login-btn"
          type="button"
          onClick={handleLogin}
          aria-label="Go to login page"
        >
          Login
        </button>
      </article>
    </section>
  );
};

export default RegistrationSuccess;
