import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

import TemplateGeometricDesign from "../components/templateGeoDesign";

const EventOverview: React.FC = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
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
