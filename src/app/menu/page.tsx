import { theme } from '@/styles/theme';
import Image from 'next/image';
import NavigationMenu from './NavigationMenu';
import BackToTopButton from './BackToTopButton';
import Link from 'next/link';
import WhiteSplatter from '@/components/WhiteSplatter';
import FadeIn from '@/components/animations/FadeIn';

interface MenuItem {
  name: string;
  description?: string;
  price: number;
  isBestSeller?: boolean;
}

interface MenuSectionProps {
  id: string;
  title: string;
  items: MenuItem[];
  isBestSeller?: boolean;
}

function MenuSection({ id, title, items, isBestSeller }: MenuSectionProps) {
  return (
    <section id={id} className="mb-12 sm:mb-16 scroll-mt-32">
      <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: theme.colors.primary }}>
          {title}
        </h2>
        {isBestSeller && (
          <span 
            className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white"
            style={{ backgroundColor: theme.colors.primary }}
          >
            Popular
          </span>
        )}
      </div>
      <div className="grid gap-4 sm:gap-6">
        {items.map((item) => (
          <div 
            key={item.name} 
            className="border rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 flex-wrap">
                  {item.name}
                  {item.isBestSeller && (
                    <span 
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: theme.colors.primary }}
                    >
                      Popular
                    </span>
                  )}
                </h3>
                {item.description && (
                  <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">{item.description}</p>
                )}
              </div>
              <span className="text-base sm:text-lg font-semibold sm:ml-4 mt-1 sm:mt-0" style={{ color: theme.colors.primary }}>${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Add section names for the dropdown
const sectionNames = {
  appetizers: 'Appetizers',
  rice: 'Bulgogi Rice Bowl',
  'kimchi-rice': 'Bulgogi Kimchi Fried Rice',
  noodles: 'Bulgogi Noodle Bowl',
  kimbap: 'Kimbap',
  cheesesteak: 'Korean Cheesesteak Sandwich',
  fries: 'Korean Cheesesteak Fries',
  ramen: 'Korean Ramen Bowls',
  'low-carb': 'Bulgogi Low Carb Bowl',
  'sesame-chicken': 'Sesame Chicken',
  'sesame-shrimp': 'Sesame Shrimp',
  tacos: 'Korean Street Tacos',
  kids: 'Kids Meal',
  vegetarian: 'Vegetarian',
  sides: 'Sides',
  dessert: 'Dessert',
  drinks: 'Drinks'
};

const menuData: Record<string, MenuItem[]> = {
  appetizers: [
    { name: 'Appetizer Sampler', description: '2 Egg Rolls, 2 Spring Rolls, 4 Fried Mandu Dumplings, Side of Sesame Chicken', price: 12.49},
    { name: 'Lettuce Wrap', description: 'Steak (8.99) - Spicy Pork - Chicken', price: 7.99 },
    { name: '6 Sweet & Tangy Chicken Wings', description: '12 Pieces: 17.79', price: 8.99},
    { name: 'Egg Roll (2)', price: 2.89 },
    { name: 'Fried Spring Roll (2)', price: 2.89 },
    { name: 'Mandu "Dumplings" 6 pieces', description: '12 pieces 9.45', price: 5.45 },
    { name: 'Fried Wonton "Crab Rangoon"', price: 5.99 },
    { name: 'Edamame', price: 5.99 },
    { name: 'Fried Shrimp (6 pieces)', price: 6.25 },
    { name: 'Gim (Korean Style Dry Seaweed)', price: 2.99 },
    { name: 'Homemade Kimchi Side Dish', description: 'Regular 6.29, Large 8.69', price: 3.29 },
    { name: 'French Fries', price: 4.99 },
  ],
  riceBowls: [
    { name: 'Steak Steamed Rice', description: '', price: 10.99},
    { name: 'Spicy Pork Steamed Rice', description: '', price: 9.99 },
    { name: 'Chicken Steamed Rice', description: '', price: 9.99 },
    { name: 'Shrimp Steamed Rice', description: '', price: 13.29 },
    { name: 'Vegetable Steamed Rice', description: '', price: 9.99 },
    { name: 'Combination Steamed Rice (2 meats)', description: 'Additional charge for Shrimp or Steak', price: 10.99 },
    { name: 'Steak Fried Rice', description: '', price: 11.99 },
    { name: 'Spicy Pork Fried Rice', description: '', price: 10.99 },
    { name: 'Chicken Fried Rice', description: '', price: 10.99 },
    { name: 'Shrimp Fried Rice', description: '', price: 13.99 },
    { name: 'Vegetable Fried Rice', description: '', price: 10.99 },
    { name: 'Combination Fried Rice (2 meats)', description: 'Additional charge for Shrimp or Steak', price: 11.99 },
  ],
  kimchiRice: [
    { name: 'Steak Kimchi Fried Rice', price: 12.99},
    { name: 'Spicy Pork Kimchi Fried Rice', price: 11.99 },
    { name: 'Chicken Kimchi Fried Rice', price: 11.99 },
    { name: 'Shrimp Kimchi Fried Rice', description: '', price: 14.99 },
    { name: 'Vegetable Kimchi Fried Rice', description: '', price: 11.99 },
    { name: 'Combination Kimchi Fried Rice (2 meats)', description: 'Additional charge for Shrimp or Steak', price: 12.99 },
  ],
  noodleBowls: [
    { name: 'Steak Noodle Bowl', description: ' ', price: 11.99 },
    { name: 'Spicy Pork Noodle Bowl', description: ' ', price: 10.99 },
    { name: 'Chicken Noodle Bowl', description: ' ', price: 10.99 },
    { name: 'Shrimp Noodle Bowl', description: ' ', price: 13.99 },
    { name: 'Vegetable Noodle Bowl', description: '', price: 11.99 },
    { name: 'Combination Noodle Bowl (2 meats)', description: 'Additional charge for Shrimp or Steak', price: 11.99 },
  ],
  kimbap: [
    { name: 'Steak', price: 5.25 },
    { name: 'Spicy Pork', price: 4.29 },
    { name: 'Chicken', price: 4.29 },
    { name: 'California Roll', description: 'ONLY on Wednesday', price: 2.00 },
  ],
  koreanCheesesteak: [
    { name: 'Steak Sandwich', price: 11.99 },
    { name: 'Spicy Pork Sandwich', price: 10.99 },
    { name: 'Chicken Sandwich', price: 10.99 },
    { name: 'Combination (2 meats)', description: 'Additional charge for Steak', price: 11.99 },
  ],
  cheesesteakFries: [
    { name: 'Steak Fries', price: 13.99 },
    { name: 'Spicy Pork Fries', price: 12.99 },
    { name: 'Chicken Fries', price: 12.99 },
    { name: 'Combination (2 meats)', description: 'Additional charge for Steak', price: 13.99 },
  ],
  koreanRamen: [
    { name: 'Steak Ramen', price: 11.99 },
    { name: 'Spicy Pork Ramen', price: 10.99 },
    { name: 'Chicken Ramen', price: 10.99 },
    { name: 'Shrimp Ramen', price: 13.99 },
    { name: 'Vegetable Ramen', price: 10.99 },
    { name: 'Combination Ramen (2 meats)', description: 'Additional charge for Shrimp or Steak', price: 11.99 },
    { name: "Cody's Special", description: 'Steak Ramen with American cheese in the broth and side of Steamed Rice', price: 12.99},
  ],
  lowCarbBowls: [
    { name: 'Steak Vegetable Bowl', description: '', price: 11.99 },
    { name: 'Spicy Pork Vegetable Bowl', description: '', price: 10.99 },
    { name: 'Chicken Vegetable Bowl', description: '', price: 10.99 },
    { name: 'Shrimp Vegetable Bowl', description: '', price: 13.99 },
    { name: 'Combination (2 meats) Vegetable Bowl', description: 'Additional charge for Shrimp or Steak', price: 11.99 },
  ],
  sesameChicken: [
    { name: 'Sesame Chicken Steamed Rice', price: 9.99 },
    { name: 'Sesame Chicken Fried Rice', price: 10.99 },
    { name: 'Sesame Chicken Noodles', price: 11.99 },
    { name: 'Sesame Chicken Vegetables', price: 11.99 },
  ],
  sesameShrimp: [
    { name: 'Sesame Shrimp Steamed Rice', price: 13.79 },
    { name: 'Sesame Shrimp Fried Rice', price: 13.99 },
    { name: 'Sesame Shrimp Noodles', price: 14.99 },
    { name: 'Sesame Shrimp Vegetables', price: 14.99 },
  ],
  koreanStreetTacos: [
    { name: 'Steak Tacos', description: '', price: 8.99 },
    { name: 'Spicy Pork Tacos', description: '', price: 7.99 },
    { name: 'Chicken Tacos', description: '', price: 7.99 },
    { name: 'Combination Tacos (2 meats)', description: 'Additional charge for Steak', price: 8.99 },
  ],
  kidsMeal: [
    { name: 'Kids Rice Bowl', description: '12 & UNDER ONLY, COMES W/ FOUNTAIN DRINK', price: 7.99 },
    { name: 'Kids Noodle Bowl', description: '12 & UNDER ONLY, COMES W/ FOUNTAIN DRINK', price: 7.99 },
  ],
  vegetarianBowl: [
    { name: 'Vegetable Steamed Rice Bowl', price: 9.99 },
    { name: 'Vegetable Fried Rice Bowl', price: 10.99 },
    { name: 'Vegetable Noodle Bowl', price: 11.99 },
    { name: 'Vegetable Kimchi Fried Rice', price: 11.99 },
    { name: 'Vegetable Ramen', price: 10.99 },
  ],
  sides: [
    { name: 'Side Fried Rice', price: 3.99 },
    { name: 'Side Steamed Rice', price: 2.99 },
  ],
  dessert: [
    { name: 'Snowflake Bingsu', description: 'Mango - Mocha - Strawberry - Oreo', price: 11.99 },
    { name: 'Cheesecake', description: '', price: 5.99 },
    { name: 'Fried Cheesecake', description: '', price: 7.99 },
    { name: 'Fried Oreos', description: '', price: 7.49 },
    { name: 'Sesame Balls', description: '', price: 7.49 },
    { name: 'Vanilla or Chocolate Ice Cream', description: '', price: 3.49 },
  ],
  drinks: [
    { name: 'Fountain Drinks and Tea (16 oz)', description: 'Dine In Free Refills', price: 2.49 },
    { name: 'Bottled water, Bottled & Canned Soda available', description: 'No refills Price May Vary', price: 2.89 },
    { name: 'Korean Coffee (No Refills)', price: 1.59 },
    { name: 'Hot Tea (No Refills)', price: 1.75 },
  ],
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Splatters - Positioned away from hero section */}
      <WhiteSplatter className="top-[100vh] -right-32" zIndex={1} opacity={0.15} />
      <WhiteSplatter className="top-[150vh] -left-32" zIndex={1} opacity={0.2} />
      <WhiteSplatter className="bottom-96 right-0" zIndex={1} opacity={0.15} invert={true} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden mt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/bulgogi-hero.jpg"
            alt="Korean dishes spread"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <FadeIn className="px-4 w-full -translate-y-12" duration={1.2}>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight uppercase text-center leading-none text-white [text-shadow:_4px_4px_8px_rgba(0,0,0,0.5)]">
              <div className="mb-2 sm:mb-4">Our Menu</div>
              <div className="text-red-600 [text-shadow:_2px_2px_0px_#fff,_4px_4px_8px_rgba(0,0,0,0.4)]">
                Korean Flavors
              </div>
            </h1>
          </FadeIn>
        </div>

        {/* Bottom White Diagonal */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-30" style={{ height: '150px' }}>
          <div className="absolute bottom-0 left-0 right-0 h-full bg-white translate-y-[50%]" />
        </div>
      </section>

      {/* Menu Content */}
      <section className="relative -mt-12 z-40 bg-white py-8 sm:py-16 px-4">
        <WhiteSplatter className="top-1/3 right-0" zIndex={5} opacity={0.2} />
        <WhiteSplatter className="bottom-1/4 -left-32" zIndex={5} opacity={0.15} invert={true} />
        
        <div className="max-w-7xl mx-auto">
          {/* Navigation Menu */}
          <div className="mb-6">
            <NavigationMenu sectionNames={Object.entries(sectionNames)} />
          </div>

          {/* Menu Sections */}
          <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-16">
            <div>
              <MenuSection id="appetizers" title="Appetizers" items={menuData.appetizers} />
            </div>
            <div>
              <MenuSection id="rice" title="Bulgogi Rice Bowl" items={menuData.riceBowls} isBestSeller={true} />
            </div>
            <div>
              <MenuSection id="kimchi-rice" title="Bulgogi Kimchi Fried Rice" items={menuData.kimchiRice} />
            </div>
            <div>
              <MenuSection id="noodles" title="Bulgogi Stir Fried Noodle Bowl" items={menuData.noodleBowls} isBestSeller={true} />
            </div>
            <div>
              <MenuSection id="kimbap" title="Kimbap" items={menuData.kimbap} isBestSeller={true} />
            </div>
            <div>
              <MenuSection id="cheesesteak" title="Korean Cheesesteak Sandwich" items={menuData.koreanCheesesteak} isBestSeller={true} />
            </div>
            <div>
              <MenuSection id="fries" title="Korean Cheesesteak Fries" items={menuData.cheesesteakFries} />
            </div>
            <div>
              <MenuSection id="ramen" title="Korean Ramen Bowls" items={menuData.koreanRamen} isBestSeller={true} />
            </div>
            <div>
              <MenuSection id="low-carb" title="Bulgogi Low Carb Bowl" items={menuData.lowCarbBowls} />
            </div>
            <div>
              <MenuSection id="sesame-chicken" title="Sesame Chicken" items={menuData.sesameChicken} isBestSeller={true} />
            </div>
            <div>
              <MenuSection id="sesame-shrimp" title="Sesame Shrimp" items={menuData.sesameShrimp} />
            </div>
            <div>
              <MenuSection id="tacos" title="Korean Street Tacos" items={menuData.koreanStreetTacos} />
            </div>
            <div>
              <MenuSection id="kids" title="Kids Meal" items={menuData.kidsMeal} />
            </div>
            <div>
              <MenuSection id="vegetarian" title="Vegetarian Bowl" items={menuData.vegetarianBowl} isBestSeller={true} />
            </div>
            <div>
              <MenuSection id="sides" title="Sides" items={menuData.sides} />
            </div>
            <div>
              <MenuSection id="dessert" title="Dessert" items={menuData.dessert} isBestSeller={true} />
            </div>
            <div>
              <MenuSection id="drinks" title="Drinks" items={menuData.drinks} />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 sm:mt-24">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 uppercase text-[#A9190F]">
                Ready to Order?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Experience authentic Korean cuisine through pickup or delivery.
              </p>
              <Link
                href="/order"
                className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-[#A9190F] text-white text-lg sm:text-xl font-bold rounded-lg hover:bg-[#8a1410] transition-colors uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
}