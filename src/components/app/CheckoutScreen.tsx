'use client';

import { useState } from 'react';
import { User, CartItem } from '../../types';
import { Button } from '../ui/button';
import { ArrowLeft, MapPin, CreditCard } from 'lucide-react';

interface CheckoutScreenProps {
  user: User;
  cart: CartItem[];
  onBack: () => void;
  onPlaceOrder: (deliverySlot: string) => void;
}

export function CheckoutScreen({ user, cart, onBack, onPlaceOrder }: CheckoutScreenProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');
  const [selectedSlot, setSelectedSlot] = useState('4:00 PM - 6:00 PM');
  
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = 20;
  const total = subtotal + deliveryFee;

  const deliverySlots = [
    { time: '8:00 AM - 10:00 AM', icon: '🌅' },
    { time: '10:00 AM - 12:00 PM', icon: '☀️' },
    { time: '2:00 PM - 4:00 PM', icon: '🌤️' },
    { time: '4:00 PM - 6:00 PM', icon: '🌆' },
    { time: '6:00 PM - 8:00 PM', icon: '🌙' },
  ];

  const getNextSaturday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7 || 7;
    const saturday = new Date(today);
    saturday.setDate(today.getDate() + daysUntilSaturday);
    return saturday.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
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
          Checkout
        </h1>
      </div>

      <div className="px-4 py-6 pb-32">
        {/* Delivery Address */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4 border border-gray-100">
          <div className="flex items-start gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#E8F5E9' }}
            >
              <MapPin size={20} style={{ color: 'var(--harvest-green)' }} />
            </div>
            <div className="flex-1">
              <h3 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A',
                  fontWeight: 600
                }}
                className="text-lg mb-2"
              >
                Delivery Address
              </h3>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#4B5563',
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}
              >
                {user.address}<br />
                {user.community}
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#6B7280',
                  fontSize: '14px',
                  marginTop: '0.5rem'
                }}
              >
                {user.deliveryPreference === 'doorstep' ? '🚪 Doorstep delivery' : '🏢 Community clubhouse pickup'}
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Window */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4 border border-gray-100">
          <h3 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#1A3A2A',
              fontWeight: 600
            }}
            className="text-lg mb-3"
          >
            Delivery Window
          </h3>
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#1A3A2A',
              fontWeight: 500,
              marginBottom: '12px'
            }}
          >
            {getNextSaturday()}
          </p>
          
          <div className="space-y-2">
            {deliverySlots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => setSelectedSlot(slot.time)}
                className="w-full p-3 rounded-xl border-2 text-left transition-all active:scale-[0.99]"
                style={{
                  borderColor: selectedSlot === slot.time ? 'var(--harvest-green)' : '#E5E7EB',
                  backgroundColor: selectedSlot === slot.time ? '#F0F9F4' : 'white'
                }}
              >
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontWeight: selectedSlot === slot.time ? 600 : 500,
                    fontSize: '15px'
                  }}
                >
                  {slot.icon} {slot.time}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4 border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#E8F5E9' }}
            >
              <CreditCard size={20} style={{ color: 'var(--harvest-green)' }} />
            </div>
            <div className="flex-1">
              <h3 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A',
                  fontWeight: 600
                }}
                className="text-lg"
              >
                Payment Method
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setPaymentMethod('card')}
              className="w-full p-4 rounded-xl border-2 text-left transition-all active:scale-[0.99]"
              style={{
                borderColor: paymentMethod === 'card' ? 'var(--harvest-green)' : '#E5E7EB',
                backgroundColor: paymentMethod === 'card' ? '#F0F9F4' : 'white'
              }}
            >
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A',
                  fontWeight: 600
                }}
              >
                💳 Credit/Debit Card
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#6B7280',
                  fontSize: '14px',
                  marginTop: '0.25rem'
                }}
              >
                Pay securely with your saved card
              </p>
            </button>

            <button
              onClick={() => setPaymentMethod('cod')}
              className="w-full p-4 rounded-xl border-2 text-left transition-all active:scale-[0.99]"
              style={{
                borderColor: paymentMethod === 'cod' ? 'var(--harvest-green)' : '#E5E7EB',
                backgroundColor: paymentMethod === 'cod' ? '#F0F9F4' : 'white'
              }}
            >
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A',
                  fontWeight: 600
                }}
              >
                💵 Cash on Delivery
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#6B7280',
                  fontSize: '14px',
                  marginTop: '0.25rem'
                }}
              >
                Pay when you receive your order
              </p>
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100">
          <h3 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#1A3A2A',
              fontWeight: 600
            }}
            className="text-lg mb-4"
          >
            Order Summary
          </h3>
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.product.id} className="flex justify-between">
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#5A5A5A',
                    fontSize: '14px'
                  }}
                >
                  {item.product.name} x {item.quantity}
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontSize: '14px'
                  }}
                >
                  ₹{item.product.price * item.quantity}
                </p>
              </div>
            ))}
            <div 
              className="flex justify-between pt-3 border-t"
              style={{ borderColor: '#E8E8E8' }}
            >
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#5A5A5A'
                }}
              >
                Subtotal
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A'
                }}
              >
                ₹{subtotal}
              </p>
            </div>
            <div className="flex justify-between">
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#5A5A5A'
                }}
              >
                Delivery Fee
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A'
                }}
              >
                ₹{deliveryFee}
              </p>
            </div>
            <div 
              className="flex justify-between pt-3 border-t"
              style={{ borderColor: '#E8E8E8' }}
            >
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--harvest-green)'
                }}
                className="text-lg"
              >
                Total
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--harvest-green)'
                }}
                className="text-lg"
              >
                ₹{total}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="fixed bottom-0 left-0 right-0 border-t bg-white p-4 shadow-lg safe-area-inset-bottom"
        style={{ borderColor: '#E5E7EB' }}
      >
        <Button
          onClick={() => onPlaceOrder(selectedSlot)}
          className="w-full h-12 rounded-xl transition-all active:scale-[0.98] shadow-md"
          style={{
            backgroundColor: 'var(--harvest-green)',
            color: 'white',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 600,
            fontSize: '16px'
          }}
        >
          Place Order · ₹{total}
        </Button>
      </div>
    </div>
  );
}
