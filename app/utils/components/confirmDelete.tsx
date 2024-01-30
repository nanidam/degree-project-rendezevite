import { deleteEvent } from "@/app/services/deleteEvent";
import "./style/confirmDelete.scss";

interface IConfirmDeleteProps {
  setShowConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
  eventName: string;
  events: string[];
  setEvents: React.Dispatch<React.SetStateAction<string[]>>;
}

const ConfirmDelete: React.FC<IConfirmDeleteProps> = ({
  setShowConfirmDelete,
  eventName,
  events,
  setEvents,
}) => {
  const handleConfirmDelete = async () => {
    await deleteEvent(eventName);
    setShowConfirmDelete(false);
    setEvents(events.filter((event) => event !== eventName));
  };

  const handleCancel = () => {
    setShowConfirmDelete(false);
  };

  return (
    <section className="confirm-delete-container">
      <article className="confirm-delete">
        <h1 className="confirm-delete-header">
          Are you sure you want to delete <span className="event-name">{eventName}</span>?
        </h1>
        <p className="confirm-delete-text">
          Once you delete the event, it cannot be undone.
        </p>
        <div className="confirm-delete-btns">
          <button className="confirm-delete-btn" onClick={handleConfirmDelete}>
            Delete Event
          </button>
          <button className="denied-delete-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </article>
    </section>
  );
};

export default ConfirmDelete;
