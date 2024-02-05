import { checkAccess } from "@/app/utils/checkAccess";
import Rsvp from "@/app/utils/components/rsvp";
import { redirect } from "next/navigation";

const RsvpPage = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  const info = await checkAccess(inviteCode);

  return (
    <>
      <Rsvp guest={info.guest} />
    </>
  );
};

export default RsvpPage;