import { getEvent } from "@/app/services/getEvent";
import getUserId from "@/app/services/getUserId";
import Template from "@/app/utils/components/template";

const EditTemplate = async ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const userId = await getUserId();
  if (!userId) return;

  const event = await getEvent(userId, eventName);
  if (!event) return;

  return <Template eventName={eventName} event={event} />;
};
export default EditTemplate;
