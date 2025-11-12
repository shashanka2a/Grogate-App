'use client';

import { Button } from '../ui/button';
import { CheckCircle } from 'lucide-react';

interface OrderConfirmationProps {
  orderNumber: string;
  onViewOrders: () => void;
  onContinueShopping: () => void;
}

export function OrderConfirmation({ orderNumber, onViewOrders, onContinueShopping }: OrderConfirmationProps) {
  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      <div className="max-w-md text-center">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce"
          style={{ backgroundColor: '#E8F5E9' }}
        >
          <CheckCircle size={56} style={{ color: 'var(--harvest-green)' }} strokeWidth={1.5} />
        </div>

        <h2 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'var(--harvest-green)'
          }}
          className="text-3xl mb-4"
        >
          Success! Your order is confirmed.
        </h2>

        <div 
          className="bg-white rounded-xl shadow-sm p-6 mb-6"
        >
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#8BAF96',
              fontSize: '14px'
            }}
            className="mb-2"
          >
            Order Number
          </p>
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: 'var(--harvest-green)'
            }}
            className="text-2xl mb-4"
          >
            #{orderNumber}
          </p>
          <div 
            className="pt-4 border-t"
            style={{ borderColor: '#E8E8E8' }}
          >
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#5A5A5A',
                lineHeight: '1.7',
                fontSize: '14px'
              }}
            >
              What's next? Our farmers will now prepare to harvest your items. You'll be notified when your order is on its way.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={onViewOrders}
            className="w-full h-12 rounded-xl transition-all active:scale-[0.98] shadow-md"
            style={{
              backgroundColor: 'var(--harvest-green)',
              color: 'white',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600
            }}
          >
            View My Orders
          </Button>
          <Button
            onClick={onContinueShopping}
            className="w-full h-12 rounded-xl transition-all active:scale-[0.98]"
            style={{
              backgroundColor: 'white',
              color: 'var(--harvest-green)',
              border: '2px solid var(--harvest-green)',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600
            }}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
