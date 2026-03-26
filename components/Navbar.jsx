"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "My Order", href: "/order" },
    { name: "Worldwide shipment", href: "/shipping" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8">
          <Image
            src="/svg-1.svg"
            alt="Makhana Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight text-white">Makhana</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Premium</span>
        </div>
      </div>

      <ul className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end leading-tight mr-1">
          <span className="text-[12px] font-medium text-white">Gretchen Rosser</span>
        </div>
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-brand-secondary/30 flex items-center justify-center">
          <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
