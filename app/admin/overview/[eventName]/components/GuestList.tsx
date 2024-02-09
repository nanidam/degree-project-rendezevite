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
import { handleSaveEditGuest } from "../utils/handleSaveEditGuest";
import ConfirmDelete from "@/app/utils/components/confirmDelete";
import { ReactSVG } from "react-svg";

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
  const [page, setPage] = useState<number>(0);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpandSymbol = (guestId: string) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(guestId)) {
        return prevExpandedItems.filter((id) => id !== guestId);
      } else {
        return [guestId];
      }
    });
  };

  useEffect(() => {
    setPaginatedList(event.guestList.slice(0, 5));
    setPage(1);
  }, [event, setPaginatedList, setPage]);

  const totalPages = Math.ceil(event.guestList.length / 5) || 1;

  return (
    <article className="guestlist-container">
      <h3>Guestlist:</h3>
      <p className="guestlist-text">
        Click on each <i>header</i> to sort the guest list in ascending order. Click the
        same header again to sort the guest list in descending order
      </p>
      <div className="guestlist-explanations">
        <span className="explanation">
          <ReactSVG src="/svgs/positive.svg" aria-label="Yes" />
          <p>
            Indicates that the guest has RSVP&apos;d and/or will be attending the event.
          </p>
        </span>

        <span className="explanation">
          <ReactSVG src="/svgs/negative.svg" aria-label="No" />
          <p className="explanation-negative">
            Indicates that the guest has <b>not</b> {""}
            RSVP&apos;d and/or will <b>not</b> be attending the event.
          </p>
        </span>
        <span className="explanation">
          <ReactSVG src="/svgs/question-mark.svg" aria-label="Not responded" />
          <p>Still waiting for guest to respond.</p>{" "}
        </span>
      </div>

      <div className="sorting-btns">
        <button
          className="sorting-btn sort-name-btn"
          data-sort="name"
          onClick={() => sortByName({ event, setEvent, setPage })}
          aria-label="Sort by Guest Name"
        >
          Guest Name
        </button>
        <button
          className="sorting-btn sort-rsvp-btn"
          data-sort="responded"
          onClick={() => sortByRsvp({ event, setEvent, setPage })}
          aria-label="Sort by RSVP status"
        >
          {"RSVP'd"}
        </button>
        <button
          className="sorting-btn sort-attending-btn"
          data-sort="attending"
          onClick={() => sortByAttending({ event, setEvent, setPage })}
          aria-label="Sort by Attending status"
        >
          Attending
        </button>
      </div>
      <Accordion>
        {paginatedList.map((guest: IGuest) => (
          <AccordionItem
            key={guest.id}
            onClick={() => toggleExpandSymbol(guest.id)}
            header={
              <div className="accordion-info">
                <span className="guest-name-wrapper">
                  {expandedItems.includes(guest.id) ? (
                    <ReactSVG
                      className="gustlist-symbols"
                      src="/svgs/expand-less.svg"
                      aria-label="Collapse symbol"
                    />
                  ) : (
                    <ReactSVG
                      className="gustlist-symbols"
                      src="/svgs/expand-more.svg"
                      aria-label="Expand symbol"
                    />
                  )}

                  <p className="guest-name">{guest.name}</p>
                </span>
                <div className="guest-rsvpd">
                  {guest.hasResponded ? (
                    <ReactSVG
                      className="gustlist-symbols"
                      src="/svgs/positive.svg"
                      aria-label="Yes"
                    />
                  ) : (
                    <ReactSVG
                      className="gustlist-symbols"
                      src="/svgs/negative.svg"
                      aria-label="No"
                    />
                  )}
                </div>
                <div className="guest-rsvpd">
                  {guest.attending ? (
                    <ReactSVG
                      className="gustlist-symbols"
                      src="/svgs/positive.svg"
                      aria-label="Yes"
                    />
                  ) : guest.hasResponded ? (
                    <ReactSVG
                      className="gustlist-symbols"
                      src="/svgs/negative.svg"
                      aria-label="No"
                    />
                  ) : (
                    <ReactSVG
                      className="gustlist-symbols"
                      src="/svgs/question-mark.svg"
                      aria-label="Not responded"
                    />
                  )}
                </div>
              </div>
            }
          >
            <form
              className="guestlist-guest-form"
              onSubmit={(e) =>
                handleSaveEditGuest({
                  e,
                  guestId: guest.id,
                  setEvent,
                  editGuestList,
                  setEditGuestList,
                  event,
                  setEditModeId,
                })
              }
            >
              <label className="guestlist-label" htmlFor="guest-name">
                Name:
                <input
                  className="guestlist-input"
                  name="guest-name"
                  type="text"
                  value={editGuestList.find((g) => g.id === guest.id)?.name || ""}
                  onChange={(e) => handleName(e, guest.id, setEditGuestList, editGuestList)}
                  readOnly={editModeId !== guest.id}
                />
              </label>

              <hr />

              <label className="guestlist-label" htmlFor="guest-email">
                Email:
                <input
                  className="guestlist-input"
                  name="guest-email"
                  type="text"
                  value={editGuestList.find((g) => g.id === guest.id)?.email || ""}
                  onChange={(e) =>
                    handleEmail(e, guest.id, setEditGuestList, editGuestList)
                  }
                  readOnly={editModeId !== guest.id}
                />
              </label>

              <hr />

              <label className="guestlist-label" htmlFor="has-responded">
                Has responded:
                <select
                  className="guestlist-select"
                  name="has-responded"
                  value={
                    editGuestList.find((g) => g.id === guest.id)?.hasResponded.toString() ||
                    "false"
                  }
                  onChange={(e) =>
                    handleHasResponded(e, guest.id, setEditGuestList, editGuestList)
                  }
                  disabled={editModeId !== guest.id}
                  aria-label="Select Yes or No if guest has responded"
                >
                  <option className="guestlist-opt" value="true">
                    Yes
                  </option>
                  <option className="guestlist-opt" value="false">
                    No
                  </option>
                </select>
              </label>

              <hr />

              <>
                <label className="guestlist-label" htmlFor="attending">
                  Attending:
                  <select
                    className="guestlist-select"
                    name="attending"
                    value={
                      editGuestList.find((g) => g.id === guest.id)?.attending.toString() ||
                      "false"
                    }
                    onChange={(e) =>
                      handleAttending(e, guest.id, setEditGuestList, editGuestList)
                    }
                    disabled={editModeId !== guest.id}
                    aria-label="Select Yes or No for Guest Attending"
                  >
                    <option className="guestlist-opt" value="true">
                      Yes
                    </option>
                    <option className="guestlist-opt" value="false">
                      No
                    </option>
                  </select>
                </label>

                <hr />

                <label className="guestlist-label" htmlFor="guest-number">
                  Phone number:
                  <input
                    className="guestlist-input"
                    name="guest-number"
                    type="text"
                    value={editGuestList.find((g) => g.id === guest.id)?.phoneNumber || ""}
                    onChange={(e) =>
                      handlePhoneNumber(e, guest.id, setEditGuestList, editGuestList)
                    }
                    readOnly={editModeId !== guest.id}
                  />
                </label>

                <hr />

                {event.includeFood && (
                  <>
                    <label className="guestlist-label" htmlFor="diet">
                      Diet:
                      <select
                        className="guestlist-select"
                        name="diet"
                        value={editGuestList.find((g) => g.id === guest.id)?.diet || "meat"}
                        onChange={(e) =>
                          handleDiet(e, guest.id, setEditGuestList, editGuestList)
                        }
                        disabled={editModeId !== guest.id}
                        aria-label="Select meat, vegetarian or vegan for guest's diet"
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
                    <label className="guestlist-label" htmlFor="allergies">
                      Allergies:
                      <input
                        className="guestlist-input"
                        name="allergies"
                        type="text"
                        value={
                          editGuestList.find((g) => g.id === guest.id)?.allergies || ""
                        }
                        onChange={(e) =>
                          handleAllergies(e, guest.id, setEditGuestList, editGuestList)
                        }
                        readOnly={editModeId !== guest.id}
                      />
                    </label>
                    <hr />
                  </>
                )}

                <label className="guestlist-label" htmlFor="comments">
                  Comments:
                  <input
                    className="guestlist-input"
                    name="comments"
                    type="text"
                    value={editGuestList.find((g) => g.id === guest.id)?.comments || ""}
                    onChange={(e) =>
                      handleComments(e, guest.id, setEditGuestList, editGuestList)
                    }
                    readOnly={editModeId !== guest.id}
                  />
                </label>
              </>

              {guest.additionalGuest.name.length > 0 && (
                <>
                  <hr />
                  <label className="guestlist-label" htmlFor="additional-guest">
                    Additional guest:
                    <input
                      className="guestlist-input"
                      name="additional-guest"
                      type="text"
                      value={
                        editGuestList.find((g) => g.id === guest.id)?.additionalGuest
                          .name || ""
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

                  <label className="guestlist-label" htmlFor="additional-guest-attending">
                    Additional guest attending:
                    <select
                      className="guestlist-select"
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
                      aria-label="Select Yes or No for Additional Guest Attending"
                    >
                      <option className="guestlist-opt" value="true">
                        Yes
                      </option>
                      <option className="guestlist-opt" value="false">
                        No
                      </option>
                    </select>
                  </label>

                  <hr />

                  {event.includeFood && (
                    <>
                      <label className="guestlist-label" htmlFor="additional-guest-diet">
                        Additional guest diet:
                        <select
                          className="guestlist-select"
                          name="additional-guest-diet"
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
                          aria-label="Select meat, vegetarian or vegan for additional guest diet"
                        >
                          <option className="guestlist-opt" value="meat">
                            Meat
                          </option>
                          <option className="guestlist-opt" value="vegetarian">
                            Vegetarian
                          </option>
                          <option className="guestlist-opt" value="vegan">
                            Vegan
                          </option>
                        </select>
                      </label>
                      <hr />
                    </>
                  )}

                  {event.includeAllergies && (
                    <>
                      <label
                        className="guestlist-label"
                        htmlFor="additional-guest-allergies"
                      >
                        Additional guest allergies:
                        <input
                          className="guestlist-input"
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

              {editModeId !== guest.id && (
                <button
                  className="edit-guest-btn"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    editGuest(e, guest.id, setEditModeId)
                  }
                  aria-label={`Edit guest with name ${guest.name}`}
                >
                  Edit
                </button>
              )}

              {editModeId === guest.id && (
                <>
                  <div className="guestlist-save-cancel">
                    <button
                      type="submit"
                      className="guestlist-btn guestlist-save-btn"
                      aria-label={`Save changes for ${guest.name}`}
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowConfirmDelete(true)}
                      className="guestlist-btn guestlist-delete-btn"
                      aria-label={`Delete ${guest.name}`}
                    >
                      Delete
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      cancelEditMode(event.guestList, setEditModeId, setEditGuestList)
                    }
                    className="guestlist-cancel-btn"
                    aria-label={`Cancel editing for ${guest.name}`}
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
      </Accordion>
      <div className="pagination">
        <button
          className={`first-btn${page === 1 ? " disabled" : ""} pagination-btn`}
          disabled={page === 1}
          onClick={() => navigateFirst({ setPage, event, setPaginatedList })}
          aria-label="First page"
        >
          «
        </button>

        <button
          className={`previous-btn${page === 1 ? " disabled" : ""} pagination-btn`}
          disabled={page === 1}
          onClick={() => navigatePrevious({ page, setPage, event, setPaginatedList })}
          aria-label="Previous page"
        >
          ‹
        </button>

        <p className="total-pages">
          <b className="current-page-numb">{page}</b> of {totalPages}
        </p>
        <button
          className={`next-btn${page === totalPages ? " disabled" : ""} pagination-btn`}
          disabled={page === totalPages}
          onClick={() => navigateNext({ page, setPage, event, setPaginatedList })}
          aria-label="Next page"
        >
          ›
        </button>

        <button
          className={`last-btn${page === totalPages ? " disabled" : ""} pagination-btn`}
          disabled={page === totalPages}
          onClick={() => navigateLast({ page, setPage, event, setPaginatedList })}
          aria-label="Last page"
        >
          »
        </button>
      </div>
    </article>
  );
};
