"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { ISession } from "./models/ISession";

export const getSession = async () => {
    const session = (await getServerSession(authOptions)) as ISession | null;
    return session
}