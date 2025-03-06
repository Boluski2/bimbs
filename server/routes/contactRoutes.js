
const express = require('express');
const router = express.Router();
const validateEmail = require('../middleware/validateEmail');
const { sendContactEmail } = require('../utils/emailService');

router.post('/', validateEmail, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Send email to admin
    await sendContactEmail({
      name,
      email,
      phone,
      message,
      isAdminNotification: true
    });

    // Send confirmation email to user
    await sendContactEmail({
      name,
      email,
      phone,
      message,
      isAdminNotification: false
    });

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Failed to process contact form submission' });
  }
});

module.exports = router;
