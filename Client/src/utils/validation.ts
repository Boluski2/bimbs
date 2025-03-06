
/**
 * Email validation utility
 */
export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Phone number validation utility
 */
export const isValidPhone = (phone: string) => {
  // Basic validation for phone numbers
  // Allows formats like: (123) 456-7890, 123-456-7890, 1234567890
  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return phoneRegex.test(phone);
};
