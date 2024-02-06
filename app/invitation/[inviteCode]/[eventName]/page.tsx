import { checkAccess } from "@/app/utils/checkAccess";
import GeometricDesign from "@/app/utils/components/geometricDesign";
import { redirect } from "next/navigation";

const GuestInvitation = async ({
  params: { inviteCode },
}: {
  params: { inviteCode: string };
}) => {
  const info = await checkAccess(inviteCode);

  return (
    <GeometricDesign
      header={info.event.header!}
      text={info.event.text!}
      eventId={info.event.id}
      eventName={info.event.eventName}
    />
  );
};

export default GuestInvitation;
