
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import { Shield, Award, Target, Clock } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        <HeroSection
          title="About Military Prep Companion"
          subtitle="Guiding aspiring military candidates through every step of the preparation journey."
          image="https://images.unsplash.com/photo-1517702943270-0979e05ce7de?q=80&w=1974&auto=format&fit=crop"
        />
        
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-military-navy mb-4 animate-fade-up">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
                We are dedicated to helping aspiring military personnel successfully navigate the selection process and prepare for a rewarding career in service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div>
                <h3 className="text-2xl font-semibold text-military-navy mb-4">How We Started</h3>
                <p className="text-gray-600 mb-4">
                  Military Prep Companion was founded by a team of former military personnel and recruitment specialists who recognized the challenges many candidates face during the selection process.
                </p>
                <p className="text-gray-600">
                  Our founders experienced firsthand how proper preparation can make the difference between success and failure. They set out to create a comprehensive resource to guide aspirants through every step of their journey.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-military-navy mb-4">Our Approach</h3>
                <p className="text-gray-600 mb-4">
                  We believe in a holistic approach to military preparation that addresses physical fitness, mental aptitude, and career guidance all in one place.
                </p>
                <p className="text-gray-600">
                  By combining expert knowledge with personalized resources, we help candidates not only pass selection but excel in their military careers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-military-navy mb-4 animate-fade-up">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
                These principles guide everything we do as we support your military preparation journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="mb-4 text-military-olive">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-military-navy mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We provide honest, accurate information and guidance. We never overpromise or misrepresent the challenges of military service.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="mb-4 text-military-olive">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-military-navy mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We constantly strive to provide the highest quality resources and guidance, helping our users achieve their personal best.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <div className="mb-4 text-military-olive">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-military-navy mb-3">Dedication</h3>
                <p className="text-gray-600">
                  We are committed to supporting each candidate throughout their entire journey, from initial interest to successful selection.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-up" style={{ animationDelay: '500ms' }}>
                <div className="mb-4 text-military-olive">
                  <Clock className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-military-navy mb-3">Efficiency</h3>
                <p className="text-gray-600">
                  We respect your time and provide focused, relevant guidance to help you prepare effectively without wasted effort.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Military Branches Section */}
        <section className="py-16 bg-white">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-military-navy mb-4 animate-fade-up">Military Branches We Support</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
                We provide specialized guidance for candidates applying to all major military branches.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Army",
                  description: "Ground combat, support, and service roles with diverse career options.",
                  image: "https://images.unsplash.com/photo-1580153053704-6bc9bf7e24a1?q=80&w=774&auto=format&fit=crop"
                },
                {
                  name: "Navy",
                  description: "Maritime operations including vessel operations, aviation, and special operations.",
                  image: "https://images.unsplash.com/photo-1473976345543-9ffc928e648d?q=80&w=1470&auto=format&fit=crop"
                },
                {
                  name: "Air Force",
                  description: "Air and space operations, aviation, technical, and support roles.",
                  image: "https://images.unsplash.com/photo-1511920018539-eb2066667602?q=80&w=1470&auto=format&fit=crop"
                },
                {
                  name: "Marines",
                  description: "Expeditionary operations, amphibious warfare, and rapid response forces.",
                  image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1374&auto=format&fit=crop"
                },
                {
                  name: "Coast Guard",
                  description: "Maritime security, search and rescue, and law enforcement operations.",
                  image: "https://images.unsplash.com/photo-1603057749567-b3516d1804c7?q=80&w=1470&auto=format&fit=crop"
                },
                {
                  name: "Space Force",
                  description: "Space operations, cybersecurity, and intelligence related to space assets.",
                  image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1472&auto=format&fit=crop"
                }
              ].map((branch, index) => (
                <div 
                  key={branch.name} 
                  className="group overflow-hidden rounded-lg border border-gray-100 shadow-md animate-fade-up"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={branch.image} 
                      alt={branch.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-military-navy mb-2">{branch.name}</h3>
                    <p className="text-gray-600">{branch.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-military-navy mb-4 animate-fade-up">Our Expert Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
                Our team consists of former military personnel, fitness experts, and educational specialists.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Major James Wilson (Ret.)",
                  role: "Military Advisor",
                  bio: "25 years of service in the Army with extensive recruitment experience.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop"
                },
                {
                  name: "Dr. Sarah Chen",
                  role: "Fitness Director",
                  bio: "PhD in Exercise Physiology, specializing in military fitness standards.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop"
                },
                {
                  name: "Captain Michael Rodriguez",
                  role: "Education Specialist",
                  bio: "Former Navy officer with expertise in ASVAB preparation and military testing.",
                  image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop"
                }
              ].map((member, index) => (
                <div 
                  key={member.name} 
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 animate-fade-up"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-military-navy mb-1">{member.name}</h3>
                    <p className="text-military-olive font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
