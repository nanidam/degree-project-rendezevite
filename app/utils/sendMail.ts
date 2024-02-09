"use server";

import prisma from "@/app/db";
import CryptoJS from "crypto-js";
import { mailConfig } from "./mailConfig";
interface IUser {
  id: String | null;
  email: String | null;
  hashedPassword: String | null;
}
interface ISendMail {
  email: string;
  mailType: string;
  eventId?: string;
  guestName?: string;
  eventPassword?: string;
  eventName?: string;
}
export const sendMail = async ({
  email,
  mailType,
  eventId,
  guestName,
  eventPassword,
  eventName,
}: ISendMail) => {
  if (mailType === "forgot-password") {
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

    const mail = {
      to: email,
      subject: "Your RendezEvite Password",
      body: `<h3>Dear Madam/Sir,</h3>
      <p>You have requested to have your password sent to you. <br/>If you haven't made such a request, please disregard this message.</p>
      <p>Your password is: <b>${decryptedPassword}</b></p>
      <p>
          Click here to be redirected to the login page:
          <a href="https://degree-project-rendezevite.vercel.app/login">Rendez Evite</a>
      </p>
      
      <p>We wish you a wonderful day!</p>
      
      <p>
          Kind regards,<br/>
          The Rendez Evite Team
      </p>`,
    };

    await mailConfig(mail);
    return existingUser;
  }

  if (mailType === "invite-guest") {
    const mail = {
      to: email,
      subject: `${guestName} is invited to a special event!`,
      body: `<h3>Hi ${guestName},</h3>
      <p>Someobody you know have thought of you and would like to invite you to a rendezvous :)</p>
      <p>The event password is : <b>${eventPassword}</b></p>    
      <p>To retrive your invitation:</p>
  
      <ul>
          <li>Sign in using your email address as the login credential.</li>
          <li>Enter the provided password when logging in.</li>
          <li>Access the login page through the following link:  <a href="https://rendezevite.vercel.app/invitation/${eventId}">${eventName}</a></li>
      </ul>
      
      <p>We wish you a wonderful day!</p>    
      <p>
          Kind regards,<br/>
          The Rendez Evite Team
      </p>`,
    };

    await mailConfig(mail);
  }
};
