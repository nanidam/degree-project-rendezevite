"use client";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Logout from "../components/logout";
import "./style.scss";
import { ReactSVG } from "react-svg";

const EventOverview = () => {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <main>
      <h1 className="event-overview-header">
        Event <br />
        Overview
      </h1>
      <Logout></Logout>
      <section className="event-overview-container">
        <article className="create-event">
          <button className="create-event-btn">Create event</button>
        </article>

        <article className="current-events">
          <h2>Current events:</h2>
          <ul>
            <li>
              event 1
              <div className="edit-delete-icons">
                <ReactSVG src="/edit-icon.svg"></ReactSVG>
                <ReactSVG src="/trash-can.svg"></ReactSVG>
              </div>
            </li>
            <li>event 2</li>
          </ul>
        </article>

        <article className="past-events">
          <h2>Past events:</h2>
          <ul>
            <li>event 3</li>
            <li>event 4</li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default EventOverview;
