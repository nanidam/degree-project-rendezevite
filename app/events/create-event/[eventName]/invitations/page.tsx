import CreateEditInvitations from "@/app/utils/components/createEditInvitations";

const CreateInvitations = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  console.log(eventName);
  return <CreateEditInvitations eventName={eventName} />;
};

export default CreateInvitations;
