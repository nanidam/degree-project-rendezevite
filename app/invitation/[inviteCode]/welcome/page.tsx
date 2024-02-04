import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/app/db";
import getUserId from "@/app/services/getUserId";
import GuestWelcome from "@/app/utils/components/guestWelcome";
import { IEvent } from "@/app/utils/models/IEvent";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Welcome = async ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  // const userId = await getUserId();
  // if (!userId) redirect(`/invitation/${inviteCode}`);

  const session = await getServerSession(authOptions);
  console.log(session, "SANT");
  const event = (await prisma.event.findUnique({
    where: {
      id: inviteCode,
    },
    include: {
      guestList: true,
    },
  })) as IEvent;
  if (!event) return null;

  return <GuestWelcome event={event} />;
};

export default Welcome;
