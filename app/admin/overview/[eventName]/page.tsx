"use client";

import Logout from "@/app/components/logout";
import "./style.scss";

const AdminOverview = () => {
  const rsvpDate = "2022-11-11";
  const invLink = "www.inv-link.com";
  const eventPassword = "password";

  const editInvite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("edit invite");
  };

  const editInvitePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("edit invite password");
  };

  const inviteGuest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("invite guest");
  };

  return (
    <section className="admin-overview">
      <h1 className="admin-header">*Event name*</h1>
      <Logout></Logout>
      <article className="admin-wrapper">
        <h3>Info</h3>
        <p>RSVP date: {rsvpDate}</p>
        <p>
          Event link: <a>{invLink}</a>
        </p>
        <button className="admin-btn" onClick={editInvite}>
          Edit invitation
        </button>
      </article>

      <article className="admin-wrapper">
        <h3>Password</h3>
        <p>Change or see your password for the event</p>
        <form className="admin-form" onSubmit={editInvitePassword}>
          <label className="admin-label" htmlFor="eventPassword">
            Password:
          </label>
          <input
            className="admin-input"
            type="password"
            name="eventPassword"
            defaultValue={eventPassword}
          />
          <button className="admin-btn" type="submit">
            Change
          </button>
        </form>
      </article>

      <article className="admin-wrapper">
        <form className="admin-form" onSubmit={inviteGuest}>
          <h3>Invite guests</h3>
          <label className="admin-label" htmlFor="guestName">
            Guest name:
          </label>
          <input
            className="admin-input"
            type="text"
            name="guestName"
            placeholder="Guest name"
          />

          <label className="admin-label" htmlFor="guestEmail">
            Guest name:
          </label>
          <input
            className="admin-input"
            type="email"
            name="guestEmail"
            placeholder="Guest email"
          />

          <label className="admin-label" htmlFor="additionalGuest">
            Additional guest name:
          </label>
          <input
            className="admin-input"
            type="text"
            name="additionalGuest"
            placeholder="Additional guest name"
          />

          <button className="admin-btn" type="submit">
            Invite
          </button>
        </form>
      </article>

      <article className="admin-wrapper">
        <h3>Guestlist:</h3>
      </article>
    </section>
  );
};

export default AdminOverview;
