
import { Compass, ClipboardCheck, Activity, BookOpen } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function ServiceSection() {
  const services = [
    {
      title: "Explore Military Careers",
      description: "Discover various military roles, their requirements, and career paths available across different branches.",
      icon: <Compass className="h-10 w-10" />,
      link: "/careers"
    },
    {
      title: "Eligibility Assessment",
      description: "Check if you meet the requirements for military service with our comprehensive eligibility checker.",
      icon: <ClipboardCheck className="h-10 w-10" />,
      link: "/eligibility"
    },
    {
      title: "Fitness & Diet Plans",
      description: "Get personalized workout routines and diet plans to help you meet physical requirements.",
      icon: <Activity className="h-10 w-10" />,
      link: "/fitness"
    },
    {
      title: "Study Materials",
      description: "Access comprehensive study guides and practice tests to prepare for military entrance exams.",
      icon: <BookOpen className="h-10 w-10" />,
      link: "/study"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-military-navy mb-4 animate-fade-up">How We Help</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            We provide comprehensive resources and tools to help you prepare for a successful military career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <FeatureCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
