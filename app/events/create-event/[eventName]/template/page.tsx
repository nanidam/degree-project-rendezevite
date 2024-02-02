"use client";

import Template from "@/app/utils/components/template";

const CreateTemplate = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  return <Template eventName={eventName} />;
};
export default CreateTemplate;
