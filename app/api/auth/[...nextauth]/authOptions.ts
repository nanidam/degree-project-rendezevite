import prisma from "@/app/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import CryptoJS from "crypto-js";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { use } from "react";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma) as Adapter,
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
        },
        eventId: { label: "Event ID", placeholder: "Event/Invitation ID" },
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

          if (
            credentials?.email === user?.email &&
            credentials?.password === decryptedPassword
          ) {
            return { id: user?.id, email: user?.email, access: "admin" };
          }
        }
        if (credentials?.loginType === "guest") {
          const event = await prisma.event.findUnique({
            where: {
              id: credentials.eventId,
            },
            include: {
              guestList: {
                where: {
                  email: credentials.email,
                },
              },
            },
          });
          if (event) {
            return {
              id: event.guestList[0].id,
              email: credentials.email,
              access: "guest",
              name: event.guestList[0].name
            };
          }
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user }
      return token
    },
    async session({ session, token }) {
      return { ...session, id: token.id, access: token.access };
    },
  },

};
