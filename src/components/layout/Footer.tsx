
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-military-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-up">
            <h4 className="text-xl font-bold mb-6">Military Prep Companion</h4>
            <p className="text-gray-300 mb-6">
              Helping aspiring military recruits prepare for selection with expert guidance,
              resources, and personalized training programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Military Careers
                </Link>
              </li>
              <li>
                <Link to="/eligibility" className="text-gray-300 hover:text-white transition-colors">
                  Eligibility Checker
                </Link>
              </li>
              <li>
                <Link to="/fitness" className="text-gray-300 hover:text-white transition-colors">
                  Fitness & Diet
                </Link>
              </li>
              <li>
                <Link to="/study" className="text-gray-300 hover:text-white transition-colors">
                  Study Materials
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-military-sand flex-shrink-0 mt-0.5" />
                <span>123 Military Avenue, Training Camp, TC 12345</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-military-sand flex-shrink-0 mt-0.5" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-military-sand flex-shrink-0 mt-0.5" />
                <span>info@militaryprepcompanion.com</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates, tips and resources.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-military-sand hover:bg-military-sand/80 text-military-navy">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Military Prep Companion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
