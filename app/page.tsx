import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Welcome to RendezEvite</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea ab pariatur
          nostrum ipsum quis doloribus eveniet libero iste qui molestias quos, cumque,
          nesciunt mollitia exercitationem repudiandae! Ex, tempore nihil?
        </p>
      </section>
      <section>
        <a href="/">Login</a>
        <a href="/">Register</a>
      </section>
    </main>
  );
}
