interface ISaveEditGuest {
    e: React.FormEvent<HTMLFormElement>,
    guestId: string
}
export const saveEditGuest = async (
    { e, guestId }: ISaveEditGuest
) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const guestName = formData.get('guest-name');
    const guestEmail = formData.get('guest-email');
    const guestNumber = formData.get('guest-number');
    const allergies = formData.get('allergies');
    const comments = formData.get('comments');
    const additionalGuest = formData.get('additional-guest');
    const additionalGuestAllergies = formData.get('additional-guest-allergies');
    const hasResponded = formData.get('has-responded');
    const attending = formData.get('attending');
    const diet = formData.get('diet');
    const additionalGuestAttending = formData.get('additional-guest-attending');
    const additionalGuestDiet = formData.get('additional-guest-diet');

    console.log(guestName)
};