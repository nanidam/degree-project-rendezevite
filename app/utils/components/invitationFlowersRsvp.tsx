import "./style/invitationFlowersRsvp.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { IGuest } from "../models/IGuest";
import { rsvp } from "../rsvp";
import Image from "next/image";

// interface IRsvpProps {
//     guest: IGuest;
//     eventId: string;
//     eventName: string;
//   }
const InvitationFlowersRsvp = () => {
  // const InvitationFlowersRsvp = ({ guest, eventId, eventName }: RsvpProps) => {
  //   const router = useRouter();

  //   const [guestState, setGuestState] = useState<IGuest>(guest);
  //   const [responded, setResponded] = useState(guest.hasResponded);
  //   const [guestAttendingState, setGuestAttendingState] = useState(guest.attending);
  //   const [addGuestAttendingState, setAddGuestAttendingState] = useState(
  //     guest.additionalGuest.attending
  //   );

  //   const handleRsvp = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const form = event.target as HTMLFormElement;
  //     const formData = new FormData(form);

  //     const guestAttending = formData.get("attending") === "true";
  //     const phoneNumber = formData.get("phoneNumber") as string;
  //     const guestDiet = formData.get("diet") as string;
  //     const guestAllergies = formData.get("allergies") as string;
  //     const guestComments = formData.get("comments") as string;

  //     const additionalGuestAttending = formData.get("additional-guest-attending") === "true";
  //     const additionalGuestDiet = formData.get("additional-guest-diet") as string;
  //     const additionalGuestAllergies = formData.get("additional-guest-allergies") as string;

  //     const updatedGuest = (await rsvp({
  //       guestAttending,
  //       phoneNumber,
  //       guestDiet,
  //       guestAllergies,
  //       guestComments,
  //       additionalGuestAttending,
  //       additionalGuestDiet,
  //       additionalGuestAllergies,
  //       guestId: guest.id,
  //       additionalGuestName: guest.additionalGuest.name,
  //     })) as IGuest;

  //     setGuestState(updatedGuest);
  //     setResponded(updatedGuest.hasResponded);
  //   };

  return (
    <>
      <section className="flowers-rsvp">
        <article className="flowers-rsvp-container">
          <Image
            className="flowers-bg-desktop"
            src="/invitation-flowers-desktop.png"
            width={650}
            height={500}
            alt="Geometric background Design"
            priority={true}
            placeholder="empty"
          />
          <ReactSVG className="invitation-envelope" src="/svgs/invitation-envelope.svg" />

          <div className="flowers-rsvp-wrapper">
            {/* {responded ? ( */}
            {true ? (
              <h1 className="flowers-rsvp-header">Responded</h1>
            ) : (
              <>
                <h1 className="flowers-rsvp-header">Attending?</h1>
              </>
            )}

            <form
              className="flowers-rsvp-form"
              // onSubmit={handleRsvp}
            >
              <div className="rsvp-form-container">
                <p className="flowers-rsvp-guestname">Guest: {"guest.name"}</p>

                <div className="flowers-rsvp-attending">
                  <label htmlFor="attending" className="flowers-rsvp-label">
                    Attending:
                  </label>
                  <input
                    className="flowers-rsvp-radio"
                    type="radio"
                    name="attending"
                    value="true"
                    // disabled={guestState.hasResponded}
                    // defaultChecked={guestState.hasResponded ? guestState.attending : false}
                    // required
                    // onClick={() => {
                    //   if (!guestAttendingState) setGuestAttendingState(true);
                    // }}
                  />
                  <span className="flowers-check-opt">Yes</span>
                  <input
                    className="flowers-rsvp-radio"
                    type="radio"
                    name="attending"
                    value="false"
                    // disabled={guestState.hasResponded}
                    // defaultChecked={!guestState.attending === guestState.hasResponded}
                    // required
                    // onClick={() => {
                    //   if (guestAttendingState) setGuestAttendingState(false);
                    // }}
                  />
                  <span className="flowers-check-opt">No</span>
                </div>

                <label className="flowers-rsvp-label" htmlFor="phoneNumber">
                  Phone:
                </label>
                <input
                  className="flowers-rsvp-input"
                  type="text"
                  name="phoneNumber"
                  placeholder="07XX XXX XXX"
                  //   disabled={guestState.hasResponded || !guestAttendingState}
                  //   defaultValue={guestState.phoneNumber ?? ""}
                  //   required={guestAttendingState}
                />

                <div className="flowers-rsvp-diet">
                  <label htmlFor="diet" className="flowers-rsvp-label">
                    Diet:
                  </label>
                  <br />
                  <input
                    className="flowers-rsvp-radio"
                    type="radio"
                    name="diet"
                    value="meat"
                    // defaultChecked={guestState.diet === "meat"}
                    // disabled={guestState.hasResponded || !guestAttendingState}
                    // required={guestAttendingState}
                  />
                  <span className="flowers-check-opt">Meat</span>
                  <br />
                  <input
                    className="flowers-rsvp-radio"
                    type="radio"
                    name="diet"
                    value="vegetarian"
                    // defaultChecked={guestState.diet === "vegetarian"}
                    // disabled={guestState.hasResponded || !guestAttendingState}
                    // required={guestAttendingState}
                  />
                  <span className="flowers-check-opt">Vegetarian</span>
                  <br />
                  <input
                    className="flowers-rsvp-radio"
                    type="radio"
                    name="diet"
                    value="vegan"
                    // defaultChecked={guestState.diet === "vegan"}
                    // disabled={guestState.hasResponded || !guestAttendingState}
                    // required={guestAttendingState}
                  />
                  <span className="flowers-check-opt">Vegan</span>
                </div>

                <label className="flowers-rsvp-label" htmlFor="allergies">
                  Allergies:
                </label>
                <input
                  className="flowers-rsvp-input"
                  type="text"
                  name="allergies"
                  placeholder="Allergies"
                  //   defaultValue={guestState.allergies ?? ""}
                  //   disabled={guestState.hasResponded || !guestAttendingState}
                  //   maxLength={24}
                  // TODO: adapt to this template DISPLAY max char available
                />

                <label className="flowers-rsvp-label" htmlFor="comments">
                  Comments:
                </label>
                <input
                  className="flowers-rsvp-input"
                  type="text"
                  name="comments"
                  placeholder="Additional info"
                  //   defaultValue={guestState.comments ?? ""}
                  //   disabled={guestState.hasResponded || !guestAttendingState}
                  //   maxLength={24}
                />

                {/* {guest.additionalGuest.name.length > 0 && ( */}
                {true && (
                  <>
                    <div className="flowers-additional-guest">
                      <p className="flowers-rsvp-guestname">
                        Guest +1: {"guest.additionalGuest.name"}
                      </p>

                      <div className="flowers-rsvp-attending">
                        <label
                          className="flowers-rsvp-label"
                          htmlFor="additional-guest-attending"
                        >
                          Attending:
                        </label>
                        <input
                          className="flowers-rsvp-radio"
                          type="radio"
                          id="additional-guest-attending"
                          name="additional-guest-attending"
                          value="true"
                          //   disabled={guestState.hasResponded || !guestAttendingState}
                          //   defaultChecked={
                          //     guestState.hasResponded
                          //       ? guestState.additionalGuest.attending
                          //       : false
                          //   }
                          //   required={guestAttendingState}
                          //   onChange={() => {
                          //     setAddGuestAttendingState(true);
                          //   }}
                        />
                        <span className="flowers-check-opt">Yes</span>
                        <input
                          className="flowers-rsvp-radio"
                          type="radio"
                          id="additional-guest-not-attending"
                          name="additional-guest-attending"
                          value="false"
                          //   disabled={guestState.hasResponded || !guestAttendingState}
                          //   defaultChecked={
                          //     guestState.hasResponded
                          //       ? !guestState.additionalGuest.attending
                          //       : false
                          //   }
                          //   required={guestAttendingState}
                          //   onChange={() => {
                          //     setAddGuestAttendingState(false);
                          //   }}
                        />
                        <span className="flowers-check-opt">No</span>
                      </div>

                      <div className="flowers-rsvp-diet">
                        <label
                          className="flowers-rsvp-label"
                          htmlFor="additional-guest-diet"
                        >
                          Diet:
                        </label>
                        <br />
                        <input
                          className="flowers-rsvp-radio"
                          type="radio"
                          name="additional-guest-diet"
                          value="meat"
                          //   defaultChecked={guestState.additionalGuest.diet === "meat"}
                          //   disabled={
                          //     guestState.hasResponded ||
                          //     !addGuestAttendingState ||
                          //     !guestAttendingState
                          //   }
                          //   required={addGuestAttendingState}
                        />
                        <span className="flowers-check-opt">Meat</span>
                        <br />
                        <input
                          className="flowers-rsvp-radio"
                          type="radio"
                          name="additional-guest-diet"
                          value="vegetarian"
                          //   disabled={
                          //     guestState.hasResponded ||
                          //     !addGuestAttendingState ||
                          //     !guestAttendingState
                          //   }
                          //   defaultChecked={guestState.additionalGuest.diet === "vegetarian"}
                          //   required={addGuestAttendingState}
                        />
                        <span className="flowers-check-opt">Vegetarian</span>
                        <br />
                        <input
                          className="flowers-rsvp-radio"
                          type="radio"
                          name="additional-guest-diet"
                          value="vegan"
                          //   disabled={
                          //     guestState.hasResponded ||
                          //     !addGuestAttendingState ||
                          //     !guestAttendingState
                          //   }
                          //   defaultChecked={guestState.additionalGuest.diet === "vegan"}
                          //   required={addGuestAttendingState}
                        />
                        <span className="flowers-check-opt">Vegan</span>
                      </div>

                      <label
                        className="flowers-rsvp-label"
                        htmlFor="additional-guest-allergies"
                      >
                        Allergies:
                      </label>
                      <input
                        className="flowers-rsvp-input"
                        type="text"
                        name="additional-guest-allergies"
                        placeholder="Allergies"
                        // disabled={
                        //   guestState.hasResponded ||
                        //   !addGuestAttendingState ||
                        //   !guestAttendingState
                        // }
                        // defaultValue={guestState.additionalGuest.allergies ?? ""}
                        // maxLength={24}
                      />
                    </div>
                  </>
                )}
                <div className="flowers-send-return">
                  <button
                    className="flowers-return-btn"
                    type="button"
                    // onClick={() => {
                    //   router.push(`/invitation/${eventId}/${eventName}`);
                    // }}
                  >
                    <ReactSVG
                      className="invitation-navigation-arrow"
                      src="/svgs/arrow.svg"
                      aria-label="Return"
                    />
                  </button>
                  {/* {!responded && ( */}
                  {true && (
                    <button className="flowers-send-inv-btn" type="submit">
                      Send
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </article>
      </section>
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
    </>
  );
};

export default InvitationFlowersRsvp;
