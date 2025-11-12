'use client';

import { useState, useEffect } from 'react';
import { SplashScreen } from './app/SplashScreen';
import { WelcomeCarouselWrapper } from './app/WelcomeCarouselWrapper';
import { CommunityVerification } from './app/CommunityVerification';
import { DeliveryPreference } from './app/DeliveryPreference';
import { OnboardingComplete } from './app/OnboardingComplete';
import { AuthScreen } from './app/AuthScreen';
import { HomeScreen } from './app/HomeScreen';
import { ProductDetail } from './app/ProductDetail';
import { CartScreen } from './app/CartScreen';
import { CheckoutScreen } from './app/CheckoutScreen';
import { OrderConfirmation } from './app/OrderConfirmation';
import { MyOrdersScreen } from './app/MyOrdersScreen';
import { OrderTracking } from './app/OrderTracking';
import { AccountScreen } from './app/AccountScreen';
import { FarmerProfile } from './app/FarmerProfile';
import { ArrowLeft } from 'lucide-react';

type Screen = 
  | 'splash'
  | 'welcome'
  | 'community'
  | 'delivery'
  | 'complete'
  | 'auth'
  | 'home'
  | 'product'
  | 'cart'
  | 'checkout'
  | 'confirmation'
  | 'orders'
  | 'tracking'
  | 'account'
  | 'farmer';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  farmer: string;
}

interface DeliverySlot {
  date: string;
  time: string;
}

interface MobileAppProps {
  onBackToLanding: () => void;
}

export function MobileApp({ onBackToLanding }: MobileAppProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<DeliverySlot | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [selectedFarmerId, setSelectedFarmerId] = useState<string | null>(null);

  // Add items to cart
  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  // Update cart item quantity
  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== id));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={() => setCurrentScreen('welcome')} />;
      case 'welcome':
        return (
          <WelcomeCarouselWrapper
            onComplete={() => setCurrentScreen('community')}
            onSkip={() => setCurrentScreen('community')}
          />
        );
      case 'community':
        return (
          <CommunityVerification
            onNext={() => setCurrentScreen('delivery')}
            onBack={() => setCurrentScreen('welcome')}
          />
        );
      case 'delivery':
        return (
          <DeliveryPreference
            onNext={() => setCurrentScreen('complete')}
            onBack={() => setCurrentScreen('community')}
          />
        );
      case 'complete':
        return (
          <OnboardingComplete
            onComplete={() => setCurrentScreen('auth')}
          />
        );
      case 'auth':
        return (
          <AuthScreen
            onSuccess={() => setCurrentScreen('home')}
          />
        );
      case 'home':
        return (
          <HomeScreen
            onProductClick={(product) => {
              setSelectedProduct(product);
              setCurrentScreen('product');
            }}
            onCartClick={() => setCurrentScreen('cart')}
            onAccountClick={() => setCurrentScreen('account')}
            onOrdersClick={() => setCurrentScreen('orders')}
            onFarmerClick={(farmerId) => {
              setSelectedFarmerId(farmerId);
              setCurrentScreen('farmer');
            }}
            cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          />
        );
      case 'product':
        return (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setCurrentScreen('home')}
            onAddToCart={(item) => {
              addToCart(item);
              setCurrentScreen('home');
            }}
            onFarmerClick={(farmerId) => {
              setSelectedFarmerId(farmerId);
              setCurrentScreen('farmer');
            }}
          />
        );
      case 'cart':
        return (
          <CartScreen
            cart={cart}
            onBack={() => setCurrentScreen('home')}
            onUpdateQuantity={updateCartQuantity}
            onRemoveItem={removeFromCart}
            onCheckout={() => setCurrentScreen('checkout')}
          />
        );
      case 'checkout':
        return (
          <CheckoutScreen
            cart={cart}
            onBack={() => setCurrentScreen('cart')}
            onConfirm={(slot) => {
              setSelectedSlot(slot);
              setCurrentScreen('confirmation');
            }}
          />
        );
      case 'confirmation':
        return (
          <OrderConfirmation
            cart={cart}
            deliverySlot={selectedSlot}
            onBackToHome={() => {
              setCart([]);
              setCurrentScreen('home');
            }}
            onTrackOrder={() => setCurrentScreen('tracking')}
          />
        );
      case 'orders':
        return (
          <MyOrdersScreen
            onBack={() => setCurrentScreen('home')}
            onOrderClick={(orderId) => {
              setSelectedOrderId(orderId);
              setCurrentScreen('tracking');
            }}
          />
        );
      case 'tracking':
        return (
          <OrderTracking
            orderId={selectedOrderId || 'ORD-2024-001'}
            onBack={() => setCurrentScreen('orders')}
          />
        );
      case 'account':
        return (
          <AccountScreen
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'farmer':
        return (
          <FarmerProfile
            farmerId={selectedFarmerId || '1'}
            onBack={() => setCurrentScreen('home')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50">
      {/* Back to Landing Page Button - Only show after onboarding */}
      {!['splash', 'welcome', 'community', 'delivery', 'complete', 'auth'].includes(currentScreen) && (
        <button
          onClick={onBackToLanding}
          className="fixed top-4 left-4 z-50 px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            color: 'var(--harvest-green)'
          }}
        >
          <ArrowLeft size={18} />
          <span>Back to Landing</span>
        </button>
      )}
      
      {/* Mobile App Container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {renderScreen()}
      </div>
    </div>
  );
}