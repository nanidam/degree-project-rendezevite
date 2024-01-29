import { IEvent } from "@/app/utils/models/IEvent";
import { IGuest } from "@/app/utils/models/IGuest";
import { handleInviteGuests } from "../utils/handleInviteGuests";

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
    <article className="admin-wrapper">
      <form
        className="admin-form"
        onSubmit={(e) =>
          handleInviteGuests({ e, eventId, setEvent, setEditGuestList })
        }
      >
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
  );
};
