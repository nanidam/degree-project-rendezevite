import { checkAccess } from "@/app/utils/checkAccess";
import { redirect } from "next/navigation";
import GuestWelcome from "./components/guestWelcome";

const Welcome = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  const info = await checkAccess(inviteCode);

  return <GuestWelcome event={info.event} session={info.session} />;
};

export default Welcome;
