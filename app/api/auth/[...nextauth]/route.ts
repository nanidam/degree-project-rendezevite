import prisma from "@/app/db";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
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
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        const bytes = CryptoJS.AES.decrypt(
          user?.hashedPassword!,
          process.env.DECRYPT_SECRET!
        );
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (
          credentials?.email === user?.email &&
          credentials?.password === decryptedPassword
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
