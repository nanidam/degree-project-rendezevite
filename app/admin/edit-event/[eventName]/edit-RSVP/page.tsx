import { getEvent } from "@/app/services/getEvent";
import getUserId from "@/app/services/getUserId";
import EditRsvp from "@/app/utils/components/EditRsvp";

const EditRsvpPage = async ({
  params: { eventName },
}: {
  params: { eventName: string };
}) => {
  const userId = await getUserId();
  if (!userId) return null;

  const event = await getEvent(userId, eventName);
  if (!event) return null;

  return <EditRsvp eventName={eventName} event={event} />;
};

export default EditRsvpPage;
