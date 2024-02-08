import { checkAccess } from "@/app/services/checkAccessServices";
import InvitationFlowersInfo from "@/app/invitation/[inviteCode]/[eventName]/components/invitationFlowersInfo";
import InvitationGeometricInfo from "@/app/invitation/[inviteCode]/[eventName]/components/invitationGeometricInfo";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

const GuestInvitation = async ({
  params: { inviteCode },
}: {
  params: { inviteCode: string };
}) => {
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
        <InvitationGeometricInfo
          header={info.event.header!}
          text={info.event.text!}
          eventId={info.event.id}
          eventName={info.event.eventName}
        />
      </>
    );
  }

  if (info.event.template === "templateFlowerDesign") {
    return (
      <>
        <InvitationFlowersInfo
          header={info.event.header!}
          text={info.event.text!}
          eventId={info.event.id}
          eventName={info.event.eventName}
        />
      </>
    );
  }
};

export default GuestInvitation;
