import { IEvent } from "@/app/utils/models/IEvent";
import { IGuest } from "@/app/utils/models/IGuest";
import { handleInviteGuests } from "../utils/handleInviteGuests";
import "./style/inviteGuests.scss";
import { ReactSVG } from "react-svg";
import { useState } from "react";

interface InviteGuestsProps {
  eventId: string;
  setEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
  setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>;
  guestList: IGuest[];
}

export const InviteGuests = ({
  eventId,
  setEvent,
  setEditGuestList,
  guestList,
}: InviteGuestsProps) => {
  const [errorMsg, setErrorMsg] = useState("");
  //TODO reset inout field after invite
  return (
    <article className="invite-guests">
      <form
        className="invite-guest-form"
        onSubmit={(e) =>
          handleInviteGuests({
            e,
            eventId,
            setEvent,
            setEditGuestList,
            guestList,
            setErrorMsg,
          })
        }
      >
        <div className="gold-flags-banner">
          <ReactSVG src="/svgs/gold-flags-banner.svg" />
        </div>

        <h3 className="invite-guest-title">Invite guests</h3>
        <p className="invite-guest-text">
          By inviting a guest, they will receive an email containing a login link to access
          and view their invitation. However, additional guests will not receive an
          invitation.
        </p>
        <p className="invite-guest-text">
          Please leave <i>additional guest&apos;s name</i> <b>blank</b> if the guest do not
          have any.
        </p>

        <div className="invite-guest-icons">
          <ReactSVG src="/svgs/green-mail.svg" />
          <ReactSVG src="/svgs/disco-ball.svg" />
          <ReactSVG src="/svgs/music-note.svg" />
        </div>

        <label className="invite-guest-label" htmlFor="guestName">
          Guest&apos;s name:
        </label>
        <input
          className="invite-guest-input"
          type="text"
          name="guestName"
          placeholder="John Doe"
          required
        />

        <label className="invite-guest-label" htmlFor="guestEmail">
          Guest&apos;s email:
        </label>
        <input
          className="invite-guest-input"
          type="email"
          name="guestEmail"
          placeholder="john.doe@example.com"
          required
        />

        <label className="invite-guest-label" htmlFor="additionalGuest">
          Additional guest&apos;s name:
        </label>
        <input
          className="invite-guest-input"
          type="text"
          name="additionalGuest"
          placeholder="Jane Doe"
        />
        {errorMsg && <span className="error-message">{errorMsg}</span>}

        <button className="invite-guest-btn" type="submit">
          Invite
        </button>
      </form>
    </article>
  );
};
