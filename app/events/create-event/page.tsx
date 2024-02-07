import "./style.scss";
import getUserId from "@/app/services/getUserId";
import CreateEditEvent from "@/app/utils/components/createEditEvent";
import { redirect } from "next/navigation";

const CreateEvent = async () => {
  const userId = await getUserId();
  if (!userId) redirect("/unauthorized");
  return <CreateEditEvent userId={userId} />;
};

export default CreateEvent;
