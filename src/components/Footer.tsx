'use client';

import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';
import { GrogateLogo } from './GrogateIcon';

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Communities', href: '#communities' },
    { label: 'For Farmers', href: '#farmers' },
    { label: 'Our Products', href: '#products' }
  ];

  const socialIcons = [
    { name: 'instagram', icon: Instagram, href: '#' },
    { name: 'facebook', icon: Facebook, href: '#' },
    { name: 'twitter', icon: Twitter, href: '#' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' }
  ];

  return (
    <footer 
      className="w-full py-16" 
      style={{ backgroundColor: 'var(--harvest-green)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Logo & Copyright */}
          <div>
            <div className="mb-4">
              <GrogateLogo variant="white" size="medium" />
            </div>
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: 'white',
                lineHeight: '1.6',
                maxWidth: '300px',
                opacity: 0.9
              }}
            >
              Fresh from the farm. Direct to your gated community.
            </p>
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: 'white',
                marginTop: '2rem',
                opacity: 0.7
              }}
            >
              © {currentYear} Grogate. All rights reserved.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: 'white'
              }}
              className="text-lg mb-4"
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: hoveredLink === link.label ? '#D4A574' : 'white',
                      transition: 'color 0.3s ease'
                    }}
                    className="inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Legal */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: 'white'
              }}
              className="text-lg mb-4"
            >
              Follow Us
            </h4>
            
            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    onMouseEnter={() => setHoveredIcon(social.name)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    className="transition-colors duration-300"
                    style={{
                      color: hoveredIcon === social.name ? '#D4A574' : 'white'
                    }}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: hoveredLink === link.label ? '#D4A574' : 'white',
                    fontSize: '14px',
                    opacity: hoveredLink === link.label ? 1 : 0.8,
                    transition: 'all 0.3s ease'
                  }}
                  className="inline-block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}