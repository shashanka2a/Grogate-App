'use client';

import { Button } from '../ui/button';
import { CheckCircle } from 'lucide-react';

interface OnboardingCompleteProps {
  userName: string;
  onComplete: () => void;
}

export function OnboardingComplete({ userName, onComplete }: OnboardingCompleteProps) {
  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      <div className="max-w-md text-center">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: '#E8F5E9' }}
        >
          <CheckCircle size={56} style={{ color: 'var(--harvest-green)' }} strokeWidth={1.5} />
        </div>

        <h2 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'var(--harvest-green)'
          }}
          className="text-3xl mb-4"
        >
          You're all set!
        </h2>

        <p 
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            color: '#5A5A5A',
            lineHeight: '1.6'
          }}
          className="text-lg mb-8"
        >
          Welcome to Grogate, {userName}! You can now browse this week's harvest and place your first order.
        </p>

        <Button
          onClick={onComplete}
          className="px-12 h-12 rounded-xl transition-all active:scale-[0.98] shadow-md"
          style={{
            backgroundColor: 'var(--harvest-green)',
            color: 'white',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 600
          }}
        >
          Start Shopping
        </Button>
      </div>
    </div>
  );
}