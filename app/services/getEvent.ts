import prisma from "../db";

export const getEvent = async (userId: string, eventName: string) => {
  const event = await prisma.event.findFirst({
    where: {
      eventName: eventName.toLowerCase(),
      userId,
    },
  });
  if (event) {
    return event;
  }
  return null;
};
