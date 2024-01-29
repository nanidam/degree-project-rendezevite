import { IGuest } from "@/app/utils/models/IGuest";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useState } from "react";
import { handleName } from "./utils/handleName";
import { handleEmail } from "./utils/handleEmail";
import { editGuest } from "./utils/editGuest";
import { handleHasResponded } from "./utils/handleHasResponded";
import { handleAttending } from "./utils/handleAttending";
import { handleAdditionalGuestAttending } from "./utils/handleAdditionalGuestAttending";
import { handlePhoneNumber } from "./utils/handlePhoneNumber";
import { handleDiet } from "./utils/handleDiet";
import { handleAllergies } from "./utils/handleAllergies";
import { cancelEditMode } from "./utils/cancelEditMode";
import { handleComments } from "./utils/handleComments";
import { handleAdditionalGuestName } from "./utils/handleAdditionalGuestName";
import { handleAdditionalGuestDiet } from "./utils/handleAdditionalGuestDiet";

interface GuestListProps {
  guestList: IGuest[];
  editGuestList: IGuest[];
  setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>;
  includeFood?: boolean | null;
  includeAllergies?: boolean | null;
}

export const GuestList = ({
  guestList,
  editGuestList,
  setEditGuestList,
  includeFood,
  includeAllergies,
}: GuestListProps) => {
  const [editModeId, setEditModeId] = useState<string | null>(null);

  const handleSaveClick = async (e: React.FormEvent<HTMLFormElement>, guestId: string) => {
    e.preventDefault();

    console.log("save", guestId);
  };

  return (
    <article className="admin-wrapper">
      <h3>Guestlist:</h3>
      <Accordion>
        {guestList.map((guest: IGuest) => (
          <AccordionItem key={guest.id} header={guest.name}>
            <form onSubmit={(e) => handleSaveClick(e, guest.id)}>
              <label htmlFor="guest-name">
                Name:
                <input
                  name="guest-name"
                  type="text"
                  value={editGuestList.find((g) => g.id === guest.id)?.name || ""}
                  onChange={(e) => handleName(e, guest.id, setEditGuestList, editGuestList)}
                  readOnly={editModeId !== guest.id}
                />
              </label>

              <hr />

              <label htmlFor="guest-email">
                Email:
                <input
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

              <label htmlFor="has-responded">
                Has responded:
                <select
                  name="has-responded"
                  value={
                    editGuestList.find((g) => g.id === guest.id)?.hasResponded.toString() ||
                    "false"
                  }
                  onChange={(e) =>
                    handleHasResponded(e, guest.id, setEditGuestList, editGuestList)
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
                        handleAttending(e, guest.id, setEditGuestList, editGuestList)
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
                        editGuestList.find((g) => g.id === guest.id)?.phoneNumber || ""
                      }
                      onChange={(e) =>
                        handlePhoneNumber(e, guest.id, setEditGuestList, editGuestList)
                      }
                      readOnly={editModeId !== guest.id}
                    />
                  </label>

                  <hr />

                  {includeFood && (
                    <>
                      <label htmlFor="diet">
                        Diet:
                        <select
                          name="diet"
                          value={
                            editGuestList.find((g) => g.id === guest.id)?.diet || "meat"
                          }
                          onChange={(e) =>
                            handleDiet(e, guest.id, setEditGuestList, editGuestList)
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

                  {includeAllergies && (
                    <>
                      <label htmlFor="allergies">
                        Allergies:
                        <input
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

                  <label htmlFor="comments">
                    Comments:
                    <input
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

                  {includeFood && (
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

                  {includeAllergies && (
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
                    onClick={() =>
                      cancelEditMode(guestList, setEditModeId, setEditGuestList)
                    }
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                </>
              )}
            </form>
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  );
};
