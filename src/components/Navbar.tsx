'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GrogateLogo } from './GrogateIcon';

interface NavbarProps {
  onPitchDeckClick: () => void;
  onTryNowClick: () => void;
}

export function Navbar({ onPitchDeckClick, onTryNowClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b" style={{ 
      backgroundColor: 'var(--harvest-cream)', 
      borderColor: 'var(--harvest-border)' 
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/"
              style={{ textDecoration: 'none' }}
            >
              <GrogateLogo size="small" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <a
              href="#how-it-works"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="transition-colors hover:opacity-70"
            >
              How It Works
            </a>
            <a
              href="#communities"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="transition-colors hover:opacity-70"
            >
              For Communities
            </a>
            <a
              href="#farmers"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="transition-colors hover:opacity-70"
            >
              For Farmers
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onPitchDeckClick}
              style={{ 
                borderColor: 'var(--harvest-green)',
                color: 'var(--harvest-green)',
                fontFamily: 'Manrope, sans-serif',
                backgroundColor: 'transparent'
              }}
              className="px-6 py-2 rounded-lg border-2 transition-all hover:bg-[var(--harvest-green)] hover:text-white"
            >
              Pitch Deck
            </button>
            <button
              onClick={onTryNowClick}
              style={{ 
                backgroundColor: 'var(--harvest-green)',
                fontFamily: 'Manrope, sans-serif',
                color: '#ffffff'
              }}
              className="px-6 py-2 rounded-lg transition-colors hover:opacity-90"
            >
              Try Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              style={{ color: 'var(--harvest-green)' }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t" style={{ 
          backgroundColor: 'var(--harvest-cream)',
          borderColor: 'var(--harvest-border)'
        }}>
          <div className="px-4 py-4 space-y-3">
            <a
              href="#how-it-works"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#communities"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Communities
            </a>
            <a
              href="#farmers"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Farmers
            </a>
            <button
              onClick={onPitchDeckClick}
              style={{ 
                borderColor: 'var(--harvest-green)',
                color: 'var(--harvest-green)',
                fontFamily: 'Manrope, sans-serif',
                backgroundColor: 'transparent'
              }}
              className="w-full px-6 py-2 rounded-lg border-2 transition-all hover:bg-[var(--harvest-green)] hover:text-white mt-2"
            >
              Pitch Deck
            </button>
            <button
              onClick={onTryNowClick}
              style={{ 
                backgroundColor: 'var(--harvest-green)',
                fontFamily: 'Manrope, sans-serif',
                color: '#ffffff'
              }}
              className="w-full px-6 py-2 rounded-lg transition-colors hover:opacity-90 mt-2"
            >
              Try Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}