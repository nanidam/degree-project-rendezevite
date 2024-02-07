import { checkAccess } from "@/app/utils/checkAccess";
import InvitationFlowersInfo from "@/app/utils/components/invitationFlowersInfo";
import InvitationGeometricInfo from "@/app/utils/components/invitationGeometricInfo";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

const GuestInvitation = async ({
  params: { inviteCode },
}: {
  params: { inviteCode: string };
}) => {
  if (!ObjectId.isValid(inviteCode)) redirect("/not-found");

  const info = await checkAccess(inviteCode);

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
