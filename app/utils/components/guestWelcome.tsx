"use client";
import { useSession } from "next-auth/react";
import { IEvent } from "../models/IEvent";

interface IGuestWelcomeProps {
  event: IEvent;
}
const GuestWelcome = ({ event }: IGuestWelcomeProps) => {
  const session = useSession();
  console.log(session.data?.user);
  return <div>Welcome</div>;
};

export default GuestWelcome;
