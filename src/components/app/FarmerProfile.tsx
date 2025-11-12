'use client';

import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Farmer, Product } from '../../types';
import { ArrowLeft } from 'lucide-react';

interface FarmerProfileProps {
  farmer: Farmer;
  products: Product[];
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

export function FarmerProfile({ farmer, products, onBack, onProductClick }: FarmerProfileProps) {
  const farmerProducts = products.filter(p => p.farmer.id === farmer.id);

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
          Farmer Profile
        </h1>
      </div>

      {/* Farmer Hero */}
      <div className="px-4 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg">
            <ImageWithFallback
              src={farmer.photo}
              alt={farmer.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 
            style={{ 
              fontFamily: 'Lora, serif',
              color: 'var(--harvest-green)'
            }}
            className="text-3xl mb-2"
          >
            {farmer.name}
          </h2>
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#8BAF96'
            }}
            className="text-lg"
          >
            {farmer.village}
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="px-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: 'var(--harvest-green)'
            }}
            className="text-lg mb-3"
          >
            About
          </h3>
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#5A5A5A',
              lineHeight: '1.7'
            }}
            className="mb-4"
          >
            {farmer.bio}
          </p>
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#5A5A5A',
              lineHeight: '1.7'
            }}
          >
            {farmer.story}
          </p>
        </div>
      </div>

      {/* Products from this Farmer */}
      {farmerProducts.length > 0 && (
        <div className="px-4 pb-8">
          <h3 
            style={{ 
              fontFamily: 'Lora, serif',
              color: 'var(--harvest-green)'
            }}
            className="text-2xl mb-4"
          >
            Products from this farm
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {farmerProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => onProductClick(product)}
                className="bg-white rounded-xl shadow-sm overflow-hidden text-left transition-all hover:shadow-md"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--harvest-green)',
                      fontSize: '16px'
                    }}
                    className="mb-1"
                  >
                    {product.name}
                  </h4>
                  <p 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#5A5A5A',
                      fontSize: '14px'
                    }}
                  >
                    ₹{product.price}/{product.unit}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
