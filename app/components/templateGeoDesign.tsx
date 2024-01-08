import { TemplateGeometricDesignProps } from "../models/ITemplateGeometricDesign";
import "./style/templateGeoDesign.scss";

const TemplateGeometricDesign: React.FC<TemplateGeometricDesignProps> = ({
  header,
  text,
  rsvpGeneric,
  rsvpFood,
}) => {
  const headerContent = rsvpGeneric && rsvpFood ? "RSVP" : header;

  const renderRSVPContent = () => (
    <>
      <form>
        <label htmlFor="guest">Guest:</label>
        <input type="text" id="guest" name="guest" readOnly />

        <div>
          <label htmlFor="attending">
            {" "}
            Attending:
            <input type="radio" name="attending" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="attending" value="no" /> No
          </label>
        </div>

        <div>
          <label htmlFor="diet">
            Diet:
            <input type="radio" name="diet" value="meat" /> Meat
          </label>
          <label>
            <input type="radio" name="diet" value="vegetarian" /> Vegetarian
          </label>
          <label>
            <input type="radio" name="diet" value="vegan" /> Vegan
          </label>
        </div>

        <label htmlFor="allergies">Allergies:</label>
        <input type="text" id="allergies" name="allergies" />

        <label htmlFor="comments">Comments:</label>
        <input type="text" id="comments" name="comments" />

        <button>Submit</button>
      </form>
    </>
  );

  return (
    <section className="template-bg">
      <h1 className="template-header">{headerContent}</h1>
      <article className="template-text-container">
        {" "}
        {rsvpGeneric && rsvpFood ? (
          renderRSVPContent()
        ) : (
          <p className="template-text">{text}</p>
        )}
      </article>
    </section>
  );
};

export default TemplateGeometricDesign;
