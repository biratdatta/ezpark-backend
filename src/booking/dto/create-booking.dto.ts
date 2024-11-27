export class CreateBookingDto {
  name: string; // User's name
  email: string; // User's email
  phone: string; // User's phone number
  timeSlot: string; // Chosen time slot (e.g., '12PM')
  location: string; // Parking location (e.g., 'BTM Layout')
}
