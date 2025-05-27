'use client';

import { useState, useEffect, useRef } from 'react';
import { theme } from '@/styles/theme';

interface NavigationMenuProps {
  sectionNames: [string, string][];  // Array of [id, name] tuples
}

export default function NavigationMenu({ sectionNames }: NavigationMenuProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [lastActiveSection, setLastActiveSection] = useState('');
  const navRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if buttons are out of view
      if (buttonContainerRef.current) {
        const rect = buttonContainerRef.current.getBoundingClientRect();
        setShowDropdown(window.scrollY > 300);
      }

      // Find current section
      const sections = document.querySelectorAll('section[id]');
      let foundSection = false;
      
      // Get the height of the navigation bar for offset calculations
      const navHeight = navRef.current?.offsetHeight || 0;
      const scrollThreshold = 200 + navHeight; // Adjust this value as needed
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Expanded detection zone for better section tracking
        if (rect.top <= scrollThreshold && rect.bottom >= navHeight) {
          foundSection = true;
          if (currentSection !== section.id) {
            setCurrentSection(section.id);
            setLastActiveSection(section.id);
          }
        }
      });

      if (!foundSection && lastActiveSection && currentSection !== lastActiveSection) {
        setCurrentSection(lastActiveSection);
      }
    };

    // Initial call to set the current section
    setTimeout(() => {
      handleScroll();
    }, 500); // Delay to ensure DOM is ready
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, lastActiveSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update current section immediately for better UX
      setCurrentSection(sectionId);
      setLastActiveSection(sectionId);
    }
  };

  // Find the current section name
  const getCurrentSectionName = () => {
    const sectionPair = sectionNames.find(([id]) => id === currentSection);
    return sectionPair ? sectionPair[1] : 'Menu';
  };

  return (
    <>
      {/* Fixed dropdown that appears when scrolling - now with improved styling and animation */}
      <div 
        className={`fixed left-0 right-0 z-50 px-4 transition-opacity duration-300 ${
          showDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        style={{ top: '96px' }}
      >
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl border-2 border-[#A9190F] p-3 transform transition-transform duration-300 origin-top">
          <select
            value={currentSection}
            onChange={(e) => scrollToSection(e.target.value)}
            className="w-full p-3 rounded-lg text-[#A9190F] cursor-pointer bg-white hover:bg-gray-50 transition-colors font-medium text-lg"
          >
            <option value="" disabled>Jump to a section...</option>
            {sectionNames.map(([id, name]) => (
              <option key={id} value={id} className="py-1">
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main navigation with section indicator */}
      <div ref={navRef} className="sticky top-0 z-40 mt-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Regular Navigation Buttons */}
          <div ref={buttonContainerRef} className="px-4 py-4">
            <div className="flex items-center justify-start gap-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
              {sectionNames.map(([id, name]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-2 font-medium rounded-lg transition-colors duration-300 ${
                    currentSection === id
                    ? 'bg-[#A9190F] text-white'
                    : 'text-[#A9190F] hover:bg-[#A9190F] hover:text-white'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Current Section Indicator */}
          <div 
            className="py-3 text-center border-t-2 border-b-2 border-gray-200"
            style={{ backgroundColor: '#A9190F', color: 'white' }}
          >
            <p className="text-base sm:text-lg font-bold">
              Currently viewing: <span className="underline">{getCurrentSectionName()}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 