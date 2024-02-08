import { checkAccess } from "@/app/services/checkAccessServices";
import InvitationGeometricRsvp from "@/app/utils/components/invitationGeometricRsvp";
import InvitationFlowersRsvp from "@/app/utils/components/invitationFlowersRsvp";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

const RsvpPage = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  if (!ObjectId.isValid(inviteCode)) redirect("/not-found");

  const info = await checkAccess(inviteCode);
  if (!info) return null;

  if (
    info.event.template === "templateGeoDesign" ||
    info.event.template === null ||
    info.event.template === undefined
  ) {
    return (
      <>
        <InvitationGeometricRsvp
          guest={info.guest}
          eventId={info.event.id}
          eventName={info.event.eventName}
        />
      </>
    );
  }

  if (info.event.template === "templateFlowerDesign") {
    return (
      <>
        <InvitationFlowersRsvp
          guest={info.guest}
          eventId={info.event.id}
          eventName={info.event.eventName}
        />
      </>
    );
  }
};

export default RsvpPage;
