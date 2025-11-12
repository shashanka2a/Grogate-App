import { Farmer, Product } from '../types';

export const farmers: Farmer[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    village: 'Greenfield Valley',
    photo: 'https://images.unsplash.com/photo-1760445412155-41a14ebaf20a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBwb3J0cmFpdCUyMG9yZ2FuaWMlMjBmYXJtfGVufDF8fHx8MTc2MjYwNzE3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Third-generation organic farmer specializing in heirloom tomatoes and leafy greens.',
    story: 'Rajesh has been farming organically for over 15 years, following traditional methods passed down through generations. His farm practices sustainable agriculture and uses only natural fertilizers.'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    village: 'Sunset Farms',
    photo: 'https://images.unsplash.com/photo-1760445412155-41a14ebaf20a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBwb3J0cmFpdCUyMG9yZ2FuaWMlMjBmYXJtfGVufDF8fHx8MTc2MjYwNzE3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Award-winning rice cultivator known for premium aromatic varieties.',
    story: 'Priya transformed her family\'s traditional rice farm into a model of sustainable agriculture, winning multiple awards for quality and innovation.'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    category: 'vegetables',
    price: 60,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1757332334678-e76d258c49c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRvbWF0b2VzJTIwb3JnYW5pY3xlbnwxfHx8fDE3NjI2MDcxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    farmer: farmers[0],
    description: 'Juicy, vine-ripened organic tomatoes. Perfect for salads and cooking. Harvested at peak ripeness for maximum flavor.',
    availableThisWeek: true
  },
  {
    id: '2',
    name: 'Fresh Spinach',
    category: 'vegetables',
    price: 40,
    unit: 'bunch',
    image: 'https://images.unsplash.com/photo-1653842648037-2e449847a78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWNoJTIwbGVhZnklMjBncmVlbnN8ZW58MXx8fHwxNzYyNTczODY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    farmer: farmers[0],
    description: 'Nutrient-rich, tender spinach leaves. Great for smoothies, salads, and cooking. Packed with iron and vitamins.',
    availableThisWeek: true
  },
  {
    id: '3',
    name: 'Organic Carrots',
    category: 'vegetables',
    price: 50,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1717959159782-98c42b1d4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJyb3RzJTIwZnJlc2glMjB2ZWdldGFibGVzfGVufDF8fHx8MTc2MjYwNzE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    farmer: farmers[0],
    description: 'Sweet, crunchy organic carrots. Rich in beta-carotene and perfect for snacking or cooking.',
    availableThisWeek: true
  },
  {
    id: '4',
    name: 'Premium Basmati Rice',
    category: 'rice',
    price: 120,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW5zJTIwYnVybGFwJTIwc2Fja3xlbnwxfHx8fDE3NjI0NTYxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    farmer: farmers[1],
    description: 'Aromatic, aged basmati rice. Freshly milled with long grains and authentic flavor.',
    availableThisWeek: true
  }
];

export const communities = [
  'Green Valley Apartments',
  'Sunrise Gardens',
  'Palm Grove Community',
  'Lakeside Residences',
  'Maple Heights',
  'Riverbank Villas'
];
