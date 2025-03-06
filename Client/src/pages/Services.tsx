
import { useEffect } from 'react';
import { PiggyBank, LineChart, BarChart4, Briefcase, DollarSign, Target, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services | Bimbo Oyedotun";
  }, []);

  const services = [
    {
      icon: <PiggyBank className="h-12 w-12 text-blue-500" />,
      color: 'bg-blue-50',
      title: 'Personal Finance',
      description: 'Get a clear picture of your finances with budgeting strategies, debt management plans, and savings techniques.',
      features: [
        'Comprehensive budget creation and monitoring',
        'Debt reduction and elimination strategies',
        'Emergency fund and savings planning',
        'Spending pattern analysis and optimization',
        'Cash flow management techniques',
        'Financial goal setting and tracking'
      ]
    },
    {
      icon: <LineChart className="h-12 w-12 text-blue-500" />,
      color: 'bg-blue-50',
      title: 'Investment Planning',
      description: 'Develop an investment strategy aligned with your goals, risk tolerance, and timeline.',
      features: [
        'Portfolio diversification and asset allocation',
        'Risk assessment and management',
        'Investment selection and analysis',
        'Regular performance reviews and adjustments',
        'Tax-efficient investing strategies',
        'Market trend analysis and opportunities'
      ]
    },
    {
      icon: <Briefcase className="h-12 w-12 text-blue-500" />,
      color: 'bg-blue-50',
      title: 'Retirement Planning',
      description: 'Build a secure future with retirement planning strategies tailored to your lifestyle goals.',
      features: [
        'Retirement income planning and forecasting',
        '401(k), IRA, and pension optimization',
        'Social Security claiming strategies',
        'Lifestyle sustainability analysis',
        'Healthcare cost planning in retirement',
        'Legacy and estate planning considerations'
      ]
    },
    {
      icon: <BarChart4 className="h-12 w-12 text-blue-500" />,
      color: 'bg-blue-50',
      title: 'Tax Optimization',
      description: 'Maximize your wealth with tax-efficient strategies for investments and income.',
      features: [
        'Tax-loss harvesting opportunities',
        'Income tax planning and reduction',
        'Investment tax efficiency analysis',
        'Retirement withdrawal tax strategies',
        'Capital gains management',
        'Charitable giving tax benefits'
      ]
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-500" />,
      color: 'bg-blue-50',
      title: 'Estate Planning',
      description: 'Protect your legacy and ensure your assets are distributed according to your wishes.',
      features: [
        'Comprehensive estate inventory',
        'Will and trust consultations',
        'Beneficiary designation reviews',
        'Gift and inheritance tax strategies',
        'Family wealth transfer planning',
        'Charitable giving strategies'
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      color: 'bg-blue-50',
      title: 'Family Financial Planning',
      description: 'Create financial strategies that address the needs of your entire family across generations.',
      features: [
        'College savings planning',
        'Family budget coordination',
        'Multi-generational wealth strategies',
        'Financial education for family members',
        'Major life event planning',
        'Family business succession planning'
      ]
    }
  ];

  const processSteps = [
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: 'Discovery',
      description: 'We start with a comprehensive assessment of your current financial situation, goals, and challenges.'
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-blue-600" />,
      title: 'Analysis',
      description: 'I analyze your data to identify opportunities, gaps, and strategies tailored to your unique situation.'
    },
    {
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      title: 'Strategy',
      description: 'Together, we develop a personalized financial plan with clear action steps and measurable milestones.'
    },
    {
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
      title: 'Implementation',
      description: 'I guide you through implementing each aspect of your plan, providing support and resources.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: 'Review',
      description: 'We regularly review your progress, make adjustments, and adapt to changing circumstances.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-blue-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                Services
              </span>
              <h1 className="heading-lg text-blue-900 mt-4 mb-6">
                Comprehensive Financial Coaching Services
              </h1>
              <p className="text-body text-blue-700/90 mb-6">
                I offer a wide range of personalized financial services designed to help you build wealth, secure your future, and achieve your financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className={`rounded-xl p-4 ${service.color} inline-block mb-6`}>
                    {service.icon}
                  </div>
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-blue-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md text-blue-900 mb-6">
                My Coaching Process
              </h2>
              <p className="text-body text-blue-700/90">
                I follow a proven, systematic approach to help you achieve your financial goals. Here's how we'll work together:
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Process steps */}
              <div className="relative z-10">
                {processSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start ${index !== processSteps.length - 1 ? 'mb-12' : ''}`}
                  >
                    <div className="mr-6 relative">
                      <div className="rounded-full h-12 w-12 bg-white border border-blue-200 flex items-center justify-center relative z-10">
                        {step.icon}
                      </div>
                      {index !== processSteps.length - 1 && (
                        <div className="absolute top-12 bottom-0 left-1/2 w-0.5 bg-blue-200 -translate-x-1/2"></div>
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{index + 1}. {step.title}</h3>
                      <p className="text-blue-700/90">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md text-blue-900 mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-body text-blue-700/90">
                I believe in providing clear, transparent pricing for my services. Every client's needs are unique, so I offer flexible options to suit your situation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Initial Consultation */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Initial Consultation</h3>
                <div className="text-3xl font-bold text-blue-700 mb-4">$0</div>
                <p className="text-blue-700/80 mb-6">
                  A complimentary 30-minute session to discuss your needs and see if we're a good fit.
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-100"
                >
                  <Link to="/contact">Schedule Now</Link>
                </Button>
              </div>
              
              {/* Comprehensive Plan */}
              <div className="bg-blue-600 rounded-2xl p-8 border border-blue-500 shadow-lg transform scale-105">
                <h3 className="text-xl font-bold text-white mb-2">Comprehensive Plan</h3>
                <div className="text-3xl font-bold text-white mb-4">$1,200</div>
                <p className="text-blue-100 mb-6">
                  A complete financial plan with detailed strategies and implementation guidance.
                </p>
                <Button 
                  asChild 
                  className="w-full bg-white text-blue-700 hover:bg-blue-50"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
                <div className="mt-6">
                  <div className="text-sm font-semibold text-white mb-2">What's Included:</div>
                  <ul className="space-y-2">
                    {['Initial 90-minute strategy session', '12-month action plan', 'Investment strategy', 'Quarterly review calls', 'Email support'].map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-200 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Ongoing Coaching */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Ongoing Coaching</h3>
                <div className="text-3xl font-bold text-blue-700 mb-4">$200<span className="text-lg">/month</span></div>
                <p className="text-blue-700/80 mb-6">
                  Continuous support and guidance to implement and adjust your financial strategy.
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-100"
                >
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-blue-700/80 mb-6">
                Need a customized solution? Contact me to discuss your specific requirements.
              </p>
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link to="/contact">
                  Request Custom Pricing
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container-custom text-center">
            <h2 className="heading-md mb-6">Ready to Transform Your Financial Future?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Let's work together to create a personalized financial plan that helps you achieve your goals and build lasting wealth.
            </p>
            <Button 
              asChild 
              className="bg-white text-blue-900 hover:bg-blue-50"
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

export default Services;
