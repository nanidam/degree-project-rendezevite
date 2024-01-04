import TemplateGeometricDesign from "../components/templateGeoDesign";

const EventOverview: React.FC = () => {
  return (
    <div>
      {/* <h1>Event Overview</h1> */}
      <TemplateGeometricDesign
        header="Event Overview"
        text="Lorem ipsum"
        rsvpGeneric={true}
        rsvpFood={true}
      ></TemplateGeometricDesign>
    </div>
  );
};

export default EventOverview;
