import "./style/guestList.scss";
import { IGuest } from "@/app/utils/models/IGuest";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useEffect, useState } from "react";
import { handleName } from "../utils/handleName";
import { handleEmail } from "../utils/handleEmail";
import { editGuest } from "../utils/editGuest";
import { handleHasResponded } from "../utils/handleHasResponded";
import { handleAttending } from "../utils/handleAttending";
import { handleAdditionalGuestAttending } from "../utils/handleAdditionalGuestAttending";
import { handlePhoneNumber } from "../utils/handlePhoneNumber";
import { handleDiet } from "../utils/handleDiet";
import { handleAllergies } from "../utils/handleAllergies";
import { cancelEditMode } from "../utils/cancelEditMode";
import { handleComments } from "../utils/handleComments";
import { handleAdditionalGuestName } from "../utils/handleAdditionalGuestName";
import { handleAdditionalGuestDiet } from "../utils/handleAdditionalGuestDiet";
import { sortByRsvp } from "../utils/sortByRsvp";
import { sortByAttending } from "../utils/sortByAttending";
import { sortByName } from "../utils/sortByName";
import { IEvent } from "@/app/utils/models/IEvent";
import { navigateNext } from "../utils/navigateNext";
import { navigateFirst } from "../utils/navigateFirst";
import { navigatePrevious } from "../utils/navigatePrevious";
import { navigateLast } from "../utils/navigateLast";
import { saveEditGuest } from "../utils/saveEditGuest";
import ConfirmDelete from "@/app/utils/components/confirmDelete";

interface GuestListProps {
  event: IEvent;
  setEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
  editGuestList: IGuest[];
  setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>;
}

