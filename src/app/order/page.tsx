import Image from 'next/image';
import { FaPhoneAlt, FaGlobe, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import BackToTopButton from '../menu/BackToTopButton';

export default function Order() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
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
        <div className="relative h-full flex flex-col justify-center items-center text-white z-20 px-4">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight uppercase text-center leading-none [text-shadow:_4px_4px_8px_rgba(0,0,0,0.5)]">
            <div className="mb-2 sm:mb-4">Order Online</div>
            <div className="text-red-600 [text-shadow:_2px_2px_0px_#fff,_4px_4px_8px_rgba(0,0,0,0.4)]">
              Pickup or Delivery
            </div>
          </h1>
        </div>

        {/* Bottom Red Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-30" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-[#A9190F] transform -skew-y-3 translate-y-[50%]" />
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-6 z-40 bg-[#A9190F] py-16 sm:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-32">
            {/* Online Order Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mb-4 sm:mb-6 bg-[#A9190F]">
                <FaGlobe className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-[#A9190F] uppercase">
                Order Online
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                Quick and easy ordering through our secure system. Perfect for advance orders and customization.
              </p>
              <a
                href="https://www.clover.com/online-ordering/bulgogi-conway"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 sm:py-4 px-4 sm:px-6 text-lg sm:text-xl font-bold text-white rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 bg-[#A9190F] text-center uppercase tracking-wide"
              >
                Order Now
              </a>
            </div>

            {/* Phone Order Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mb-4 sm:mb-6 bg-[#A9190F]">
                <FaPhoneAlt className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-[#A9190F] uppercase">
                Call In Your Order
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                Prefer to speak with us directly? Our staff is ready to take your order and answer any questions.
              </p>
              <a
                href="tel:+15013585923"
                className="inline-block w-full py-3 sm:py-4 px-4 sm:px-6 text-lg sm:text-xl font-bold text-white rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 bg-[#A9190F] text-center uppercase tracking-wide"
              >
                (501) 358-5923
              </a>
            </div>
          </div>

          {/* White Diagonal Transition */}
          <div className="absolute left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
            <div className="absolute left-0 right-0 h-full bg-white transform -skew-y-3 translate-y-[50%]" />
          </div>
        </div>
      </section>

      {/* White Background Section */}
      <section className="relative bg-white py-16 sm:py-32">
        <div className="max-w-6xl mx-auto px-4">
          {/* Ordering Info */}
          <div className="bg-white rounded-xl p-6 sm:p-12 shadow-2xl mb-16 sm:mb-32">
            <h2 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-10 text-center uppercase text-[#A9190F]">
              Ordering Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
              <div className="text-center p-6 sm:p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 uppercase text-[#A9190F]">Pickup Orders</h3>
                <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
                  <li>• Ready in 15-30 minutes</li>
                  <li>• Fresh and hot upon pickup</li>
                  <li>• Convenient drive-thru service</li>
                </ul>
              </div>
              <div className="text-center p-6 sm:p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 uppercase text-[#A9190F]">Delivery Orders</h3>
                <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
                  <li>• Available for local delivery</li>
                  <li>• Professional delivery service</li>
                  <li>• Real-time order tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Red Diagonal Transition */}
          <div className="absolute left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
            <div className="absolute left-0 right-0 h-full bg-[#A9190F] transform -skew-y-3 translate-y-[50%]" />
          </div>
        </div>
      </section>

      {/* Red Background Section */}
      <section className="relative bg-[#A9190F] py-16 sm:py-32">
        <div className="max-w-6xl mx-auto px-4">
          {/* Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xl text-center">
              <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 bg-[#A9190F]">
                <FaClock className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 uppercase text-[#A9190F]">Hours</h3>
              <p className="text-base sm:text-lg text-gray-700">Monday - Saturday</p>
              <p className="text-base sm:text-lg text-gray-700">11:00 AM - 8:30 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xl text-center">
              <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 bg-[#A9190F]">
                <FaMapMarkerAlt className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 uppercase text-[#A9190F]">Location</h3>
              <p className="text-base sm:text-lg text-gray-700">317 Oak St Ste 1, Conway, AR 72032</p>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xl text-center">
              <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 bg-[#A9190F]">
                <FaPhoneAlt className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 uppercase text-[#A9190F]">Contact</h3>
              <a href="tel:+15013585923" className="text-base sm:text-lg text-gray-700 hover:text-[#A9190F] transition-colors">
                (501) 358-5923
              </a>
            </div>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
} 