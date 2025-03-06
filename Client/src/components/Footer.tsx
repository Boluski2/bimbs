
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
          <img src="./BIMBO LOGO.png" alt="BimboLogo" className='w-10 rounded-full m-2' />
            <h3 className="text-xl font-bold mb-4">Bimbo<span className="text-blue-300">Oyedotun</span></h3>
            <p className="text-blue-100 mb-4">Helping you navigate your financial journey with confidence and clarity.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">Financial Planning</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">Investment Strategy</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">Retirement Planning</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">Debt Management</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">123 Financial Street, New York, NY 10001</span>
              </li> */}
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100"> +1 (647) 823 8262</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100">bimbo.oyedotun.biz@gmail.com, / lubbyfola@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © {currentYear} Bimbo Oyedotun. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
