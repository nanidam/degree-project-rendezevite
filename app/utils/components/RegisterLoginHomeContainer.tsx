import { getServerSession } from "next-auth";
import RegisterLoginHome from "./registerLoginHome";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { ISession } from "../models/ISession";

const RegisterLoginHomeContainer = async () => {
  const session = (await getServerSession(authOptions)) as ISession | null;
  return <RegisterLoginHome session={session} />;
};

export default RegisterLoginHomeContainer;
