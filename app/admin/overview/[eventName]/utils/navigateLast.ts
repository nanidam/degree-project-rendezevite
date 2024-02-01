import { IPagination } from "@/app/utils/models/IPagination";

export const navigateLast = ({ setPage, event, setPaginatedList }: IPagination) => {
    setPage(Math.ceil(event.guestList.length / 5));
    setPaginatedList(
        event.guestList.slice(
            Math.ceil(event.guestList.length / 5) * 5 - 5,
            Math.ceil(event.guestList.length / 5) * 5
        )
    );
}