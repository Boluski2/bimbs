
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ClientProfileImages from './ClientProfileImages';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blue-50 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-1/4 -left-24 w-72 h-72 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-6">
                Certified Financial Advisor
              </span>
              <h1 className="heading-xl text-blue-900 mb-4">
                Take Control of Your <span className="text-blue-600">Financial Future</span>
              </h1>
              <p className="text-body text-blue-800/90 max-w-xl">
                I help individuals and families create personalized financial strategies that align with their goals, values, and aspirations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <Link to="/services">Learn About My Services</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-4">
                <ClientProfileImages />
              </div>
              <div>
                <div className="font-semibold text-blue-900">100+ Clients</div>
                <div className="text-sm text-blue-600">Trusted financial guidance</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-500 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold mb-4">Financial Freedom is a Journey</h3>
                    <p className="text-blue-100">Let me be your trusted guide every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
