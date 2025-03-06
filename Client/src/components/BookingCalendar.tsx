import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { isValidEmail } from '@/utils/validation';
import { createBooking, getAvailableTimeSlots } from '@/utils/apiService';

const DEFAULT_TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const BookingCalendar = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [isLoadingTimeSlots, setIsLoadingTimeSlots] = useState(false);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  useEffect(() => {
    if (!date) {
      setAvailableTimeSlots([]);
      return;
    }
    
    const fetchTimeSlots = async () => {
      setIsLoadingTimeSlots(true);
      setSelectedTime(null);
      
      try {
        const response = await getAvailableTimeSlots(date);
        setAvailableTimeSlots(response.availableTimeSlots);
      } catch (error) {
        console.error("Error fetching time slots:", error);
        setAvailableTimeSlots(DEFAULT_TIME_SLOTS);
        toast({
          title: "Warning",
          description: "Could not fetch available time slots. Showing all slots instead.",
          variant: "destructive"
        });
      } finally {
        setIsLoadingTimeSlots(false);
      }
    };
    
    fetchTimeSlots();
  }, [date, toast]);
  
  const validateForm = (): boolean => {
    let isValid = true;
    
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    if (!name) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }
    
    if (!date || !selectedTime) {
      toast({
        title: "Booking Failed",
        description: "Please select both a date and time slot.",
        variant: "destructive"
      });
      isValid = false;
    }
    
    return isValid;
  };
  
  const handleBooking = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await createBooking({
        name,
        email,
        date: date as Date,
        time: selectedTime as string
      });
      
      if (response.success) {
        setBookingComplete(true);
        toast({
          title: "Booking Confirmed!",
          description: `Your consultation is scheduled for ${date?.toLocaleDateString()} at ${selectedTime}. A confirmation email has been sent to ${email}.`,
          variant: "default"
        });
      } else {
        throw new Error(response.message || "Failed to create booking");
      }
    } catch (error: any) {
      console.error("Booking error:", error);
      toast({
        title: "Booking Error",
        description: error.message || "There was an error processing your booking. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetBooking = () => {
    setDate(undefined);
    setSelectedTime(null);
    setBookingComplete(false);
    setEmail('');
    setName('');
    setEmailError('');
    setNameError('');
    setAvailableTimeSlots([]);
  };

  return (
    <section className="py-20 bg-white" id="booking">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            Schedule a Session
          </span>
          <h2 className="heading-md text-blue-900 mt-4">
            Book Your Free Consultation
          </h2>
          <p className="text-body text-blue-700/80 max-w-2xl mx-auto mt-4">
            Take the first step toward financial freedom. Schedule a 45-minute consultation to discuss your goals and how I can help.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {bookingComplete ? (
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-800">Booking Confirmed!</CardTitle>
                <CardDescription className="text-blue-700">
                  Your consultation has been scheduled successfully
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <div className="text-center">
                  <p className="text-xl font-medium text-blue-900">{date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="text-lg text-blue-700">{selectedTime}</p>
                </div>
                <div className="max-w-sm text-center mt-4">
                  <p className="text-blue-700/80">
                    You'll receive a confirmation email shortly with details and a calendar invitation.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button onClick={resetBooking} variant="outline" className="border-blue-300 text-blue-700">
                  Book Another Session
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Select a Date & Time</CardTitle>
                <CardDescription>
                  Choose an available slot for your consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${nameError ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="John Doe"
                        />
                        {nameError && (
                          <p className="mt-1 text-sm text-red-500">{nameError}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${emailError ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="john@example.com"
                        />
                        {emailError && (
                          <p className="mt-1 text-sm text-red-500">{emailError}</p>
                        )}
                      </div>
                    </div>
                    
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < today}
                      className="rounded-md border"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-blue-900 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      Available Time Slots
                    </h3>
                    
                    {isLoadingTimeSlots ? (
                      <div className="flex items-center justify-center h-32 bg-blue-50/50 rounded-lg border border-dashed border-blue-200">
                        <div className="flex flex-col items-center">
                          <Loader2 className="h-8 w-8 text-blue-500 animate-spin mb-2" />
                          <p className="text-blue-500">Loading available slots...</p>
                        </div>
                      </div>
                    ) : date ? (
                      availableTimeSlots.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2">
                          {availableTimeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                selectedTime === time
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-32 bg-blue-50/50 rounded-lg border border-dashed border-blue-200">
                          <p className="text-blue-500">
                            No available slots for this date. Please select another date.
                          </p>
                        </div>
                      )
                    ) : (
                      <div className="flex items-center justify-center h-32 bg-blue-50/50 rounded-lg border border-dashed border-blue-200">
                        <p className="text-blue-500">
                          Please select a date first
                        </p>
                      </div>
                    )}
                    
                    {date && selectedTime && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900">Your Selection</h4>
                        <p className="text-blue-700">
                          {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button 
                  onClick={handleBooking}
                  disabled={isLoading || !date || !selectedTime}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
