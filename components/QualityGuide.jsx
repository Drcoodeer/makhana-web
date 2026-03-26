import Image from "next/image";

export default function QualityGuide() {
  return (
    <section className="py-24 bg-brand-dark/30 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] lg:aspect-auto self-stretch">
            <Image
              src="/measurement.png"
              alt="Quality Measurements"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-12">
            <div>
                <h2 className="text-4xl font-bold mb-6 italic tracking-tight italic uppercase">Premium Grade: 6 Suta / 19 MM</h2>
                <p className="text-white/60 leading-relaxed text-lg">
                    Our makhana is graded for size and quality. We only select the largest, whitest, and crunchiest pieces to ensure a premium experience.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
                <div className="space-y-4">
                    <div className="text-5xl font-bold text-brand-accent">0.75"</div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">Standard size</p>
                </div>
                <div className="space-y-4">
                    <div className="text-5xl font-bold text-brand-accent">19MM</div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">Diameter avg.</p>
                </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <p className="text-sm italic text-white/70 leading-relaxed font-light">
                    "This size guide helps international buyers understand the premium quality they are receiving. We focus on consistency and size integrity."
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-accent">Quality Assurance Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
