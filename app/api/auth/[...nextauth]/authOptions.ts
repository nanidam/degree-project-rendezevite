import prisma from "@/app/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import CryptoJS from "crypto-js";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "creds",
      credentials: {
        email: { label: "Email", placeholder: "Enter Email" },
        password: { label: "Password", placeholder: "Password", type: "password" },
        loginType: {
          label: "Login Type",
          placeholder: "Login Type",
          type: "select",
          options: ["admin", "guest"],
        }
      },
      async authorize(credentials) {
        if (credentials?.loginType === "admin") {
          const user = await prisma.user.findUnique({
            where: { email: credentials?.email },
          });

          const bytes = CryptoJS.AES.decrypt(
            user?.hashedPassword!,
            process.env.DECRYPT_SECRET!
          );
          const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
          console.log(credentials)

          if (
            credentials?.email === user?.email &&
            credentials?.password === decryptedPassword
          ) {
            return { ...user, access: "admin" };
          }
        }
        if (credentials?.loginType === "guest") {
          console.log("what is up")
          return null // Login logic for guest
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
