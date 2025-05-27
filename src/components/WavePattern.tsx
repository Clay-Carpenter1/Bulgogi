'use client';

import React from 'react';

interface WavePatternProps {
  fromColor: string;
  toColor: string;
  position: 'top' | 'bottom';
  className?: string;
}

export default function WavePattern({
  fromColor,
  toColor,
  position,
  className = ''
}: WavePatternProps) {
  // Determine whether the diagonal should go up or down
  const isBottom = position === 'bottom';
  const transformValue = isBottom ? 'translate-y-[50%]' : '-translate-y-[50%]';
  
  // Extract color code from toColor class (e.g. "bg-[#A9190F]" -> "#A9190F")
  const redColor = toColor.includes('[#') ? 
    toColor.match(/\[#(.*?)\]/)?.[1] || 'A9190F' : 
    'A9190F';
  
  return (
    <div className={`absolute ${position}-0 left-0 right-0 w-full overflow-hidden z-30 ${className}`} style={{ height: '150px' }}>
      {/* Main diagonal background */}
      <div className={`absolute ${position}-0 left-0 right-0 h-full ${toColor} ${transformValue}`} />
      
      {/* Improved wave pattern with required transparency levels */}
      <div className={`absolute ${isBottom ? 'bottom-[75px]' : 'top-[75px]'} left-0 right-0 h-[60px] z-40`}>
        <svg className={`absolute ${position}-0 w-full h-full`} viewBox="0 0 1200 60" preserveAspectRatio="none">
          <defs>
            {/* Top wave gradient - 75% transparent */}
            <linearGradient id="topWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={`#${redColor}`} stopOpacity="0.25" />
              <stop offset="100%" stopColor={`#${redColor}`} stopOpacity="0.25" />
            </linearGradient>
            
            {/* Middle wave gradient - 25% transparent */}
            <linearGradient id="middleWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={`#${redColor}`} stopOpacity="0.75" />
              <stop offset="100%" stopColor={`#${redColor}`} stopOpacity="0.75" />
            </linearGradient>
            
            {/* Bottom wave gradient - 0% transparent (fully opaque) */}
            <linearGradient id="bottomWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={`#${redColor}`} stopOpacity="1" />
              <stop offset="100%" stopColor={`#${redColor}`} stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* Top wave - 75% transparent - improved curve */}
          <path 
            d={`M0,${isBottom ? 0 : 60} 
                C200,${isBottom ? 30 : 30} 400,${isBottom ? 10 : 50} 600,${isBottom ? 20 : 40} 
                C800,${isBottom ? 10 : 50} 1000,${isBottom ? 25 : 35} 1200,${isBottom ? 0 : 60} 
                V${isBottom ? 60 : 0} H0 Z`}
            fill="url(#topWaveGradient)" 
          />
          
          {/* Middle wave - 25% transparent - smoother curve */}
          <path 
            d={`M0,${isBottom ? 15 : 45} 
                C180,${isBottom ? 25 : 35} 360,${isBottom ? 40 : 20} 600,${isBottom ? 30 : 30} 
                C840,${isBottom ? 40 : 20} 1020,${isBottom ? 25 : 35} 1200,${isBottom ? 15 : 45} 
                V${isBottom ? 60 : 0} H0 Z`}
            fill="url(#middleWaveGradient)" 
          />
          
          {/* Bottom wave - 0% transparent - more natural flow */}
          <path 
            d={`M0,${isBottom ? 35 : 25} 
                C150,${isBottom ? 25 : 35} 350,${isBottom ? 45 : 15} 600,${isBottom ? 35 : 25} 
                C850,${isBottom ? 45 : 15} 1050,${isBottom ? 25 : 35} 1200,${isBottom ? 35 : 25} 
                V${isBottom ? 60 : 0} H0 Z`}
            fill="url(#bottomWaveGradient)" 
          />
        </svg>
      </div>
    </div>
  );
} 