const Template = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  if (eventName.includes(".")) {
    return null;
  }
  return (
    <>
      <h1>Choose template</h1>
    </>
  );
};

export default Template;
