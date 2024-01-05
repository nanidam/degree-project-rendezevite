import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Logout from "../components/logout";

const EventOverview = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1>Event Overview</h1>
      <Logout></Logout>
    </div>
  );
};

export default EventOverview;
