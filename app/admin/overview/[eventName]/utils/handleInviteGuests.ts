import inviteGuests from "@/app/services/inviteGuests";
import { IEvent } from "@/app/utils/models/IEvent";
import { IInviteGuests } from "@/app/utils/models/IInviteGuests";
import { sendMail } from "@/app/utils/sendMail";

export const handleInviteGuests = async ({
  e,
  eventId,
  setEvent,
  setEditGuestList,
  guestList,
  setErrorMsg,
  formRef,
  setLoading,
  eventPassword,
  eventName,
}: IInviteGuests) => {
  e.preventDefault();
  setLoading(true);
  const data = new FormData(e.currentTarget);

  const guestName = data.get("guestName") as string;
  const guestEmail = data.get("guestEmail") as string;
  const additionalGuest = data.get("additionalGuest") as string;

  if (guestList.some((guest) => guest.email === guestEmail)) {
    setErrorMsg("Email already exists");
    setLoading(false);
    return;
  }

  const updatedEvent = (await inviteGuests({
    guestName,
    guestEmail,
    additionalGuest,
    eventId,
  })) as IEvent;

  if (updatedEvent) {
    setEvent(updatedEvent);
    setEditGuestList(updatedEvent.guestList);
    setErrorMsg("");
    if (formRef && formRef.current) formRef.current.reset();
  }

  await sendMail({
    email: guestEmail,
    mailType: "invite-guest",
    eventId,
    guestName,
    eventPassword,
    eventName,
  });
  setLoading(false);
};
