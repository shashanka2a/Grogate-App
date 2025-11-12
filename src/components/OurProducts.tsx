'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface Product {
  image: string;
  title: string;
  description: string;
  alt: string;
}

export function OurProducts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products: Product[] = [
    {
      image: "https://images.unsplash.com/photo-1568583528604-e3a4cd4445cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBiYXNrZXQlMjBmYXJtZXJzJTIwbWFya2V0fGVufDF8fHx8MTc2MjQ1NjEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Seasonal Vegetables",
      description: "The freshest tomatoes, leafy greens, root vegetables, and more.",
      alt: "Fresh seasonal vegetables in rustic basket"
    },
    {
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW5zJTIwYnVybGFwJTIwc2Fja3xlbnwxfHx8fDE3NjI0NTYxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Premium Rice",
      description: "Freshly milled, high-quality rice sourced from our village partners.",
      alt: "Premium rice grains close-up"
    },
    {
      image: "https://images.unsplash.com/photo-1546477387-7a01c38f0703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGhlcmJzJTIwc3BpY2VzJTIwbG9jYWwlMjBwcm9kdWNlfGVufDF8fHx8MTc2MjQ1NjEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Specialty Items",
      description: "Occasional local goods like herbs, chilies, and seasonal fruits.",
      alt: "Fresh herbs and specialty local produce"
    }
  ];

  return (
    <section 
      className="w-full py-20 md:py-28" 
      style={{ backgroundColor: 'var(--harvest-cream)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 
          style={{ 
            fontFamily: 'Lora, serif',
            color: 'var(--harvest-green)',
            lineHeight: '1.3'
          }}
          className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6"
        >
          Our Products
        </h2>

        {/* Intro Text */}
        <p 
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            color: '#5A5A5A',
            lineHeight: '1.7'
          }}
          className="text-lg text-center max-w-3xl mx-auto mb-16"
        >
          A rotating selection of the best seasonal produce and staples, direct from our partners.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Product Image */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <ImageWithFallback
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.03)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Product Title */}
              <h3 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: hoveredIndex === index ? '#B8785D' : 'var(--harvest-green)',
                  transition: 'color 0.3s ease'
                }}
                className="text-xl sm:text-2xl mb-3"
              >
                {product.title}
              </h3>

              {/* Product Description */}
              <p 
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#5A5A5A',
                  lineHeight: '1.6'
                }}
                className="text-base"
              >
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
