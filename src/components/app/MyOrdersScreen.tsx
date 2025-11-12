'use client';

import { Order } from '../../types';
import { ArrowLeft, Package, CheckCircle, Truck, Clock, ShoppingCart, User as UserIcon } from 'lucide-react';

interface MyOrdersScreenProps {
  orders: Order[];
  onBack: () => void;
  onAccountClick: () => void;
  onTrackOrder: (order: Order) => void;
}

export function MyOrdersScreen({ orders, onBack, onAccountClick, onTrackOrder }: MyOrdersScreenProps) {
  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'confirmed':
        return <Clock size={20} />;
      case 'harvesting':
        return <Package size={20} />;
      case 'out-for-delivery':
        return <Truck size={20} />;
      case 'delivered':
        return <CheckCircle size={20} />;
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'confirmed':
        return 'Order Confirmed';
      case 'harvesting':
        return 'Being Harvested';
      case 'out-for-delivery':
        return 'Out for Delivery';
      case 'delivered':
        return 'Delivered';
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'confirmed':
        return '#8BAF96';
      case 'harvesting':
        return '#D4A574';
      case 'out-for-delivery':
        return '#5A8A6B';
      case 'delivered':
        return 'var(--harvest-green)';
    }
  };

  const upcomingOrders = orders.filter(o => o.status !== 'delivered');
  const pastOrders = orders.filter(o => o.status === 'delivered');

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
          My Orders
        </h1>
      </div>

      <div className="px-4 py-6 pb-24">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Package size={64} style={{ color: '#D8E5DD' }} />
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#5A5A5A',
                textAlign: 'center',
                marginTop: '1rem'
              }}
              className="text-lg"
            >
              No orders yet. Start shopping to place your first order!
            </p>
          </div>
        ) : (
          <>
            {/* Upcoming Orders */}
            {upcomingOrders.length > 0 && (
              <div className="mb-8">
                <h2 
                  style={{ 
                    fontFamily: 'Lora, serif',
                    color: 'var(--harvest-green)'
                  }}
                  className="text-2xl mb-4"
                >
                  Upcoming Orders
                </h2>
                <div className="space-y-4">
                  {upcomingOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100"
                    >
                      <div className="flex items-start justify-between mb-3">
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
                            className="text-lg mt-0.5"
                          >
                            ₹{order.total}
                          </p>
                        </div>
                        <div 
                          className="flex items-center gap-2 px-3 py-1 rounded-full"
                          style={{ backgroundColor: `${getStatusColor(order.status)}20` }}
                        >
                          <span style={{ color: getStatusColor(order.status) }}>
                            {getStatusIcon(order.status)}
                          </span>
                          <span 
                            style={{ 
                              fontFamily: 'Manrope, sans-serif',
                              color: getStatusColor(order.status),
                              fontSize: '14px'
                            }}
                          >
                            {getStatusText(order.status)}
                          </span>
                        </div>
                      </div>

                      <div 
                        className="pt-3 border-t space-y-2"
                        style={{ borderColor: '#E8E8E8' }}
                      >
                        {order.items.map((item) => (
                          <p 
                            key={item.product.id}
                            style={{ 
                              fontFamily: 'Manrope, sans-serif',
                              color: '#5A5A5A',
                              fontSize: '14px'
                            }}
                          >
                            {item.product.name} x {item.quantity}
                          </p>
                        ))}
                      </div>

                      <div 
                        className="mt-3 pt-3 border-t flex items-center justify-between"
                        style={{ borderColor: '#E8E8E8' }}
                      >
                        <p 
                          style={{ 
                            fontFamily: 'Manrope, sans-serif',
                            color: '#6B7280',
                            fontSize: '14px'
                          }}
                        >
                          {order.status === 'confirmed' && `Order confirmed`}
                          {order.status === 'harvesting' && `Being harvested`}
                          {order.status === 'out-for-delivery' && `${order.deliveryWindow}`}
                        </p>
                        <button
                          onClick={() => onTrackOrder(order)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all active:scale-95"
                          style={{ 
                            backgroundColor: '#E8F5E9',
                            color: 'var(--harvest-green)',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: '13px',
                            fontWeight: 600
                          }}
                        >
                          Track Order
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Order History */}
            {pastOrders.length > 0 && (
              <div>
                <h2 
                  style={{ 
                    fontFamily: 'Lora, serif',
                    color: 'var(--harvest-green)'
                  }}
                  className="text-2xl mb-4"
                >
                  Order History
                </h2>
                <div className="space-y-4">
                  {pastOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100"
                    >
                      <div className="flex items-start justify-between mb-3">
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
                            className="text-lg mt-0.5"
                          >
                            ₹{order.total}
                          </p>
                        </div>
                        <div 
                          className="flex items-center gap-2 px-3 py-1 rounded-full"
                          style={{ backgroundColor: `${getStatusColor(order.status)}20` }}
                        >
                          <span style={{ color: getStatusColor(order.status) }}>
                            {getStatusIcon(order.status)}
                          </span>
                          <span 
                            style={{ 
                              fontFamily: 'Manrope, sans-serif',
                              color: getStatusColor(order.status),
                              fontSize: '14px'
                            }}
                          >
                            {getStatusText(order.status)}
                          </span>
                        </div>
                      </div>

                      <div 
                        className="pt-3 border-t space-y-2"
                        style={{ borderColor: '#E8E8E8' }}
                      >
                        {order.items.map((item) => (
                          <p 
                            key={item.product.id}
                            style={{ 
                              fontFamily: 'Manrope, sans-serif',
                              color: '#5A5A5A',
                              fontSize: '14px'
                            }}
                          >
                            {item.product.name} x {item.quantity}
                          </p>
                        ))}
                      </div>

                      <div 
                        className="mt-3 pt-3 border-t"
                        style={{ borderColor: '#E8E8E8' }}
                      >
                        <p 
                          style={{ 
                            fontFamily: 'Manrope, sans-serif',
                            color: '#8BAF96',
                            fontSize: '14px'
                          }}
                        >
                          Delivered on {order.deliveryDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
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
            className="flex flex-col items-center gap-1 py-2 px-6 rounded-xl transition-all active:scale-95"
            style={{ color: 'var(--harvest-green)' }}
          >
            <ShoppingCart size={24} strokeWidth={2.5} />
            <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '11px', fontWeight: 600 }}>
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
