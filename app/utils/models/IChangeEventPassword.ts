export interface IChangeEventPassword {
    e: React.FormEvent<HTMLFormElement>
    eventId: string;
    setEditPassword: React.Dispatch<React.SetStateAction<boolean>>;
}