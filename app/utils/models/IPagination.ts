import { IEvent } from "@/app/utils/models/IEvent"
import { IGuest } from "@/app/utils/models/IGuest"

export interface IPagination {
    page?: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    event: IEvent
    setPaginatedList: React.Dispatch<React.SetStateAction<IGuest[]>>
}