
import { useToast } from "@/hooks/use-toast";

interface EmailData {
  to: string;
  subject: string;
  body: string;
}

interface BookingEmailData {
  name: string;
  email: string;
  date: Date;
  time: string;
}

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * In a real application, this would connect to your email service API.
 * For now, we'll simulate the API call.
 */
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  console.log('Sending email:', emailData);
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate 95% success rate
      const success = Math.random() < 0.95;
      resolve(success);
    }, 1500);
  });
};

/**
 * Format and send booking confirmation email
 */
export const sendBookingConfirmationEmail = async (bookingData: BookingEmailData): Promise<boolean> => {
  const { name, email, date, time } = bookingData;
  
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const emailData: EmailData = {
    to: email,
    subject: "Your Financial Coaching Session is Confirmed!",
    body: `
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
  
  return await sendEmail(emailData);
};

/**
 * Format and send contact form confirmation email
 */
export const sendContactConfirmationEmail = async (contactData: ContactEmailData): Promise<boolean> => {
  const { name, email, phone, message } = contactData;
  
  const emailData: EmailData = {
    to: email,
    subject: "Thank You for Contacting Your Financial Coach",
    body: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Hello ${name},</h2>
        
        <p>Thank you for reaching out to me. I've received your message and will get back to you as soon as possible, typically within 1-2 business days.</p>
        
        <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #2563eb; margin-top: 0;">Your Message Details:</h3>
          <p><strong>Your message:</strong> "${message}"</p>
          ${phone ? `<p><strong>Phone number provided:</strong> ${phone}</p>` : ''}
        </div>
        
        <p>If you have any urgent matters, please feel free to call me directly at (123) 456-7890.</p>
        
        <p>I look forward to connecting with you and discussing how I can help with your financial goals.</p>
        
        <p>Warm regards,<br>
        Your Financial Coach</p>
      </div>
    `
  };
  
  return await sendEmail(emailData);
};
