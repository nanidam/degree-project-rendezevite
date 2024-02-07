import { checkAccess } from "@/app/utils/checkAccess";
import GuestWelcome from "@/app/utils/components/guestWelcome";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

const Welcome = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  if (!ObjectId.isValid(inviteCode)) redirect("/not-found");

  const info = await checkAccess(inviteCode);

  return <GuestWelcome event={info.event} session={info.session} />;
};

export default Welcome;
