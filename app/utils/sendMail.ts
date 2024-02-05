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
    subject: "Your RendezEvite Password",
    body: `<h3>Dear Madam/Sir,</h3>
    <p>You have requested to have your password sent to you. <br/>If you haven't made such a request, please disregard this message.</p>
    <p>Your password is: <b>${decryptedPassword}</b></p>
    <p>
        Click here to be redirected to the login page:
        <button onclick="window.location.href = '/'"><a>Rendez Evite</a></button>
    </p>
    
    <p>We wish you a wonderful day!</p>
    
    <p>
        Kind regards,<br/>
        <img src="../../public/svgs/logo-footer.svg" alt="Rendez Evite logo" width="100px"/>
    </p>`,
  });
};

//TODO: confirm how the mail looks
