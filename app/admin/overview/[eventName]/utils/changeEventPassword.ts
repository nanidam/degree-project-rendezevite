import { updateEventPassword } from "@/app/services/updateEventPassword";
import { IChangeEventPassword } from "@/app/utils/models/IChangeEventPassword";

export const changeEventPassword = async ({ e, eventId, setEditPassword }: IChangeEventPassword) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const eventPassword = data.get("eventPassword") as string;

    await updateEventPassword(eventPassword, eventId);

    setEditPassword(false);
};
