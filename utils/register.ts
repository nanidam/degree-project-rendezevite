"use server";

import prisma from "@/app/db";
import { redirect } from "next/navigation";
// @TODO Samtyckeknapp
// export const errormap = {
//   email
// }
const handleRegister = async (data: FormData) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "Email already exists" };
  }

  await prisma.user.create({
    data: {
      email,
      hashedPassword: password,
    },
  });

  // vid lyckad, ska vi visa i frontend
  redirect("/login");
};

export default handleRegister;
