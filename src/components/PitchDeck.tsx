'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Package, DollarSign, Target, Zap, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { GrogateIcon } from './GrogateIcon';

interface PitchDeckProps {
  onBackToLanding?: () => void;
}

export function PitchDeck({ onBackToLanding }: PitchDeckProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 12; // Updated total number of slides

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  const slides = [
    // Slide 1: Cover
    {
      type: 'cover',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-8">
          <GrogateIcon size={80} style={{ color: 'var(--harvest-green)' }} strokeWidth={1.5} />
          <h1 
            style={{ 
              fontFamily: 'Lora, serif',
              color: 'var(--harvest-green)',
              marginTop: '2rem'
            }}
            className="text-5xl mb-6"
          >
            Grogate
          </h1>
          <p 
            style={{ 
              fontFamily: 'Lora, serif',
              color: '#5A5A5A',
              fontSize: '28px'
            }}
            className="mb-4"
          >
            India's Farmer Marketplace
          </p>
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#8BAF96',
              fontSize: '20px',
              fontWeight: 600,
              marginTop: '2rem'
            }}
          >
            "Fresh. Fair. From the Source."
          </p>
        </div>
      )
    },
    
    // Slide 2: The Problem
    {
      type: 'content',
      title: 'The Problem',
      content: (
        <div className="space-y-8">
          <p 
            style={{ 
              fontFamily: 'Lora, serif',
              color: '#5A5A5A',
              fontSize: '22px',
              lineHeight: '1.6'
            }}
          >
            India's farm-to-market supply chain is broken.
          </p>
          <div className="grid gap-6">
            {[
              { icon: '💸', text: 'Middlemen eat into farmer profits', stat: '30-40% margin loss' },
              { icon: '📦', text: 'Urban consumers overpay for stale produce', stat: '2-5 days old' },
              { icon: '🗑️', text: 'Logistics remain fragmented', stat: '40% wastage' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="flex-1">
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#1A3A2A',
                        fontSize: '18px',
                        fontWeight: 600
                      }}
                      className="mb-2"
                    >
                      {item.text}
                    </p>
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--harvest-green)',
                        fontSize: '16px',
                        fontWeight: 600
                      }}
                    >
                      {item.stat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    
    // Slide 3: Our Solution
    {
      type: 'content',
      title: 'Our Solution',
      content: (
        <div className="space-y-6">
          <div 
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2"
            style={{ borderColor: 'var(--harvest-green)' }}
          >
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                fontSize: '20px',
                lineHeight: '1.7'
              }}
            >
              Grogate connects <span style={{ fontWeight: 700, color: 'var(--harvest-green)' }}>verified farmers</span> directly with consumers, restaurants, and retailers through a digital marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🌾', title: 'Farmers', desc: 'List produce, set prices, instant payments' },
              { icon: '🛒', title: 'Consumers', desc: 'Fresh, traceable produce from nearby farms' },
              { icon: '🚛', title: 'Ninjacart', desc: 'Aggregation, cold storage, last-mile' },
              { icon: '⏱️', title: '24 Hours', desc: 'Farm to table delivery guarantee' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <p className="text-3xl mb-3">{item.icon}</p>
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--harvest-green)',
                    fontSize: '16px',
                    fontWeight: 700
                  }}
                  className="mb-1"
                >
                  {item.title}
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#5A5A5A',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    
    // Slide 4: How It Works
    {
      type: 'content',
      title: 'How It Works',
      content: (
        <div className="space-y-6">
          {[
            { 
              num: '1', 
              icon: '📱', 
              title: 'Farmer Onboarding', 
              desc: 'Via app or local partner kiosk with verification' 
            },
            { 
              num: '2', 
              icon: '🏷️', 
              title: 'Smart Listings', 
              desc: 'Go live with freshness score and location tag' 
            },
            { 
              num: '3', 
              icon: '🤖', 
              title: 'Auto-Routing', 
              desc: 'Orders route to Ninjacart hubs for fulfilment' 
            },
            { 
              num: '4', 
              icon: '🚚', 
              title: 'Fast Delivery', 
              desc: 'Farm-fresh produce delivered within 24 hours' 
            }
          ].map((step, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div 
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--harvest-green)' }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 700
                  }}
                >
                  {step.num}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <p 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#1A3A2A',
                      fontSize: '20px',
                      fontWeight: 700
                    }}
                  >
                    {step.title}
                  </p>
                </div>
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#5A5A5A',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    
    // Slide 5: Business Model
    {
      type: 'content',
      title: 'Business Model',
      content: (
        <div className="grid grid-cols-2 gap-4">
          {[
            { 
              icon: <DollarSign size={32} style={{ color: 'var(--harvest-green)' }} />,
              title: 'Commission',
              desc: '10–15% per transaction',
              revenue: 'Primary Revenue'
            },
            { 
              icon: <TrendingUp size={32} style={{ color: 'var(--harvest-green)' }} />,
              title: 'Subscription',
              desc: '₹999/year premium farmer accounts',
              revenue: 'Analytics & Visibility'
            },
            { 
              icon: <Package size={32} style={{ color: 'var(--harvest-green)' }} />,
              title: 'B2B Orders',
              desc: 'Restaurants, schools, housing societies',
              revenue: 'Bulk Volume'
            },
            { 
              icon: <Zap size={32} style={{ color: 'var(--harvest-green)' }} />,
              title: 'Featured Listings',
              desc: 'Paid promotions for high-volume farmers',
              revenue: 'Premium Placement'
            }
          ].map((model, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                {model.icon}
              </div>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--harvest-green)',
                  fontSize: '20px',
                  fontWeight: 700
                }}
                className="mb-2"
              >
                {model.title}
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A',
                  fontSize: '16px',
                  lineHeight: '1.5'
                }}
                className="mb-3"
              >
                {model.desc}
              </p>
              <div 
                className="px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: '#F0F9F4' }}
              >
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--harvest-green)',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  {model.revenue}
                </p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    
    // Slide 6: Market Opportunity (Updated with INR)
    {
      type: 'content',
      title: 'Market Opportunity',
      content: (
        <div className="space-y-6">
          <div 
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 text-center"
            style={{ borderColor: 'var(--harvest-green)' }}
          >
            <p 
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'var(--harvest-green)',
                fontSize: '48px',
                fontWeight: 700
              }}
              className="mb-2"
            >
              ₹47 Lakh Crore
            </p>
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                fontSize: '18px'
              }}
            >
              India's Agriculture Market Size (2024)
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {[
              { number: '150M+', label: 'Farmers in India' },
              { number: '65%', label: 'Population dependent on agriculture' },
              { number: '₹12 Lakh Cr', label: 'Annual produce value' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <p 
                  style={{ 
                    fontFamily: 'Lora, serif',
                    color: 'var(--harvest-green)',
                    fontSize: '32px',
                    fontWeight: 700
                  }}
                  className="mb-2"
                >
                  {stat.number}
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#5A5A5A',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                fontSize: '16px',
                lineHeight: '1.7'
              }}
            >
              <span style={{ fontWeight: 700, color: 'var(--harvest-green)' }}>Growing demand:</span> Urban India seeks fresh, traceable food. Government's Digital Agriculture Mission. Rising middle class with ₹50 lakh crore+ disposable income by 2025.
            </p>
          </div>
        </div>
      )
    },
    
    // Slide 7: Competitor Analysis (NEW)
    {
      type: 'content',
      title: 'Competitive Landscape',
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: 'BigBasket',
                model: 'B2C Online Grocery',
                strength: 'Strong brand, wide inventory',
                weakness: '3-5 day old produce, no farmer connect',
                market: '₹4,500 Cr revenue'
              },
              {
                name: 'Ninjacart',
                model: 'B2B Supply Chain',
                strength: 'Logistics infrastructure',
                weakness: 'No direct consumer access',
                market: '₹1,200 Cr revenue'
              },
              {
                name: 'FarMart',
                model: 'Farmer Input Supply',
                strength: 'Rural network',
                weakness: 'Focused on inputs, not produce',
                market: '₹800 Cr GMV'
              },
              {
                name: 'Traditional Mandis',
                model: 'Physical Markets',
                strength: 'Established ecosystem',
                weakness: 'Middlemen, inefficiency, waste',
                market: '₹8 Lakh Cr market'
              }
            ].map((competitor, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <p 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--harvest-green)',
                      fontSize: '18px',
                      fontWeight: 700
                    }}
                  >
                    {competitor.name}
                  </p>
                  <span 
                    className="px-2 py-1 rounded text-xs"
                    style={{ 
                      backgroundColor: '#F0F9F4',
                      fontFamily: 'Manrope, sans-serif',
                      color: '#5A5A5A',
                      fontWeight: 600
                    }}
                  >
                    {competitor.model}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check size={16} style={{ color: 'var(--harvest-green)', flexShrink: 0, marginTop: '2px' }} />
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#1A3A2A',
                        fontSize: '13px',
                        lineHeight: '1.5'
                      }}
                    >
                      {competitor.strength}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <X size={16} style={{ color: '#E53E3E', flexShrink: 0, marginTop: '2px' }} />
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#5A5A5A',
                        fontSize: '13px',
                        lineHeight: '1.5'
                      }}
                    >
                      {competitor.weakness}
                    </p>
                  </div>
                  <p 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--harvest-green)',
                      fontSize: '12px',
                      fontWeight: 600,
                      marginTop: '8px'
                    }}
                  >
                    {competitor.market}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    
    // Slide 8: Grogate vs Competitors (NEW)
    {
      type: 'content',
      title: 'Why Grogate Wins',
      content: (
        <div className="space-y-5">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: '#F0F9F4' }}>
                  <th 
                    className="p-4 text-left"
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#1A3A2A',
                      fontSize: '15px',
                      fontWeight: 700
                    }}
                  >
                    Feature
                  </th>
                  <th 
                    className="p-4 text-center"
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--harvest-green)',
                      fontSize: '15px',
                      fontWeight: 700
                    }}
                  >
                    Grogate
                  </th>
                  <th 
                    className="p-4 text-center"
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#5A5A5A',
                      fontSize: '15px',
                      fontWeight: 700
                    }}
                  >
                    BigBasket
                  </th>
                  <th 
                    className="p-4 text-center"
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#5A5A5A',
                      fontSize: '15px',
                      fontWeight: 700
                    }}
                  >
                    Mandis
                  </th>
                  <th 
                    className="p-4 text-center"
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#5A5A5A',
                      fontSize: '15px',
                      fontWeight: 700
                    }}
                  >
                    Ninjacart
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Freshness (harvest time)', grogate: '12-24 hrs', bigbasket: '3-5 days', mandis: '2-4 days', ninjacart: 'N/A (B2B)' },
                  { feature: 'Direct farmer connection', grogate: '✓', bigbasket: '✗', mandis: '✗', ninjacart: 'Partial' },
                  { feature: 'Consumer access', grogate: '✓', bigbasket: '✓', mandis: '✗', ninjacart: '✗' },
                  { feature: 'Farmer income increase', grogate: '+40%', bigbasket: '-', mandis: '-30%', ninjacart: '+15%' },
                  { feature: 'Tech-enabled logistics', grogate: '✓', bigbasket: '✓', mandis: '✗', ninjacart: '✓' },
                  { feature: 'Price transparency', grogate: '✓', bigbasket: 'Partial', mandis: '✗', ninjacart: '✓' },
                  { feature: 'Traceability', grogate: 'Full', bigbasket: 'Limited', mandis: 'None', ninjacart: 'Full' }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderTop: '1px solid #E5E7EB' }}>
                    <td 
                      className="p-4"
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#1A3A2A',
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                    >
                      {row.feature}
                    </td>
                    <td 
                      className="p-4 text-center"
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--harvest-green)',
                        fontSize: '14px',
                        fontWeight: 700,
                        backgroundColor: '#F0F9F4'
                      }}
                    >
                      {row.grogate}
                    </td>
                    <td 
                      className="p-4 text-center"
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#5A5A5A',
                        fontSize: '14px'
                      }}
                    >
                      {row.bigbasket}
                    </td>
                    <td 
                      className="p-4 text-center"
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#5A5A5A',
                        fontSize: '14px'
                      }}
                    >
                      {row.mandis}
                    </td>
                    <td 
                      className="p-4 text-center"
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#5A5A5A',
                        fontSize: '14px'
                      }}
                    >
                      {row.ninjacart}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div 
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-gray-200"
          >
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--harvest-green)',
                fontSize: '16px',
                fontWeight: 700,
                textAlign: 'center'
              }}
            >
              Only Grogate combines farmer empowerment, consumer access, and logistics excellence
            </p>
          </div>
        </div>
      )
    },
    
    // Slide 9: Traction & Impact
    {
      type: 'content',
      title: 'Impact',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { 
                icon: '💰', 
                metric: '+40%', 
                label: 'Higher Farmer Income',
                color: '#2D5F3F'
              },
              { 
                icon: '🥬', 
                metric: '24hrs', 
                label: 'Fresher Produce',
                color: '#3D7F5F'
              },
              { 
                icon: '♻️', 
                metric: '-35%', 
                label: 'Food Waste Reduction',
                color: '#4D9F7F'
              }
            ].map((impact, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <p className="text-4xl mb-3">{impact.icon}</p>
                <p 
                  style={{ 
                    fontFamily: 'Lora, serif',
                    color: impact.color,
                    fontSize: '36px',
                    fontWeight: 700
                  }}
                  className="mb-2"
                >
                  {impact.metric}
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}
                >
                  {impact.label}
                </p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-gray-200">
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#5A5A5A',
                  fontSize: '14px',
                  fontWeight: 600
                }}
                className="mb-2"
              >
                FOR FARMERS
              </p>
              <ul className="space-y-2">
                {[
                  'Direct market access',
                  'Fair pricing control',
                  'Instant payments',
                  'Reduced dependency on middlemen'
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#1A3A2A',
                      fontSize: '15px'
                    }}
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-gray-200">
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#5A5A5A',
                  fontSize: '14px',
                  fontWeight: 600
                }}
                className="mb-2"
              >
                FOR CONSUMERS
              </p>
              <ul className="space-y-2">
                {[
                  'Farm-fresh produce',
                  'Full traceability',
                  'Better prices',
                  'Support local farmers'
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#1A3A2A',
                      fontSize: '15px'
                    }}
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 10: Competitive Advantage
    {
      type: 'content',
      title: 'Our Competitive Edge',
      content: (
        <div className="space-y-5">
          {[
            {
              icon: '🤝',
              title: 'Strategic Partnership',
              desc: 'Ninjacart integration gives us instant logistics infrastructure worth ₹500 Cr+'
            },
            {
              icon: '🎯',
              title: 'Dual Revenue Model',
              desc: 'B2C and B2B channels for diversified revenue streams and market resilience'
            },
            {
              icon: '📊',
              title: 'Data-Driven Operations',
              desc: 'ML-powered demand forecasting reduces waste by 35% and optimizes inventory'
            },
            {
              icon: '✅',
              title: 'Trust & Quality',
              desc: 'Farmer verification, freshness scoring, and ratings build consumer confidence'
            },
            {
              icon: '🌱',
              title: 'Sustainability Focus',
              desc: 'Tech-enabled supply chain cuts carbon footprint by 40% vs traditional channels'
            }
          ].map((advantage, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                {advantage.icon}
              </div>
              <div className="flex-1">
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--harvest-green)',
                    fontSize: '18px',
                    fontWeight: 700
                  }}
                  className="mb-1"
                >
                  {advantage.title}
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#5A5A5A',
                    fontSize: '15px',
                    lineHeight: '1.6'
                  }}
                >
                  {advantage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    
    // Slide 11: Growth Roadmap
    {
      type: 'content',
      title: '12-Month Roadmap',
      content: (
        <div className="space-y-4">
          {[
            {
              phase: 'Q1',
              title: 'Launch & Scale',
              goals: ['5 states operational', '10,000 farmers', '50 B2B partnerships'],
              revenue: '₹5 Cr ARR'
            },
            {
              phase: 'Q2',
              title: 'Expand Infrastructure',
              goals: ['20,000 farmers', '100+ collection centers', 'Mobile app v2.0'],
              revenue: '₹15 Cr ARR'
            },
            {
              phase: 'Q3',
              title: 'Market Penetration',
              goals: ['35,000 farmers', '10 new cities', 'Premium tier launch'],
              revenue: '₹30 Cr ARR'
            },
            {
              phase: 'Q4',
              title: 'Scale & Optimize',
              goals: ['50,000 farmers', 'Series A ready', '3 markets profitable'],
              revenue: '₹50 Cr ARR'
            }
          ].map((quarter, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--harvest-green)' }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: 700
                    }}
                  >
                    {quarter.phase}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--harvest-green)',
                        fontSize: '18px',
                        fontWeight: 700
                      }}
                    >
                      {quarter.title}
                    </p>
                    <span 
                      className="px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: '#F0F9F4',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--harvest-green)',
                        fontSize: '14px',
                        fontWeight: 700
                      }}
                    >
                      {quarter.revenue}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quarter.goals.map((goal, gIdx) => (
                      <span 
                        key={gIdx}
                        className="px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: '#F9FAFB',
                          fontFamily: 'Manrope, sans-serif',
                          color: '#1A3A2A',
                          fontSize: '13px',
                          border: '1px solid #E5E7EB'
                        }}
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    
    // Slide 12: The Ask
    {
      type: 'content',
      title: 'The Ask',
      content: (
        <div className="space-y-8">
          <div 
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 text-center"
            style={{ borderColor: 'var(--harvest-green)' }}
          >
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#5A5A5A',
                fontSize: '16px',
                fontWeight: 600
              }}
              className="mb-4"
            >
              Seeking strategic partnerships and early investors to:
            </p>
            <p 
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'var(--harvest-green)',
                fontSize: '32px',
                fontWeight: 700
              }}
              className="mb-2"
            >
              Scale across 5 states
            </p>
            <p 
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'var(--harvest-green)',
                fontSize: '32px',
                fontWeight: 700
              }}
            >
              Onboard 50,000 farmers
            </p>
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#8BAF96',
                fontSize: '18px',
                fontWeight: 600,
                marginTop: '1.5rem'
              }}
            >
              Target: ₹50 Crore ARR in 12 months
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--harvest-green)',
                  fontSize: '18px',
                  fontWeight: 700
                }}
                className="mb-3"
              >
                What We're Building
              </p>
              <ul className="space-y-2">
                {[
                  'Fair food ecosystem',
                  'Farmer empowerment',
                  'Sustainable agriculture',
                  'Tech-driven logistics'
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#1A3A2A',
                      fontSize: '15px'
                    }}
                  >
                    🌾 {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--harvest-green)',
                  fontSize: '18px',
                  fontWeight: 700
                }}
                className="mb-3"
              >
                Join Us
              </p>
              <ul className="space-y-2">
                {[
                  'Strategic investors',
                  'Logistics partners',
                  'Technology advisors',
                  'Agriculture experts'
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#1A3A2A',
                      fontSize: '15px'
                    }}
                  >
                    🤝 {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p 
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'var(--harvest-green)',
                fontSize: '24px',
                fontWeight: 600
              }}
            >
              "Fresh. Fair. From the Source."
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="fixed inset-0 overflow-hidden"
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      {/* Main Slide Container */}
      <div className="h-full flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 overflow-y-auto px-8 py-12">
          <div className="max-w-5xl mx-auto">
            {slides[currentSlide].type === 'cover' ? (
              slides[currentSlide].content
            ) : (
              <>
                <h2 
                  style={{ 
                    fontFamily: 'Lora, serif',
                    color: 'var(--harvest-green)'
                  }}
                  className="text-4xl mb-8"
                >
                  {slides[currentSlide].title}
                </h2>
                {slides[currentSlide].content}
              </>
            )}
          </div>
        </div>

        {/* Navigation Controls */}
        <div 
          className="border-t bg-white px-8 py-6"
          style={{ borderColor: '#E5E7EB' }}
        >
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            {/* Previous Button */}
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="h-10 px-4 rounded-lg transition-all active:scale-95"
              style={{
                backgroundColor: currentSlide === 0 ? '#F3F4F6' : 'var(--harvest-green)',
                color: currentSlide === 0 ? '#9CA3AF' : 'white',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                cursor: currentSlide === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              <ChevronLeft size={20} />
              Previous
            </Button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="transition-all"
                  style={{
                    width: currentSlide === index ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: currentSlide === index ? 'var(--harvest-green)' : '#D1D5DB'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="h-10 px-4 rounded-lg transition-all active:scale-95"
              style={{
                backgroundColor: currentSlide === slides.length - 1 ? '#F3F4F6' : 'var(--harvest-green)',
                color: currentSlide === slides.length - 1 ? '#9CA3AF' : 'white',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Next
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#6B7280',
                fontSize: '14px'
              }}
            >
              Slide {currentSlide + 1} of {slides.length}
            </p>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div 
        className="fixed bottom-20 left-8 px-3 py-2 rounded-lg bg-white shadow-sm border border-gray-200"
      >
        <p 
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            color: '#9CA3AF',
            fontSize: '12px'
          }}
        >
          Use ← → arrow keys to navigate
        </p>
      </div>
    </div>
  );
}