
import { Shield, Award, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CountUp } from '@/components/ui/count-up';

const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Clients Served', value: '500+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Awards', value: '12' }
  ];
  
  const values = [
    { 
      icon: <Shield className="h-6 w-6 text-blue-600" />, 
      title: 'Integrity', 
      description: 'I operate with complete transparency and always put your interests first.' 
    },
    { 
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />, 
      title: 'Performance', 
      description: 'I focus on helping you achieve meaningful, measurable financial results.' 
    },
    { 
      icon: <Users className="h-6 w-6 text-blue-600" />, 
      title: 'Personalization', 
      description: 'Every financial plan is tailored to your unique situation and goals.' 
    },
    { 
      icon: <Award className="h-6 w-6 text-blue-600" />, 
      title: 'Expertise', 
      description: 'I bring years of experience and continuous education to serve you better.' 
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full">
                About Me
              </span>
              <h2 className="heading-lg text-blue-900 mt-4 mb-6">
                Helping you build a secure financial foundation
              </h2>
              <p className="text-body text-blue-800/80 mb-4">
                With over 15 years of experience in financial planning and wealth management, I've helped hundreds of clients achieve their financial goals and secure their future.
              </p>
              <p className="text-body text-blue-800/80">
                After working at top financial institutions, I founded my own practice with a mission to provide personalized financial coaching that empowers individuals to take control of their finances and build lasting wealth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-700">
                    <CountUp 
                      end={stat.value} 
                      duration={2000 + (index * 300)} 
                    />
                  </div>
                  <div className="text-sm text-blue-600/80">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button 
              asChild 
              className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
            >
              <Link to="/about">
                Learn More About My Journey
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-100 rounded-3xl transform -rotate-3"></div>
            <div className="relative grid grid-cols-1 gap-6 bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Financial Coach at work" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="p-5 bg-blue-50 rounded-xl">
                    <div className="rounded-full w-12 h-12 bg-white flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-blue-700/80">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
