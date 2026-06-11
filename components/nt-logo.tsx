interface NTLogoProps {
  className?: string
  variant?: "dark" | "light"
  width?: number
  height?: number
}

export function NTLogo({ 
  className = "", 
  variant = "dark", 
  width = 140, 
  height = 56 
}: NTLogoProps) {
  const fillColor = variant === "dark" ? "#0033FF" : "#ffffff"
  const lineColor = variant === "dark" ? "#ffffff" : "#0033FF"

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 180 72" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* N letter - main shape */}
      <path 
        d="M0 0 L0 72 L18 72 L18 24 L54 72 L72 72 L72 0 L54 0 L54 48 L18 0 Z" 
        fill={fillColor}
      />
      
      {/* Geometric lines inside N - creating prismatic effect */}
      <line x1="18" y1="72" x2="54" y2="0" stroke={lineColor} strokeWidth="1.5" />
      <line x1="0" y1="36" x2="72" y2="36" stroke={lineColor} strokeWidth="1.5" />
      <line x1="36" y1="0" x2="36" y2="72" stroke={lineColor} strokeWidth="1.5" />
      <line x1="0" y1="72" x2="54" y2="0" stroke={lineColor} strokeWidth="1.5" />
      <line x1="18" y1="72" x2="72" y2="0" stroke={lineColor} strokeWidth="1.5" />
      
      {/* T letter */}
      <rect x="90" y="0" width="90" height="18" fill={fillColor} />
      <rect x="117" y="0" width="36" height="72" fill={fillColor} />
    </svg>
  )
}

// Compact icon version - only N with geometric pattern
export function NTLogoIcon({ 
  className = "", 
  variant = "dark", 
  size = 40 
}: { className?: string; variant?: "dark" | "light"; size?: number }) {
  const fillColor = variant === "dark" ? "#0033FF" : "#ffffff"
  const lineColor = variant === "dark" ? "#ffffff" : "#0033FF"

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 72 72" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* N letter - main shape */}
      <path 
        d="M0 0 L0 72 L18 72 L18 24 L54 72 L72 72 L72 0 L54 0 L54 48 L18 0 Z" 
        fill={fillColor}
      />
      
      {/* Geometric lines inside N */}
      <line x1="18" y1="72" x2="54" y2="0" stroke={lineColor} strokeWidth="1.5" />
      <line x1="0" y1="36" x2="72" y2="36" stroke={lineColor} strokeWidth="1.5" />
      <line x1="36" y1="0" x2="36" y2="72" stroke={lineColor} strokeWidth="1.5" />
      <line x1="0" y1="72" x2="54" y2="0" stroke={lineColor} strokeWidth="1.5" />
      <line x1="18" y1="72" x2="72" y2="0" stroke={lineColor} strokeWidth="1.5" />
    </svg>
  )
}
