import prisma from "@/app/db";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import CryptoJS from "crypto-js";
import { authOptions } from "./config";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
