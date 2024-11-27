import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // Endpoint to create a new booking
  @Post()
  createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }

  // Endpoint to retrieve all bookings
  @Get()
  getAllBookings() {
    return this.bookingService.getAllBookings();
  }
}
