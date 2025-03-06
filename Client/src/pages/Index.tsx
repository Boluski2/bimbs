
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import VideoSection from '@/components/VideoSection';
import BookingCalendar from '@/components/BookingCalendar';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = " Bimbo Oyedotun | Financial Coach";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <VideoSection />
        <TestimonialsSection />
        <BookingCalendar />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
