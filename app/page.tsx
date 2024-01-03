"use client";
import { redirect, useRouter } from "next/navigation";
import "./style.scss";

const Home = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/register");
  };

  const handleLogin = () => {
    router.push("/api/auth/signin");
  };

  return (
    <main>
      <section className="welcome-overview">
        <h1 className="welcome-header">Welcome to RendezEvite</h1>
        <p className="welcome-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea ab pariatur
          nostrum ipsum quis doloribus eveniet libero iste qui molestias quos, cumque,
          nesciunt mollitia exercitationem repudiandae! Ex, tempore nihil?
        </p>
      </section>
      <section className="login-register-links">
        <button className="login-btn" type="button" onClick={handleLogin}>
          Login
        </button>
        <button className="register-btn" type="button" onClick={handleRegister}>
          Register
        </button>
      </section>
    </main>
  );
};

export default Home;
