interface GrogateIconProps {
  size?: number;
  color?: string;
  variant?: 'default' | 'white';
}

export function GrogateIcon({ size = 40, color = '#4A7C59', variant = 'default' }: GrogateIconProps) {
  const fillColor = variant === 'white' ? '#ffffff' : color;
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gate posts */}
      <rect x="15" y="30" width="8" height="50" rx="2" fill={fillColor} />
      <rect x="77" y="30" width="8" height="50" rx="2" fill={fillColor} />
      
      {/* Gate bars */}
      <rect x="15" y="35" width="70" height="6" rx="2" fill={fillColor} />
      <rect x="15" y="52" width="70" height="6" rx="2" fill={fillColor} />
      
      {/* Leaf emerging from gate - organic element */}
      <path 
        d="M 50 20 Q 60 25 65 35 Q 63 30 60 28 Q 55 23 50 20 Z" 
        fill={fillColor}
        opacity="0.9"
      />
      <path 
        d="M 50 20 Q 40 25 35 35 Q 37 30 40 28 Q 45 23 50 20 Z" 
        fill={fillColor}
        opacity="0.7"
      />
      
      {/* Central stem */}
      <rect x="48" y="18" width="4" height="25" rx="2" fill={fillColor} />
      
      {/* Small decorative dots (representing freshness/produce) */}
      <circle cx="50" cy="70" r="3" fill={fillColor} opacity="0.6" />
      <circle cx="42" cy="73" r="2.5" fill={fillColor} opacity="0.5" />
      <circle cx="58" cy="73" r="2.5" fill={fillColor} opacity="0.5" />
    </svg>
  );
}

export function GrogateWordmark({ 
  size = 'medium',
  color = '#4A7C59',
  variant = 'default' 
}: { 
  size?: 'small' | 'medium' | 'large';
  color?: string;
  variant?: 'default' | 'white';
}) {
  const textColor = variant === 'white' ? '#ffffff' : color;
  
  const sizeMap = {
    small: 'text-xl',
    medium: 'text-3xl',
    large: 'text-5xl'
  };

  return (
    <span 
      style={{ 
        fontFamily: 'Lora, serif',
        color: textColor,
        fontWeight: 600,
        letterSpacing: '-0.02em'
      }}
      className={sizeMap[size]}
    >
      Grogate
    </span>
  );
}

export function GrogateLogo({ 
  size = 'medium',
  variant = 'default',
  showWordmark = true
}: {
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'white';
  showWordmark?: boolean;
}) {
  const iconSizeMap = {
    small: 32,
    medium: 40,
    large: 56
  };

  const gapMap = {
    small: 2,
    medium: 3,
    large: 4
  };

  return (
    <div className={`flex items-center gap-${gapMap[size]}`}>
      <GrogateIcon 
        size={iconSizeMap[size]} 
        variant={variant}
      />
      {showWordmark && (
        <GrogateWordmark 
          size={size}
          variant={variant}
        />
      )}
    </div>
  );
}
