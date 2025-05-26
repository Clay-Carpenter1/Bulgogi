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
    <section id={id} className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-black uppercase text-[#A9190F]">
          {title}
        </h2>
        {isBestSeller && (
          <span 
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-[#A9190F]"
          >
            Popular
          </span>
        )}
      </div>
      <div className="grid gap-6">
        {items.map((item) => (
          <div 
            key={item.name} 
            className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:border-[#A9190F]/10 transition-all duration-300 transform hover:-translate-y-1 bg-white"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {item.name}
                  {item.isBestSeller && (
                    <span 
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white bg-[#A9190F]"
                    >
                      Popular
                    </span>
                  )}
                </h3>
                {item.description && (
                  <p className="text-gray-600 mt-2">{item.description}</p>
                )}
              </div>
              <span className="text-lg font-bold text-[#A9190F] ml-4">${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 