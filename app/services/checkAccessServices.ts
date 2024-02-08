"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { ISession } from "../utils/models/ISession";
import { redirect } from "next/navigation";
import { IEvent } from "../utils/models/IEvent";
import prisma from "../db";

export const checkAccess = async (eventId: string) => {
  const session = (await getServerSession(authOptions)) as ISession | null;
  if (!session) redirect(`/invitation/${eventId}`);
  if (session.access === "admin") redirect("/unauthorized");

  try {
    const event = (await prisma.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        guestList: true,
      },
    })) as IEvent;

    if (!event) redirect("/not-found");

    const guest = event.guestList.find((guest) => guest.id === session?.id);
    if (!guest) redirect("/unauthorized");

    return { guest, event, session };
  } catch (error) {
    console.error("Error fetching event:", error);
  }
};
