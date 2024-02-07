import "./style/eventPassword.scss";
import { useState } from "react";
import { changeEventPassword } from "../utils/changeEventPassword";
import { ReactSVG } from "react-svg";
import Loading from "@/app/utils/components/loading";

interface IEventPasswordProps {
  eventPassword: string;
  eventId: string;
}

export const EventPassword = ({ eventPassword, eventId }: IEventPasswordProps) => {
  const [editPassword, setEditPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [editedPassword, setEditedPassword] = useState<string>(eventPassword);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCancel = () => {
    setEditPassword(false);
    setEditedPassword(eventPassword);
  };

  return (
    <article className="event-password-wrapper">
      {loading && <Loading />}
      <h3>Password</h3>
      <p className="event-password-text">See or change your password for the event.</p>
      <form
        className="admin-form event-password-form"
        onSubmit={(e) => {
          changeEventPassword({ e, eventId, setEditPassword, setLoading });
        }}
      >
        <label className="event-password-label" htmlFor="eventPassword">
          <b>Password:</b>
        </label>

        <div className="event-password-container">
          <input
            className="event-password-input"
            type={editPassword || showPassword ? "text" : "password"}
            name="eventPassword"
            readOnly={!editPassword}
            value={editedPassword}
            onChange={(e) => setEditedPassword(e.target.value)}
          />

          {showPassword || editPassword ? (
            <ReactSVG
              className="show-hide-password-svg"
              src="/svgs/opened-eye.svg"
              onClick={toggleShowPassword}
              aria-label="Opened eye to show password"
            />
          ) : (
            <ReactSVG
              className="show-hide-password-svg"
              src="/svgs/closed-eye.svg"
              onClick={toggleShowPassword}
              aria-label="Closed eye to hide password"
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
              onClick={handleCancel}
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
