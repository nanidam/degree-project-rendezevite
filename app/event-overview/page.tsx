import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const EventOverview = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1>Event Overview</h1>
    </div>
  );
};

export default EventOverview;
