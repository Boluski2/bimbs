import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isValidEmail, isValidPhone } from '@/utils/validation';
import { submitContactForm } from '@/utils/apiService';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = (): boolean => {
    const errors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
    
    let isValid = true;
    
    // Validate name
    if (!formState.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    // Validate email
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formState.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Validate phone (optional)
    if (formState.phone.trim() && !isValidPhone(formState.phone)) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }
    
    // Validate message
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
        message: formState.message
      });
      
      if (response) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. A confirmation email has been sent to your inbox.",
          variant: "default"
        });
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({
            name: '',
            email: '',
            phone: '',
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

  return (
    <section className="py-24 bg-blue-50" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
              Get In Touch
            </span>
            <h2 className="heading-lg text-blue-900 mt-4 mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-body text-blue-700/80 mb-8">
              Whether you have questions about my services or want to schedule a consultation, I'm here to help. Reach out and let's start your journey to financial freedom.
            </p>
            
            <div className="space-y-6 mb-8">
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
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-2">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-blue-700">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between text-blue-700">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between text-blue-700">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Send Me a Message</h3>
            
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
                    placeholder="How can I help you?"
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
  );
};

export default ContactSection;
