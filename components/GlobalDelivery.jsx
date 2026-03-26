import Image from "next/image";

export default function GlobalDelivery() {
  const stats = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
           <circle cx="12" cy="12" r="10" />
           <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
           <path d="M2 12h20" />
        </svg>
      ),
      title: "Worldwide shipment support",
      description: "Clearly state that your premium makhana can be ordered online and shipped internationally.",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: "Free delivery messaging",
      description: "Use this area to explain free delivery thresholds by country, region, or promotional campaign.",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Secure checkout confidence",
      description: "Reinforce trust with visible purchase clarity, safe payment messaging, and reliable shipping notes.",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3h12l4 6-10 13L2 9z" />
          <path d="M12 22V8" />
        </svg>
      ),
      title: "Premium dispatch experience",
      description: "High-quality packaging visuals improve perceived value and reduce hesitation before purchase.",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-7xl font-bold mb-8">Delivered Across the World</h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Make international buyers feel confident with strong shipping communication, premium presentation, and secure fulfillment messaging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square lg:aspect-auto self-stretch rounded-[3rem] overflow-hidden border border-white/10 group min-h-[350px] md:min-h-[500px]">
            <Image
              src="/map.png"
              alt="Global Shipping"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
            />
            {/* Overlay for map */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 p-6 md:p-8 rounded-[2rem] md:rounded-3xl bg-black/60 backdrop-blur-md border border-white/10 md:max-w-sm">
                <div className="flex gap-4 items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                        <div className="w-3 h-3 rounded-full bg-brand-accent animate-ping"></div>
                    </div>
                    <span className="text-[12px] font-bold uppercase tracking-widest leading-tight">Active shipping routes</span>
                </div>
                <p className="text-sm text-white/70 italic leading-relaxed">
                    "We've successfully shipped to over 45 countries, maintaining the same premium quality from our door to yours."
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-brand-accent/20 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-accent">
                  {stat.icon}
                </div>
                <h3 className="font-bold mb-3 text-lg leading-tight">{stat.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
