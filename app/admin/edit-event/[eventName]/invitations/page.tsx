import { getEvent } from "@/app/services/getEvent";
import getUserId from "@/app/services/getUserIdServices";
import CreateEditInvitations from "@/app/utils/components/createEditInvitations";

const EditInvitations = async ({
  params: { eventName: encodedEventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const eventName = decodeURIComponent(encodedEventName);

  const userId = await getUserId();
  if (!userId) return;

  const event = await getEvent(userId, eventName);
  if (!event) return;

  return <CreateEditInvitations eventName={eventName} event={event} />;
};

export default EditInvitations;
