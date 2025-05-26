import Image from 'next/image';

interface WhiteSplatterProps {
  className?: string;
  zIndex?: number;
  opacity?: number;
  invert?: boolean;
}

export default function WhiteSplatter({
  className = '',
  zIndex = 0,
  opacity = 0.3,
  invert = false
}: WhiteSplatterProps) {
  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{ zIndex }}
    >
      <Image
        src="/images/white-splatter.webp"
        alt=""
        width={600}
        height={600}
        className={`object-contain ${invert ? 'rotate-180' : ''}`}
        style={{ opacity }}
      />
    </div>
  );
} 