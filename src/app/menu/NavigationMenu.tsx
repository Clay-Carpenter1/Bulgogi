'use client';

import { useState, useEffect, useRef } from 'react';

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
        setShowDropdown(rect.bottom < 100);
      }

      // Find current section
      const sections = document.querySelectorAll('section[id]');
      let foundSection = false;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          foundSection = true;
          setCurrentSection(section.id);
          setLastActiveSection(section.id);
        }
      });

      if (!foundSection) {
        setCurrentSection(lastActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastActiveSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={navRef} className="sticky top-0 z-50">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Regular Navigation Buttons */}
        <div ref={buttonContainerRef} className="px-4 py-4">
          <div className="flex items-center justify-start gap-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            {sectionNames.map(([id, name]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`px-4 py-2 font-medium rounded-lg transition-colors duration-300 ${
                  currentSection === id
                  ? 'bg-[#A9190F] text-white'
                  : 'text-[#A9190F] hover:bg-[#A9190F] hover:text-white'
                }`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Dropdown under Navigation */}
        {showDropdown && (
          <div className="px-4 py-4 border-t border-gray-100">
            <select
              value={currentSection}
              onChange={(e) => {
                scrollToSection(e.target.value);
              }}
              className="w-full p-3 rounded-lg border-2 border-[#A9190F] text-[#A9190F] cursor-pointer bg-white hover:bg-gray-50 transition-colors"
            >
              <option value="" disabled>Select a section</option>
              {sectionNames.map(([id, name]) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
} 