import "./style/inviteGuests.scss";
import { IEvent } from "@/app/utils/models/IEvent";
import { IGuest } from "@/app/utils/models/IGuest";
import { handleInviteGuests } from "../utils/handleInviteGuests";
import { ReactSVG } from "react-svg";
import { useRef, useState } from "react";
import Loading from "@/app/utils/components/loading";

interface IInviteGuestsProps {
  eventId: string;
  setEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
  setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>;
  guestList: IGuest[];
  eventPassword: string;
  eventName: string;
}

export const InviteGuests = ({
  eventId,
  setEvent,
  setEditGuestList,
  guestList,
  eventPassword,
  eventName,
}: IInviteGuestsProps) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  return (
    <article className="invite-guests">
      {loading && <Loading />}
      <form
        ref={formRef}
        className="invite-guest-form"
        onSubmit={(e) =>
          handleInviteGuests({
            e,
            eventId,
            setEvent,
            setEditGuestList,
            guestList,
            setErrorMsg,
            formRef,
            setLoading,
            eventPassword,
            eventName,
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
          id="additionalGuest"
          aria-describedby={errorMsg ? "errorMsg" : undefined}
        />
        {errorMsg && <span className="error-message">{errorMsg}</span>}

        <button className="invite-guest-btn" type="submit">
          Invite
        </button>
      </form>
    </article>
  );
};
