'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { communities } from '../../data/mockData';
import { MapPin } from 'lucide-react';

interface CommunityVerificationProps {
  userName: string;
  onComplete: (community: string, address: string) => void;
}

export function CommunityVerification({ userName, onComplete }: CommunityVerificationProps) {
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCommunity && address) {
      onComplete(selectedCommunity, address);
    }
  };

  return (
    <div 
      className="fixed inset-0 overflow-y-auto"
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Icon */}
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: '#E8F5E9' }}
          >
            <MapPin size={40} style={{ color: 'var(--harvest-green)' }} />
          </div>

          <h2 
            style={{ 
              fontFamily: 'Lora, serif',
              color: 'var(--harvest-green)'
            }}
            className="text-3xl text-center mb-3"
          >
            Find Your Community
          </h2>

          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#5A5A5A',
              lineHeight: '1.6'
            }}
            className="text-center mb-8"
          >
            Hi {userName}! Select your community to get started with local deliveries.
          </p>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontSize: '14px'
                  }}
                  className="block mb-2"
                >
                  Your Community
                </label>
                <Select value={selectedCommunity} onValueChange={setSelectedCommunity}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your community" />
                  </SelectTrigger>
                  <SelectContent>
                    {communities.map((community) => (
                      <SelectItem key={community} value={community}>
                        {community}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontSize: '14px'
                  }}
                  className="block mb-2"
                >
                  Apartment/House Number
                </label>
                <Input
                  type="text"
                  placeholder="e.g., A-304 or House 42"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-xl transition-all active:scale-[0.98] shadow-sm"
                style={{
                  backgroundColor: 'var(--harvest-green)',
                  color: 'white',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600
                }}
              >
                Continue
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
