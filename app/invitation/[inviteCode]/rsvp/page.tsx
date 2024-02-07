import { checkAccess } from "@/app/utils/checkAccess";
import Rsvp from "@/app/utils/components/rsvp";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

const RsvpPage = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  if (!ObjectId.isValid(inviteCode)) redirect("/not-found");

  const info = await checkAccess(inviteCode);

  return (
    <>
      <Rsvp guest={info.guest} eventId={info.event.id} eventName={info.event.eventName} />
    </>
  );
};

export default RsvpPage;
