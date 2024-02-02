import getUserId from "@/app/services/getUserId";
import "./style.scss";
import CreateEditEvent from "@/app/utils/components/createEditEvent";

const CreateEvent = async () => {
  const userId = await getUserId();
  if (!userId) return;
  return <CreateEditEvent userId={userId} />;
};

export default CreateEvent;
