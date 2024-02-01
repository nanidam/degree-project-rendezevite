import { IPagination } from "@/app/utils/models/IPagination";

export const navigatePrevious = ({ page, setPage, event, setPaginatedList }: IPagination) => {
    if (!page) return;

    setPage(page - 1);
    setPaginatedList(event.guestList.slice((page - 2) * 5, (page - 1) * 5));
}