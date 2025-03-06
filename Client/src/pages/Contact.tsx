import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, CalendarDays, Users, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { isValidEmail, isValidPhone } from '@/utils/validation';
import { submitContactForm } from '@/utils/apiService';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact | Bimbo Oyedotun";
  }, []);

  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = (): boolean => {
    const errors = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    };
    
    let isValid = true;
    
    if (!formState.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formState.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (formState.phone.trim() && !isValidPhone(formState.phone)) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }
    
    if (!formState.service) {
      errors.service = 'Please select a service';
      isValid = false;
    }
    
    if (!formState.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formState.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await submitContactForm({
        name: formState.name,
        email: formState.email,
        phone: formState.phone || undefined,
        message: `Service: ${formState.service}\n\n${formState.message}`
      });
      
      if (response) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. A confirmation email has been sent to your inbox.",
          variant: "default"
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
        }, 5000);
      } else {
        throw new Error("Failed to send contact form");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    'Personal Finance',
    'Investment Planning',
    'Retirement Planning',
    'Tax Optimization',
    'Estate Planning',
    'Family Financial Planning',
    'Other Services'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-blue-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                Contact Me
              </span>
              <h1 className="heading-lg text-blue-900 mt-4 mb-6">
                Let's Start Your Financial Journey
              </h1>
              <p className="text-body text-blue-700/90 mb-6">
                Ready to take control of your financial future? Contact me today for a consultation, and let's discuss how I can help you achieve your financial goals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Email</h3>
                      <p className="text-blue-700">bimbo.oyedotun.biz@gmail.com / lubbyfola@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Phone</h3>
                      <p className="text-blue-700">+1 (647) 823 8262</p>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Office</h3>
                      <p className="text-blue-700">123 Financial Street, New York, NY 10001</p>
                    </div>
                  </div> */}
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Office Hours</h3>
                      <p className="text-blue-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-blue-700">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-blue-700">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
                  <div className="flex items-start mb-4">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <CalendarDays className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-blue-900">Prefer to schedule directly?</h3>
                  </div>
                  <p className="text-blue-700/80 mb-4">
                    You can book a consultation call directly on my calendar for a time that works best for you.
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-start mb-4">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-blue-900">Virtual Meetings Available</h3>
                  </div>
                  <p className="text-blue-700/80">
                    Can't meet in person? No problem! I offer video consultations via Zoom, Google Meet, or your preferred platform.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Me a Message</h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center p-8">
                    <div className="rounded-full bg-blue-100 p-4 mb-4">
                      <CheckCircle className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">Message Sent!</h4>
                    <p className="text-blue-700 mb-4">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <p className="text-blue-500 text-sm">
                      A confirmation email has been sent to your inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-blue-900 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="(123) 456-7890"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-blue-900 mb-1">
                        Service You're Interested In <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.service ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {formErrors.service && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.service}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="Tell me about your financial goals or questions..."
                      />
                      {formErrors.message && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 bg-blue-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Visit My Office</h2>
            <div className="bg-white p-2 rounded-xl shadow-sm border border-blue-100 overflow-hidden">
              <div className="w-full h-96 bg-blue-200 rounded-lg flex items-center justify-center">
                <MapPin className="h-12 w-12 text-blue-600 mr-3" />
                <span className="text-xl font-medium text-blue-800">
                  Interactive Map Would Be Here
                </span>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "How does the initial consultation work?",
                  a: "The initial consultation is a 30-minute call where we discuss your current financial situation, goals, and how I might be able to help. It's completely free and there's no obligation to continue."
                },
                {
                  q: "Do you work with clients remotely?",
                  a: "Yes, I work with clients across the country via video conferencing and phone calls. All my services can be delivered remotely with the same quality and attention to detail."
                },
                {
                  q: "How often will we meet after the initial consultation?",
                  a: "Meeting frequency depends on your needs and the service package you choose. Typically, we'll have more frequent meetings at the beginning (every 2-4 weeks) and then transition to quarterly check-ins."
                },
                {
                  q: "What's your approach to financial planning?",
                  a: "My approach is holistic and personalized. I consider all aspects of your financial life and create strategies aligned with your specific goals, values, and risk tolerance."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-2">{faq.q}</h3>
                  <p className="text-blue-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
