'use client';

import { ShoppingBag, Sprout, Truck } from 'lucide-react';
import { Button } from '../ui/button';

interface WelcomeCarouselProps {
  step: number;
  onNext: () => void;
  onSkip: () => void;
}

const steps = [
  {
    icon: ShoppingBag,
    title: 'You Order',
    description: 'Browse our weekly harvest and place your order for fresh, seasonal produce delivered to your community.'
  },
  {
    icon: Sprout,
    title: 'Farmers Harvest',
    description: 'Once you order, our local farmers harvest your produce fresh from their fields—nothing sits in storage.'
  },
  {
    icon: Truck,
    title: 'We Deliver',
    description: 'Your order arrives within 12-24 hours of harvest. That\'s true farm-to-table freshness.'
  }
];

export function WelcomeCarousel({ step, onNext, onSkip }: WelcomeCarouselProps) {
  const currentStep = steps[step];
  const Icon = currentStep.icon;

  return (
    <div 
      className="fixed inset-0 flex flex-col"
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto">
        <div 
          className="w-32 h-32 rounded-full flex items-center justify-center mb-8"
          style={{ backgroundColor: '#E8F5E9' }}
        >
          <Icon size={64} style={{ color: 'var(--harvest-green)' }} strokeWidth={1.5} />
        </div>

        <h2 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'var(--harvest-green)'
          }}
          className="text-3xl text-center mb-4"
        >
          {currentStep.title}
        </h2>

        <p 
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            color: '#5A5A5A',
            lineHeight: '1.7'
          }}
          className="text-lg text-center"
        >
          {currentStep.description}
        </p>

        {/* Dots Indicator */}
        <div className="flex gap-2 mt-12">
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full transition-all"
              style={{ 
                backgroundColor: index === step ? 'var(--harvest-green)' : '#D8E5DD'
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 flex justify-between items-center max-w-md mx-auto w-full">
        <button
          onClick={onSkip}
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            color: '#8BAF96'
          }}
          className="text-base"
        >
          Skip
        </button>

        <Button
          onClick={onNext}
          style={{
            backgroundColor: 'var(--harvest-green)',
            color: 'white',
            fontFamily: 'Manrope, sans-serif'
          }}
          className="px-8"
        >
          {step === 2 ? 'Get Started' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
