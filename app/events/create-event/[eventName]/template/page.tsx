"use client";

import Template from "@/app/utils/components/template";

const CreateTemplate = ({
  params: { eventName: encodedEventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const eventName = decodeURIComponent(encodedEventName);

  return <Template eventName={eventName} />;
};
export default CreateTemplate;
