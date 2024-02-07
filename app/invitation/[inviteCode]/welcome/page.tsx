import { checkAccess } from "@/app/utils/checkAccess";
import GuestWelcome from "@/app/utils/components/guestWelcome";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

const Welcome = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  if (!ObjectId.isValid(inviteCode)) redirect("/not-found");

  const info = await checkAccess(inviteCode);
  const { guest, event } = info;
  const { eventName, id, eventDate } = event;

  return (
    <GuestWelcome eventName={eventName} eventDate={eventDate} eventId={id} guest={guest} />
  );
};

export default Welcome;
