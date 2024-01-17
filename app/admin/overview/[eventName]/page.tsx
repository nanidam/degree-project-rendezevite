"use client"

import Logout from "@/app/components/logout"
import "./style.scss"
import { useCallback, useEffect, useState } from "react"
import { getEvent } from "@/app/services/getEvent"
import getUserId from "@/app/services/getUserId"
import { dateFormat } from "@/utils/dateFormat"
import { updateEventPassword } from "@/app/services/updateEventPassword"

const AdminOverview = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string }
}) => {
  const [event, setEvent] = useState<any>(null)
  const [editPassword, setEditPassword] = useState(false)

  const fetchAndSetEvents = useCallback(async () => {
    const userId = await getUserId()
    if (userId) {
      const result = await getEvent(userId, eventName)
      if (result) {
        const date = new Date(result.eventDate)
        const formattedDate = dateFormat(date)
        const temp = { ...result, eventDate: formattedDate }
        setEvent(temp)
      }
    }
  }, [eventName])

  useEffect(() => {
    fetchAndSetEvents()
  }, [fetchAndSetEvents])

  const invLink = "www.inv-link.com"
  const eventPassword = "password"

  const editInvite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    console.log("edit invite")
  }

  const changeInvitePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const eventPassword = data.get("eventPassword") as string

    const newPassword = await updateEventPassword(eventPassword, event.id)

    console.log(newPassword)
    setEditPassword(false)
  }

  const inviteGuest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("invite guest")
  }

  // @TODO fix loader here instead
  if (!event) {
    return null
  }

  return (
    <section className="admin-overview">
      <h1 className="admin-header">
        {event.eventName.charAt(0).toUpperCase() + event.eventName.slice(1)}
      </h1>
      <Logout></Logout>
      <article className="admin-wrapper">
        <h3>Info</h3>
        <p>Event date: {event.eventDate}</p>
        <p>
          Event link: <a>{invLink}</a>
        </p>
        {/* <button className="admin-btn" onClick={editInvite}>
          Edit invitation
        </button> */}
      </article>

      <article className="admin-wrapper">
        <h3>Password</h3>
        <p>Change or see your password for the event</p>
        <form className="admin-form" onSubmit={changeInvitePassword}>
          <label className="admin-label" htmlFor="eventPassword">
            Password:
          </label>
          <input
            className="admin-input"
            type="text"
            name="eventPassword"
            readOnly={!editPassword}
            defaultValue={event.eventPassword}
          />
          {editPassword ? (
            <>
              <button
                className="admin-btn"
                onClick={() => setEditPassword(false)}
                type="button"
              >
                Cancel
              </button>
              <button className="admin-btn" type="submit">
                Save
              </button>
            </>
          ) : (
            <button
              className="admin-btn"
              type="button"
              onClick={() => setEditPassword(true)}
            >
              Change
            </button>
          )}
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
  )
}

export default AdminOverview
