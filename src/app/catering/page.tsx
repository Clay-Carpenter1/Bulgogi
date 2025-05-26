import Image from 'next/image';
import { FaPhone, FaCalendarAlt, FaUsers, FaClock } from 'react-icons/fa';
import BackToTopButton from '../menu/BackToTopButton';

export default function Catering() {
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
          <h1 className="text-7xl md:text-9xl font-black tracking-tight uppercase text-center leading-none [text-shadow:_4px_4px_8px_rgba(0,0,0,0.5)]">
            <div className="mb-4">Catering</div>
            <div className="text-red-600 [text-shadow:_2px_2px_0px_#fff,_4px_4px_8px_rgba(0,0,0,0.4)]">
              For Any Event
            </div>
          </h1>
        </div>

        {/* Bottom Red Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-30" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-[#A9190F] transform -skew-y-3 translate-y-[50%]" />
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-6 z-40 bg-[#A9190F] py-32 px-4">
        <div className="max-w-6xl mx-auto relative">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <div className="bg-white rounded-xl p-10 shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-6 bg-[#A9190F]">
                <FaUsers className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#A9190F] uppercase">Perfect For</h3>
              <p className="text-gray-700 text-lg">
                Corporate Events<br />
                Weddings<br />
                Family Gatherings<br />
                Special Occasions
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-6 bg-[#A9190F]">
                <FaCalendarAlt className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#A9190F] uppercase">Advance Notice</h3>
              <p className="text-gray-700 text-lg">
                Please place your order<br />
                at least 48 hours<br />
                in advance
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-6 bg-[#A9190F]">
                <FaClock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#A9190F] uppercase">Hours</h3>
              <p className="text-gray-700 text-lg">
                Monday - Saturday<br />
                11:00 AM - 8:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Red to White Diagonal Transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 w-full h-[200%] bg-white transform -skew-y-3 origin-bottom-right translate-y-1/2" />
        </div>
      </section>

      {/* White Background Section */}
      <section className="relative bg-white py-32">
        <div className="max-w-6xl mx-auto px-4">
          {/* Call to Action */}
          <div className="bg-white rounded-xl p-12 shadow-2xl text-center">
            <h2 className="text-4xl font-black mb-6 uppercase text-[#A9190F]">
              Ready to Place Your Order?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Call us to discuss your catering needs. Our team will help you create the perfect menu for your event.
            </p>
            <div className="flex flex-col items-center justify-center space-y-6">
              <a
                href="tel:+15013585923"
                className="inline-flex items-center px-12 py-6 bg-[#A9190F] text-white text-2xl font-bold rounded-lg hover:bg-[#8a1410] transition-colors uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaPhone className="w-8 h-8 mr-4" />
                (501) 358-5923
              </a>
              <p className="text-gray-600 text-lg italic">
                Please call during business hours to speak with our catering specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
} 