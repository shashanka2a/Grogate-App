'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Sprout } from 'lucide-react';

interface AuthScreenProps {
  onSignUp: (email: string, password: string, name: string) => void;
}

export function AuthScreen({ onSignUp }: AuthScreenProps) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp && name && email && password) {
      onSignUp(email, password, name);
    }
  };

  return (
    <div 
      className="fixed inset-0 overflow-y-auto"
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <Sprout size={48} style={{ color: 'var(--harvest-green)' }} strokeWidth={1.5} />
            <h1 
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'var(--harvest-green)'
              }}
              className="text-3xl"
            >
              Grogate
            </h1>
          </div>

          {/* Form */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <h2 
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'var(--harvest-green)'
              }}
              className="text-2xl mb-6"
            >
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#1A3A2A',
                      fontSize: '14px'
                    }}
                    className="block mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={isSignUp}
                    className="h-12"
                  />
                </div>
              )}

              <div>
                <label 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontSize: '14px'
                  }}
                  className="block mb-2"
                >
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
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
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 mt-6 rounded-xl transition-all active:scale-[0.98] shadow-sm"
                style={{
                  backgroundColor: 'var(--harvest-green)',
                  color: 'white',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600
                }}
              >
                {isSignUp ? 'Sign Up' : 'Log In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#8BAF96'
                }}
                className="text-sm"
              >
                {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}