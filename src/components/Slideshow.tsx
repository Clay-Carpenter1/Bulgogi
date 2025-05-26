'use client';

import { useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Slide {
  title: string;
  description: string;
  image: string;
}

interface SlideshowProps {
  slides: Slide[];
}

export default function Slideshow({ slides }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const dragThreshold = 50; // Minimum drag distance to trigger slide change

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length, isDragging]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Mouse events for dragging
  const handleMouseDown = (e: MouseEvent) => {
    // Don't initiate drag if clicking on a button or link
    if ((e.target as HTMLElement).tagName === 'BUTTON' || 
        (e.target as HTMLElement).tagName === 'A' ||
        (e.target as HTMLElement).closest('button') || 
        (e.target as HTMLElement).closest('a')) {
      return;
    }
    
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setCurrentX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const dragDistance = currentX - startX;
      
      if (Math.abs(dragDistance) > dragThreshold) {
        if (dragDistance > 0) {
          goToPrevSlide();
        } else {
          goToNextSlide();
        }
      }
      
      setIsDragging(false);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch events for swiping
  const handleTouchStart = (e: TouchEvent) => {
    // Don't initiate swipe if touching a button or link
    if ((e.target as HTMLElement).tagName === 'BUTTON' || 
        (e.target as HTMLElement).tagName === 'A' ||
        (e.target as HTMLElement).closest('button') || 
        (e.target as HTMLElement).closest('a')) {
      return;
    }
    
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      setCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      const dragDistance = currentX - startX;
      
      if (Math.abs(dragDistance) > dragThreshold) {
        if (dragDistance > 0) {
          goToPrevSlide();
        } else {
          goToNextSlide();
        }
      }
      
      setIsDragging(false);
    }
  };

  return (
    <div 
      className="relative w-full bg-[#A9190F]"
      ref={slideshowRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Swipeable Indicator - Only visible on mobile */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 md:hidden">
        <div className="text-white/70 text-xs font-medium px-2 py-1 bg-black/20 rounded-full backdrop-blur-sm flex items-center gap-1">
          <FaChevronLeft className="w-3 h-3" />
          <span>Swipe</span>
          <FaChevronRight className="w-3 h-3" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 md:left-8 top-[62%] -translate-y-1/2 z-30 text-white hover:text-white/75 transition-colors"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 md:right-8 top-[62%] -translate-y-1/2 z-30 text-white hover:text-white/75 transition-colors"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg" />
      </button>

      {/* Slides Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible absolute'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
              {/* Left side - Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-square">
                  <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full transform scale-90" />
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain drop-shadow-2xl p-4"
                    priority={index === 0}
                    draggable={false}
                  />
                </div>
              </div>

              {/* Right side - Text */}
              <div className="text-center md:text-left text-white">
                <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
                  {slide.description}
                </p>
                <Link
                  href="/order"
                  className="inline-block px-8 py-4 bg-white text-[#A9190F] text-lg font-bold rounded-lg hover:bg-white/90 transition-colors uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe Indicator */}
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 ${isDragging ? 'opacity-80' : 'opacity-0'}`}>
        <div className="text-white text-sm font-medium px-3 py-1 bg-black/40 rounded-full backdrop-blur-sm whitespace-nowrap">
          {Math.abs(currentX - startX) < 10 ? 'Drag to navigate' : currentX - startX > 0 ? '← Previous slide' : 'Next slide →'}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 