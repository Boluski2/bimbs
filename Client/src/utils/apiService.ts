
/**
 * API service for making requests to the backend
 */

const API_URL = 'http://localhost:5000/api';

// Generic fetch function with error handling
const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Booking APIs
export const createBooking = async (bookingData: {
  name: string;
  email: string;
  date: Date;
  time: string;
}) => {
  return fetchAPI('/bookings', {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });
};

export const getAvailableTimeSlots = async (date: Date) => {
  const formattedDate = date.toISOString().split('T')[0];
  return fetchAPI(`/bookings/available-slots?date=${formattedDate}`);
};

// Contact submission
export const submitContactForm = async (contactData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  return fetchAPI('/contact', {
    method: 'POST',
    body: JSON.stringify(contactData),
  });
};
