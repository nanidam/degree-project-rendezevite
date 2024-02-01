"use client";

import "./style.scss";
import { useCallback, useEffect, useState } from "react";
import { getEvent } from "@/app/services/getEvent";
import getUserId from "@/app/services/getUserId";
import { dateFormat } from "@/app/utils/dateFormat";
import { IEvent } from "@/app/utils/models/IEvent";
import { IGuest } from "@/app/utils/models/IGuest";
import { GuestList } from "./components/GuestList";
import { EventInfo } from "./components/EventInfo";
import { EventPassword } from "./components/EventPassword";
import { InviteGuests } from "./components/InviteGuests";
import HamburgerMenu from "@/app/utils/components/hamburgerMenu";

const AdminOverview = ({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string };
}) => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [editGuestList, setEditGuestList] = useState<IGuest[]>([]);

  const fetchAndSetEvents = useCallback(async () => {
    const userId = await getUserId();
    if (userId) {
      const result = await getEvent(userId, eventName);
      if (result) {
        const date = new Date(result.eventDate);
        const formattedDate = dateFormat(date);
        const temp = { ...result, eventDate: formattedDate } as IEvent;
        setEvent(temp);
        setEditGuestList(temp.guestList);
      }
    }
  }, [eventName]);

  useEffect(() => {
    fetchAndSetEvents();
  }, [fetchAndSetEvents]);

  if (!event) {
    return null;
  }

  return (
    <section className="admin-overview">
      <h1 className="admin-header">
        {event.eventName.charAt(0).toUpperCase() + event.eventName.slice(1)}
      </h1>
      <HamburgerMenu />

      <EventInfo
        eventDate={event.eventDate}
        eventId={event.id}
        eventName={event.eventName}
      />

      <EventPassword eventPassword={event.eventPassword} eventId={event.id} />

      <InviteGuests
        eventId={event.id}
        setEvent={setEvent}
        setEditGuestList={setEditGuestList}
      />

      <GuestList
        event={event}
        setEvent={setEvent}
        editGuestList={editGuestList}
        setEditGuestList={setEditGuestList}
      />
    </section>
  );
};

export default AdminOverview;
