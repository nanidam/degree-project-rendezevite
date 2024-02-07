import { checkAccess } from "@/app/utils/checkAccess";
import InvitationGeoWelcome from "@/app/utils/components/guestWelcome";
import InvitationFlowersWelcome from "@/app/utils/components/invitationFlowersWelcome";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

const Welcome = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  if (!ObjectId.isValid(inviteCode)) redirect("/not-found");

  const info = await checkAccess(inviteCode);
  const { guest, event } = info;
  const { eventName, id, eventDate } = event;

  if (
    info.event.template === "templateGeoDesign" ||
    info.event.template === null ||
    info.event.template === undefined
  ) {
    return (
      <>
        <InvitationGeoWelcome
          eventName={eventName}
          eventDate={eventDate}
          eventId={id}
          guest={guest}
        />
      </>
    );
  }

  if (info.event.template === "templateFlowerDesign") {
    return (
      <>
        <InvitationFlowersWelcome
          eventName={eventName}
          eventDate={eventDate}
          eventId={id}
          guest={guest}
        />
      </>
    );
  }
};

export default Welcome;
