import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/app/db";
import TemplateGeometricDesign from "@/app/utils/components/templateGeoDesign";
import { IEvent } from "@/app/utils/models/IEvent";
import { ISession } from "@/app/utils/models/ISession";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const GuestInvitation = async ({
  params: { inviteCode },
}: {
  params: { inviteCode: string };
}) => {
  const session = (await getServerSession(authOptions)) as ISession | null;
  if (!session) redirect(`/invitation/${inviteCode}`);
  if (session.access === "admin") redirect("/unauthorized");

  const event = (await prisma.event.findUnique({
    where: {
      id: inviteCode,
    },
    include: {
      guestList: true,
    },
  })) as IEvent;
  if (!event) return null;

  return (
    <TemplateGeometricDesign
      header={event.header!}
      text={event.text!}
      eventId={event.id}
      eventName={event.eventName}
    />
  );
};

export default GuestInvitation;
