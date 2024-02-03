"use client";
import LoginRegisterForm from "@/app/utils/components/loginRegisterForm";
import login from "../../utils/login";
// TODO: if invitecode(eventID) is not found, show a component with an error text.
// Create error component
// this component should recieve a textas prop
const Invitation = ({ params: { inviteCode } }: { params: { inviteCode: string } }) => {
  console.log(inviteCode);
  return (
    <LoginRegisterForm
      loginRegisterHeader={"Login"}
      handleSubmit={login}
      loginType="guest"
      inviteCode={inviteCode}
    />
  );
};

export default Invitation;
