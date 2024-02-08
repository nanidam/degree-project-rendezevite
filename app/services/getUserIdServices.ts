"use server";

import { getServerSession } from "next-auth";
import prisma from "../db";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const getUserId = async () => {
  const session = await getServerSession(authOptions);
  try {
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
  } catch (error) {
    console.error("An error occurred when fetching userId:", error);
    throw error;
  }
};

export default getUserId;
