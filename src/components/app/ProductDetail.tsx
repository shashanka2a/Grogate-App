'use client';

import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Product } from '../../types';
import { Button } from '../ui/button';
import { ArrowLeft, Minus, Plus } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewFarmer: (farmer: any) => void;
}

export function ProductDetail({ product, onBack, onAddToCart, onViewFarmer }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div 
      className="fixed inset-0 overflow-y-auto"
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      {/* Header */}
      <div 
        className="sticky top-0 z-10 px-4 py-4 flex items-center gap-4"
        style={{ backgroundColor: 'var(--harvest-green)' }}
      >
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
        >
          <ArrowLeft size={20} color="white" />
        </button>
        <h1 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'white'
          }}
          className="text-xl"
        >
          Product Details
        </h1>
      </div>

      {/* Product Image */}
      <div className="w-full aspect-square overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-32">
        <h2 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'var(--harvest-green)'
          }}
          className="text-3xl mb-2"
        >
          {product.name}
        </h2>

        <p 
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            color: '#1A3A2A'
          }}
          className="text-2xl mb-4"
        >
          ₹{product.price} <span style={{ fontSize: '16px', color: '#5A5A5A' }}>/ {product.unit}</span>
        </p>

        {/* Farmer Info */}
        <button
          onClick={() => onViewFarmer(product.farmer)}
          className="w-full bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4 mb-6 text-left transition-all hover:shadow-md active:scale-[0.99]"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-offset-2" style={{ '--tw-ring-color': '#E8F5E9' } as React.CSSProperties}>
            <ImageWithFallback
              src={product.farmer.photo}
              alt={product.farmer.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#6B7280',
                fontSize: '13px'
              }}
              className="mb-0.5"
            >
              Harvested by
            </p>
            <h4 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                fontSize: '16px',
                fontWeight: 600
              }}
            >
              {product.farmer.name}
            </h4>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8BAF96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Description */}
        <div className="mb-6">
          <h3 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#1A3A2A',
              fontWeight: 600
            }}
            className="text-lg mb-3"
          >
            About this product
          </h3>
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#4B5563',
              lineHeight: '1.8',
              fontSize: '15px'
            }}
          >
            {product.description}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="fixed bottom-0 left-0 right-0 border-t bg-white p-4 shadow-lg safe-area-inset-bottom"
        style={{ borderColor: '#E5E7EB' }}
      >
        <div className="flex items-center gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1.5 border" style={{ borderColor: '#E5E7EB' }}>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all active:scale-95"
              style={{ backgroundColor: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
            >
              <Minus size={16} style={{ color: '#1A3A2A' }} strokeWidth={2.5} />
            </button>
            <span 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                minWidth: '28px',
                textAlign: 'center',
                fontWeight: 600
              }}
              className="text-lg"
            >
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all active:scale-95"
              style={{ backgroundColor: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
            >
              <Plus size={16} style={{ color: '#1A3A2A' }} strokeWidth={2.5} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="flex-1 h-12 rounded-xl transition-all active:scale-[0.98] shadow-md"
            style={{
              backgroundColor: 'var(--harvest-green)',
              color: 'white',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600
            }}
          >
            Add to Cart · ₹{product.price * quantity}
          </Button>
        </div>
      </div>
    </div>
  );
}
