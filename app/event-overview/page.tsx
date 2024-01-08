import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Logout from "../components/logout";

import TemplateGeometricDesign from "../components/templateGeoDesign";

const EventOverview: React.FC = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1>Event Overview</h1>
      <Logout></Logout>
      {/* <TemplateGeometricDesign
        header="Event Overview"
        text="Lorem ipsum"
        rsvpGeneric={true}
        rsvpFood={true}
      ></TemplateGeometricDesign> */}
    </div>
  );
};

export default EventOverview;
