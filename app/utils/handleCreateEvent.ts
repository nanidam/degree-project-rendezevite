import createEvent from "../services/createEvent";
import getUserId from "../services/getUserId";
import { useRouter } from "next/navigation";

interface IHandleCreateEvent {
    e: React.FormEvent<HTMLFormElement>
    router: ReturnType<typeof useRouter>
    setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>
}

const CREATE_EVENT_STATUS = {
    EMPTY_NAME: "Please give your event a name",
    EMPTY_DATE: "Please choose a date",
    EMPTY_PASSWORD: "Please enter a password",
    EVENT_NAME_EXISTS: "Event name already exists",
    GENERIC: "Something went wrong. Please try again",
    INVALID: "Invalid date",
    SUCCESS: "Event created",
};
export const handleCreateEvent = async ({ e, router, setErrorMsg }: IHandleCreateEvent) => {
    e.preventDefault();


    const formData = new FormData(e.currentTarget);
    const eventName = formData.get("event-name") as string;
    const eventDate = formData.get("event-date") as string;
    const eventPassword = formData.get("event-password") as string;

    switch (true) {
        case eventName === "":
            setErrorMsg(CREATE_EVENT_STATUS.EMPTY_NAME);
            break;

        case eventDate !== "" &&
            eventName !== "" &&
            eventPassword !== "" &&
            new Date(eventDate) > new Date():
            const userId = await getUserId();

            if (userId) {
                const newEvent = await createEvent({
                    eventDate,
                    eventName,
                    userId,
                    eventPassword,
                });

                if (newEvent) {
                    router.push(`/events/create-event/${eventName}/template`);
                } else {
                    setErrorMsg(CREATE_EVENT_STATUS.EVENT_NAME_EXISTS);
                }
            }

            console.log("NEXT");
            break;

        case eventDate === "":
            setErrorMsg(CREATE_EVENT_STATUS.EMPTY_DATE);
            break;

        case new Date(eventDate) < new Date():
            setErrorMsg(CREATE_EVENT_STATUS.INVALID);
            break;

        case eventPassword === "":
            setErrorMsg(CREATE_EVENT_STATUS.EMPTY_PASSWORD);
            break;

        default:
            setErrorMsg(CREATE_EVENT_STATUS.GENERIC);
            break;
    }
};