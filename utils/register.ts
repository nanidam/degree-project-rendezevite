"use server";

import prisma from "@/app/db";
import { REGISTER_STATUS } from "./constants";
// @TODO Samtyckeknapp

const handleRegister = async (data: FormData) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return REGISTER_STATUS.EMAIL_EXISTS;
  }

  const newUser = await prisma.user.create({
    data: {
      email,
      hashedPassword: password,
    },
  });

  if (newUser) {
    return REGISTER_STATUS.SUCCESS;
  }
};

export default handleRegister;
