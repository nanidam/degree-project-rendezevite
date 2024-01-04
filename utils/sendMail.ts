"use server";
import { mailConfig } from "./mailConfig";

export const sendMail = async () => {
  await mailConfig({
    to: "giadi735@gmail.com",
    name: "Vahid",
    subject: "Test Mail",
    body: "Testing body hihihihi <br/> hihihi",
  });
};
