"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you ship worldwide ?",
      answer: "Yes, we ship our premium makhana collection to over 45 countries with dedicated international logistics partners to ensure freshness and quality.",
    },
    {
      question: "Keep the answers short, premium, and confidence-building.",
      answer: "Our makhana is sourced directly from the finest farms, roasted to perfection, and packed in luxury-grade materials to maintain its crunch and flavor profile.",
    },
    {
        question: "Do you ship worldwide ?",
        answer: "Yes, we ship our premium makhana collection to over 45 countries with dedicated international logistics partners.",
    },
    {
        question: "Do you ship worldwide ?",
        answer: "Yes, we ship our premium makhana collection to over 45 countries with dedicated international logistics partners.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-black relative">
       {/* Background decorative piece */}


      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4 block">Frequently asked questions</span>
          <h2 className="text-4xl lg:text-7xl font-bold mb-8">Everything customers want to know</h2>
          <p className="text-white/50 text-lg">Keep the answers short, premium, and confidence-building.</p>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group border border-white/10 rounded-3xl overflow-hidden bg-white/[0.01] transition-all hover:border-brand-accent/20 hover:bg-white/[0.03]"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-label={faq.question}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-all"
              >
                <span className="text-xl font-bold group-hover:text-brand-accent transition-colors">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-brand-accent border-brand-accent text-black' : ''}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
              </button>

              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-8 pt-0 text-white/50 leading-relaxed border-t border-white/5 mx-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
