import { getEvent } from "@/app/services/getEvent";
import getUserId from "@/app/services/getUserIdServices";
import EditRsvp from "@/app/utils/components/EditRsvp";

const EditRsvpPage = async ({
  params: { eventName: encodedEventName },
}: {
  params: { eventName: string };
}) => {
  const eventName = decodeURIComponent(encodedEventName);

  const userId = await getUserId();
  if (!userId) return null;

  const event = await getEvent(userId, eventName);
  if (!event) return null;

  return <EditRsvp eventName={eventName} event={event} />;
};

export default EditRsvpPage;
