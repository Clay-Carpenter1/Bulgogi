import Image from 'next/image';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaCar } from 'react-icons/fa';
import BackToTopButton from '../menu/BackToTopButton';

export default function Locations() {
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
        <div className="relative h-full flex flex-col justify-center items-center text-white z-20 px-4">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight uppercase text-center leading-none [text-shadow:_4px_4px_8px_rgba(0,0,0,0.5)]">
            <div className="mb-2 sm:mb-4">Visit Us</div>
            <div className="text-red-600 [text-shadow:_2px_2px_0px_#fff,_4px_4px_8px_rgba(0,0,0,0.4)]">
              In Conway
            </div>
          </h1>
        </div>

        {/* Bottom Red Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-30" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-[#A9190F] translate-y-[50%]" />
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-6 z-40 bg-[#A9190F] py-16 sm:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Map */}
              <div className="relative h-[300px] sm:h-[400px] md:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4314041849396!2d-92.4424373!3d35.0917097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cd5e1a29d2b7ef%3A0x7c4f4c0b7e3e1a0a!2s317%20Oak%20St%20%231%2C%20Conway%2C%20AR%2072032!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

              {/* Location Info */}
              <div className="p-6 sm:p-8 md:p-12">
                <h2 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 uppercase text-[#A9190F]">
                  Conway Location
                </h2>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#A9190F] flex items-center justify-center">
                        <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 uppercase">Address</h3>
                      <p className="text-base sm:text-lg text-gray-700">
                        317 Oak St Ste 1<br />
                        Conway, AR 72032
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#A9190F] flex items-center justify-center">
                        <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 uppercase">Hours</h3>
                      <p className="text-base sm:text-lg text-gray-700">
                        Monday - Saturday<br />
                        11:00 AM - 8:30 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#A9190F] flex items-center justify-center">
                        <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 uppercase">Contact</h3>
                      <a 
                        href="tel:+15013585923" 
                        className="text-base sm:text-lg text-gray-700 hover:text-[#A9190F] transition-colors"
                      >
                        (501) 358-5923
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#A9190F] flex items-center justify-center">
                        <FaCar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 uppercase">Parking</h3>
                      <p className="text-base sm:text-lg text-gray-700">
                        Free parking available<br />
                        Drive-thru service
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom White Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-white translate-y-[50%]" />
        </div>
      </section>

      {/* White Background Section */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Call to Action */}
          <div className="bg-white rounded-xl p-6 sm:p-12 shadow-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 uppercase text-[#A9190F]">
              Ready to Order?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Experience authentic Korean cuisine through pickup or delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=317+Oak+St+Ste+1+Conway+AR+72032"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-white text-[#A9190F] text-lg sm:text-xl font-bold rounded-lg border-2 border-[#A9190F] hover:bg-[#A9190F] hover:text-white transition-colors uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Directions
              </a>
              <a
                href="/order"
                className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-[#A9190F] text-white text-lg sm:text-xl font-bold rounded-lg hover:bg-[#8a1410] transition-colors uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
} 