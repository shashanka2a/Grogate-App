'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Home, Building2 } from 'lucide-react';

interface DeliveryPreferenceProps {
  communityName: string;
  onComplete: (preference: 'doorstep' | 'pickup') => void;
}

export function DeliveryPreference({ communityName, onComplete }: DeliveryPreferenceProps) {
  const [selected, setSelected] = useState<'doorstep' | 'pickup' | null>(null);

  const handleContinue = () => {
    if (selected) {
      onComplete(selected);
    }
  };

  return (
    <div 
      className="fixed inset-0 overflow-y-auto"
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 
            style={{ 
              fontFamily: 'Lora, serif',
              color: 'var(--harvest-green)'
            }}
            className="text-3xl text-center mb-3"
          >
            Set Your Delivery Preference
          </h2>

          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#5A5A5A',
              lineHeight: '1.6'
            }}
            className="text-center mb-8"
          >
            How would you like to receive your fresh produce?
          </p>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {/* Doorstep Option */}
            <button
              onClick={() => setSelected('doorstep')}
              className="w-full bg-white rounded-2xl shadow-sm p-6 transition-all hover:shadow-md active:scale-[0.99] border"
              style={{
                borderColor: selected === 'doorstep' ? 'var(--harvest-green)' : '#E5E7EB',
                borderWidth: selected === 'doorstep' ? '2px' : '1px',
                backgroundColor: selected === 'doorstep' ? '#F0F9F4' : 'white'
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#E8F5E9' }}
                >
                  <Home size={24} style={{ color: 'var(--harvest-green)' }} />
                </div>
                <div className="flex-1 text-left">
                  <h3 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--harvest-green)'
                    }}
                    className="text-xl mb-2"
                  >
                    Deliver to my doorstep
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#5A5A5A',
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }}
                  >
                    Your order will be delivered directly to your door during the scheduled delivery window.
                  </p>
                </div>
              </div>
            </button>

            {/* Pickup Option */}
            <button
              onClick={() => setSelected('pickup')}
              className="w-full bg-white rounded-2xl shadow-sm p-6 transition-all hover:shadow-md active:scale-[0.99] border"
              style={{
                borderColor: selected === 'pickup' ? 'var(--harvest-green)' : '#E5E7EB',
                borderWidth: selected === 'pickup' ? '2px' : '1px',
                backgroundColor: selected === 'pickup' ? '#F0F9F4' : 'white'
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#E8F5E9' }}
                >
                  <Building2 size={24} style={{ color: 'var(--harvest-green)' }} />
                </div>
                <div className="flex-1 text-left">
                  <h3 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--harvest-green)'
                    }}
                    className="text-xl mb-2"
                  >
                    Pick up at {communityName} Clubhouse
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#5A5A5A',
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }}
                  >
                    Collect your order from the central pickup point at your convenience.
                  </p>
                </div>
              </div>
            </button>
          </div>

          <Button
            onClick={handleContinue}
            disabled={!selected}
            className="w-full h-12 rounded-xl transition-all active:scale-[0.98] shadow-sm"
            style={{
              backgroundColor: selected ? 'var(--harvest-green)' : '#D8E5DD',
              color: 'white',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
