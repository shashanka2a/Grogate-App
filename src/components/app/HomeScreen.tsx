'use client';

import { ImageWithFallback } from '../figma/ImageWithFallback';
import { User, Product, CartItem } from '../../types';
import { ShoppingCart, User as UserIcon, Package } from 'lucide-react';

interface HomeScreenProps {
  user: User;
  products: Product[];
  cart: CartItem[];
  onProductClick: (product: Product) => void;
  onCartClick: () => void;
  onOrdersClick: () => void;
  onAccountClick: () => void;
}

export function HomeScreen({ 
  user, 
  products, 
  cart,
  onProductClick, 
  onCartClick,
  onOrdersClick,
  onAccountClick
}: HomeScreenProps) {
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const vegetables = products.filter(p => p.category === 'vegetables' && p.availableThisWeek);
  const rice = products.filter(p => p.category === 'rice' && p.availableThisWeek);

  return (
    <div 
      className="fixed inset-0 overflow-y-auto"
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      {/* Header */}
      <div 
        className="sticky top-0 z-10 px-4 py-4"
        style={{ backgroundColor: 'var(--harvest-green)' }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px'
              }}
            >
              Welcome back,
            </p>
            <h1 
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'white'
              }}
              className="text-2xl"
            >
              {user.name}
            </h1>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={onCartClick}
              className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
            >
              <ShoppingCart size={20} color="white" />
              {cartItemCount > 0 && (
                <div 
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{ 
                    backgroundColor: '#B8785D',
                    color: 'white',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600
                  }}
                >
                  {cartItemCount}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-24">
        {/* Hero Banner */}
        <div 
          className="mt-4 rounded-2xl p-6 shadow-sm"
          style={{ 
            background: 'linear-gradient(135deg, #2D5F3F 0%, #1A3A2A 100%)'
          }}
        >
          <h2 
            style={{ 
              fontFamily: 'Lora, serif',
              color: 'white',
              lineHeight: '1.3'
            }}
            className="text-2xl mb-2"
          >
            This Week's Harvest
          </h2>
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '14px',
              lineHeight: '1.5'
            }}
          >
            Fresh produce available now. Order today, harvested tomorrow.
          </p>
        </div>

        {/* Seasonal Vegetables */}
        <div className="mt-8">
          <h3 
            style={{ 
              fontFamily: 'Lora, serif',
              color: 'var(--harvest-green)'
            }}
            className="text-2xl mb-4"
          >
            Seasonal Vegetables
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {vegetables.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg active:scale-[0.98]"
                style={{ position: 'relative' }}
              >
                <button
                  onClick={() => onProductClick(product)}
                  className="w-full text-left"
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-3 pb-12 pr-12">
                    <h4 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#1A3A2A',
                        fontSize: '15px',
                        fontWeight: 600
                      }}
                      className="mb-1 line-clamp-1"
                    >
                      {product.name}
                    </h4>
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--harvest-green)',
                        fontSize: '16px',
                        fontWeight: 600
                      }}
                    >
                      ₹{product.price}<span style={{ fontSize: '13px', color: '#6B7280', fontWeight: 400 }}>/{product.unit}</span>
                    </p>
                  </div>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onProductClick(product);
                  }}
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 hover:shadow-xl"
                  style={{ 
                    backgroundColor: 'var(--harvest-green)',
                    transform: 'translateZ(0)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Rice */}
        {rice.length > 0 && (
          <div className="mt-8">
            <h3 
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'var(--harvest-green)'
              }}
              className="text-2xl mb-4"
            >
              Premium Rice
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {rice.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg active:scale-[0.98]"
                  style={{ position: 'relative' }}
                >
                  <button
                    onClick={() => onProductClick(product)}
                    className="w-full text-left"
                  >
                    <div className="aspect-square w-full overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-3 pb-12 pr-12">
                      <h4 
                        style={{ 
                          fontFamily: 'Manrope, sans-serif',
                          color: '#1A3A2A',
                          fontSize: '15px',
                          fontWeight: 600
                        }}
                        className="mb-1 line-clamp-1"
                      >
                        {product.name}
                      </h4>
                      <p 
                        style={{ 
                          fontFamily: 'Manrope, sans-serif',
                          color: 'var(--harvest-green)',
                          fontSize: '16px',
                          fontWeight: 600
                        }}
                      >
                        ₹{product.price}<span style={{ fontSize: '13px', color: '#6B7280', fontWeight: 400 }}>/{product.unit}</span>
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onProductClick(product);
                    }}
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 hover:shadow-xl"
                    style={{ 
                      backgroundColor: 'var(--harvest-green)',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}


      </div>

      {/* Bottom Navigation */}
      <div 
        className="fixed bottom-0 left-0 right-0 border-t bg-white shadow-lg"
        style={{ borderColor: '#E5E7EB' }}
      >
        <div className="flex items-center justify-around py-2 safe-area-inset-bottom">
          <button 
            className="flex flex-col items-center gap-1 py-2 px-6 rounded-xl transition-all active:scale-95"
            style={{ color: 'var(--harvest-green)' }}
          >
            <Package size={24} strokeWidth={2.5} />
            <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '11px', fontWeight: 600 }}>
              Shop
            </span>
          </button>
          <button 
            onClick={onOrdersClick}
            className="flex flex-col items-center gap-1 py-2 px-6 rounded-xl transition-all active:scale-95 hover:bg-gray-50"
            style={{ color: '#6B7280' }}
          >
            <ShoppingCart size={24} strokeWidth={2} />
            <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '11px', fontWeight: 500 }}>
              Orders
            </span>
          </button>
          <button 
            onClick={onAccountClick}
            className="flex flex-col items-center gap-1 py-2 px-6 rounded-xl transition-all active:scale-95 hover:bg-gray-50"
            style={{ color: '#6B7280' }}
          >
            <UserIcon size={24} strokeWidth={2} />
            <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '11px', fontWeight: 500 }}>
              Account
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
