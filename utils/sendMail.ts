"use server";
import prisma from "@/app/db";
import { mailConfig } from "./mailConfig";
import CryptoJS from "crypto-js";

export const sendMail = async (email: string) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    return existingUser;
  }

  const bytes = CryptoJS.AES.decrypt(
    existingUser?.hashedPassword!,
    process.env.DECRYPT_SECRET!
  );

  const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

  await mailConfig({
    to: email,
    subject: "Your RendezEvite password",
    body: "Hello, here is your RendezEvite password: " + decryptedPassword,
  });
};
