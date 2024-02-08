import { getEvent } from "@/app/services/getEventServices";
import getUserId from "@/app/services/getUserIdServices";
import Template from "@/app/utils/components/template";

const EditTemplate = async ({
  params: { eventName: encodedEventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const eventName = decodeURIComponent(encodedEventName);

  const userId = await getUserId();
  if (!userId) return;

  const event = await getEvent(userId, eventName);
  if (!event) return;

  return <Template eventName={eventName} event={event} />;
};
export default EditTemplate;
