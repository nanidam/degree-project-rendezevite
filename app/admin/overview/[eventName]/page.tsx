"use client";

import Logout from "@/app/components/logout";
import "./style.scss";
import { useCallback, useEffect, useState } from "react";
import { getEvent } from "@/app/services/getEvent";
import getUserId from "@/app/services/getUserId";
import { dateFormat } from "@/utils/dateFormat";
import { updateEventPassword } from "@/app/services/updateEventPassword";
import inviteGuests from "@/app/services/inviteGuests";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IEvent } from "@/app/models/IEvent";
import { IGuest } from "@/app/models/IGuest";

const AdminOverview = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [editPassword, setEditPassword] = useState(false);

  const fetchAndSetEvents = useCallback(async () => {
    const userId = await getUserId();
    if (userId) {
      const result = await getEvent(userId, eventName);
      if (result) {
        const date = new Date(result.eventDate);
        const formattedDate = dateFormat(date);
        const temp = { ...result, eventDate: formattedDate } as IEvent;
        setEvent(temp);
      }
    }
  }, [eventName]);

  useEffect(() => {
    fetchAndSetEvents();
  }, [fetchAndSetEvents]);

  if (!event) {
    return null;
  }

  const invLink = "www.inv-link.com";
  const eventPassword = "password";

  const editInvite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("edit invite");
  };

  const changeInvitePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const eventPassword = data.get("eventPassword") as string;

    const newPassword = await updateEventPassword(eventPassword, event.id);

    console.log(newPassword);
    setEditPassword(false);
  };

  const handleInviteGuests = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const guestName = data.get("guestName") as string;
    const guestEmail = data.get("guestEmail") as string;
    const additionalGuest = data.get("additionalGuest") as string;

    const updatedEvent = (await inviteGuests({
      guestName,
      guestEmail,
      additionalGuest,
      eventId: event.id,
    })) as IEvent;

    if (updatedEvent) {
      setEvent(updatedEvent);
    }
  };

  console.log(event);
  // @TODO fix loader here

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
            Guest email:
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
          <Accordion key={guest.id}>
            <AccordionItem header={guest.name}>
              <form>
                <label htmlFor="guest-name">
                  Name:
                  <input
                    name="guest-name"
                    type="text"
                    defaultValue={guest.name}
                    readOnly
                  />
                </label>

                <hr />

                <label htmlFor="guest-email">
                  Email:
                  <input
                    name="guest-email"
                    type="text"
                    defaultValue={guest.email}
                    readOnly
                  />
                </label>

                <hr />

                <label htmlFor="has-responded">
                  Has responded:
                  <select
                    name="has-responded"
                    defaultValue={guest.hasResponded.toString()}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </label>

                <hr />

                {guest.hasResponded && (
                  <>
                    <label htmlFor="attending">
                      Attending:
                      <select
                        name="attending"
                        defaultValue={guest.attending.toString()}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </label>

                    <hr />

                    <label htmlFor="guest-number">
                      Phone number:
                      <input
                        name="guest-number"
                        type="text"
                        defaultValue={guest.phoneNumber || "Not available"}
                        readOnly
                      />
                    </label>

                    <hr />

                    {event.includeFood && (
                      <>
                        <label htmlFor="diet">
                          Diet:
                          <select name="diet" defaultValue={guest.diet || ""}>
                            <option value="meat">Meat</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                          </select>
                        </label>
                        <hr />
                      </>
                    )}

                    {event.includeAllergies && (
                      <>
                        <label htmlFor="allergies">
                          Allergies:
                          <input
                            name="allergies"
                            type="text"
                            defaultValue={guest.allergies!}
                            readOnly
                          />
                        </label>
                        <hr />
                      </>
                    )}

                    <label htmlFor="comments">
                      Comments:
                      <input
                        name="comments"
                        type="text"
                        defaultValue={guest.comments || "Not available"}
                        readOnly
                      />
                    </label>
                    <hr />
                  </>
                )}

                {guest.additionalGuest.name.length > 0 &&
                  guest.hasResponded && (
                    <>
                      <label htmlFor="additional-guest">
                        Additional guest:
                        <input
                          name="additional-guest"
                          type="text"
                          defaultValue={guest.additionalGuest.name}
                          readOnly
                        />
                      </label>

                      <hr />

                      <label htmlFor="additional-guest-attending">
                        Additional guest attending:
                        <select
                          name="additional-guest-attending"
                          defaultValue={guest.additionalGuest.attending.toString()}
                        >
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </label>

                      <hr />

                      {event.includeFood && (
                        <>
                          <label htmlFor="additional-guest-diet">
                            Additional guest diet:
                            <select
                              name="dditional-guest-diet"
                              defaultValue={guest.additionalGuest.diet || ""}
                            >
                              <option value="meat">Meat</option>
                              <option value="vegetarian">Vegetarian</option>
                              <option value="vegan">Vegan</option>
                            </select>
                          </label>
                          <hr />
                        </>
                      )}

                      {event.includeAllergies && (
                        <>
                          <label htmlFor="additional-guest-allergies">
                            Additional guest allergies:
                            <input
                              name="additional-guest-allergies"
                              type="text"
                              defaultValue={
                                guest.additionalGuest.allergies ||
                                "Not available"
                              }
                              readOnly
                            />
                          </label>
                          <hr />
                        </>
                      )}

                      <label htmlFor="additional-guest-comments">
                        Additional guest comments:
                        <input
                          name="additional-guest-comments"
                          type="text"
                          defaultValue={
                            guest.additionalGuest.comments || "Not available"
                          }
                          readOnly
                        />
                      </label>
                    </>
                  )}

                {true && <button>Edit</button>}
              </form>
            </AccordionItem>
          </Accordion>
        ))}
      </article>
    </section>
  );
};

export default AdminOverview;
