const nodemailer = require('nodemailer');

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// Format date for emails
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Send booking confirmation to client
const sendClientConfirmation = async (bookingData) => {
  const { name, email, date, time } = bookingData;
  const formattedDate = formatDate(date);
  
  const transporter = createTransporter();
  
  const mailOptions = {
    from: `"Financial Coach" <${process.env.EMAIL_USERNAME}>`,
    to: email,
    subject: "Your Financial Coaching Session is Confirmed!",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Hello ${name},</h2>
        
        <p>Thank you for booking a financial coaching session with me. I'm looking forward to helping you achieve your financial goals.</p>
        
        <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #2563eb; margin-top: 0;">Your Session Details:</h3>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Location:</strong> Virtual (Zoom link will be sent 24 hours before)</p>
        </div>
        
        <p>Please prepare any financial documents or questions you'd like to discuss during our session. This will help us make the most of our time together.</p>
        
        <p>If you need to reschedule or have any questions before our session, please reply to this email or call (123) 456-7890.</p>
        
        <p>I'm excited to help you on your financial journey!</p>
        
        <p>Warm regards,<br>
        Your Financial Coach</p>
      </div>
    `
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Client confirmation email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending client confirmation email:', error);
    return false;
  }
};

// Send booking notification to admin
const sendAdminNotification = async (bookingData) => {
  const { name, email, date, time } = bookingData;
  const formattedDate = formatDate(date);
  
  const transporter = createTransporter();
  
  const mailOptions = {
    from: `"Booking System" <${process.env.EMAIL_USERNAME}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "New Booking Notification",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Booking Alert</h2>
        
        <p>A new financial coaching session has been booked.</p>
        
        <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #2563eb; margin-top: 0;">Booking Details:</h3>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Client Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
        
        <p>Please make sure to prepare for this session and update your calendar.</p>
        
        <p>You can manage this booking in the admin dashboard.</p>
      </div>
    `
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Admin notification email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending admin notification email:', error);
    return false;
  }
};

// Send contact email
const sendContactEmail = async ({ name, email, phone, message, isAdminNotification }) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  
  let subject, htmlContent, recipient;
  
  if (isAdminNotification) {
    recipient = adminEmail;
    subject = 'New Contact Form Submission';
    htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;
  } else {
    recipient = email;
    subject = 'Thank You for Contacting Us';
    htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
        <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #2563eb; margin-top: 0;">Your Message Details:</h3>
          <p><strong>Message:</strong> "${message}"</p>
        </div>
        <p>If you have any urgent matters, please feel free to call us.</p>
        <p>Best regards,<br>Your Financial Coach</p>
      </div>
    `;
  }

  const transporter = createTransporter();


  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: recipient,
    subject,
    html: htmlContent
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendClientConfirmation,
  sendAdminNotification,
  sendContactEmail
};
