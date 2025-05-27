import Image from 'next/image';
import Link from 'next/link';
import { FaUtensils, FaLeaf, FaStar, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import BackToTopButton from './menu/BackToTopButton';
import Slideshow from '@/components/Slideshow';
import AnimatedSection from '@/components/animations/AnimatedSection';
import FadeIn from '@/components/animations/FadeIn';
import WhiteSplatter from '@/components/WhiteSplatter';
import WavePattern from '@/components/WavePattern';

export default function Home() {
  const slides = [
    {
      title: "Noodle Bowl",
      description: "Our signature marinated proteins served over udon noodles and vegetables",
      image: "/images/dishes/bulgogi-bowl.jpg"
    },
    {
      title: "Bulgogi Rice Bowl",
      description: "Traditional Korean mixed rice with assorted vegetables, egg, and marinated protein",
      image: "/images/dishes/kimchi-rice.jpg"
    },
    {
      title: "Korean Ramen",
      description: "Spicy or Non-Spicy noodle soup with fresh vegetables and protein",
      image: "/images/dishes/korean-ramen.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Splatters - Positioned away from hero section */}
      <WhiteSplatter className="top-[100vh] -left-32" zIndex={1} opacity={0.15} />
      <WhiteSplatter className="bottom-96 -right-32" zIndex={1} opacity={0.2} invert={true} />
      <WhiteSplatter className="top-[120vh] left-0" zIndex={1} opacity={0.1} />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden mt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/MenuImg.png"
            alt="Korean BBQ spread"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        
        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <FadeIn className="px-4 w-full -translate-y-12" duration={1.2}>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight uppercase text-center leading-none text-white [text-shadow:_4px_4px_8px_rgba(0,0,0,0.5)]">
              <div className="mb-2 sm:mb-4">Korean Flavor.</div>
              <div className="text-red-600 [text-shadow:_2px_2px_0px_#fff,_4px_4px_8px_rgba(0,0,0,0.4)]">
                Global Obsession.
              </div>
            </h1>
          </FadeIn>
        </div>

        {/* Bottom White Diagonal with Wave Pattern */}
        <WavePattern 
          fromColor="#FFFFFF" 
          toColor="bg-[#A9190F]" 
          position="bottom" 
        />
      </section>

      {/* Slideshow Section */}
      <section className="relative -mt-6 z-40 pb-24 sm:pb-40">
        <Slideshow slides={slides} />
        {/* Bottom White Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-white translate-y-[50%]" />
        </div>
      </section>

      {/* Featured Sections */}
      <section className="relative -mt-20 sm:-mt-32 py-20 sm:py-32 px-4 bg-white z-10">
        <WhiteSplatter className="top-1/2 -translate-y-1/2 -left-48" zIndex={5} opacity={0.15} />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="text-center p-10 rounded-xl bg-white shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-600">
                <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-6 bg-red-600">
                  <FaUtensils className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-red-600 uppercase">Traditional Recipes</h3>
                <p className="text-gray-700 text-lg">
                  Authentic Korean flavors passed down through generations, crafted with care and expertise
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.3}>
              <div className="text-center p-10 rounded-xl bg-white shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-600">
                <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-6 bg-red-600">
                  <FaLeaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-red-600 uppercase">Fresh Ingredients</h3>
                <p className="text-gray-700 text-lg">
                  We source only the highest quality, fresh ingredients to ensure the best dining experience
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.5}>
              <div className="text-center p-10 rounded-xl bg-white shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-600">
                <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-6 bg-red-600">
                  <FaStar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-red-600 uppercase">Perfect Atmosphere</h3>
                <p className="text-gray-700 text-lg">
                  Modern dining space with traditional Korean touches for an immersive experience
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-16 sm:py-24 bg-[#A9190F] overflow-hidden">
        {/* Top White Diagonal */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
          <div className="absolute top-0 left-0 right-0 h-full bg-white -translate-y-[50%]" />
        </div>

        {/* White Splatters in Red Section */}
        <WhiteSplatter className="top-1/3 left-0" zIndex={5} opacity={0.2} />
        <WhiteSplatter className="bottom-1/3 -right-32" zIndex={5} opacity={0.25} invert={true} />
        <WhiteSplatter className="top-2/3 -left-40" zIndex={5} opacity={0.15} invert={true} />

        {/* Bottom White Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-white translate-y-[50%]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 z-10 py-16">
          <AnimatedSection direction="up">
            <h2 className="text-5xl font-black mb-12 uppercase text-center text-white [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">
              Experience Our Cuisine
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KyB5ykvydMk"
                title="Korean BBQ Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 sm:py-32 px-4 bg-white -mt-8 sm:-mt-16">
        <WhiteSplatter className="bottom-0 right-0" zIndex={5} opacity={0.25} invert={true} />
        
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-8 uppercase text-red-600">
              Ready to Experience<br />Korean Cuisine?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-xl sm:text-2xl mb-8 sm:mb-12 text-gray-700">
              Join us for lunch or dinner, or order online for pickup/delivery
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/menu"
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-lg bg-red-600 text-white uppercase transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
              >
                View Menu
              </Link>
              <Link
                href="/order"
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-lg bg-white text-red-600 uppercase transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 border-2 border-red-600"
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