'use client';

import { useEffect } from 'react';
import { GrogateIcon } from '../GrogateIcon';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{ backgroundColor: 'var(--harvest-green)' }}
    >
      <div className="flex flex-col items-center animate-fade-in">
        <div className="mb-6">
          <GrogateIcon size={100} variant="white" />
        </div>
        <h1 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'white'
          }}
          className="text-5xl mb-2"
        >
          Grogate
        </h1>
        <p 
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            color: 'rgba(255, 255, 255, 0.9)',
            marginTop: '1rem'
          }}
          className="text-lg"
        >
          Fresh from the farm. Direct to your community.
        </p>
      </div>
    </div>
  );
}