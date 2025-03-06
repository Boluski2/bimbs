
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with this financial coach transformed my relationship with money. I now have clear goals, a solid plan, and the confidence to make informed financial decisions.",
      author: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyOXx8aHVtYW58ZW58MHx8fHwxNzQxMjU4MTkwfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
      quote: "I was drowning in debt and had no retirement savings. Thanks to the personalized guidance I received, I'm now debt-free and have a growing retirement fund.",
      author: "Michael Chen",
      role: "Technology Professional",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyNXx8aHVtYW58ZW58MHx8fHwxNzQxMjU4MTkwfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
      quote: "The investment strategy we developed together has consistently outperformed my expectations. I appreciate the transparent, educational approach to financial planning.",
      author: "Emma Rodriguez",
      role: "Healthcare Executive",
      image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwzOHx8aHVtYW58ZW58MHx8fHwxNzQxMjU4MzYwfDA&ixlib=rb-4.0.3&q=80&w=400"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="testimonials">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            Client Success Stories
          </span>
          <h2 className="heading-lg text-blue-900 mt-4 mb-6">
            What My Clients Say
          </h2>
          <p className="text-body text-blue-700/80">
            Don't just take my word for it. Here's what clients have to say about their experience working with me.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-blue-200 opacity-50">
            <Quote size={80} />
          </div>
          
          <div className="relative bg-blue-50 rounded-3xl p-8 md:p-12 z-10">
            <div className="min-h-[240px] flex flex-col items-center justify-center">
              <p className="text-xl md:text-2xl text-blue-800 mb-8 text-center italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-200 overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm text-blue-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full h-10 w-10 border-blue-200 text-blue-700 hover:bg-blue-100"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full h-10 w-10 border-blue-200 text-blue-700 hover:bg-blue-100"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-0 right-0 left-0 flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-blue-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
