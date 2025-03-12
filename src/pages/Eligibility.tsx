
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';

const Eligibility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    age: '',
    education: 'high_school',
    citizenship: 'us_citizen',
    hasFelony: 'no',
    hasMedicalCondition: 'no',
    height: '',
    weight: '',
    branch: 'army'
  });
  
  const [results, setResults] = useState<null | {
    eligible: boolean;
    messages: Array<{
      type: 'success' | 'warning' | 'error' | 'info';
      message: string;
    }>;
  }>(null);
  
  const educationOptions = [
    { value: 'high_school', label: 'High School Diploma' },
    { value: 'ged', label: 'GED' },
    { value: 'some_college', label: 'Some College' },
    { value: 'associates', label: 'Associate\'s Degree' },
    { value: 'bachelors', label: 'Bachelor\'s Degree' },
    { value: 'masters', label: 'Master\'s Degree or Higher' }
  ];
  
  const citizenshipOptions = [
    { value: 'us_citizen', label: 'U.S. Citizen' },
    { value: 'permanent_resident', label: 'Permanent Resident' },
    { value: 'other', label: 'Other' }
  ];
  
  const branchOptions = [
    { value: 'army', label: 'Army' },
    { value: 'navy', label: 'Navy' },
    { value: 'air_force', label: 'Air Force' },
    { value: 'marines', label: 'Marines' },
    { value: 'coast_guard', label: 'Coast Guard' },
    { value: 'space_force', label: 'Space Force' }
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.age || !formData.height || !formData.weight) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    const age = parseInt(formData.age);
    const height = parseInt(formData.height);
    const weight = parseInt(formData.weight);
    
    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for age, height, and weight.",
        variant: "destructive"
      });
      return;
    }
    
    // Evaluate eligibility
    const messages = [];
    let eligible = true;
    
    // Age check
    if (age < 17) {
      messages.push({
        type: 'error' as const,
        message: 'You must be at least 17 years old to join the military.'
      });
      eligible = false;
    } else if (age > 34) {
      messages.push({
        type: 'error' as const,
        message: 'The maximum age for enlistment is typically 34 years (varies by branch).'
      });
      eligible = false;
    } else if (age >= 17 && age < 18) {
      messages.push({
        type: 'warning' as const,
        message: 'If you are 17, you will need parental consent to enlist.'
      });
    }
    
    // Education check
    if (formData.education === 'ged') {
      messages.push({
        type: 'warning' as const,
        message: 'With a GED, you may need additional qualifications or a higher ASVAB score.'
      });
    }
    
    // Citizenship check
    if (formData.citizenship === 'permanent_resident') {
      messages.push({
        type: 'info' as const,
        message: 'As a permanent resident, you can enlist but may have limited role options.'
      });
    } else if (formData.citizenship === 'other') {
      messages.push({
        type: 'error' as const,
        message: 'You must be a U.S. citizen or permanent resident to join the military.'
      });
      eligible = false;
    }
    
    // Criminal history
    if (formData.hasFelony === 'yes') {
      messages.push({
        type: 'warning' as const,
        message: 'A felony conviction may require a waiver. Consult with a recruiter for your specific case.'
      });
    }
    
    // Medical condition
    if (formData.hasMedicalCondition === 'yes') {
      messages.push({
        type: 'warning' as const,
        message: 'Medical conditions require evaluation. Some may be disqualifying while others may receive waivers.'
      });
    }
    
    // Height/weight check
    // This is simplified - actual military standards are more complex and vary by branch
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    
    if (parseFloat(bmi) < 19) {
      messages.push({
        type: 'warning' as const,
        message: `Your BMI of ${bmi} is below the minimum standard for most branches. Weight gain may be required.`
      });
    } else if (parseFloat(bmi) > 27.5) {
      messages.push({
        type: 'warning' as const,
        message: `Your BMI of ${bmi} exceeds standards for most branches. Weight loss may be required.`
      });
    } else {
      messages.push({
        type: 'success' as const,
        message: `Your BMI of ${bmi} is within acceptable range.`
      });
    }
    
    // Branch-specific notes
    switch (formData.branch) {
      case 'space_force':
        messages.push({
          type: 'info' as const,
          message: 'The Space Force is the newest branch with limited and competitive entry positions.'
        });
        break;
      case 'air_force':
        messages.push({
          type: 'info' as const,
          message: 'The Air Force typically has higher ASVAB score requirements than other branches.'
        });
        break;
    }
    
    // If no errors make the person ineligible, add a success message
    if (eligible) {
      messages.unshift({
        type: 'success' as const,
        message: 'Based on the information provided, you appear to meet the basic eligibility requirements.'
      });
    }
    
    setResults({
      eligible,
      messages
    });
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('eligibility-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        <HeroSection
          title="Eligibility Checker"
          subtitle="Find out if you meet the basic requirements for military service."
          image="https://images.unsplash.com/photo-1598970605070-a38a2a10a6c5?q=80&w=1470&auto=format&fit=crop"
        />
        
        {/* Form Section */}
        <section className="py-16 bg-white">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-military-navy mb-4 animate-fade-up">Check Your Eligibility</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
                Complete the form below to see if you meet the basic requirements for your chosen military branch.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <form onSubmit={checkEligibility}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Age */}
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                      Age (years) <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="17"
                      max="50"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  {/* Education */}
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                      Highest Education Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="education"
                      name="education"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-navy"
                      value={formData.education}
                      onChange={handleInputChange}
                      required
                    >
                      {educationOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Citizenship */}
                  <div>
                    <label htmlFor="citizenship" className="block text-sm font-medium text-gray-700 mb-2">
                      Citizenship Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="citizenship"
                      name="citizenship"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-navy"
                      value={formData.citizenship}
                      onChange={handleInputChange}
                      required
                    >
                      {citizenshipOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Criminal History */}
                  <div>
                    <label htmlFor="hasFelony" className="block text-sm font-medium text-gray-700 mb-2">
                      Do you have a felony conviction? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="hasFelony"
                      name="hasFelony"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-navy"
                      value={formData.hasFelony}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                  
                  {/* Medical Condition */}
                  <div>
                    <label htmlFor="hasMedicalCondition" className="block text-sm font-medium text-gray-700 mb-2">
                      Do you have any significant medical conditions? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="hasMedicalCondition"
                      name="hasMedicalCondition"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-navy"
                      value={formData.hasMedicalCondition}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                  
                  {/* Height */}
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                      Height (cm) <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="height"
                      name="height"
                      type="number"
                      min="147"
                      max="220"
                      value={formData.height}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  {/* Weight */}
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                      Weight (kg) <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      min="45"
                      max="160"
                      value={formData.weight}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  {/* Branch */}
                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Military Branch <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-navy"
                      value={formData.branch}
                      onChange={handleInputChange}
                      required
                    >
                      {branchOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-military-navy hover:bg-military-navy/80 text-white font-medium px-8 py-6"
                  >
                    Check Eligibility
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Results Section */}
            {results && (
              <div 
                id="eligibility-results"
                className="mt-12 bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-fade-up"
              >
                <h3 className="text-2xl font-semibold text-military-navy mb-6">
                  Your Eligibility Results
                </h3>
                
                <div className={`p-4 mb-6 rounded-lg ${
                  results.eligible 
                    ? "bg-green-50 border border-green-200" 
                    : "bg-red-50 border border-red-200"
                }`}>
                  <div className="flex items-center">
                    {results.eligible ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 mr-3" />
                    )}
                    <span className={`font-semibold ${results.eligible ? "text-green-700" : "text-red-700"}`}>
                      {results.eligible 
                        ? "Based on your inputs, you appear to meet basic eligibility requirements." 
                        : "Based on your inputs, you may not meet all eligibility requirements."}
                    </span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <h4 className="text-lg font-medium text-military-navy mb-4">
                  Detailed Assessment
                </h4>
                
                <div className="space-y-4">
                  {results.messages.map((msg, index) => {
                    let icon;
                    let bgColor;
                    let textColor;
                    
                    switch (msg.type) {
                      case 'success':
                        icon = <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />;
                        bgColor = "bg-green-50";
                        textColor = "text-green-700";
                        break;
                      case 'warning':
                        icon = <AlertCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />;
                        bgColor = "bg-amber-50";
                        textColor = "text-amber-700";
                        break;
                      case 'error':
                        icon = <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />;
                        bgColor = "bg-red-50";
                        textColor = "text-red-700";
                        break;
                      case 'info':
                        icon = <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />;
                        bgColor = "bg-blue-50";
                        textColor = "text-blue-700";
                        break;
                    }
                    
                    return (
                      <div 
                        key={index} 
                        className={`p-3 rounded-md ${bgColor} flex items-start`}
                      >
                        {icon}
                        <span className={textColor}>{msg.message}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-md">
                  <p className="text-gray-600 text-sm">
                    <strong>Important Note:</strong> This assessment is based on general guidelines and your inputs. 
                    Final eligibility determination can only be made by official military recruiters 
                    after thorough evaluation including medical examinations, background checks, and aptitude testing.
                  </p>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    className="bg-military-navy hover:bg-military-navy/80 text-white font-medium px-8"
                  >
                    Contact a Recruiter
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Requirements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-military-navy mb-4 animate-fade-up">General Military Requirements</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
                While each branch has specific standards, here are the general requirements for military service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-xl font-semibold text-military-navy mb-4">Basic Qualifications</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>U.S. Citizenship or Permanent Resident Alien status</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Between 17-34 years of age (varies by branch and role)</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>High school diploma or equivalent (GED)</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Passing score on the ASVAB (Armed Services Vocational Aptitude Battery)</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Meet height and weight standards</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-xl font-semibold text-military-navy mb-4">Potential Disqualifiers</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Felony convictions (waivers possible in some cases)</span>
                  </li>
                  <li className="flex">
                    <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Drug use (varies by branch, type, and recency)</span>
                  </li>
                  <li className="flex">
                    <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Certain medical conditions or physical limitations</span>
                  </li>
                  <li className="flex">
                    <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Excessive financial debt or bankruptcy</span>
                  </li>
                  <li className="flex">
                    <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Certain tattoos or body modifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Eligibility;
