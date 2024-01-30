import { IEvent } from "@/app/utils/models/IEvent";

interface ISortByName {
    event: IEvent;
    setEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
}

export const sortByName = ({ event, setEvent }: ISortByName) => {
    let sortedList = [...event.guestList].sort((a, b) =>
        b.name.localeCompare(a.name, 'sv')
    );

    if (sortedList[0].name === event.guestList[0].name) {
        sortedList = [...event.guestList].sort((a, b) =>
            a.name.localeCompare(b.name, 'sv')
        );
    }

    setEvent({ ...event, guestList: sortedList });
};