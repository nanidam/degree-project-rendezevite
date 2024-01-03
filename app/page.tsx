import "./style.scss";

export default function Home() {
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
        <button className="login-btn">
          <a href="/api/auth/signin">Login</a>
        </button>
        <button className="register-btn">
          <a href="/register">Register</a>
        </button>
      </section>
    </main>
  );
}
