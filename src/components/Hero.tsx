import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onPitchDeckClick: () => void;
  onTryNowClick: () => void;
}

export function Hero({ onPitchDeckClick, onTryNowClick }: HeroProps) {
  return (
    <section className="w-full" style={{ backgroundColor: 'var(--harvest-cream)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 
              style={{ 
                fontFamily: 'Lora, serif',
                color: 'var(--harvest-green)',
                lineHeight: '1.2'
              }}
              className="text-4xl sm:text-5xl lg:text-6xl"
            >
              Fresh from the farm. Direct to your community.
            </h1>
            
            <p 
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#5A5A5A' 
              }}
              className="text-lg sm:text-xl max-w-xl"
            >
              Grogate connects your gated community directly with a trusted network of local farmers. 
              Get truly fresh produce delivered within 12-24 hours of harvest, eliminating waste and ensuring peak freshness.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onTryNowClick}
                style={{ 
                  backgroundColor: 'var(--harvest-green)',
                  fontFamily: 'Manrope, sans-serif',
                  color: '#ffffff'
                }}
                className="px-8 py-3 rounded-lg transition-all hover:opacity-90 hover:shadow-lg"
              >
                Try Now
              </button>
              
              <button
                onClick={onPitchDeckClick}
                style={{ 
                  borderColor: 'var(--harvest-green)',
                  color: 'var(--harvest-green)',
                  fontFamily: 'Manrope, sans-serif',
                  backgroundColor: 'transparent'
                }}
                className="px-8 py-3 rounded-lg border-2 transition-all hover:bg-[var(--harvest-green)] hover:text-white"
              >
                View Pitch Deck
              </button>
            </div>
          </div>

          {/* Right Column - Imagery */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1643474004250-05d73e1473e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBoYW5kcyUyMGZyZXNoJTIwdmVnZXRhYmxlcyUyMGhhcnZlc3R8ZW58MXx8fHwxNzYyNDU1OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fresh vegetables from local farm"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}