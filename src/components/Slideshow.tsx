'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full bg-[#A9190F]">
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white/75 transition-colors"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white/75 transition-colors"
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