import { IEvent } from "./IEvent";

export interface ISort {
    event: IEvent;
    setEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}