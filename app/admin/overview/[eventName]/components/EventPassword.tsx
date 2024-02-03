import { useState } from "react";
import { changeEventPassword } from "../utils/changeEventPassword";
import "./style/eventPassword.scss";

interface EventPasswordProps {
  eventPassword: string;
  eventId: string;
}

export const EventPassword = ({ eventPassword, eventId }: EventPasswordProps) => {
  const [editPassword, setEditPassword] = useState(false);

  // TODO: Make password only show when clicking eye svg.
  return (
    <article className="event-password-wrapper">
      <h3>Password</h3>
      <p>Change or see your password for the event</p>
      <form
        className="admin-form event-password-form"
        onSubmit={(e) => {
          changeEventPassword({ e, eventId, setEditPassword });
        }}
      >
        <label className="event-password-label" htmlFor="eventPassword">
          Password:
        </label>
        <input
          className="event-password-input"
          type={editPassword ? "text" : "password"}
          name="eventPassword"
          readOnly={!editPassword}
          defaultValue={eventPassword}
        />
        {editPassword ? (
          <div className="password-btn-container">
            <button
              className="password-btn save-password-btn"
              type="submit"
              aria-label="Save new password"
            >
              Save
            </button>
            <button
              className="password-btn cancel-password-btn"
              onClick={() => setEditPassword(false)}
              type="button"
              aria-label="Cancel password change"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="password-btn"
            type="button"
            onClick={() => setEditPassword(true)}
            aria-label="Change password"
          >
            Change Password
          </button>
        )}
      </form>
    </article>
  );
};
