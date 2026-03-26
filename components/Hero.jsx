import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-black text-white">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] bg-brand-secondary/25 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-brand-accent/15 blur-[180px] rounded-full"></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-white/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
            Premium Makhana for the Modern World.
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-md font-light">
            Crafted for refined taste, elegant gifting, and everyday indulgence — our premium makhana collection is available for online purchase with worldwide shipping.
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="px-12 py-5 bg-white text-black font-bold rounded-xl hover:bg-brand-accent hover:text-black transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Shop Collection
            </button>
            <button className="px-12 py-5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all backdrop-blur-md">
              Explore Brand Story
            </button>
          </div>
        </div>

        <div className="relative h-[600px] lg:h-[800px] flex items-center justify-end">
          <div className="relative w-full h-full lg:w-[140%] lg:max-w-6xl opacity-100 transition-all duration-1000 hover:scale-[1.05] lg:scale-110 origin-right translate-x-12">
            <Image
              src="/hero-bg.png"
              alt="Premium Experience"
              fill
              className="object-contain drop-shadow-[0_0_80px_rgba(255,158,11,0.25)]"
              priority
            />
          </div>
        </div>

      </div>
    </section>


  );
}


