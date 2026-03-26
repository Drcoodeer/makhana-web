import Image from "next/image";

export default function GiftBox() {
  const benefits = [
    "Includes all 3 signature flavours in one premium presentation.",
    "Perfect for boosting average order value and creating a hero product.",
    "Strong option for luxury gifting, festive campaigns, and global customers.",
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="rounded-[3rem] bg-brand-dark/40 border border-white/10 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 order-2 lg:order-1">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">The Premium Gifting Box</h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                A curated gift-ready box featuring all three makhana variants — ideal for first-time buyers, festive gifting, and premium brand positioning.
              </p>
              
              <ul className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="px-10 py-5 border border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all">
                Buy Gift box
              </button>
            </div>

            <div className="relative aspect-square lg:aspect-auto self-stretch order-1 lg:order-2 bg-gradient-to-br from-white/5 to-transparent">
              <Image
                src="/gift-box.png"
                alt="Premium Gifting Box"
                fill
                className="object-contain p-12 lg:p-20 transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
