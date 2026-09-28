"use client";

import Link from "next/link";
import { useState } from "react";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Business Skill", href: "/skill" },
  { label: "Business Model", href: "/business-model" },
  { label: "Industries", href: "/industries" },
  { label: "Export", href: "/export" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "MLM", href: "/mlm" },
  { label: "Idea Bank", href: "/idea-bank" },
];

const secondaryNav = [
  { label: "Exclusive Shops", href: "/exclusive-shops" },
  { label: "HOT Products", href: "/hot-products" },
  { label: "Special Offer", href: "/special-offer" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Free Gifts", href: "/free-gifts" },
  { label: "New Products", href: "/new-products" },
  { label: "Sale & Clearance", href: "/sale" },
  { label: "Factory Price", href: "/factory-price" },
  { label: "Business Club", href: "/business-club" },
];

const tertiaryNav = [
  { label: "CEO Club", href: "/ceo-club" },
  { label: "Young Entrepreneur Club", href: "/young-entrepreneur" },
  { label: "Investor Zone", href: "/investor-zone" },
  { label: "Business Associate Zone", href: "/associate-zone" },
  { label: "Join Us", href: "/join" },
  { label: "Advertise With Us", href: "/advertise" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar — social + CTA */}
      <div className="bg-[#0d1b5e] px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919311667784"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 text-sm font-medium"
          >
            📱 WhatsApp
          </a>
          <a
            href="https://t.me/BusinessMallofIndia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 text-sm"
          >
            Telegram
          </a>
          <span className="text-gray-400 text-sm hidden sm:inline">
            Facebook · Instagram · Twitter · YouTube
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-[#f97316] text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-orange-500 transition"
          >
            Request Quote
          </Link>
          <Link
            href="/ai-advisor"
            className="bg-[#fbbf24] text-black text-xs font-bold px-3 py-1.5 rounded hover:bg-yellow-400 transition"
          >
            ✨ AI Advisor
          </Link>
        </div>
      </div>

      {/* Brand bar */}
      <div className="bg-[#0a0f3c] text-white px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center font-extrabold text-white text-lg">
            BMI
          </div>
          <div>
            <div className="font-bold text-lg leading-tight">Business Mall of India</div>
            <div className="text-xs text-orange-300">START YOUR BUSINESS NOW .. ASK US HOW?</div>
          </div>
        </Link>
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Primary nav row */}
      <nav className="bg-[#1a2a8f] text-white text-xs font-semibold hidden sm:flex flex-wrap px-2 py-1 gap-0.5">
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-2 py-1.5 hover:bg-[#f97316] rounded transition whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Secondary nav row */}
      <nav className="bg-[#0d1b5e] text-white text-xs hidden sm:flex flex-wrap px-2 py-1 gap-0.5 border-t border-blue-800">
        {secondaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-2 py-1 hover:bg-[#f97316] rounded transition whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Tertiary nav row */}
      <nav className="bg-[#0a0f3c] text-gray-300 text-xs hidden sm:flex flex-wrap px-2 py-1 gap-0.5 border-t border-blue-900">
        {tertiaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-2 py-1 hover:text-white hover:bg-[#f97316] rounded transition whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-[#0d1b5e] text-white text-sm flex flex-col px-4 py-3 gap-2">
          {[...primaryNav, ...secondaryNav, ...tertiaryNav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-1 border-b border-blue-800 hover:text-orange-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
