import { checkAccess } from "@/app/utils/checkAccess";
import InvitationGeometricInfo from "@/app/utils/components/invitationGeometricInfo";
import { redirect } from "next/navigation";

const GuestInvitation = async ({
  params: { inviteCode },
}: {
  params: { inviteCode: string };
}) => {
  const info = await checkAccess(inviteCode);

  return (
    <InvitationGeometricInfo
      header={info.event.header!}
      text={info.event.text!}
      eventId={info.event.id}
      eventName={info.event.eventName}
    />
  );
};

export default GuestInvitation;
