import { getEvent } from "@/app/services/getEvent";
import getUserId from "@/app/services/getUserIdServices";
import CreateEditEvent from "@/app/utils/components/createEditEvent";

const EditEvent = async ({
  params: { eventName: encodedEventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const eventName = decodeURIComponent(encodedEventName);

  const userId = await getUserId();
  if (!userId) return;

  const event = await getEvent(userId, eventName);
  if (!event) return;

  return <CreateEditEvent event={event} userId={userId} />;
};

export default EditEvent;
