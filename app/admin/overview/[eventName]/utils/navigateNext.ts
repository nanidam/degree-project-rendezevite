import { IPagination } from "@/app/utils/models/IPagination";

export const navigateNext = ({ page, setPage, event, setPaginatedList }: IPagination) => {
    if (!page) return;

    setPage(page + 1);
    setPaginatedList(event.guestList.slice(page * 5, page * 5 + 5));
}