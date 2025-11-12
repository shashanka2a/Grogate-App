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
import { CartItem as CartItemType } from '@/types';

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
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<DeliverySlot | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [selectedFarmerId, setSelectedFarmerId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('User');
  const [communityName, setCommunityName] = useState<string>('');

  // Add items to cart
  const addToCart = (product: any, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.product.id === product.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.product.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };

  // Update cart item quantity
  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
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
            userName={userName}
            onComplete={(community, address) => {
              setCommunityName(community);
              setCurrentScreen('delivery');
            }}
          />
        );
      case 'delivery':
        return (
          <DeliveryPreference
            communityName={communityName}
            onComplete={(preference) => {
              setCurrentScreen('complete');
            }}
          />
        );
      case 'complete':
        return (
          <OnboardingComplete
            userName={userName}
            onComplete={() => setCurrentScreen('auth')}
          />
        );
      case 'auth':
        return (
          <AuthScreen
            onSignUp={(email, password, name) => {
              setUserName(name);
              setCurrentScreen('home');
            }}
          />
        );
      case 'home':
        return (
          <HomeScreen
            user={{ id: '1', name: userName, email: '', community: communityName, address: '', deliveryPreference: 'doorstep' }}
            products={[]}
            cart={cart}
            onProductClick={(product) => {
              setSelectedProduct(product);
              setCurrentScreen('product');
            }}
            onCartClick={() => setCurrentScreen('cart')}
            onAccountClick={() => setCurrentScreen('account')}
            onOrdersClick={() => setCurrentScreen('orders')}
          />
        );
      case 'product':
        return (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setCurrentScreen('home')}
            onAddToCart={(product, quantity) => {
              addToCart(product, quantity);
              setCurrentScreen('home');
            }}
            onViewFarmer={(farmer) => {
              setSelectedFarmerId(farmer.id);
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
            user={{ id: '1', name: userName, email: '', community: communityName, address: '', deliveryPreference: 'doorstep' }}
            cart={cart}
            onBack={() => setCurrentScreen('cart')}
            onPlaceOrder={(slot) => {
              setSelectedSlot({ date: '', time: slot });
              setCurrentScreen('confirmation');
            }}
          />
        );
      case 'confirmation':
        return (
          <OrderConfirmation
            orderNumber={`ORD-${Date.now()}`}
            onViewOrders={() => setCurrentScreen('orders')}
            onContinueShopping={() => {
              setCart([]);
              setCurrentScreen('home');
            }}
          />
        );
      case 'orders':
        return (
          <MyOrdersScreen
            orders={[]}
            onBack={() => setCurrentScreen('home')}
            onAccountClick={() => setCurrentScreen('account')}
            onTrackOrder={(order) => {
              setSelectedOrderId(order.id);
              setCurrentScreen('tracking');
            }}
          />
        );
      case 'tracking':
        return (
          <OrderTracking
            order={{
              id: selectedOrderId || 'ORD-2024-001',
              items: [],
              total: 0,
              status: 'confirmed',
              harvestDate: '',
              deliveryDate: '',
              deliveryWindow: '',
              createdAt: new Date().toISOString()
            }}
            onBack={() => setCurrentScreen('orders')}
          />
        );
      case 'account':
        return (
          <AccountScreen
            user={{ id: '1', name: userName, email: '', community: communityName, address: '', deliveryPreference: 'doorstep' }}
            onBack={() => setCurrentScreen('home')}
            onOrdersClick={() => setCurrentScreen('orders')}
          />
        );
      case 'farmer':
        return (
          <FarmerProfile
            farmer={{
              id: selectedFarmerId || '1',
              name: 'Farmer',
              village: '',
              photo: '',
              bio: '',
              story: ''
            }}
            products={[]}
            onBack={() => setCurrentScreen('home')}
            onProductClick={(product) => {
              setSelectedProduct(product);
              setCurrentScreen('product');
            }}
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