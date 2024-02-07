import EditRsvp from "@/app/utils/components/EditRsvp";

const CreateRsvpPage = async ({
  params: { eventName: encodedEventName },
}: {
  params: { eventName: string };
}) => {
  const eventName = decodeURIComponent(encodedEventName);

  return <EditRsvp eventName={eventName} />;
};

export default CreateRsvpPage;
