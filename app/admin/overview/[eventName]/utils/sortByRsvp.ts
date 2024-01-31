import { ISort } from "@/app/utils/models/ISort";

export const sortByRsvp = ({ event, setEvent }: ISort) => {
    let sortedList = [...event.guestList].sort((a, b) => (a.hasResponded === b.hasResponded ? 0 : a.hasResponded ? -1 : 1))

    if (sortedList[0].hasResponded === event.guestList[0].hasResponded) {
        sortedList = [...event.guestList].sort((a, b) => (a.hasResponded === b.hasResponded ? 0 : a.hasResponded ? 1 : -1))
    }
    setEvent({ ...event, guestList: sortedList });
};