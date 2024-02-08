"use server";
import prisma from "../db";

interface IRsvp {
  guestAttending: boolean;
  phoneNumber: string;
  guestDiet: string;
  guestAllergies?: string;
  guestComments?: string;
  additionalGuestAttending: boolean;
  additionalGuestDiet: string;
  additionalGuestAllergies?: string;
  additionalGuestComments?: string;
  guestId: string;
  additionalGuestName: string;
}

export const rsvp = async ({
  guestAttending,
  phoneNumber,
  guestDiet,
  guestAllergies,
  guestComments,
  additionalGuestAttending,
  additionalGuestDiet,
  additionalGuestAllergies,
  guestId,
  additionalGuestName,
}: IRsvp) => {
  try {
    const updatedGuest = await prisma.guest.update({
      where: { id: guestId },
      data: {
        phoneNumber,
        diet: guestDiet,
        comments: guestComments,
        allergies: guestAllergies,
        attending: guestAttending,
        hasResponded: true,
        inviteSent: true,
        additionalGuest: {
          name: additionalGuestName,
          attending: additionalGuestAttending,
          diet: additionalGuestDiet,
          allergies: additionalGuestAllergies,
        },
      },
    });

    return updatedGuest;
  } catch (error) {
    console.error("Cannot update guest:", error);
    throw error;
  }
};
