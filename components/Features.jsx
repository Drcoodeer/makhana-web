import Image from "next/image";

export default function Features() {
  const features = [
    {
      icon: "/svg-1.svg",
      title: "Premium Quality",
      description: "Carefully presented to feel refined, giftable, and globally premium.",
    },
    {
      icon: "/svg-2.svg",
      title: "Worldwide Shipping",
      description: "Serve international customers with clear global delivery support.",
    },
    {
      icon: "/svg-3.svg",
      title: "Free Delivery",
      description: "Highlight free delivery offers clearly to increase checkout conversion.",
    },
    {
      icon: "/svg-4.svg",
      title: "Secure Purchase",
      description: "Elegant checkout flow designed for trust, comfort, and quick buying.",
    },
  ];

  return (
    <section className="py-20 bg-brand-dark/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-all hover:bg-white/[0.08]"
            >
              <div className="relative w-12 h-12 mb-6 transform group-hover:scale-110 transition-transform">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
