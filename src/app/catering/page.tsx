import Image from 'next/image';
import { FaPhone, FaCalendarAlt, FaUsers, FaClock } from 'react-icons/fa';
import BackToTopButton from '../menu/BackToTopButton';
import AnimatedSection from '@/components/animations/AnimatedSection';
import FadeIn from '@/components/animations/FadeIn';
import WhiteSplatter from '@/components/WhiteSplatter';
import WavePattern from '@/components/WavePattern';

export default function Catering() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Splatters - Positioned away from hero section */}
      <WhiteSplatter className="top-[100vh] -right-32" zIndex={1} opacity={0.15} />
      <WhiteSplatter className="top-[150vh] -left-32" zIndex={1} opacity={0.2} />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden mt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/MenuImg.png"
            alt="Korean dishes spread"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        
        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <FadeIn className="px-4 w-full -translate-y-12" duration={1.2}>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight uppercase text-center leading-none text-white [text-shadow:_4px_4px_8px_rgba(0,0,0,0.5)]">
              <div className="mb-2 sm:mb-4">Catering</div>
              <div className="text-red-600 [text-shadow:_2px_2px_0px_#fff,_4px_4px_8px_rgba(0,0,0,0.4)]">
                For Any Event
              </div>
            </h1>
          </FadeIn>
        </div>

        {/* Bottom Red Diagonal with Wave Pattern */}
        <WavePattern 
          fromColor="#FFFFFF" 
          toColor="bg-[#A9190F]" 
          position="bottom" 
        />
      </section>

      {/* Main Content */}
      <section className="relative -mt-6 z-40 bg-[#A9190F] py-16 sm:py-32 px-4">
        <WhiteSplatter className="top-1/4 -right-32" zIndex={5} opacity={0.2} invert={true} />
        <WhiteSplatter className="bottom-1/3 left-0" zIndex={5} opacity={0.15} />
        <WhiteSplatter className="top-2/3 -right-40" zIndex={5} opacity={0.25} />
        <WhiteSplatter className="top-1/2 -left-32" zIndex={5} opacity={0.2} invert={true} />
        
        <div className="max-w-6xl mx-auto relative">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-32 sm:mb-40">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-2xl text-center transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 bg-[#A9190F]">
                  <FaUsers className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-[#A9190F] uppercase">Perfect For</h3>
                <div className="flex-grow flex flex-col justify-center">
                  <p className="text-base sm:text-lg text-gray-700">
                    Corporate Events<br />
                    Weddings<br />
                    Family Gatherings<br />
                    Special Occasions
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-2xl text-center transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 bg-[#A9190F]">
                  <FaCalendarAlt className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-[#A9190F] uppercase">Advance Notice</h3>
                <div className="flex-grow flex flex-col justify-center">
                  <p className="text-base sm:text-lg text-gray-700">
                    Please place your order<br />
                    at least 48 hours<br />
                    in advance
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-2xl text-center transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 bg-[#A9190F]">
                  <FaClock className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-[#A9190F] uppercase">Hours</h3>
                <div className="flex-grow flex flex-col justify-center">
                  <p className="text-base sm:text-lg text-gray-700">
                    Monday - Saturday<br />
                    11:00 AM - 8:30 PM
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Red to White Diagonal Transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 w-full h-[200%] bg-white origin-bottom-right translate-y-1/2" />
        </div>
      </section>

      {/* White Background Section */}
      <section className="relative bg-white pt-0 pb-16 sm:pb-32 -mt-16 sm:-mt-24">
        <WhiteSplatter className="bottom-32 right-0" zIndex={5} opacity={0.15} />
        
        <div className="max-w-6xl mx-auto px-4">
          {/* Call to Action */}
          <AnimatedSection direction="up">
            <div className="bg-white rounded-xl p-6 sm:p-12 shadow-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 uppercase text-[#A9190F]">
                Ready to Place Your Order?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Call us to discuss your catering needs. Our team will help you create the perfect menu for your event.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
                <a
                  href="tel:+15013585923"
                  className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-[#A9190F] text-white text-xl sm:text-2xl font-bold rounded-lg hover:bg-[#8a1410] transition-colors uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <FaPhone className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4" />
                  (501) 358-5923
                </a>
                <p className="text-gray-600 text-base sm:text-lg italic">
                  Please call during business hours to speak with our catering specialist
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
} 