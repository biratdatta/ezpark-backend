import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
  private bookings: CreateBookingDto[] = []; // In-memory storage

  // Add a new booking
  createBooking(booking: CreateBookingDto) {
    this.bookings.push(booking);
    return { message: 'Booking confirmed!', booking };
  }

  // Get all bookings
  getAllBookings() {
    return this.bookings;
  }
}
