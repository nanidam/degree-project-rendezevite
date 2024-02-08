import createEvent from "../services/createEventServices";
import { useRouter } from "next/navigation";
import { IEvent } from "./models/IEvent";
import updateEventNameDatePassword from "../services/updateEventNameDatePassword";

interface IHandleCreateEvent {
  e: React.FormEvent<HTMLFormElement>;
  router: ReturnType<typeof useRouter>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>;
  event?: IEvent;
  userId: string;
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

export const handleCreateEditEvent = async ({
  e,
  router,
  setErrorMsg,
  event,
  userId,
}: IHandleCreateEvent) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const eventName = formData.get("event-name") as string;
  const eventDate = formData.get("event-date") as string;
  const eventPassword = formData.get("event-password") as string;

  const emptyInput = eventName === "" || eventDate === "" || eventPassword === "";

  switch (true) {
    case eventName === "":
      setErrorMsg(CREATE_EVENT_STATUS.EMPTY_NAME);
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

    case !emptyInput && new Date(eventDate) > new Date() && !event:
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

      break;

    case event && new Date(eventDate) > new Date() && !emptyInput:
      if (
        event.eventName !== eventName ||
        event.eventPassword !== eventPassword ||
        event.eventDate !== eventDate
      ) {
        const result = await updateEventNameDatePassword({
          eventDate,
          eventName,
          userId,
          eventPassword,
          eventId: event.id,
        });
        console.log(result);
      }
      router.push(`/admin/edit-event/${eventName}/template`);

      break;

    default:
      setErrorMsg(CREATE_EVENT_STATUS.GENERIC);
      break;
  }
};
