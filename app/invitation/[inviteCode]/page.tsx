import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import LoginRegisterForm from "@/app/utils/components/loginRegisterForm";
import { ISession } from "@/app/utils/models/ISession";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";

// TODO: if invitecode(eventID) is not found, show a component with an error text.

// error when signing in to incorrect event ?

const Invitation = async ({
  params: { inviteCode },
}: {
  params: { inviteCode: string };
}) => {
  if (!ObjectId.isValid(inviteCode)) redirect("/not-found");
  const session = (await getServerSession(authOptions)) as ISession | null;
  if (session && session.access !== "admin") redirect(`/invitation/${inviteCode}/welcome`);

  return (
    <LoginRegisterForm
      loginRegisterHeader={"Invitation"}
      loginType="guest"
      inviteCode={inviteCode}
    />
  );
};

export default Invitation;
