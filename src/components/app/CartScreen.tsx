'use client';

import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CartItem } from '../../types';
import { Button } from '../ui/button';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';

interface CartScreenProps {
  cart: CartItem[];
  onBack: () => void;
  onCheckout: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CartScreen({ cart, onBack, onCheckout, onUpdateQuantity, onRemoveItem }: CartScreenProps) {
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = 20;
  const total = subtotal + deliveryFee;

  const getNextFriday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7 || 7;
    const friday = new Date(today);
    friday.setDate(today.getDate() + daysUntilFriday);
    return friday.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  const getNextSaturday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7 || 7;
    const saturday = new Date(today);
    saturday.setDate(today.getDate() + daysUntilSaturday);
    return saturday.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
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
          My Cart
        </h1>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 py-20">
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#5A5A5A',
              textAlign: 'center'
            }}
            className="text-lg"
          >
            Your cart is empty. Start shopping to add items!
          </p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="px-4 py-6 pb-64">
            {cart.map((item) => (
              <div 
                key={item.product.id}
                className="bg-white rounded-2xl shadow-sm p-4 mb-3"
              >
                <div className="flex gap-3">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#1A3A2A',
                        fontWeight: 600
                      }}
                      className="text-base mb-1 truncate"
                    >
                      {item.product.name}
                    </h3>
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: '#6B7280',
                        fontSize: '13px'
                      }}
                    >
                      ₹{item.product.price}/{item.product.unit}
                    </p>
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--harvest-green)',
                        fontWeight: 600
                      }}
                      className="mt-2 text-lg"
                    >
                      ₹{item.product.price * item.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-red-500 p-1 rounded-lg hover:bg-red-50 transition-all active:scale-95"
                    >
                      <Trash2 size={18} strokeWidth={2} />
                    </button>
                    <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg p-1 border" style={{ borderColor: '#E5E7EB' }}>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="w-7 h-7 rounded-md flex items-center justify-center bg-white transition-all active:scale-95"
                        style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
                      >
                        <Minus size={14} style={{ color: '#1A3A2A' }} strokeWidth={2.5} />
                      </button>
                      <span 
                        style={{ 
                          fontFamily: 'Manrope, sans-serif',
                          color: '#1A3A2A',
                          minWidth: '20px',
                          textAlign: 'center',
                          fontSize: '14px',
                          fontWeight: 600
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-md flex items-center justify-center bg-white transition-all active:scale-95"
                        style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
                      >
                        <Plus size={14} style={{ color: '#1A3A2A' }} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Info Banner */}
            <div 
              className="mt-6 rounded-2xl p-4"
              style={{ backgroundColor: '#E8F5E9', border: '1px solid #D1E7DD' }}
            >
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                Expected delivery on {getNextSaturday()}.
              </p>
            </div>
          </div>

          {/* Bottom Summary */}
          <div 
            className="fixed bottom-0 left-0 right-0 border-t bg-white p-4 shadow-lg safe-area-inset-bottom"
            style={{ borderColor: '#E5E7EB' }}
          >
            <div className="mb-4 space-y-2">
              <div className="flex justify-between">
                <span 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#6B7280',
                    fontSize: '15px'
                  }}
                >
                  Subtotal
                </span>
                <span 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontSize: '15px',
                    fontWeight: 500
                  }}
                >
                  ₹{subtotal}
                </span>
              </div>
              <div className="flex justify-between">
                <span 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#6B7280',
                    fontSize: '15px'
                  }}
                >
                  Delivery Fee
                </span>
                <span 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontSize: '15px',
                    fontWeight: 500
                  }}
                >
                  ₹{deliveryFee}
                </span>
              </div>
              <div 
                className="flex justify-between pt-3 border-t"
                style={{ borderColor: '#E5E7EB' }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontWeight: 600
                  }}
                  className="text-lg"
                >
                  Total
                </span>
                <span 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--harvest-green)',
                    fontWeight: 700
                  }}
                  className="text-xl"
                >
                  ₹{total}
                </span>
              </div>
            </div>

            <Button
              onClick={onCheckout}
              className="w-full h-12 rounded-xl transition-all active:scale-[0.98] shadow-md"
              style={{
                backgroundColor: 'var(--harvest-green)',
                color: 'white',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600
              }}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
