'use client';

import { Leaf, MapPin, Search, DollarSign, Handshake, Store } from 'lucide-react';
import { useState } from 'react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function KeyBenefits() {
  const [hoveredIndex, setHoveredIndex] = useState<{ side: string; index: number } | null>(null);

  const communityBenefits: Benefit[] = [
    {
      icon: <Leaf size={24} />,
      title: 'Unmatched Freshness',
      description: 'Produce harvested just 12-24 hours before delivery, not days.'
    },
    {
      icon: <Search size={24} />,
      title: 'Full Traceability',
      description: 'Know exactly which farm your food comes from and how it was grown.'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Support Local Economy',
      description: 'Keep money in your community and build relationships with local farmers.'
    }
  ];

  const farmerBenefits: Benefit[] = [
    {
      icon: <DollarSign size={24} />,
      title: 'Fair & Stable Income',
      description: 'Get paid fairly with predictable demand and no intermediary markups.'
    },
    {
      icon: <Handshake size={24} />,
      title: 'Direct Market Access',
      description: 'Connect directly with communities who value quality and sustainability.'
    },
    {
      icon: <Store size={24} />,
      title: 'Zero Waste Harvesting',
      description: 'Harvest only what\'s ordered, reducing waste and maximizing profits.'
    }
  ];

  const isHovered = (side: string, index: number) => {
    return hoveredIndex?.side === side && hoveredIndex?.index === index;
  };

  return (
    <section 
      className="w-full py-20 md:py-28" 
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'var(--harvest-green)' 
          }}
          className="text-3xl sm:text-4xl lg:text-5xl text-center mb-16"
        >
          Why Choose Grogate?
        </h2>

        {/* Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 relative">
          {/* Vertical Divider - Desktop Only */}
          <div 
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px"
            style={{ backgroundColor: '#D8E5DD', transform: 'translateX(-0.5px)' }}
          />

          {/* Left Half - For Our Community */}
          <div className="lg:pr-12">
            <h3 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--harvest-green)'
              }}
              className="text-2xl sm:text-3xl mb-8"
            >
              For Our Community
            </h3>

            <ul className="space-y-6">
              {communityBenefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex gap-4 cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredIndex({ side: 'community', index })}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="flex-shrink-0 mt-1 transition-colors duration-300"
                    style={{ 
                      color: isHovered('community', index) ? '#B8785D' : '#8BAF96'
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: isHovered('community', index) ? '#1F4A2F' : 'var(--harvest-green)',
                        fontWeight: isHovered('community', index) ? '600' : '500'
                      }}
                      className="text-lg sm:text-xl mb-2 transition-all duration-300"
                    >
                      {benefit.title}
                    </h4>
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#5A5A5A',
                        lineHeight: '1.6'
                      }}
                      className="text-base"
                    >
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Half - For Our Farmers */}
          <div className="lg:pl-12">
            <h3 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--harvest-green)'
              }}
              className="text-2xl sm:text-3xl mb-8"
            >
              For Our Farmers
            </h3>

            <ul className="space-y-6">
              {farmerBenefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex gap-4 cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredIndex({ side: 'farmer', index })}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="flex-shrink-0 mt-1 transition-colors duration-300"
                    style={{ 
                      color: isHovered('farmer', index) ? '#B8785D' : '#8BAF96'
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: isHovered('farmer', index) ? '#1F4A2F' : 'var(--harvest-green)',
                        fontWeight: isHovered('farmer', index) ? '600' : '500'
                      }}
                      className="text-lg sm:text-xl mb-2 transition-all duration-300"
                    >
                      {benefit.title}
                    </h4>
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#5A5A5A',
                        lineHeight: '1.6'
                      }}
                      className="text-base"
                    >
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}