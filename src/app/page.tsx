import Image from 'next/image';
import Link from 'next/link';
import { FaUtensils, FaLeaf, FaStar, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import BackToTopButton from './menu/BackToTopButton';
import Slideshow from '@/components/Slideshow';

export default function Home() {
  const slides = [
    {
      title: "Noodle Bowl",
      description: "Our signature marinated beef served over udon noodles and vegetables",
      image: "/images/dishes/bulgogi-bowl.jpg"
    },
    {
      title: "Kimchi Fried Rice",
      description: "House-made kimchi stir-fried with rice and vegetables",
      image: "/images/dishes/kimchi-rice.jpg"
    },
    {
      title: "Korean Ramen",
      description: "Spicy noodle soup with fresh vegetables and protein",
      image: "/images/dishes/korean-ramen.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
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
        <div className="relative h-full flex flex-col justify-center items-center text-white z-20 px-4">
          <h1 className="text-7xl md:text-9xl font-black tracking-tight uppercase text-center leading-none [text-shadow:_4px_4px_8px_rgba(0,0,0,0.5)]">
            <div className="mb-4">Korean Flavor.</div>
            <div className="text-red-600 [text-shadow:_2px_2px_0px_#fff,_4px_4px_8px_rgba(0,0,0,0.4)]">
              Global Obsession.
            </div>
          </h1>
        </div>

        {/* Bottom White Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-30" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-[#A9190F] transform -skew-y-3 translate-y-[50%]" />
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="relative -mt-6 z-40">
        <Slideshow slides={slides} />
        {/* Bottom White Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-white transform -skew-y-3 translate-y-[50%]" />
        </div>
      </section>

      {/* Featured Sections */}
      <section className="relative -mt-6 py-32 px-4 bg-white z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-10 rounded-xl bg-white shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-600">
              <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-6 bg-red-600">
                <FaUtensils className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-red-600 uppercase">Traditional Recipes</h3>
              <p className="text-gray-700 text-lg">
                Authentic Korean flavors passed down through generations, crafted with care and expertise
              </p>
            </div>
            <div className="text-center p-10 rounded-xl bg-white shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-600">
              <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-6 bg-red-600">
                <FaLeaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-red-600 uppercase">Fresh Ingredients</h3>
              <p className="text-gray-700 text-lg">
                We source only the highest quality, fresh ingredients to ensure the best dining experience
              </p>
            </div>
            <div className="text-center p-10 rounded-xl bg-white shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-600">
              <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-6 bg-red-600">
                <FaStar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-red-600 uppercase">Perfect Atmosphere</h3>
              <p className="text-gray-700 text-lg">
                Modern dining space with traditional Korean touches for an immersive experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-32 bg-[#A9190F] overflow-hidden">
        {/* Top White Diagonal */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
          <div className="absolute top-0 left-0 right-0 h-full bg-white transform -skew-y-3 -translate-y-[50%]" />
        </div>

        {/* Bottom White Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-white transform -skew-y-3 translate-y-[50%]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 z-10">
          <h2 className="text-5xl font-black mb-12 uppercase text-center text-white [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">
            Experience Our Cuisine
          </h2>
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 uppercase text-red-600">Ready to Experience<br />Korean Cuisine?</h2>
          <p className="text-2xl mb-12 text-gray-700">Join us for lunch or dinner, or order online for pickup/delivery</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/menu"
              className="w-full sm:w-auto px-12 py-5 text-xl font-bold rounded-lg bg-red-600 text-white uppercase transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
            >
              View Menu
            </Link>
            <Link
              href="/order"
              className="w-full sm:w-auto px-12 py-5 text-xl font-bold rounded-lg bg-white text-red-600 uppercase transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 border-2 border-red-600"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
} 