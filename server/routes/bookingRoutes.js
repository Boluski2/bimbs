
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route to create a new booking
router.post('/', bookingController.createBooking);

// Route to get all bookings (admin only)
router.get('/', bookingController.getAllBookings);

// Route to get available time slots for a specific date
router.get('/available-slots', bookingController.getAvailableTimeSlots);

// Route to get a single booking
router.get('/:id', bookingController.getBooking);

// Route to update booking status
router.patch('/:id/status', bookingController.updateBookingStatus);

// Route to cancel a booking
router.delete('/:id', bookingController.cancelBooking);

module.exports = router;
