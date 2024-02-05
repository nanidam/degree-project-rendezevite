import { checkAccess } from "@/app/utils/checkAccess";
import TemplateGeometricDesign from "@/app/utils/components/templateGeoDesign";

const GuestInvitation = async ({
  params: { inviteCode },
}: {
  params: { inviteCode: string };
}) => {
  const info = await checkAccess(inviteCode);

  return (
    <TemplateGeometricDesign
      header={info.event.header!}
      text={info.event.text!}
      eventId={info.event.id}
      eventName={info.event.eventName}
    />
  );
};

export default GuestInvitation;
