import { ISort } from "@/app/utils/models/ISort";

export const sortByAttending = ({ event, setEvent }: ISort) => {
    let sortedList = [...event.guestList].sort((a, b) => (a.attending === b.attending ? 0 : a.attending ? -1 : 1))

    if (sortedList[0].attending === event.guestList[0].attending) {
        sortedList = [...event.guestList].sort((a, b) => (a.attending === b.attending ? 0 : a.attending ? 1 : -1))
    }
    setEvent({ ...event, guestList: sortedList });
};