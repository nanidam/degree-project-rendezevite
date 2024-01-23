export interface IPasswordValidation {
  message: string;
  validation: string;
}

export interface IAdditionalGuest {
  name: string;
  comments: string | null;
  diet: string | null;
  allergies: string | null;
  attending: boolean;
}

export interface IGuest {
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
  diet: string | null;
  comments: string | null;
  allergies: string | null;
  eventId: string;
  attending: boolean;
  hasResponded: boolean;
  inviteSent: boolean;
  additionalGuest: IAdditionalGuest;
}

export interface IEvent {
  id: string;
  eventName: string;
  eventDate: string;
  RSVPDate: string | null;
  userId: string;
  eventPassword: string;
  includeFood: boolean | null;
  includeAllergies: boolean;
  inviteLink: string | null;
  template: string | null;
  text: string;
  header: string;
  guestList: IGuest[];
}