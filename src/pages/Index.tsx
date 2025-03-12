
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import ServiceSection from '@/components/ui/ServiceSection';
import { UserCheck, Briefcase, Trophy, Users, ChevronRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        <HeroSection
          title="Your Journey to Military Service Starts Here"
          subtitle="Prepare for military selection with personalized guidance, resources, and training programs tailored to your goals."
          ctaText="Check Eligibility"
          ctaLink="/eligibility"
          secondaryCtaText="Explore Careers"
          secondaryCtaLink="/careers"
        />
        
        <ServiceSection />
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-military-navy mb-4 animate-fade-up">Why Choose Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
                We've helped thousands of candidates successfully prepare for military selection with our comprehensive approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              <div className="flex items-start animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex-shrink-0 bg-military-navy rounded-full p-3 mr-4">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-military-navy mb-3">Expert Guidance</h3>
                  <p className="text-gray-600">
                    Our team includes former military personnel and recruitment specialists with firsthand knowledge of the selection process.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="flex-shrink-0 bg-military-navy rounded-full p-3 mr-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-military-navy mb-3">Tailored Programs</h3>
                  <p className="text-gray-600">
                    Personalized preparation plans based on your goals, current fitness level, and the specific branch you're applying to.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-up" style={{ animationDelay: '400ms' }}>
                <div className="flex-shrink-0 bg-military-navy rounded-full p-3 mr-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-military-navy mb-3">Proven Success</h3>
                  <p className="text-gray-600">
                    Over 85% of candidates who follow our complete preparation program successfully pass their military selection.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-up" style={{ animationDelay: '500ms' }}>
                <div className="flex-shrink-0 bg-military-navy rounded-full p-3 mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-military-navy mb-3">Community Support</h3>
                  <p className="text-gray-600">
                    Connect with others on the same journey and get motivation, tips, and support from our community of aspiring and current military personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 bg-military-navy text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4 animate-fade-up">Success Stories</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
                Hear from candidates who successfully prepared with our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
                <p className="text-gray-200 mb-4">
                  "The personalized fitness plan helped me go from barely passing the physical requirements to exceeding them by a significant margin. I felt confident and prepared on selection day."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-military-olive flex items-center justify-center mr-3">
                    <span className="font-semibold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John D.</h4>
                    <p className="text-sm text-gray-300">Marine Corps, Enlisted 2022</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg animate-fade-up" style={{ animationDelay: '300ms' }}>
                <p className="text-gray-200 mb-4">
                  "The study materials and practice tests were invaluable. I knew exactly what to expect on the ASVAB and scored well above what I needed for my desired role."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-military-olive flex items-center justify-center mr-3">
                    <span className="font-semibold">SM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah M.</h4>
                    <p className="text-sm text-gray-300">Air Force, Officer Candidate 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg animate-fade-up" style={{ animationDelay: '400ms' }}>
                <p className="text-gray-200 mb-4">
                  "I was initially unsure which military path was right for me. The career exploration tools helped me find a role that matched my skills and interests perfectly."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-military-olive flex items-center justify-center mr-3">
                    <span className="font-semibold">RJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Robert J.</h4>
                    <p className="text-sm text-gray-300">Army, Specialist 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-military-navy mb-6 max-w-3xl mx-auto animate-fade-up">
              Ready to Begin Your Military Preparation Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
              Take the first step toward a successful military career today. Our comprehensive resources and guidance are here to support you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <Button
                asChild
                className="bg-military-navy hover:bg-military-navy/80 text-white font-medium text-lg px-8 py-6"
              >
                <Link to="/eligibility">
                  Start Your Assessment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-military-navy text-military-navy hover:bg-military-navy hover:text-white font-medium text-lg px-8 py-6"
              >
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
