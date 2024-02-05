import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/app/db";
import getUserId from "@/app/services/getUserId";
import { checkAccess } from "@/app/utils/checkAccess";
import GuestWelcome from "@/app/utils/components/guestWelcome";
import { IEvent } from "@/app/utils/models/IEvent";
import { ISession } from "@/app/utils/models/ISession";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Welcome = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  const info = await checkAccess(inviteCode);
  return <GuestWelcome event={info.event} session={info.session} />;
};

export default Welcome;
