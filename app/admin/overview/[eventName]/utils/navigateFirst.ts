import { IPagination } from "@/app/utils/models/IPagination";

export const navigateFirst = ({ setPage, event, setPaginatedList }: IPagination) => {
    setPage(1);
    setPaginatedList(event.guestList.slice(0, 5));
}