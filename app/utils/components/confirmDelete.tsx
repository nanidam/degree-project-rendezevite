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
          Are you sure you want to delete this event?
        </h1>
        <div>
          <button className="confirm-delete-button" onClick={handleConfirmDelete}>
            Delete Event
          </button>
          <button className="denied-delete-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </article>
    </section>
  );
};

export default ConfirmDelete;
