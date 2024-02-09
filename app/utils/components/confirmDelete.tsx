import "./style/confirmDelete.scss";
import { deleteEvent } from "@/app/services/deleteEventServices";
import { deleteGuest } from "@/app/services/deleteGuestServices";
import { IEvent } from "../models/IEvent";

interface IConfirmDeleteProps {
  setShowConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
  eventName?: string;
  events?: string[];
  setEvents?: React.Dispatch<React.SetStateAction<string[]>>;
  event?: IEvent;
  setEvent?: React.Dispatch<React.SetStateAction<IEvent | null>>;
  guestId?: string;
}

const ConfirmDelete: React.FC<IConfirmDeleteProps> = ({
  setShowConfirmDelete,
  eventName,
  events,
  setEvents,
  guestId,
  event,
  setEvent,
}) => {
  const handleConfirmDelete = async () => {
    if (eventName && events && setEvents) {
      await deleteEvent(eventName);
      setShowConfirmDelete(false);
      setEvents(events.filter((event) => event !== eventName));
    }

    if (guestId && setEvent && event) {
      const deletedGuest = await deleteGuest({ guestId });
      if (!deletedGuest) return;

      setShowConfirmDelete(false);
      setEvent({
        ...event,
        guestList: event.guestList.filter((guest) => guest.id !== guestId),
      });
    }
  };

  const handleCancel = () => {
    setShowConfirmDelete(false);
  };

  return (
    <section className="confirm-delete-container">
      <article
        className="confirm-delete"
        role="dialog"
        aria-labelledby="confirm-delete-header"
      >
        <h1 className="confirm-delete-header" id="confirm-delete-header">
          Are you sure you want to delete <span className="event-name">{eventName}</span>?
        </h1>
        <p className="confirm-delete-text">
          {events && "Once you delete the event, it cannot be undone."}
          {guestId && "Once you the guest, it cannot be undone."}
        </p>
        <div className="confirm-delete-btns">
          <button
            className="confirm-delete-btn"
            onClick={handleConfirmDelete}
            aria-label="Confirm delete"
          >
            Delete
          </button>
          <button
            className="denied-delete-btn"
            onClick={handleCancel}
            aria-label="Cancel delete"
          >
            Cancel
          </button>
        </div>
      </article>
    </section>
  );
};

export default ConfirmDelete;
