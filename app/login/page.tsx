import { getServerSession } from "next-auth";
import LoginRegisterForm from "../utils/components/loginRegisterForm";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { ISession } from "../utils/models/ISession";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = (await getServerSession(authOptions)) as ISession;
  if (session?.access === "admin") redirect("/events");
  return <LoginRegisterForm loginRegisterHeader="Login" loginType="admin" />;
};

export default Login;
