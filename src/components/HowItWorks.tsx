export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Place Your Order',
      description: 'Browse our simple app or website to see what local farmers are harvesting this week.'
    },
    {
      number: '02',
      title: 'Farmers Harvest',
      description: 'Our farmers harvest only what\'s ordered, ensuring zero waste and peak freshness.'
    },
    {
      number: '03',
      title: 'Direct to You',
      description: 'We deliver your aggregated order directly to your community for pickup, just 12-24 hours after harvest.'
    }
  ];

  return (
    <section 
      id="how-it-works" 
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
          className="text-3xl sm:text-4xl lg:text-5xl text-center mb-20"
        >
          Freshness in Three Steps
        </h2>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Dashed Line - Desktop Only */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5" style={{ top: '3rem' }}>
            <svg 
              className="w-full h-full" 
              preserveAspectRatio="none" 
              viewBox="0 0 100 1"
              style={{ overflow: 'visible' }}
            >
              <line
                x1="15"
                y1="0.5"
                x2="85"
                y2="0.5"
                stroke="#A8C5B3"
                strokeWidth="0.15"
                strokeDasharray="2 2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                {/* Step Number */}
                <div 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#B8785D',
                    lineHeight: '1'
                  }}
                  className="text-6xl sm:text-7xl mb-6 relative z-10"
                >
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--harvest-green)'
                  }}
                  className="text-xl sm:text-2xl mb-4"
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p 
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    color: '#5A5A5A',
                    lineHeight: '1.7'
                  }}
                  className="text-base sm:text-lg max-w-xs"
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
