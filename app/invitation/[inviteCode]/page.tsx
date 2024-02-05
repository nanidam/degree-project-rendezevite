import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import LoginRegisterForm from "@/app/utils/components/loginRegisterForm";
import { ISession } from "@/app/utils/models/ISession";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// TODO: if invitecode(eventID) is not found, show a component with an error text.
// Create error component
// this component should recieve a textas prop
// Handle manual redirect if trying to access /welcome or /rsvp
// Handle manual redirect if trying to access /admin if logged in as guest

const Invitation = async ({
  params: { inviteCode },
}: {
  params: { inviteCode: string };
}) => {
  const session = (await getServerSession(authOptions)) as ISession | null;
  if (session) redirect(`/invitation/${inviteCode}/welcome`);

  return (
    <LoginRegisterForm
      loginRegisterHeader={"Invitation"}
      loginType="guest"
      inviteCode={inviteCode}
    />
  );
};

export default Invitation;
