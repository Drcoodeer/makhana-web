"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Ariana M.",
      location: "London, UK",
      text: "Beautifully packed and genuinely premium. It felt more like a luxury snack brand than a regular food product.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      name: "Ryan D.",
      location: "Dubai, UAE",
      text: "The flavour, packaging, and overall presentation were excellent. Very gift-worthy and elegant.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      name: "Sophia K.",
      location: "Toronto, Canada",
      text: "Smooth online purchase experience and the product looked premium from the moment it arrived.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-brand-dark/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4 block">Customer love</span>
            <h2 className="text-4xl lg:text-7xl font-bold mb-8">A premium experience people remember.</h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Real stories from our global community. We are grateful for every review and the love our premium makhana collection receives worldwide.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all outline-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-brand-accent w-6" : "bg-white/20"}`}
                  ></button>
                ))}
              </div>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-brand-accent outline-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative min-h-[300px] flex items-center">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/5 transition-all duration-500 flex flex-col justify-center gap-8 backdrop-blur-sm ${
                  activeIndex === i ? "opacity-100 translate-y-0 scale-100 z-10" : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                }`}
              >
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-serif">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-accent/20">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white">{t.name}</div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
