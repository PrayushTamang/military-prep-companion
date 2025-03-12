
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Eligibility', path: '/eligibility' },
    { name: 'Resources', path: '#', dropdown: [
      { name: 'Fitness & Diet', path: '/fitness' },
      { name: 'Study Materials', path: '/study' }
    ]}
  ];
  
  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/70 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-bold text-xl text-military-navy"
            aria-label="Military Prep Companion"
          >
            <span className="hidden sm:inline">Military Prep Companion</span>
            <span className="sm:hidden">MPC</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center px-3 py-2 text-military-navy hover:text-military-olive font-medium transition-colors">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-military-navy hover:bg-military-navy/5"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-military-olive'
                      : 'text-military-navy hover:text-military-olive'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-medium">
              Login
            </Button>
            <Button className="bg-military-navy hover:bg-military-navy/80 font-medium">
              Sign Up
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-military-navy" />
            ) : (
              <Menu className="h-6 w-6 text-military-navy" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.name} className="flex flex-col">
                    <span className="px-3 py-2 font-medium text-military-navy">
                      {item.name}
                    </span>
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="px-3 py-1 text-sm text-military-navy hover:text-military-olive"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 font-medium ${
                      location.pathname === item.path
                        ? 'text-military-olive'
                        : 'text-military-navy hover:text-military-olive'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            <div className="flex space-x-3 mt-4 px-3">
              <Button variant="outline" className="flex-1 font-medium">
                Login
              </Button>
              <Button className="flex-1 bg-military-navy hover:bg-military-navy/80 font-medium">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
