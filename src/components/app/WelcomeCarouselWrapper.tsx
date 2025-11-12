'use client';

import { useState } from 'react';
import { WelcomeCarousel } from './WelcomeCarousel';

interface WelcomeCarouselWrapperProps {
  onComplete: () => void;
  onSkip: () => void;
}

export function WelcomeCarouselWrapper({ onComplete, onSkip }: WelcomeCarouselWrapperProps) {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step === 2) {
      onComplete();
    } else {
      setStep(step + 1);
    }
  };

  return (
    <WelcomeCarousel
      step={step}
      onNext={handleNext}
      onSkip={onSkip}
    />
  );
}
