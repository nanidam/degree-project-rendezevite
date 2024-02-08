import { useRouter } from "next/navigation";
import updateEventFood from "../services/updateEventFoodServices";

interface ICreateEditRsvp {
  e: React.FormEvent<HTMLFormElement>;
  eventName: string;
  router: ReturnType<typeof useRouter>;
}
const createEditRsvp = async ({ e, eventName, router }: ICreateEditRsvp) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const includeFood = formData.get("ask-about-food") === "true";
  const includeAllergies = formData.get("ask-about-allergies") === "true";

  const updatedEvent = await updateEventFood(
    includeFood,
    includeAllergies,
    eventName.toLocaleLowerCase()
  );

  if (updatedEvent) {
    router.push(`/admin/overview/${eventName}`);
  }
};

export default createEditRsvp;
