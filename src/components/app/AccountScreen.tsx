'use client';

import { User } from '../../types';
import { User as UserIcon, MapPin, CreditCard, HelpCircle, LogOut, Package, ShoppingCart } from 'lucide-react';

interface AccountScreenProps {
  user: User;
  onBack: () => void;
  onOrdersClick: () => void;
}

export function AccountScreen({ user, onBack, onOrdersClick }: AccountScreenProps) {
  const menuItems = [
    { icon: UserIcon, label: 'Profile Details', color: 'var(--harvest-green)' },
    { icon: MapPin, label: 'Delivery Address', color: '#8BAF96' },
    { icon: CreditCard, label: 'Payment Methods', color: '#D4A574' },
    { icon: HelpCircle, label: 'Help & Support', color: '#5A8A6B' }
  ];

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
        <h1 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'white'
          }}
          className="text-2xl"
        >
          Account
        </h1>
      </div>

      <div className="px-4 py-6 pb-24">
        {/* User Profile Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 text-center">
          <div 
            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ backgroundColor: '#E8F5E9' }}
          >
            <UserIcon size={40} style={{ color: 'var(--harvest-green)' }} />
          </div>
          <h2 
            style={{ 
              fontFamily: 'Lora, serif',
              color: 'var(--harvest-green)'
            }}
            className="text-2xl mb-2"
          >
            {user.name}
          </h2>
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#5A5A5A'
            }}
          >
            {user.email}
          </p>
          <div 
            className="mt-4 pt-4 border-t"
            style={{ borderColor: '#E8E8E8' }}
          >
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#8BAF96',
                fontSize: '14px'
              }}
            >
              Community
            </p>
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--harvest-green)'
              }}
              className="mt-1"
            >
              {user.community}
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3 mb-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="w-full bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 text-left transition-all hover:shadow-md"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#E8F5E9' }}
                >
                  <Icon size={24} style={{ color: item.color }} />
                </div>
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--harvest-green)'
                  }}
                  className="text-lg"
                >
                  {item.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Logout Button */}
        <button
          className="w-full bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 justify-center"
          style={{ border: '2px solid #FEE2E2' }}
        >
          <LogOut size={20} style={{ color: '#EF4444' }} />
          <p 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#EF4444'
            }}
            className="text-lg"
          >
            Log Out
          </p>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div 
        className="fixed bottom-0 left-0 right-0 border-t bg-white shadow-lg"
        style={{ borderColor: '#E5E7EB' }}
      >
        <div className="flex items-center justify-around py-2 safe-area-inset-bottom">
          <button 
            onClick={onBack}
            className="flex flex-col items-center gap-1 py-2 px-6 rounded-xl transition-all active:scale-95 hover:bg-gray-50"
            style={{ color: '#6B7280' }}
          >
            <Package size={24} strokeWidth={2} />
            <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '11px', fontWeight: 500 }}>
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
            className="flex flex-col items-center gap-1 py-2 px-6 rounded-xl transition-all active:scale-95"
            style={{ color: 'var(--harvest-green)' }}
          >
            <UserIcon size={24} strokeWidth={2.5} />
            <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '11px', fontWeight: 600 }}>
              Account
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
