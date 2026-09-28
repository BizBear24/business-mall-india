"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const socialIcons = [
  { alt: "Whatsapp", href: "https://wa.me/919311667784", src: "https://static.wixstatic.com/media/11062b_8b3cbae79dcb4a55b4ec2bac32f88d96~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8b3cbae79dcb4a55b4ec2bac32f88d96~mv2.png" },
  { alt: "Telegram", href: "https://t.me/BusinessMallofIndia", src: "https://static.wixstatic.com/media/7021d0_1e80820c35b24a708bcce10a82080331~mv2.webp/v1/fill/w_39,h_39,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7021d0_1e80820c35b24a708bcce10a82080331~mv2.webp" },
  { alt: "Facebook", href: "https://www.facebook.com/", src: "https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e316f544f9094143b9eac01f1f19e697.png" },
  { alt: "Instagram", href: "https://www.instagram.com/", src: "https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d6893330740455c96d218258a458aa4.png" },
  { alt: "Twitter", href: "https://www.twitter.com/", src: "https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png" },
  { alt: "YouTube", href: "https://www.youtube.com/", src: "https://static.wixstatic.com/media/a1b09fe8b7f04378a9fe076748ad4a6a.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a1b09fe8b7f04378a9fe076748ad4a6a.png" },
];

const nav1 = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Business Skill", href: "/skill" },
  { label: "Business Model", href: "/business-model" },
  { label: "Industries", href: "/industries" },
  { label: "Export", href: "/export" },
  { label: "Business Opportunities", href: "/opportunities" },
  { label: "MLM", href: "/mlm" },
  { label: "Business Idea Bank", href: "/idea-bank" },
];

const nav2 = [
  { label: "Exclusive Shops", href: "/exclusive-shops" },
  { label: "HOT Products", href: "/hot-products" },
  { label: "Special Offer", href: "/special-offer" },
  { label: "SPONSORS", href: "/sponsors" },
  { label: "FREE GIFTS", href: "/free-gifts" },
  { label: "NEW PRODUCTS", href: "/new-products" },
  { label: "SALE & CLEARENCE", href: "/sale" },
  { label: "FACTORY PRICE", href: "/factory-price" },
  { label: "Business Club", href: "/business-club" },
];

const nav3 = [
  { label: "CEO Club", href: "/ceo-club" },
  { label: "Young Enterpreneur Club", href: "/young-entrepreneur" },
  { label: "Investor Zone", href: "/investor-zone" },
  { label: "Business Associate Zone", href: "/associate-zone" },
  { label: "Join Us", href: "/join" },
  { label: "Advertise With Us", href: "/advertise" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Social + CTA row */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          {socialIcons.map((s) => (
            <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" title={s.alt}>
              <Image src={s.src} alt={s.alt} width={32} height={32} className="rounded" unoptimized />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="bg-[#ff9933] text-white font-bold px-4 py-1.5 rounded text-sm hover:bg-orange-500 transition">
            Request Quote
          </Link>
          <Link href="/ai-advisor" className="bg-[#1f2833] text-white font-bold px-4 py-1.5 rounded text-sm hover:bg-gray-800 transition">
            Log In
          </Link>
        </div>
      </div>

      {/* Nav row 1 */}
      <nav className="bg-white border-b border-gray-200 hidden sm:flex flex-wrap px-2 py-1 text-[13px] font-medium text-[#1f2833]">
        {nav1.map((item) => (
          <Link key={item.href} href={item.href} className="px-3 py-2 hover:bg-gray-100 rounded transition whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Nav row 2 */}
      <nav className="bg-[#1f2833] hidden sm:flex flex-wrap px-2 py-1 text-[12px] font-semibold text-white">
        {nav2.map((item) => (
          <Link key={item.href} href={item.href} className="px-3 py-1.5 hover:bg-[#ff9933] rounded transition whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Nav row 3 */}
      <nav className="bg-[#566fb8] hidden sm:flex flex-wrap px-2 py-1 text-[12px] font-medium text-white">
        {nav3.map((item) => (
          <Link key={item.href} href={item.href} className="px-3 py-1.5 hover:bg-[#ff9933] rounded transition whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <div className="sm:hidden bg-[#1f2833] px-4 py-2 flex items-center justify-between">
        <span className="text-white font-bold text-sm">Business Mall of India</span>
        <button onClick={() => setOpen(!open)} className="text-white text-xl">☰</button>
      </div>
      {open && (
        <div className="sm:hidden bg-white border-b text-sm flex flex-col px-4 py-3 gap-1 max-h-96 overflow-y-auto">
          {[...nav1, ...nav2, ...nav3].map((item) => (
            <Link key={item.href + item.label} href={item.href} onClick={() => setOpen(false)}
              className="py-1.5 border-b border-gray-100 hover:text-[#ff9933] transition">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
