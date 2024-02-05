import { checkAccess } from "@/app/utils/checkAccess";
import GuestWelcome from "@/app/utils/components/guestWelcome";
import { redirect } from "next/navigation";

const Welcome = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  const info = await checkAccess(inviteCode);

  return <GuestWelcome event={info.event} session={info.session} />;
};

export default Welcome;
