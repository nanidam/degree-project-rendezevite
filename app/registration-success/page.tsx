"use client";
import { useRouter } from "next/navigation";

const RegistrationSuccess = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/api/auth/signin");
  };
  return (
    <section>
      <h1>Registration successful,</h1>
      <p> Click here to login</p>
      <button className="login-btn" type="button" onClick={handleLogin}>
        Login
      </button>
    </section>
  );
};

export default RegistrationSuccess;
