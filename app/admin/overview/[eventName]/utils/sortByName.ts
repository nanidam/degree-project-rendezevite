import { ISort } from "@/app/utils/models/ISort";

export const sortByName = ({ event, setEvent }: ISort) => {
    let sortedList = [...event.guestList].sort((a, b) =>
        a.name.localeCompare(b.name, 'sv')
    );

    if (sortedList[0].name === event.guestList[0].name) {
        sortedList = [...event.guestList].sort((a, b) =>
            b.name.localeCompare(a.name, 'sv')
        );
    }

    setEvent({ ...event, guestList: sortedList });
};