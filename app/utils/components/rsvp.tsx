"use client";
import { useState } from "react";
import { IGuest } from "../models/IGuest";
import { rsvp } from "../rsvp";
import "./style/rsvp.scss";
import { useRouter } from "next/navigation";

interface RsvpProps {
  guest: IGuest;
  eventId: string;
  eventName: string;
}
const Rsvp = ({ guest, eventId, eventName }: RsvpProps) => {
  const [guestState, setGuestState] = useState<IGuest>(guest);

  const router = useRouter();

  const handleRsvp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const guestAttending = formData.get("attending") === "true";
    const phoneNumber = formData.get("phoneNumber") as string;
    const guestDiet = formData.get("diet") as string;
    const guestAllergies = formData.get("allergies") as string;
    const guestComments = formData.get("comments") as string;

    const additionalGuestAttending = formData.get("additional-guest-attending") === "true";
    const additionalGuestDiet = formData.get("additional-guest-diet") as string;
    const additionalGuestAllergies = formData.get("additional-guest-allergies") as string;

    const updatedGuest = (await rsvp({
      guestAttending,
      phoneNumber,
      guestDiet,
      guestAllergies,
      guestComments,
      additionalGuestAttending,
      additionalGuestDiet,
      additionalGuestAllergies,
      guestId: guest.id,
      additionalGuestName: guest.additionalGuest.name,
    })) as IGuest;

    setGuestState(updatedGuest);
  };

  return (
    <>
      <section className="template-bg">
        {guest.hasResponded ? (
          <h1 className="title-rsvp">Response Received</h1>
        ) : (
          <>
            <h1 className="title-rsvp">Attending?</h1>
          </>
        )}
        <form className="form-rsvp" onSubmit={handleRsvp}>
          <div className="guest-container">
            <div className="guest-name-container">
              <p className="guest-name">Guest: {guest.name}</p>
            </div>

            <div className="attending">
              <label htmlFor="attending" className="guest-label">
                Attending:
              </label>
              <input
                type="radio"
                name="attending"
                value="true"
                disabled={guestState.hasResponded}
                defaultChecked={guestState.attending === guestState.hasResponded}
                required
              />
              <span className="checkbox-option">Yes</span>
              <input
                type="radio"
                name="attending"
                value="false"
                disabled={guestState.hasResponded}
                defaultChecked={!guestState.attending === guestState.hasResponded}
                required
              />
              <span className="checkbox-option">No</span>
            </div>

            <div className="phoneNumber">
              <label className="guest-label" htmlFor="phoneNumber">
                Phone:
              </label>
              <input
                className="text-input"
                type="text"
                name="phoneNumber"
                placeholder="07XX XXX XXX"
                disabled={guestState.hasResponded}
                defaultValue={guestState.phoneNumber ?? ""}
                required
              />
            </div>

            <div className="diet">
              <label htmlFor="diet" className="guest-label">
                Diet:
              </label>
              <input
                type="radio"
                name="diet"
                value="meat"
                defaultChecked={guestState.diet === "meat"}
                disabled={guestState.hasResponded}
                required
              />
              <span className="checkbox-option">Meat</span>
              <input
                type="radio"
                name="diet"
                value="vegetarian"
                defaultChecked={guestState.diet === "vegetarian"}
                disabled={guestState.hasResponded}
                required
              />
              <span className="checkbox-option">Vegetarian</span>
              <input
                type="radio"
                name="diet"
                value="vegan"
                defaultChecked={guestState.diet === "vegan"}
                disabled={guestState.hasResponded}
                required
              />
              <span className="checkbox-option">Vegan</span>
            </div>

            <div className="allergies">
              <label className="guest-label" htmlFor="allergies">
                Allergies:
              </label>
              <input
                className="text-input"
                type="text"
                name="allergies"
                placeholder="Allergies"
                defaultValue={guestState.allergies ?? ""}
                disabled={guestState.hasResponded}
                maxLength={24} // TODO: adapt to this template DISPLAY max char available
              />
            </div>

            <div className="comments">
              <label className="guest-label" htmlFor="comments">
                Info:
              </label>
              <input
                className="text-input"
                type="text"
                name="comments"
                placeholder="Additional info"
                defaultValue={guestState.comments ?? ""}
                disabled={guestState.hasResponded}
                maxLength={24}
              />
            </div>
          </div>

          {guest.additionalGuest.name.length > 0 && (
            <>
              <div className="additional-guest">
                <div className="guest-name-container">
                  <p className="guest-name">
                    Additional Guest: {guest.additionalGuest.name}
                  </p>
                </div>

                <div className="attending">
                  <label className="attending-label" htmlFor="additional-guest-attending">
                    Attending:
                  </label>
                  <input
                    type="radio"
                    id="additional-guest-attending"
                    name="additional-guest-attending"
                    value="true"
                    disabled={guestState.hasResponded}
                    defaultChecked={guestState.additionalGuest.attending}
                  />
                  <span className="checkbox-option">Yes</span>
                  <input
                    type="radio"
                    id="additional-guest-not-attending"
                    name="additional-guest-not-attending"
                    value="false"
                    disabled={guestState.hasResponded}
                    defaultChecked={
                      guestState.additionalGuest.attending && guestState.hasResponded
                    }
                  />
                  <span className="checkbox-option">No</span>
                </div>

                <div className="diet">
                  <label className="guest-label" htmlFor="additional-guest-diet">
                    Diet:
                  </label>
                  <input
                    type="radio"
                    name="additional-guest-diet"
                    value="meat"
                    defaultChecked={guestState.additionalGuest.diet === "meat"}
                    disabled={guestState.hasResponded}
                  />
                  <span className="checkbox-option">Meat</span>
                  <input
                    type="radio"
                    name="additional-guest-diet"
                    value="vegetarian"
                    disabled={guestState.hasResponded}
                    defaultChecked={guestState.additionalGuest.diet === "vegetarian"}
                  />
                  <span className="checkbox-option">Vegetarian</span>
                  <input
                    type="radio"
                    name="additional-guest-diet"
                    value="vegan"
                    disabled={guestState.hasResponded}
                    defaultChecked={guestState.additionalGuest.diet === "vegan"}
                  />
                  <span className="checkbox-option">Vegan</span>
                </div>

                <div className="allergies">
                  <label className="guest-label" htmlFor="additional-guest-allergies">
                    Allergies:
                  </label>
                  <input
                    className="text-input"
                    type="text"
                    name="additional-guest-allergies"
                    placeholder="Allergies"
                    disabled={guestState.hasResponded}
                    defaultValue={guestState.additionalGuest.allergies ?? ""}
                    maxLength={24}
                  />
                </div>
              </div>
            </>
          )}

          {/* {!guest.hasResponded && !loading ? (
          <div className="submit-btn-container">
            <button className="submit-btn" type="submit">
              Send
            </button>
          </div>
        ) : (
          <div className="loader-container">
            <PacmanLoader
              color="orange"
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )} */}
          {/* {loading && (
          <div className="loader-container">
            <PacmanLoader
              color="orange"
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )} */}

          {!guest.hasResponded && (
            <div className="submit-btn-container">
              <button className="submit-btn" type="submit">
                Send
              </button>
            </div>
          )}
        </form>

        <div className="next-return-wrapper">
          <button
            className="submit-event-btn"
            type="button"
            onClick={() => {
              router.push(`/invitation/${eventId}/${eventName}`);
            }}
          >
            Previous
          </button>
        </div>
      </section>
    </>
  );
};

export default Rsvp;