export const GuestList = ({
  event,
  setEvent,
  editGuestList,
  setEditGuestList,
}: GuestListProps) => {
  const [editModeId, setEditModeId] = useState<string | null>(null);
  const [paginatedList, setPaginatedList] = useState<IGuest[]>([]);
  const [page, setPage] = useState(0);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    setPaginatedList(event.guestList.slice(0, 5));
    setPage(1);
  }, [event, setPaginatedList, setPage]);

  const totalPages = Math.ceil(event.guestList.length / 5) || 1;

  return (
    <article className="admin-wrapper">
      <h3>Guestlist:</h3>
      <div className="sorting-btns">
        <button
          className="sort-btn sort-name-btn"
          data-sort="name"
          onClick={() => sortByName({ event, setEvent, setPage })}
        >
          Name
        </button>
        <button
          className="sort-btn sort-rsvp-btn"
          data-sort="responded"
          onClick={() => sortByRsvp({ event, setEvent, setPage })}
        >
          {"RSVP'd"}
        </button>
        <button
          className="sort-btn sort-attending-btn"
          data-sort="attending"
          onClick={() => sortByAttending({ event, setEvent, setPage })}
        >
          Attending
        </button>
      </div>
      <Accordion>
        {paginatedList.map((guest: IGuest) => (
          <AccordionItem
            key={guest.id}
            header={
              <div className="accordion-info">
                <p className="guest-name">{guest.name}</p>
                <p className="guest-rsvpd">X</p>
                <p className="guest-rsvpd">V</p>
              </div>
            }
          >
            <form onSubmit={(e) => saveEditGuest({ e, guestId: guest.id })}>
              <label htmlFor="guest-name">
                Name:
                <input
                  name="guest-name"
                  type="text"
                  value={
                    editGuestList.find((g) => g.id === guest.id)?.name || ""
                  }
                  onChange={(e) =>
                    handleName(e, guest.id, setEditGuestList, editGuestList)
                  }
                  readOnly={editModeId !== guest.id}
                />
              </label>

              <hr />

              <label htmlFor="guest-email">
                Email:
                <input
                  name="guest-email"
                  type="text"
                  value={
                    editGuestList.find((g) => g.id === guest.id)?.email || ""
                  }
                  onChange={(e) =>
                    handleEmail(e, guest.id, setEditGuestList, editGuestList)
                  }
                  readOnly={editModeId !== guest.id}
                />
              </label>

              <hr />

              <label htmlFor="has-responded">
                Has responded:
                <select
                  name="has-responded"
                  value={
                    editGuestList
                      .find((g) => g.id === guest.id)
                      ?.hasResponded.toString() || "false"
                  }
                  onChange={(e) =>
                    handleHasResponded(
                      e,
                      guest.id,
                      setEditGuestList,
                      editGuestList
                    )
                  }
                  disabled={editModeId !== guest.id}
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
                      value={
                        editGuestList
                          .find((g) => g.id === guest.id)
                          ?.attending.toString() || "false"
                      }
                      onChange={(e) =>
                        handleAttending(
                          e,
                          guest.id,
                          setEditGuestList,
                          editGuestList
                        )
                      }
                      disabled={editModeId !== guest.id}
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
                      value={
                        editGuestList.find((g) => g.id === guest.id)
                          ?.phoneNumber || ""
                      }
                      onChange={(e) =>
                        handlePhoneNumber(
                          e,
                          guest.id,
                          setEditGuestList,
                          editGuestList
                        )
                      }
                      readOnly={editModeId !== guest.id}
                    />
                  </label>

                  <hr />

                  {event.includeFood && (
                    <>
                      <label htmlFor="diet">
                        Diet:
                        <select
                          name="diet"
                          value={
                            editGuestList.find((g) => g.id === guest.id)
                              ?.diet || "meat"
                          }
                          onChange={(e) =>
                            handleDiet(
                              e,
                              guest.id,
                              setEditGuestList,
                              editGuestList
                            )
                          }
                          disabled={editModeId !== guest.id}
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
                      <label htmlFor="allergies">
                        Allergies:
                        <input
                          name="allergies"
                          type="text"
                          value={
                            editGuestList.find((g) => g.id === guest.id)
                              ?.allergies || ""
                          }
                          onChange={(e) =>
                            handleAllergies(
                              e,
                              guest.id,
                              setEditGuestList,
                              editGuestList
                            )
                          }
                          readOnly={editModeId !== guest.id}
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
                      value={
                        editGuestList.find((g) => g.id === guest.id)
                          ?.comments || ""
                      }
                      onChange={(e) =>
                        handleComments(
                          e,
                          guest.id,
                          setEditGuestList,
                          editGuestList
                        )
                      }
                      readOnly={editModeId !== guest.id}
                    />
                  </label>
                </>
              )}

              {guest.additionalGuest.name.length > 0 && guest.hasResponded && (
                <>
                  <hr />
                  <label htmlFor="additional-guest">
                    Additional guest:
                    <input
                      name="additional-guest"
                      type="text"
                      value={
                        editGuestList.find((g) => g.id === guest.id)
                          ?.additionalGuest.name || ""
                      }
                      onChange={(e) =>
                        handleAdditionalGuestName(
                          e,
                          guest.id,
                          setEditGuestList,
                          editGuestList
                        )
                      }
                      readOnly={editModeId !== guest.id}
                    />
                  </label>

                  <hr />

                  <label htmlFor="additional-guest-attending">
                    Additional guest attending:
                    <select
                      name="additional-guest-attending"
                      value={
                        editGuestList
                          .find((g) => g.id === guest.id)
                          ?.additionalGuest.attending.toString() || "false"
                      }
                      onChange={(e) =>
                        handleAdditionalGuestAttending(
                          e,
                          guest.id,
                          setEditGuestList,
                          editGuestList
                        )
                      }
                      disabled={editModeId !== guest.id}
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
                          value={
                            editGuestList
                              .find((g) => g.id === guest.id)
                              ?.additionalGuest.diet?.toString() || "meat"
                          }
                          onChange={(e) =>
                            handleAdditionalGuestDiet(
                              e,
                              guest.id,
                              setEditGuestList,
                              editGuestList
                            )
                          }
                          disabled={editModeId !== guest.id}
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
                          value={
                            editGuestList
                              .find((g) => g.id === guest.id)
                              ?.additionalGuest.allergies?.toString() || ""
                          }
                          readOnly={editModeId !== guest.id}
                        />
                      </label>
                      <hr />
                    </>
                  )}
                </>
              )}

              <br />

              {editModeId !== guest.id && (
                <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    editGuest(e, guest.id, setEditModeId)
                  }
                >
                  Edit
                </button>
              )}

              {editModeId === guest.id && (
                <>
                  <button type="submit" className="save-btn">
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowConfirmDelete(true)}
                    className="cancel-btn"
                  >
                    Delete
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      cancelEditMode(
                        event.guestList,
                        setEditModeId,
                        setEditGuestList
                      )
                    }
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                </>
              )}
            </form>
            {showConfirmDelete && (
              <ConfirmDelete
                setShowConfirmDelete={setShowConfirmDelete}
                guestId={guest.id}
                event={event}
                setEvent={setEvent}
              />
            )}
          </AccordionItem>
        ))}
        <div className="pagination">
          <button
            className={`first-btn${page === 1 ? " disabled" : ""}`}
            disabled={page === 1}
            onClick={() => navigateFirst({ setPage, event, setPaginatedList })}
            aria-label="First page"
          >
            «
          </button>

          <button
            className={`previous-btn${page === 1 ? " disabled" : ""}`}
            disabled={page === 1}
            onClick={() =>
              navigatePrevious({ page, setPage, event, setPaginatedList })
            }
            aria-label="Previous page"
          >
            ‹
          </button>

          <p className="total-pages">
            <b className="current-page-numb">{page}</b> of {totalPages}
          </p>
          <button
            className={`next-btn${page === totalPages ? " disabled" : ""}`}
            disabled={page === totalPages}
            onClick={() =>
              navigateNext({ page, setPage, event, setPaginatedList })
            }
            aria-label="Next page"
          >
            ›
          </button>

          <button
            className={`last-btn${page === totalPages ? " disabled" : ""}`}
            disabled={page === totalPages}
            onClick={() =>
              navigateLast({ page, setPage, event, setPaginatedList })
            }
            aria-label="Last page"
          >
            »
          </button>
        </div>
      </Accordion>
    </article>
  );
};
