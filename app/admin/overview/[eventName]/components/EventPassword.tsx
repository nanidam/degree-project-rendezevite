import { useState } from "react";
import { changeEventPassword } from "../utils/changeEventPassword";
import "./style/eventPassword.scss";
import { ReactSVG } from "react-svg";

interface IEventPasswordProps {
  eventPassword: string;
  eventId: string;
}

export const EventPassword = ({ eventPassword, eventId }: IEventPasswordProps) => {
  const [editPassword, setEditPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        <div className="event-password-container">
          <input
            className="event-password-input"
            type={editPassword || !showPassword ? "text" : "password"}
            name="eventPassword"
            readOnly={!editPassword}
            defaultValue={eventPassword}
          />
          {showPassword || editPassword ? (
            <ReactSVG
              className="show-hide-password-svg"
              src="/svgs/opened-eye.svg"
              onClick={toggleShowPassword}
            />
          ) : (
            <ReactSVG
              className="show-hide-password-svg"
              src="/svgs/closed-eye.svg"
              onClick={toggleShowPassword}
            />
          )}
        </div>

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
