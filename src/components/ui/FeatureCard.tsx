
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  linkText?: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  link,
  linkText = 'Learn More',
  className,
}: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mb-4 text-military-olive">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-military-navy mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      {link && (
        <Link 
          to={link} 
          className="inline-flex items-center font-medium text-military-olive hover:text-military-navy transition-colors mt-2"
        >
          {linkText}
          <ChevronRight 
            className={cn(
              "ml-1 h-4 w-4 transition-transform duration-300",
              hovered ? "translate-x-1" : ""
            )} 
          />
        </Link>
      )}
    </div>
  );
}
