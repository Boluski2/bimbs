
const Booking = require('../models/Booking');
const emailService = require('../utils/emailService');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { name, email, date, time } = req.body;
    
    // Validate request data
    if (!name || !email || !date || !time) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }
    
    // Check if the time slot is already booked
    const existingBooking = await Booking.findOne({ date: new Date(date), time });
    if (existingBooking) {
      return res.status(409).json({ 
        success: false, 
        message: 'This time slot is already booked. Please select another time.' 
      });
    }
    
    // Create new booking in database
    const booking = new Booking({
      name,
      email,
      date: new Date(date),
      time
    });
    
    const savedBooking = await booking.save();
    
    // Send confirmation emails
    const clientEmailSent = await emailService.sendClientConfirmation({
      name, 
      email, 
      date: new Date(date), 
      time
    });
    
    const adminEmailSent = await emailService.sendAdminNotification({
      name, 
      email, 
      date: new Date(date), 
      time
    });
    
    res.status(201).json({
      success: true,
      booking: savedBooking,
      emailsSent: {
        client: clientEmailSent,
        admin: adminEmailSent
      }
    });
    
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Get all bookings (admin only)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1, time: 1 });
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings
    });
    
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Get single booking
exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      booking
    });
    
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a status'
      });
    }
    
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      booking
    });
    
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Cancel booking
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Booking cancelled successfully'
    });
    
  } catch (error) {
    console.error('Error cancelling booking:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Get available time slots for a specific date
exports.getAvailableTimeSlots = async (req, res) => {
  try {
    const { date } = req.query;
    
    if (!date) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a date'
      });
    }
    
    // All possible time slots
    const allTimeSlots = [
      "9:00 AM", "10:00 AM", "11:00 AM", 
      "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
    ];
    
    // Find bookings for the requested date
    const bookings = await Booking.find({
      date: new Date(date)
    });
    
    // Get booked time slots
    const bookedTimeSlots = bookings.map(booking => booking.time);
    
    // Filter out booked slots to get available slots
    const availableTimeSlots = allTimeSlots.filter(
      slot => !bookedTimeSlots.includes(slot)
    );
    
    res.status(200).json({
      success: true,
      date,
      availableTimeSlots
    });
    
  } catch (error) {
    console.error('Error fetching available time slots:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
