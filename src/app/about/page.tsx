import Image from 'next/image';
import BackToTopButton from '../menu/BackToTopButton';
import { FaUtensils, FaLeaf, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import AnimatedSection from '@/components/animations/AnimatedSection';
import FadeIn from '@/components/animations/FadeIn';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden mt-24">
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
        <FadeIn className="relative h-full flex flex-col justify-center items-center text-white z-20 px-4" duration={1.2}>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight uppercase text-center leading-none [text-shadow:_4px_4px_8px_rgba(0,0,0,0.5)]">
            <div className="mb-2 sm:mb-4">Our Story</div>
            <div className="text-red-600 [text-shadow:_2px_2px_0px_#fff,_4px_4px_8px_rgba(0,0,0,0.4)]">
              Authentic Korean
            </div>
          </h1>
        </FadeIn>

        {/* Bottom Red Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-30" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-[#A9190F] translate-y-[50%]" />
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-6 z-40 bg-[#A9190F] py-16 sm:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Story Section */}
          <AnimatedSection direction="up">
            <div className="bg-white rounded-xl p-6 sm:p-12 shadow-2xl mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 uppercase text-[#A9190F]">
                    Our Story
                  </h2>
                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
                    <p>
                      Welcome to Bulgogi, Conway's premier destination for authentic Korean BBQ. 
                      Our journey began with a simple mission: to bring the rich flavors and 
                      traditions of Korean cuisine to Arkansas, while serving our community with 
                      love and gratitude.
                    </p>
                    <p>
                      Founded by a family of Korean culinary experts who are guided by faith, 
                      we take pride in serving dishes that have been perfected through generations. 
                      Each recipe tells a story of our heritage and passion for authentic Korean 
                      flavors, prepared with care and thanksgiving.
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 uppercase text-[#A9190F]">
                    Our Philosophy
                  </h2>
                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
                    <p>
                      At Bulgogi, we believe that great food brings people together, just as 
                      breaking bread together has been a sacred tradition throughout history. 
                      Our restaurant is more than just a place to eat – it's a place where 
                      families and friends can gather to share delicious meals, create lasting 
                      memories, and experience the blessing of community.
                    </p>
                    <p>
                      We are committed to being good stewards of our resources, using only the 
                      finest ingredients, preparing our marinades fresh daily, and maintaining 
                      the highest standards of service and cleanliness. Through our work, we 
                      strive to reflect values of hospitality, generosity, and gratitude.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* First White Diagonal */}
          <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden" style={{ height: '150px' }}>
            <div className="absolute left-0 right-0 h-full bg-white translate-y-[50%]" />
          </div>
        </div>
      </section>

      {/* White Background Section */}
      <section className="relative bg-white py-16 sm:py-32">
        <div className="max-w-7xl mx-auto px-4">
          {/* Family Image */}
          <AnimatedSection direction="up">
            <div className="bg-white rounded-xl p-4 sm:p-8 lg:p-12 shadow-2xl mb-16 sm:mb-24">
              <div className="relative w-full max-w-4xl mx-auto h-[250px] sm:h-[300px] md:h-[450px] overflow-hidden rounded-lg">
                <Image
                  src="/images/family-pic.jpg"
                  alt="Our family at Bulgogi Korean Restaurant"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                />
              </div>
              <div className="text-center mt-4 sm:mt-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#A9190F] mb-2 sm:mb-4">The Lee Family</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  Sharing our love for Korean cuisine and Christian values with the Conway community since 2019.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Second Red Section with Diagonal */}
      <section className="relative">
        {/* Red Background with Diagonal Cuts */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-[#A9190F] origin-top-left" 
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            }} 
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:py-48">
          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 bg-[#A9190F]">
                  <FaUtensils className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-[#A9190F] uppercase">Traditional Recipes</h3>
                <p className="text-base sm:text-lg text-gray-700">
                  Authentic Korean flavors passed down through generations, crafted with care and expertise.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.3}>
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 bg-[#A9190F]">
                  <FaLeaf className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-[#A9190F] uppercase">Fresh Ingredients</h3>
                <p className="text-base sm:text-lg text-gray-700">
                  We source only the highest quality, fresh ingredients to ensure the best dining experience.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.5}>
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 bg-[#A9190F]">
                  <FaStar className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-[#A9190F] uppercase">Perfect Atmosphere</h3>
                <p className="text-base sm:text-lg text-gray-700">
                  Modern dining space with traditional Korean touches for an immersive experience.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* White Background Section */}
      <section className="relative bg-white py-16 sm:py-32">
        <div className="max-w-7xl mx-auto px-4">
          {/* Call to Action */}
          <AnimatedSection direction="up">
            <div className="bg-white rounded-xl p-6 sm:p-12 shadow-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 uppercase text-[#A9190F]">
                Experience Korean Cuisine
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Join us for an unforgettable dining experience and discover why our customers keep coming back for more.
              </p>
              <Link
                href="/order"
                className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-[#A9190F] text-white text-lg sm:text-xl font-bold rounded-lg hover:bg-[#8a1410] transition-colors uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Order Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
} 