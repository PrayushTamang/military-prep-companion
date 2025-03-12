
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const branches = ['All', 'Army', 'Navy', 'Air Force', 'Marines', 'Coast Guard', 'Space Force'];
  const categories = ['All', 'Combat', 'Technical', 'Medical', 'Aviation', 'Intelligence', 'Support'];
  
  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  
  const careers = [
    {
      id: 1,
      title: "Infantry Officer",
      branch: "Army",
      category: "Combat",
      description: "Lead and command infantry units during combat operations.",
      requirements: "Bachelor's degree, OCS completion, physical fitness standards.",
      salary: "$43,000 - $91,000",
      details: "Infantry officers lead soldiers in all combat situations, conducting operations on foot or in tactical vehicles. They are responsible for the training, readiness, and welfare of up to 200 soldiers. Career progression includes opportunities to specialize in various areas such as airborne, ranger, or special forces operations."
    },
    {
      id: 2,
      title: "Aviation Structural Mechanic",
      branch: "Navy",
      category: "Technical",
      description: "Maintain and repair aircraft structures and systems.",
      requirements: "High school diploma, ASVAB mechanical score of 50+, technical aptitude.",
      salary: "$32,000 - $60,000",
      details: "Aviation Structural Mechanics perform maintenance on aircraft structures, including fuselages, wings, and control surfaces. They inspect for corrosion, damage, and wear while ensuring all aircraft structural components meet safety standards. This role offers excellent training in aviation maintenance that translates well to civilian careers after service."
    },
    {
      id: 3,
      title: "Cyber Operations Specialist",
      branch: "Air Force",
      category: "Intelligence",
      description: "Protect networks and systems from cyber threats.",
      requirements: "ASVAB score of 64+ in General, Security clearance eligibility.",
      salary: "$38,000 - $78,000",
      details: "Cyber Operations Specialists defend Air Force networks against cyberattacks, conduct vulnerability assessments, and develop defensive measures. They work with cutting-edge technology to identify and neutralize threats to military information systems. The role provides extensive training in cybersecurity that is highly valued in the civilian sector."
    },
    {
      id: 4,
      title: "Combat Medic",
      branch: "Army",
      category: "Medical",
      description: "Provide emergency medical care in combat situations.",
      requirements: "ASVAB score of 105+ in Skilled Technical, physical fitness standards.",
      salary: "$33,000 - $65,000",
      details: "Combat Medics provide emergency medical treatment on the battlefield, often under extreme conditions. They treat wounds, administer medication, and prepare casualties for evacuation. The training includes both military-specific trauma care and civilian equivalent EMT-B certification, offering a path to civilian medical careers."
    },
    {
      id: 5,
      title: "Pilot",
      branch: "Navy",
      category: "Aviation",
      description: "Operate aircraft from aircraft carriers and naval bases.",
      requirements: "Bachelor's degree, flight aptitude test, excellent vision, officer training.",
      salary: "$60,000 - $180,000",
      details: "Naval Aviators fly various aircraft including fighters, helicopters, and transport planes. They conduct missions ranging from combat operations to search and rescue. The extensive training includes preflight indoctrination, primary flight training, and advanced training specific to assigned aircraft. Navy pilots develop exceptional skills in precision flying, particularly carrier operations."
    },
    {
      id: 6,
      title: "Logistics Specialist",
      branch: "Marines",
      category: "Support",
      description: "Manage supplies, transportation, and logistics operations.",
      requirements: "High school diploma, ASVAB score of 90+ in Clerical.",
      salary: "$31,000 - $58,000",
      details: "Logistics Specialists ensure Marines have the supplies they need when and where they need them. They manage inventory, coordinate transportation, and maintain logistics records essential for mission success. The role develops valuable skills in supply chain management, procurement, and strategic planning that translate well to civilian business operations."
    },
    {
      id: 7,
      title: "Space Systems Operations",
      branch: "Space Force",
      category: "Technical",
      description: "Operate and maintain satellite systems and space assets.",
      requirements: "Bachelor's degree in STEM field, security clearance, officer training.",
      salary: "$46,000 - $120,000",
      details: "Space Systems Operators manage military satellite systems that support communications, navigation, and intelligence gathering. They monitor satellite health, resolve anomalies, and ensure optimal performance of space assets. This cutting-edge role provides experience with advanced technology and space operations that is increasingly valuable in both military and civilian space sectors."
    },
    {
      id: 8,
      title: "Maritime Enforcement Specialist",
      branch: "Coast Guard",
      category: "Combat",
      description: "Conduct law enforcement and security operations in maritime environments.",
      requirements: "ASVAB score of 50+, swimming qualifications, security clearance.",
      salary: "$35,000 - $72,000",
      details: "Maritime Enforcement Specialists conduct boardings, security patrols, and law enforcement operations at sea. They are trained in federal law enforcement procedures, defensive tactics, and maritime security operations. The role provides excellent experience for those interested in civilian law enforcement or security careers after military service."
    }
  ];
  
  const filteredCareers = careers.filter(career => {
    return (
      (searchTerm === '' || 
        career.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        career.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedBranch === 'All' || career.branch === selectedBranch) &&
      (selectedCategory === 'All' || career.category === selectedCategory)
    );
  });

  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        <HeroSection
          title="Explore Military Careers"
          subtitle="Discover diverse military roles across different branches and find the perfect fit for your skills and interests."
          image="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?q=80&w=1470&auto=format&fit=crop"
        />
        
        {/* Search and Filter Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="w-full md:w-1/2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  className="pl-10"
                  placeholder="Search for careers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-3 w-full md:w-1/2">
                <div className="flex items-center space-x-2">
                  <Filter size={16} className="text-military-navy" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                <select
                  className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-military-navy"
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                >
                  {branches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
                
                <select
                  className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-military-navy"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Careers List Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-military-navy mb-8 animate-fade-up">Available Military Careers</h2>
            
            {filteredCareers.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm animate-fade-up">
                <p className="text-lg text-gray-600">No careers match your search criteria. Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 animate-fade-up">
                {filteredCareers.map((career, index) => (
                  <div 
                    key={career.id} 
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleExpand(career.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="bg-military-navy text-white text-xs font-medium px-2.5 py-0.5 rounded">
                              {career.branch}
                            </span>
                            <span className="bg-military-olive text-white text-xs font-medium px-2.5 py-0.5 rounded">
                              {career.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-military-navy mb-2">{career.title}</h3>
                          <p className="text-gray-600 mb-3">{career.description}</p>
                          <div className="flex flex-wrap items-start gap-x-8 gap-y-2 text-sm">
                            <div>
                              <span className="font-medium text-military-navy">Requirements:</span> {career.requirements}
                            </div>
                            <div>
                              <span className="font-medium text-military-navy">Salary Range:</span> {career.salary}
                            </div>
                          </div>
                        </div>
                        <button 
                          className="text-military-navy p-1 rounded-full hover:bg-military-navy/5 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(career.id);
                          }}
                          aria-label={expandedId === career.id ? "Collapse details" : "Expand details"}
                        >
                          {expandedId === career.id ? (
                            <ChevronUp size={24} />
                          ) : (
                            <ChevronDown size={24} />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {expandedId === career.id && (
                      <div className="px-6 pb-6 pt-1 border-t border-gray-100 animate-fade-up">
                        <h4 className="font-medium text-military-navy mb-2">Detailed Description</h4>
                        <p className="text-gray-600 mb-4">{career.details}</p>
                        <Button 
                          variant="outline" 
                          className="border-military-olive text-military-olive hover:bg-military-olive hover:text-white"
                        >
                          Learn More
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Career Quiz CTA */}
        <section className="py-16 bg-military-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 animate-fade-up">Not Sure Which Path Is Right For You?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Take our comprehensive career matching quiz to discover military roles that align with your skills, interests, and goals.
            </p>
            <Button 
              className="bg-military-sand hover:bg-military-sand/80 text-military-navy font-medium text-lg px-8 py-6 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Take Career Quiz
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Careers;
