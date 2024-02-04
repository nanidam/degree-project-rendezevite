"use server";

import { getServerSession } from "next-auth";
import prisma from "../db";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

// TODO: redirect in this function depending on where the url is and acces level
const getUserId = async () => {
  const session = await getServerSession(authOptions);
  if (session && session.user && session.user.email) {
    const userId = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true },
    });

    if (userId) {
      return userId.id;
    }
  }
  return null;
};

export default getUserId;
