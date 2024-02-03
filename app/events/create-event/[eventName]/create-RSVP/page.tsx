import EditRsvp from "@/app/utils/components/EditRsvp";

const CreateRsvpPage = async ({
  params: { eventName },
}: {
  params: { eventName: string };
}) => {
  return <EditRsvp eventName={eventName} />;
};

export default CreateRsvpPage;
