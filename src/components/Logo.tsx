import { GrogateIcon, GrogateWordmark, GrogateLogo } from './GrogateIcon';

export function Logo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <GrogateLogo size="medium" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 
            style={{ fontFamily: 'Lora, serif' }}
            className="text-6xl mb-6"
          >
            Grogate Brand Identity
          </h1>
          <p 
            style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
            className="text-xl max-w-3xl mx-auto leading-relaxed"
          >
            A minimal yet elegant logo system designed to represent the seamless connection between 
            farm-fresh produce and gated communities. The logo combines organic elements with structured design, 
            symbolizing freshness within secure delivery.
          </p>
        </div>

        {/* Design Concept */}
        <div className="mb-20">
          <h2 
            style={{ fontFamily: 'Lora, serif' }}
            className="text-4xl mb-8 text-center"
          >
            Design Concept
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gray-50">
              <div className="mb-4 text-5xl">🌱</div>
              <h3 
                style={{ fontFamily: 'Manrope, sans-serif' }}
                className="text-xl mb-3"
              >
                Organic Growth
              </h3>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}>
                Leaves emerging from the gate symbolize fresh, organic produce growing naturally
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-50">
              <div className="mb-4 text-5xl">🚪</div>
              <h3 
                style={{ fontFamily: 'Manrope, sans-serif' }}
                className="text-xl mb-3"
              >
                Gated Access
              </h3>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}>
                The gate structure represents exclusive access to quality produce for communities
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-50">
              <div className="mb-4 text-5xl">🎯</div>
              <h3 
                style={{ fontFamily: 'Manrope, sans-serif' }}
                className="text-xl mb-3"
              >
                Direct Connection
              </h3>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}>
                Dots represent produce items, connecting farms directly to consumers
              </p>
            </div>
          </div>
        </div>

        {/* Logo Variations */}
        <div className="mb-20">
          <h2 
            style={{ fontFamily: 'Lora, serif' }}
            className="text-4xl mb-12 text-center"
          >
            Logo Variations
          </h2>

          {/* Primary Logo */}
          <div className="mb-12 p-12 bg-gray-50 rounded-2xl">
            <p 
              style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
              className="text-sm mb-6 uppercase tracking-wider"
            >
              Primary Logo - Full Lockup
            </p>
            <div className="flex justify-center">
              <GrogateLogo size="large" />
            </div>
          </div>

          {/* Icon Only */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-12 bg-gray-50 rounded-2xl">
              <p 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
                className="text-sm mb-6 uppercase tracking-wider"
              >
                Icon Only - Medium
              </p>
              <div className="flex justify-center">
                <GrogateIcon size={80} />
              </div>
            </div>

            <div className="p-12 bg-gray-50 rounded-2xl">
              <p 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
                className="text-sm mb-6 uppercase tracking-wider"
              >
                Icon Only - Small (Favicon)
              </p>
              <div className="flex justify-center">
                <GrogateIcon size={48} />
              </div>
            </div>
          </div>

          {/* White Variants */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div 
              className="p-12 rounded-2xl"
              style={{ backgroundColor: '#4A7C59' }}
            >
              <p 
                style={{ fontFamily: 'Manrope, sans-serif', color: 'white' }}
                className="text-sm mb-6 uppercase tracking-wider opacity-70"
              >
                White Logo on Green
              </p>
              <div className="flex justify-center">
                <GrogateLogo size="medium" variant="white" />
              </div>
            </div>

            <div 
              className="p-12 rounded-2xl"
              style={{ backgroundColor: '#2C4A3A' }}
            >
              <p 
                style={{ fontFamily: 'Manrope, sans-serif', color: 'white' }}
                className="text-sm mb-6 uppercase tracking-wider opacity-70"
              >
                White Icon on Dark Green
              </p>
              <div className="flex justify-center">
                <GrogateIcon size={80} variant="white" />
              </div>
            </div>
          </div>
        </div>

        {/* Size Variations */}
        <div className="mb-20">
          <h2 
            style={{ fontFamily: 'Lora, serif' }}
            className="text-4xl mb-12 text-center"
          >
            Size System
          </h2>

          <div className="space-y-8 p-12 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-8 pb-6 border-b border-gray-200">
              <div className="w-24 text-sm" style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}>
                Large
              </div>
              <GrogateLogo size="large" />
            </div>
            
            <div className="flex items-center gap-8 pb-6 border-b border-gray-200">
              <div className="w-24 text-sm" style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}>
                Medium
              </div>
              <GrogateLogo size="medium" />
            </div>
            
            <div className="flex items-center gap-8">
              <div className="w-24 text-sm" style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}>
                Small
              </div>
              <GrogateLogo size="small" />
            </div>
          </div>
        </div>

        {/* Typography Pairing */}
        <div className="mb-20">
          <h2 
            style={{ fontFamily: 'Lora, serif' }}
            className="text-4xl mb-12 text-center"
          >
            Typography System
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl">
              <p 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
                className="text-sm mb-4 uppercase tracking-wider"
              >
                Headlines - Lora Serif
              </p>
              <div style={{ fontFamily: 'Lora, serif', color: '#4A7C59' }} className="text-4xl mb-2">
                Grogate
              </div>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-sm">
                Elegant, trustworthy, organic feel
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl">
              <p 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
                className="text-sm mb-4 uppercase tracking-wider"
              >
                Body Text - Manrope Sans-Serif
              </p>
              <div style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-lg mb-2">
                Fresh from the farm
              </div>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-sm">
                Clean, modern, readable
              </p>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-20">
          <h2 
            style={{ fontFamily: 'Lora, serif' }}
            className="text-4xl mb-12 text-center"
          >
            Color Palette
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div 
                className="h-32 rounded-xl mb-3"
                style={{ backgroundColor: '#4A7C59' }}
              />
              <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-sm mb-1">
                Harvest Green
              </p>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-xs">
                #4A7C59
              </p>
            </div>

            <div>
              <div 
                className="h-32 rounded-xl mb-3"
                style={{ backgroundColor: '#D4A574' }}
              />
              <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-sm mb-1">
                Warm Earth
              </p>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-xs">
                #D4A574
              </p>
            </div>

            <div>
              <div 
                className="h-32 rounded-xl mb-3 border border-gray-200"
                style={{ backgroundColor: '#FFFFFF' }}
              />
              <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-sm mb-1">
                Pure White
              </p>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-xs">
                #FFFFFF
              </p>
            </div>

            <div>
              <div 
                className="h-32 rounded-xl mb-3"
                style={{ backgroundColor: '#F8F5F0' }}
              />
              <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-sm mb-1">
                Cream
              </p>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-xs">
                #F8F5F0
              </p>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-20">
          <h2 
            style={{ fontFamily: 'Lora, serif' }}
            className="text-4xl mb-12 text-center"
          >
            Usage Guidelines
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-green-500 rounded-2xl">
              <div className="text-3xl mb-4">✓</div>
              <h3 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#4A7C59' }}
                className="text-xl mb-4"
              >
                Do's
              </h3>
              <ul 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
                className="space-y-2"
              >
                <li>• Use the logo on white or harvest green backgrounds</li>
                <li>• Maintain minimum clear space around the logo</li>
                <li>• Use provided color variations</li>
                <li>• Scale proportionally</li>
                <li>• Use high-resolution versions</li>
              </ul>
            </div>

            <div className="p-8 border-2 border-red-500 rounded-2xl">
              <div className="text-3xl mb-4">✗</div>
              <h3 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#DC2626' }}
                className="text-xl mb-4"
              >
                Don'ts
              </h3>
              <ul 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
                className="space-y-2"
              >
                <li>• Don't change the logo colors</li>
                <li>• Don't distort or stretch the logo</li>
                <li>• Don't add effects or shadows</li>
                <li>• Don't use on busy backgrounds</li>
                <li>• Don't recreate or modify elements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Examples */}
        <div className="mb-20">
          <h2 
            style={{ fontFamily: 'Lora, serif' }}
            className="text-4xl mb-12 text-center"
          >
            Real-World Applications
          </h2>

          <div className="space-y-6">
            {/* Website Header */}
            <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl">
              <p 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
                className="text-sm mb-4 uppercase tracking-wider"
              >
                Website Header
              </p>
              <div className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg">
                <GrogateLogo size="small" />
                <div className="flex gap-6">
                  <span style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}>Home</span>
                  <span style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}>Products</span>
                  <span style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}>About</span>
                </div>
              </div>
            </div>

            {/* Mobile App Icon */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <p 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
                className="text-sm mb-4 uppercase tracking-wider"
              >
                Mobile App Icon
              </p>
              <div className="flex gap-6 items-center">
                <div 
                  className="p-4 rounded-3xl shadow-lg"
                  style={{ backgroundColor: '#4A7C59' }}
                >
                  <GrogateIcon size={64} variant="white" />
                </div>
                <div>
                  <p style={{ fontFamily: 'Lora, serif' }} className="text-2xl mb-1">Grogate</p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-sm">
                    Farm-fresh delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Favicon */}
            <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl">
              <p 
                style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }}
                className="text-sm mb-4 uppercase tracking-wider"
              >
                Browser Favicon (16x16, 32x32)
              </p>
              <div className="flex gap-8 items-center">
                <div className="flex items-center gap-3">
                  <GrogateIcon size={16} />
                  <span style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-xs">16px</span>
                </div>
                <div className="flex items-center gap-3">
                  <GrogateIcon size={32} />
                  <span style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-xs">32px</span>
                </div>
                <div className="flex items-center gap-3">
                  <GrogateIcon size={48} />
                  <span style={{ fontFamily: 'Manrope, sans-serif', color: '#5A5A5A' }} className="text-xs">48px</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div 
        className="py-12 mt-20"
        style={{ backgroundColor: '#4A7C59' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-4">
            <GrogateLogo size="medium" variant="white" />
          </div>
          <p 
            style={{ fontFamily: 'Manrope, sans-serif', color: 'white' }}
            className="opacity-80"
          >
            Grogate Brand Identity System © 2024
          </p>
        </div>
      </div>
    </div>
  );
}
