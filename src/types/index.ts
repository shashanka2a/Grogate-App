export interface User {
  id: string;
  name: string;
  email: string;
  community: string;
  address: string;
  deliveryPreference: 'doorstep' | 'pickup';
}

export interface Farmer {
  id: string;
  name: string;
  village: string;
  photo: string;
  bio: string;
  story: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'vegetables' | 'rice' | 'specialty';
  price: number;
  unit: string;
  image: string;
  farmer: Farmer;
  description: string;
  availableThisWeek: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'confirmed' | 'harvesting' | 'out-for-delivery' | 'delivered';
  harvestDate: string;
  deliveryDate: string;
  deliveryWindow: string;
  createdAt: string;
}

export type Screen = 
  | 'splash'
  | 'welcome'
  | 'auth'
  | 'community-verification'
  | 'delivery-preference'
  | 'onboarding-complete'
  | 'home'
  | 'category'
  | 'product-detail'
  | 'farmer-profile'
  | 'cart'
  | 'checkout'
  | 'order-confirmation'
  | 'my-orders'
  | 'account'
  | 'order-tracking';

export interface AppState {
  currentScreen: Screen;
  user: User | null;
  cart: CartItem[];
  orders: Order[];
  selectedProduct: Product | null;
  selectedFarmer: Farmer | null;
  selectedCategory: string | null;
  selectedOrder: Order | null;
  isAuthenticated: boolean;
  welcomeStep: number;
}
