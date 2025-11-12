'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

export function GetInvolved() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thanks for joining! We\'ll notify you when we launch.');
      setEmail('');
    }
  };

  return (
    <section 
      className="w-full py-24 md:py-32" 
      style={{ backgroundColor: 'var(--harvest-green)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'white',
            lineHeight: '1.2'
          }}
          className="text-3xl sm:text-4xl lg:text-5xl mb-6"
        >
          Be the first to get truly fresh food.
        </h2>

        {/* Sub-text */}
        <p 
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            color: '#8BAF96',
            maxWidth: '500px',
            lineHeight: '1.6'
          }}
          className="text-lg mb-10 max-w-2xl mx-auto"
        >
          We are launching our pilot program soon. Join the waitlist to be notified when Grogate comes to your community.
        </p>

        {/* Input Form */}
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:flex-1 h-12 px-4 rounded-lg bg-white border-none"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '16px'
            }}
          />
          <Button
            type="submit"
            className="w-full sm:w-auto h-12 px-8 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#D4A574',
              color: '#1A3A2A',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '16px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)'
            }}
          >
            Join Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
}