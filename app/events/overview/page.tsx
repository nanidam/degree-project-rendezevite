"use client";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";
import Logout from "../../components/logout";
import "./style.scss";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EventOverview = () => {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  const router = useRouter();

  const createEvent = () => {
    router.push("/events/create-event");
  };

  return (
    <main>
      <h1 className="event-overview-header">
        Event <br />
        Overview
      </h1>
      <Logout></Logout>
      <section className="event-overview-container">
        <article className="create-event">
          <button className="create-event-btn" onClick={createEvent}>
            Create event
          </button>
        </article>

        <article className="current-events-container">
          <h2>Current events:</h2>
          <ul className="current-events">
            <li className="current-event">
              <Link className="event" href="/">
                event 1
              </Link>
              <div className="edit-delete-icons">
                <ReactSVG className="edit-icon" src="/edit-icon.svg"></ReactSVG>
                <ReactSVG className="trash-icon" src="/trash-can.svg"></ReactSVG>
              </div>
            </li>
            <li className="current-event">
              <Link className="event" href="/">
                event 2
              </Link>
              <div className="edit-delete-icons">
                <ReactSVG className="edit-icon" src="/edit-icon.svg"></ReactSVG>
                <ReactSVG className="trash-icon" src="/trash-can.svg"></ReactSVG>
              </div>
            </li>
          </ul>
        </article>

        <article className="past-events-container">
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
