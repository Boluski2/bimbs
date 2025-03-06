
import { useEffect } from 'react';
import { Award, BookOpen, BriefcaseBusiness, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Financial Coach
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Me | Bimbo Oyedotun";
  }, []);

  const timeline = [
    {
      year: '2008',
      title: 'Education',
      description: 'Graduated with honors in Finance from Harvard University.',
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />
    },
    {
      year: '2009-2012',
      title: 'Early Career',
      description: 'Started as a financial analyst at Goldman Sachs, developing expertise in investment strategies.',
      icon: <BriefcaseBusiness className="h-6 w-6 text-blue-600" />
    },
    {
      year: '2012-2016',
      title: 'Financial Advisor',
      description: 'Worked as a senior financial advisor at Morgan Stanley, managing portfolios for high-net-worth clients.',
      icon: <BookOpen className="h-6 w-6 text-blue-600" />
    },
    {
      year: '2016-Present',
      title: 'Independent Coach',
      description: 'Founded my own financial coaching practice to provide personalized guidance to individuals and families.',
      icon: <Award className="h-6 w-6 text-blue-600" />
    }
  ];

  const certifications = [
    'Certified Financial Planner (CFP®)',
    'Chartered Financial Analyst (CFA)',
    'Certified Investment Management Analyst (CIMA®)',
    'Retirement Income Certified Professional (RICP®)'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-blue-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                  About Me
                </span>
                <h1 className="heading-lg text-blue-900 mt-4 mb-6">
                  My Journey as a Financial Coach
                </h1>
                <p className="text-body text-blue-700/90 mb-6">
                Award-winning wealth management professional committed to helping individuals and families achieve financial independence. With expertise refined through leadership and investment training by several leadership and investment trainings, I provide proven strategies for building wealth, diversifying income, and securing brighter futures.
                </p>
                <p className="text-body text-blue-700/90 mb-6">
                Having guided over 200 clients to financial success, I combine experience, personalized planning, and a passion for empowerment to help you achieve lasting security. Let’s build your financial future—together.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-3 -left-3 right-3 bottom-3 bg-blue-100 rounded-3xl"></div>
                <img 
                  src="./bimbo1.jpg" 
                  alt="Financial Coach" 
                  className="relative z-10 w-full h-45 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-md text-blue-900 mb-10 text-center">My Professional Journey</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                {/* Timeline events */}
                <div className="space-y-12">
                  {timeline.map((event, index) => (
                    <div key={index} className="relative flex gap-6">
                      <div className="relative">
                        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center z-10 relative">
                          {event.icon}
                        </div>
                      </div>
                      <div className="flex-1 pt-1 pb-8">
                        <span className="text-sm font-semibold text-blue-500 block mb-1">{event.year}</span>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h3>
                        <p className="text-blue-700/90">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-blue-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-md text-blue-900 mb-6">My Financial Philosophy</h2>
                <p className="text-body text-blue-700/90 mb-4">
                  I believe that financial success is about more than just numbers—it's about aligning your money with your values and goals. My approach is centered on education, empowerment, and personalization.
                </p>
                <p className="text-body text-blue-700/90 mb-6">
                  Every client receives a customized financial plan that addresses their unique situation, challenges, and aspirations. I focus on building long-term relationships based on trust, transparency, and results.
                </p>
                
                <div className="space-y-4 mb-8">
                  {['Education-focused approach', 'Holistic financial planning', 'Long-term strategy development', 'Client empowerment'].map((principle, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-blue-800">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-6">Credentials & Certifications</h3>
                
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex">
                      <div className="rounded-full bg-blue-100 p-2 mr-4 h-10 w-10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-700">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900">{cert}</h4>
                        <p className="text-sm text-blue-600">Professionally certified and maintained</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-blue-100 mt-8 pt-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Continuing Education</h4>
                  <p className="text-sm text-blue-700 mb-4">
                    I continuously update my knowledge and skills through professional development and industry conferences to provide you with the most current financial strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Feature */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="heading-md text-blue-900">Featured Insights</h2>
              <p className="text-blue-700/80 max-w-2xl mx-auto mt-4">
                Watch this short video to learn more about my approach to financial coaching.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
                <iframe 
                  className="absolute w-full h-full top-0 left-0"
                  src="https://www.youtube.com/embed/8jkri0AeZWQ" 
                  title="My Approach to Financial Coaching"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container-custom text-center">
            <h2 className="heading-md mb-6">Ready to Transform Your Financial Future?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Let's work together to create a personalized financial plan that helps you achieve your goals and build lasting wealth.
            </p>
            <Button 
              asChild 
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
