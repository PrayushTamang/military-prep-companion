
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  image = 'https://images.unsplash.com/photo-1579912437766-7896df7847ce?q=80&w=1740&auto=format&fit=crop',
  overlay = true,
}: HeroSectionProps) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center animate-blur-in"
          style={{ backgroundImage: `url(${image})` }}
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-military-navy/90 to-military-navy/60" />
        )}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white font-bold mb-6 leading-tight animate-fade-up">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
          
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
              {ctaText && ctaLink && (
                <Button
                  asChild
                  className="bg-military-sand hover:bg-military-sand/80 text-military-navy font-medium text-lg px-8 py-6"
                >
                  <Link to={ctaLink}>
                    {ctaText}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              
              {secondaryCtaText && secondaryCtaLink && (
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-military-navy font-medium text-lg px-8 py-6"
                >
                  <Link to={secondaryCtaLink}>
                    {secondaryCtaText}
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
}
