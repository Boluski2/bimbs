
import { CheckCircle, ArrowRight, PiggyBank, LineChart, BarChart4, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <PiggyBank className="h-10 w-10 text-blue-500" />,
      title: 'Personal Finance',
      description: 'Get a clear picture of your finances with budgeting strategies, debt management plans, and savings techniques.',
      features: [
        'Comprehensive budget creation',
        'Debt reduction strategies',
        'Emergency fund planning',
        'Spending pattern analysis'
      ]
    },
    {
      icon: <LineChart className="h-10 w-10 text-blue-500" />,
      title: 'Investment Planning',
      description: 'Develop an investment strategy aligned with your goals, risk tolerance, and timeline.',
      features: [
        'Portfolio diversification',
        'Risk assessment',
        'Investment selection',
        'Regular performance reviews'
      ]
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-500" />,
      title: 'Retirement Planning',
      description: 'Build a secure future with retirement planning strategies tailored to your lifestyle goals.',
      features: [
        'Retirement income planning',
        '401(k) & IRA optimization',
        'Social Security strategies',
        'Lifestyle sustainability analysis'
      ]
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-blue-500" />,
      title: 'Tax Optimization',
      description: 'Maximize your wealth with tax-efficient strategies for investments and income.',
      features: [
        'Tax-loss harvesting',
        'Income tax planning',
        'Investment tax efficiency',
        'Retirement withdrawal strategies'
      ]
    }
  ];

  return (
    <section className="py-24 bg-blue-50" id="services">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            My Services
          </span>
          <h2 className="heading-lg text-blue-900 mt-4 mb-6">
            Comprehensive Financial Coaching Services
          </h2>
          <p className="text-body text-blue-700/80">
            I offer personalized financial coaching services designed to help you achieve your financial goals and build a secure future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-blue-700/80 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-blue-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                variant="outline" 
                className="border-blue-200 text-blue-700 hover:bg-blue-50 mt-2"
              >
                <Link to="/services">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Link to="/contact">
              Schedule a Service Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
