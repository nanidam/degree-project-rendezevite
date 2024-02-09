import { useRouter } from "next/navigation";
import updateEventText from "../services/updateEventTextServices";
import { IEvent } from "./models/IEvent";

const CREATE_INVITATION_STATUS = {
  EMPTY_HEADER: "Please give your invitation a header",
  EMPTY_TEXTAREA: "Please add some text",
  GENERIC: "Something went wrong. Please try again",
};

interface ICreateEditInvitations {
  e: React.FormEvent<HTMLFormElement>;
  header: string;
  text: string;
  eventName: string;
  router: ReturnType<typeof useRouter>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>;
  event?: IEvent;
}

const createEditInvitations = async ({
  e,
  header,
  text,
  eventName,
  router,
  setErrorMsg,
  event,
}: ICreateEditInvitations) => {
  e.preventDefault();

  switch (true) {
    case header === "":
      setErrorMsg(CREATE_INVITATION_STATUS.EMPTY_HEADER);
      break;
    case text === "":
      setErrorMsg(CREATE_INVITATION_STATUS.EMPTY_TEXTAREA);
      break;
    case header !== "" && text !== "":
      const updatedEvent = await updateEventText({
        header,
        text: text,
        eventName: eventName,
      });
      if (updatedEvent) {
        if (event) router.push(`/admin/edit-event/${eventName}/edit-RSVP`);
        else router.push(`/events/create-event/${eventName}/create-RSVP`);
      }
      break;
    default:
      setErrorMsg(CREATE_INVITATION_STATUS.GENERIC);
      break;
  }
};

export default createEditInvitations;
