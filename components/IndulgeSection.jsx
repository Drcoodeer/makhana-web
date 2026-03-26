import Image from "next/image";

export default function IndulgeSection() {
  const cards = [
    {
      title: "Minimal luxury presentation",
      description: "Clean spacing, elegant typography, and premium tones create a strong first impression.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3L4 12L12 21L20 12L12 3Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Premium Packaging",
      description: "Luxury-led visual presentation helps justify premium pricing and gifting appeal.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      title: "Online Purchase Ready",
      description: "Simple product layout, focused CTAs, and a strong e-commerce buying journey.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Worldwide Appeal",
      description: "The brand identity is tailored to work for both domestic and international customers.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" strokeDasharray="4 4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-brand-dark/40 relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4 block">Elegant benefits</span>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">A smarter way to indulge.</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Present the product as a premium lifestyle snack — wholesome, beautiful, and crafted for a modern audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-brand-accent/30 transition-all group backdrop-blur-xl shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-all">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
