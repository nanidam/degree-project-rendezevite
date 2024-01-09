"use client";
import Logout from "@/app/components/logout";
import "./style.scss";

const Invitations = () => {
  const createInvitation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("createInvitation click");
  };

  return (
    <section className="create-inv-container">
      <h1>Create invitation</h1>
      <Logout></Logout>
      <article className="create-inv-wrapper">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, quod ipsam saepe
          totam, deserunt fugiat ea vitae similique quas consectetur fugit aspernatur eaque
          non quia accusamus provident at velit dicta?
        </p>
      </article>
      <article className="create-inv-wrapper">
        <form className="create-inv-form" onSubmit={createInvitation}>
          <label className="create-inv-label" htmlFor="create-inv-header">
            Header:
          </label>
          <input
            className="create-inv-input"
            id="create-inv-header"
            placeholder="Header"
          ></input>

          <label className="create-inv-label" htmlFor="create-inv-text">
            Text:
          </label>
          <textarea
            className="create-inv-textarea"
            id="create-inv-text"
            placeholder="What do you want your invitation to say?"
          ></textarea>

          <button className="create-inv-btn">Save</button>
        </form>
      </article>
    </section>
  );
};

export default Invitations;
