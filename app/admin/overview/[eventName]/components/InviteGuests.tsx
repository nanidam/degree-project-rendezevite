import { IEvent } from "@/app/utils/models/IEvent";
import { IGuest } from "@/app/utils/models/IGuest";
import { handleInviteGuests } from "../utils/handleInviteGuests";
import "./style/inviteGuests.scss";

interface InviteGuestsProps {
  eventId: string;
  setEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
  setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>;
}

export const InviteGuests = ({
  eventId,
  setEvent,
  setEditGuestList,
}: InviteGuestsProps) => {
  return (
    <article className="invite-guests">
      <form
        className="invite-guest-form"
        onSubmit={(e) => handleInviteGuests({ e, eventId, setEvent, setEditGuestList })}
      >
        <h3>Invite guests</h3>
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

        <button className="invite-guest-btn" type="submit">
          Invite
        </button>
      </form>
    </article>
  );
};
