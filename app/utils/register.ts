"use server";

import prisma from "@/app/db";
import { REGISTER_STATUS } from "./constants";
import { passwordSchema } from "./passwordValidator";
import CryptoJS from "crypto-js";
import { IPasswordValidation } from "@/app/models/IPasswordValidation";
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

  if (!passwordSchema.validate(password)) {
    const details = passwordSchema.validate(password, {
      details: true,
    }) as IPasswordValidation[];

    if (details.length > 0) {
      switch (details[0].validation) {
        case "min":
          return REGISTER_STATUS.INVALID_PASSWORD_MIN_LENGTH;
        case "max":
          return REGISTER_STATUS.INVALID_PASSWORD_MAX_LENGTH;
        case "lowercase":
          return REGISTER_STATUS.INVALID_PASSWORD_LOWERCASE;
        case "uppercase":
          return REGISTER_STATUS.INVALID_PASSWORD_UPPERCASE;
        case "digits":
          return REGISTER_STATUS.INVALID_PASSWORD_DIGITS;
        case "spaces":
          return REGISTER_STATUS.INVALID_PASSWORD_SPACES;
      }
    }
  }
  if (!process.env.DECRYPT_SECRET) {
    return REGISTER_STATUS.GENERIC;
  }

  const hashedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.DECRYPT_SECRET!
  ).toString();

  const newUser = await prisma.user.create({
    data: {
      email,
      hashedPassword,
    },
  });

  if (newUser) {
    return REGISTER_STATUS.SUCCESS;
  }
};

export default handleRegister;
