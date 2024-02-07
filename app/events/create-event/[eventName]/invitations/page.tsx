import CreateEditInvitations from "@/app/utils/components/createEditInvitations";

const CreateInvitations = ({
  params: { eventName: encodedEventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const eventName = decodeURIComponent(encodedEventName);
  return <CreateEditInvitations eventName={eventName} />;
};

export default CreateInvitations;
