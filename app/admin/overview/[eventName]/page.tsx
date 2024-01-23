"use client"

import Logout from "@/app/components/logout"
import "./style.scss"
import { useCallback, useEffect, useState } from "react"
import { getEvent } from "@/app/services/getEvent"
import getUserId from "@/app/services/getUserId"
import { dateFormat } from "@/utils/dateFormat"
import { updateEventPassword } from "@/app/services/updateEventPassword"
import inviteGuests from "@/app/services/inviteGuests"
import { IEvent, IGuest } from "@/utils/interfaces"

const AdminOverview = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string }
}) => {
  const [event, setEvent] = useState<IEvent | null>(null)
  const [editPassword, setEditPassword] = useState(false)

  const fetchAndSetEvents = useCallback(async () => {
    const userId = await getUserId()
    if (userId) {
      const result = await getEvent(userId, eventName)
      if (result) {
        const date = new Date(result.eventDate)
        const formattedDate = dateFormat(date)
        const temp = { ...result, eventDate: formattedDate } as IEvent
        setEvent(temp)
      }
    }
  }, [eventName])

  useEffect(() => {
    fetchAndSetEvents()
  }, [fetchAndSetEvents])

  if (!event) {
    return null
  }

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

  const handleInviteGuests = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const guestName = data.get("guestName") as string
    const guestEmail = data.get("guestEmail") as string
    const additionalGuest = data.get("additionalGuest") as string

    const updatedEvent = (await inviteGuests({
      guestName,
      guestEmail,
      additionalGuest,
      eventId: event.id,
    })) as IEvent

    console.log(updatedEvent)
    if (updatedEvent) {
      setEvent(updatedEvent)
    }
  }

  // @TODO fix loader here instead

  console.log(event)
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
            <div className="password-btn-container">
              <button
                className="admin-btn cancel-password-btn"
                onClick={() => setEditPassword(false)}
                type="button"
                aria-label="Cancel password change"
              >
                Cancel
              </button>
              <button
                className="admin-btn save-password-btn"
                type="submit"
                aria-label="Save new password"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              className="admin-btn"
              type="button"
              onClick={() => setEditPassword(true)}
              aria-label="Change password"
            >
              Change Password
            </button>
          )}
        </form>
      </article>

      <article className="admin-wrapper">
        <form className="admin-form" onSubmit={handleInviteGuests}>
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
        {event.guestList.map((guest: IGuest) => (
          <p key={guest.id}>{guest.name}</p>
        ))}
      </article>
    </section>
  )
}

export default AdminOverview
