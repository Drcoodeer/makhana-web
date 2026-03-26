import Image from "next/image";

export default function BrandIdentity() {
  const points = [
    {
      number: "01",
      title: "Minimal luxury presentation",
      description: "Clean spacing, elegant typography, and premium tones create a strong first impression.",
    },
    {
      number: "02",
      title: "Built for only 3 products",
      description: "Instead of looking empty, the layout turns a small catalog into a focused premium collection.",
    },
    {
      number: "03",
      title: "Global e-commerce ready",
      description: "Worldwide shipment, free delivery messaging, and online purchase clarity are all placed upfront.",
    },
  ];

  return (
    <section className="py-24 bg-black overflow-hidden relative">


      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4 block">Why our brand feels premium</span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
            A refined identity built around modern snacking.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            This UI is designed to make your makhana brand feel luxurious, export-ready, and trustworthy for customers purchasing online from anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point) => (
            <div key={point.number} className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all group">
              <div className="text-sm font-bold text-brand-accent mb-8 p-3 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-accent group-hover:text-black transition-all">
                {point.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
