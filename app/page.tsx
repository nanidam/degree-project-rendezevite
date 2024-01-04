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
      <section className="welcome-container">
        <h1 className="welcome-header">Welcome to RendezEvite</h1>
        <article className="welcome-text-container">
          <p className="welcome-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea ab pariatur
            nostrum ipsum quis doloribus eveniet libero iste qui molestias quos, cumque,
            nesciunt mollitia exercitationem repudiandae! Ex, tempore nihil?
          </p>
        </article>
        <article className="welcome-options-container">
          <button className="login-btn" type="button" onClick={handleLogin}>
            Login
          </button>
          <button className="register-btn" type="button" onClick={handleRegister}>
            Register
          </button>
        </article>
      </section>
    </main>
  );
};

export default Home;
