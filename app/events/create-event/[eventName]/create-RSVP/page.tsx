import Logout from "@/app/components/logout";
import "./style.scss";

const CreateRsvp = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  if (eventName.includes(".")) {
    return null;
  }

  const handleDoneClick = () => {
    // Handle the logic when the "done" button is clicked
  };

  return (
    <section className="create-rsvp-container">
      <h1 className="choose-template-header">Create RSVP</h1>
      <Logout />
      <p>
        Will your event be including any food? If so, it could be a good idea to ask about
        diet or allergies
      </p>
      <div>
        <label htmlFor="foodPreferences">Food Preferences:</label>
        <input type="text" id="foodPreferences" />
      </div>
      <div>
        <label htmlFor="allergies">Allergies:</label>
        <input type="text" id="allergies" />
      </div>
      <button>Done</button>
    </section>
  );
};

export default CreateRsvp;
