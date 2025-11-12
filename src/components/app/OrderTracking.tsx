'use client';

import { Order } from '../../types';
import { ArrowLeft, Package, CheckCircle, Truck, MapPin } from 'lucide-react';

interface OrderTrackingProps {
  order: Order;
  onBack: () => void;
}

export function OrderTracking({ order, onBack }: OrderTrackingProps) {
  const getStatusSteps = () => {
    const steps = [
      { status: 'confirmed', label: 'Order Confirmed', icon: CheckCircle, completed: true },
      { status: 'harvesting', label: 'Being Harvested', icon: Package, completed: ['harvesting', 'out-for-delivery', 'delivered'].includes(order.status) },
      { status: 'out-for-delivery', label: 'Out for Delivery', icon: Truck, completed: ['out-for-delivery', 'delivered'].includes(order.status) },
      { status: 'delivered', label: 'Delivered', icon: MapPin, completed: order.status === 'delivered' },
    ];
    return steps;
  };

  const steps = getStatusSteps();

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
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all active:scale-95"
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
          Track Order
        </h1>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24">
        {/* Order Info Card */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6 border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#6B7280',
                  fontSize: '13px',
                  fontWeight: 500
                }}
              >
                Order #{order.id}
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A',
                  fontWeight: 600
                }}
                className="text-2xl mt-0.5"
              >
                ₹{order.total}
              </p>
            </div>
            <div 
              className="px-4 py-2 rounded-lg"
              style={{ 
                backgroundColor: order.status === 'delivered' ? '#E8F5E9' : '#FEF3C7',
                border: `1px solid ${order.status === 'delivered' ? '#C8E6C9' : '#FDE68A'}`
              }}
            >
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: order.status === 'delivered' ? 'var(--harvest-green)' : '#92400E',
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'capitalize'
                }}
              >
                {order.status === 'out-for-delivery' ? 'Out for Delivery' : order.status.replace('-', ' ')}
              </p>
            </div>
          </div>

          {/* Expected Delivery */}
          {order.status !== 'delivered' && (
            <div 
              className="rounded-xl p-4 mt-4"
              style={{ backgroundColor: '#F0F9F4', border: '1px solid #D1E7DD' }}
            >
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#6B7280',
                  fontSize: '13px',
                  marginBottom: '4px'
                }}
              >
                Expected Delivery
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#1A3A2A',
                  fontWeight: 600,
                  fontSize: '16px'
                }}
              >
                {order.deliveryDate}
              </p>
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#6B7280',
                  fontSize: '14px',
                  marginTop: '2px'
                }}
              >
                {order.deliveryWindow}
              </p>
            </div>
          )}
        </div>

        {/* Tracking Steps */}
        <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
          <h3 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#1A3A2A',
              fontWeight: 600,
              fontSize: '18px',
              marginBottom: '24px'
            }}
          >
            Order Status
          </h3>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.status} className="flex gap-4">
                  {/* Icon & Line */}
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                      style={{ 
                        backgroundColor: step.completed ? 'var(--harvest-green)' : '#E5E7EB',
                      }}
                    >
                      <Icon 
                        size={22} 
                        color={step.completed ? 'white' : '#9CA3AF'} 
                        strokeWidth={2.5}
                      />
                    </div>
                    {index < steps.length - 1 && (
                      <div 
                        className="w-0.5 h-12 mt-2"
                        style={{ 
                          backgroundColor: step.completed ? 'var(--harvest-green)' : '#E5E7EB'
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <p 
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        color: step.completed ? '#1A3A2A' : '#9CA3AF',
                        fontWeight: step.completed ? 600 : 500,
                        fontSize: '16px'
                      }}
                    >
                      {step.label}
                    </p>
                    {step.status === order.status && (
                      <p 
                        style={{ 
                          fontFamily: 'Manrope, sans-serif',
                          color: '#6B7280',
                          fontSize: '14px',
                          marginTop: '4px'
                        }}
                      >
                        {step.status === 'confirmed' && `Your order is confirmed and scheduled for harvest`}
                        {step.status === 'harvesting' && `Farmers are harvesting your fresh produce now`}
                        {step.status === 'out-for-delivery' && `Your order is on its way to you`}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mt-6 border border-gray-100">
          <h3 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              color: '#1A3A2A',
              fontWeight: 600,
              fontSize: '18px',
              marginBottom: '16px'
            }}
          >
            Items ({order.items.length})
          </h3>

          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.product.id} className="flex justify-between items-start">
                <div className="flex-1">
                  <p 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#1A3A2A',
                      fontWeight: 500,
                      fontSize: '15px'
                    }}
                  >
                    {item.product.name}
                  </p>
                  <p 
                    style={{ 
                      fontFamily: 'Manrope, sans-serif',
                      color: '#6B7280',
                      fontSize: '14px',
                      marginTop: '2px'
                    }}
                  >
                    Qty: {item.quantity}
                  </p>
                </div>
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1A3A2A',
                    fontWeight: 600,
                    fontSize: '15px'
                  }}
                >
                  ₹{item.product.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
