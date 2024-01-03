"use server";

import prisma from "@/app/db";
import { redirect } from "next/navigation";

const handleRegister = async (data: FormData) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    // Handle the case where the email already exists
    console.log("Email already exists");
    return;
  }

  const response = await prisma.user.create({
    data: {
      email,
      hashedPassword: password,
    },
  });

  console.log(response);
  redirect("/");
};

export default handleRegister;
