"use client"

import { getServerSession } from "next-auth/next"
import { authOptions } from "../../api/auth/[...nextauth]/authOptions"
import Logout from "../../components/logout"
import "./style.scss"
import { ReactSVG } from "react-svg"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getAllEvents } from "@/app/services/getAllEvents"
import { eventNames } from "process"
import { deleteEvent } from "@/app/services/deleteEvent"

const EventOverview = () => {
  const [events, setEvents] = useState<string[]>([])
  const fetchAndSetEvents = async () => {
    const data = await getAllEvents()
    if (data) {
      setEvents(data.map((event) => event.eventName))
    }
  }

  useEffect(() => {
    fetchAndSetEvents()
  }, [])
  const router = useRouter()

  const createEvent = () => {
    router.push("/events/create-event")
  }

  const handleDeleteEvent = (eventName: string) => {
    deleteEvent(eventName)
    fetchAndSetEvents()
  }
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
            {events.map((eventName) => (
              <li key={eventName} className="current-event">
                <Link className="event" href={`/admin/overview/${eventName}`}>
                  {eventName}
                </Link>
                <div className="edit-delete-icons">
                  <ReactSVG
                    className="trash-icon"
                    src="/trash-can.svg"
                    onClick={() => handleDeleteEvent(eventName)}
                  />
                </div>
              </li>
            ))}
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
  )
}

export default EventOverview
