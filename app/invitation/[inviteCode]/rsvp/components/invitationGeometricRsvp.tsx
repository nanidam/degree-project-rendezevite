"use client";

import "./invitationGeometricRsvp.scss";
import { useState } from "react";
import { IGuest } from "../../../../utils/models/IGuest";
import { rsvp } from "../../../../services/rsvpServices";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";
import Image from "next/image";
import Loading from "../../../../utils/components/loading";
import { IInvitationRsvpProps } from "../../../../utils/models/IInvitationRsvpProps";

const InvitationGeometricRsvp = ({ guest, eventId, eventName }: IInvitationRsvpProps) => {
  const [guestState, setGuestState] = useState<IGuest>(guest);
  const [responded, setResponded] = useState(guest.hasResponded);
  const [guestAttendingState, setGuestAttendingState] = useState(guest.attending);
  const [addGuestAttendingState, setAddGuestAttendingState] = useState(
    guest.additionalGuest.attending
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRsvp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
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

    if (updatedGuest) {
      setGuestState(updatedGuest);
      setResponded(updatedGuest.hasResponded);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <section className="template-bg">
        <article className="template-container">
          <Image
            className="gemetric-desktop"
            src="/geometricDesignDesktop.png"
            width={650}
            height={500}
            alt="Geometric background Design"
            priority={true}
            placeholder="empty"
          />
          <ReactSVG className="invitation-envelope" src="/svgs/invitation-envelope.svg" />

          <div className="template-wrapper">
            {responded ? (
              <h1 className="template-header">Responded</h1>
            ) : (
              <>
                <h1 className="template-header">Attending?</h1>
              </>
            )}

            <form className="rsvp-form" onSubmit={handleRsvp}>
              <div className="form-container">
                <p className="guest-name">Guest: {guest.name}</p>

                <div className="rsvp-attending">
                  <label htmlFor="attending" className="guest-label">
                    Attending:
                  </label>
                  <input
                    className="rsvp-radio-input"
                    type="radio"
                    name="attending"
                    value="true"
                    disabled={guestState.hasResponded}
                    defaultChecked={guestState.attending}
                    required
                    onClick={() => {
                      if (!guestAttendingState) setGuestAttendingState(true);
                    }}
                  />
                  <span className="checkbox-option">Yes</span>
                  <input
                    className="rsvp-radio-input"
                    type="radio"
                    name="attending"
                    value="false"
                    disabled={guestState.hasResponded}
                    defaultChecked={!guestState.attending}
                    required
                    onClick={() => {
                      if (guestAttendingState) setGuestAttendingState(false);
                    }}
                  />
                  <span className="checkbox-option">No</span>
                </div>

                <label className="rsvp-label" htmlFor="phoneNumber">
                  Phone:
                </label>
                <input
                  className="rsvp-input"
                  type="text"
                  name="phoneNumber"
                  placeholder="07XX XXX XXX"
                  disabled={guestState.hasResponded || !guestAttendingState}
                  defaultValue={guestState.phoneNumber ?? ""}
                  required={guestAttendingState}
                />

                <div className="rsvp-diet">
                  <label htmlFor="diet" className="guest-label">
                    Diet:
                  </label>
                  <br />
                  <input
                    className="rsvp-radio-input"
                    type="radio"
                    name="diet"
                    value="meat"
                    defaultChecked={guestState.diet === "meat"}
                    disabled={guestState.hasResponded || !guestAttendingState}
                    required={guestAttendingState}
                  />
                  <span className="checkbox-option">Meat</span>
                  <br />
                  <input
                    className="rsvp-radio-input"
                    type="radio"
                    name="diet"
                    value="vegetarian"
                    defaultChecked={guestState.diet === "vegetarian"}
                    disabled={guestState.hasResponded || !guestAttendingState}
                    required={guestAttendingState}
                  />
                  <span className="checkbox-option">Vegetarian</span>
                  <br />
                  <input
                    className="rsvp-radio-input"
                    type="radio"
                    name="diet"
                    value="vegan"
                    defaultChecked={guestState.diet === "vegan"}
                    disabled={guestState.hasResponded || !guestAttendingState}
                    required={guestAttendingState}
                  />
                  <span className="checkbox-option">Vegan</span>
                </div>

                <label className="rsvp-label" htmlFor="allergies">
                  Allergies:
                </label>
                <input
                  className="rsvp-input"
                  type="text"
                  name="allergies"
                  placeholder="Allergies"
                  defaultValue={guestState.allergies ?? ""}
                  disabled={guestState.hasResponded || !guestAttendingState}
                  maxLength={24}
                />

                <label className="rsvp-label" htmlFor="comments">
                  Comments:
                </label>
                <input
                  className="rsvp-input"
                  type="text"
                  name="comments"
                  placeholder="Additional info"
                  defaultValue={guestState.comments ?? ""}
                  disabled={guestState.hasResponded || !guestAttendingState}
                  maxLength={24}
                />

                {guest.additionalGuest.name.length > 0 && (
                  <>
                    <div className="additional-guest">
                      <p className="guest-name">Guest +1: {guest.additionalGuest.name}</p>

                      <div className="rsvp-attending">
                        <label className="rsvp-label" htmlFor="additional-guest-attending">
                          Attending:
                        </label>
                        <input
                          className="rsvp-radio-input"
                          type="radio"
                          id="additional-guest-attending"
                          name="additional-guest-attending"
                          value="true"
                          disabled={guestState.hasResponded || !guestAttendingState}
                          defaultChecked={guestState.additionalGuest.attending}
                          required={guestAttendingState}
                          onChange={() => {
                            setAddGuestAttendingState(true);
                          }}
                        />
                        <span className="checkbox-option">Yes</span>
                        <input
                          className="rsvp-radio-input"
                          type="radio"
                          id="additional-guest-not-attending"
                          name="additional-guest-attending"
                          value="false"
                          disabled={guestState.hasResponded || !guestAttendingState}
                          defaultChecked={!guestState.additionalGuest.attending}
                          required={guestAttendingState}
                          onChange={() => {
                            setAddGuestAttendingState(false);
                          }}
                        />
                        <span className="checkbox-option">No</span>
                      </div>

                      <div className="rsvp-diet">
                        <label className="guest-label" htmlFor="additional-guest-diet">
                          Diet:
                        </label>
                        <br />
                        <input
                          className="rsvp-radio-input"
                          type="radio"
                          name="additional-guest-diet"
                          value="meat"
                          defaultChecked={guestState.additionalGuest.diet === "meat"}
                          disabled={
                            guestState.hasResponded ||
                            !addGuestAttendingState ||
                            !guestAttendingState
                          }
                          required={addGuestAttendingState}
                        />
                        <span className="checkbox-option">Meat</span>
                        <br />
                        <input
                          className="rsvp-radio-input"
                          type="radio"
                          name="additional-guest-diet"
                          value="vegetarian"
                          disabled={
                            guestState.hasResponded ||
                            !addGuestAttendingState ||
                            !guestAttendingState
                          }
                          defaultChecked={guestState.additionalGuest.diet === "vegetarian"}
                          required={addGuestAttendingState}
                        />
                        <span className="checkbox-option">Vegetarian</span>
                        <br />
                        <input
                          className="rsvp-radio-input"
                          type="radio"
                          name="additional-guest-diet"
                          value="vegan"
                          disabled={
                            guestState.hasResponded ||
                            !addGuestAttendingState ||
                            !guestAttendingState
                          }
                          defaultChecked={guestState.additionalGuest.diet === "vegan"}
                          required={addGuestAttendingState}
                        />
                        <span className="checkbox-option">Vegan</span>
                      </div>

                      <label className="rsvp-label" htmlFor="additional-guest-allergies">
                        Allergies:
                      </label>
                      <input
                        className="rsvp-input"
                        type="text"
                        name="additional-guest-allergies"
                        placeholder="Allergies"
                        disabled={
                          guestState.hasResponded ||
                          !addGuestAttendingState ||
                          !guestAttendingState
                        }
                        defaultValue={guestState.additionalGuest.allergies ?? ""}
                        maxLength={24}
                      />
                    </div>
                  </>
                )}
                <div className="send-return-wrapper">
                  <button
                    className="invitation-btn"
                    type="button"
                    onClick={() => {
                      router.push(`/invitation/${eventId}/${eventName}`);
                    }}
                  >
                    <ReactSVG
                      className="invitation-navigation-arrow"
                      src="/svgs/arrow.svg"
                      aria-label="Return"
                    />
                  </button>
                  {!responded && (
                    <button className="rsvp-submit-btn" type="submit">
                      Send
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </article>
      </section>
    </>
  );
};

export default InvitationGeometricRsvp;
