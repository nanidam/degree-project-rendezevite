import { getEvent } from "@/app/services/getEvent";
import getUserId from "@/app/services/getUserId";
import CreateEditEvent from "@/app/utils/components/createEditEvent";

const EditEvent = async ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  console.log(eventName);
  const userId = await getUserId();
  if (!userId) return;

  const event = await getEvent(userId, eventName);
  if (!event) return;

  return <CreateEditEvent event={event} />;
};

export default EditEvent;
