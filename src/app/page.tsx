import Link from "next/link";
import Image from "next/image";

const W = "https://static.wixstatic.com/media/";

const slideItems = [
  {
    label: "Business Solution",
    img: `${W}7021d0_4e0db1caa08a4426846c041e52011fb0~mv2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7021d0_4e0db1caa08a4426846c041e52011fb0~mv2.png`,
    href: "/services",
  },
  {
    label: "Business Skill Development Courses",
    img: `${W}7021d0_2283df42affc41299c1c48f6349547c8~mv2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7021d0_2283df42affc41299c1c48f6349547c8~mv2.png`,
    href: "/skill",
  },
  {
    label: "Traditional Products from India",
    img: `${W}7021d0_1c9eaac186e44aecb834048e743b3d44~mv2.jpeg/v1/fill/w_250,h_250,q_90,enc_avif,quality_auto/7021d0_1c9eaac186e44aecb834048e743b3d44~mv2.jpeg`,
    href: "/export",
  },
];

const categoryIcons = [
  { label: "Business Skill", sub: "Enter the world of Business Skill Development", img: `${W}7021d0_2283df42affc41299c1c48f6349547c8~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_2283df42affc41299c1c48f6349547c8~mv2.png`, href: "/skill" },
  { label: "Exclusive Shops", sub: "Exclusive Business Shops", img: `${W}7021d0_4e0db1caa08a4426846c041e52011fb0~mv2.png/v1/fill/w_114,h_113,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_4e0db1caa08a4426846c041e52011fb0~mv2.png`, href: "/exclusive-shops" },
  { label: "Sale & Clearence", sub: "Never Before Price", img: `${W}7021d0_8fdf7723515d41b6a0a0f512304bc987~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_8fdf7723515d41b6a0a0f512304bc987~mv2.png`, href: "/sale" },
  { label: "Business Solution", sub: "Business Solution for All Your Business Concerns", img: `${W}7021d0_4e0db1caa08a4426846c041e52011fb0~mv2.png/v1/fill/w_114,h_113,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_4e0db1caa08a4426846c041e52011fb0~mv2.png`, href: "/services" },
  { label: "Hot Products", sub: "Hot Business Products", img: `${W}7021d0_6ea18270524e44759db6a8ec56dff27d~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_6ea18270524e44759db6a8ec56dff27d~mv2.png`, href: "/hot-products" },
  { label: "MLM", sub: "Multi level Marketing", img: `${W}7021d0_fbe8f52c48ab4f33892e267693ec9f37~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_fbe8f52c48ab4f33892e267693ec9f37~mv2.png`, href: "/mlm" },
  { label: "Opportunities", sub: "World of Business Opportunities for every Business Aspirant", img: `${W}7021d0_2a39a1c1da0a41b48bb4192fc403c0af~mv2.png/v1/fill/w_115,h_113,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_2a39a1c1da0a41b48bb4192fc403c0af~mv2.png`, href: "/opportunities" },
  { label: "New Products", sub: "New Business Products", img: `${W}7021d0_6ea18270524e44759db6a8ec56dff27d~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_6ea18270524e44759db6a8ec56dff27d~mv2.png`, href: "/new-products" },
  { label: "Investor Zone", sub: "Become Investor", img: `${W}7021d0_0791979e975341c9bb4e07de45651564~mv2.png/v1/fill/w_114,h_116,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_0791979e975341c9bb4e07de45651564~mv2.png`, href: "/investor-zone" },
  { label: "Biz Idea Bank", sub: "Business Idea Bank where you can find business idea for your business Journey", img: `${W}7021d0_2283df42affc41299c1c48f6349547c8~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_2283df42affc41299c1c48f6349547c8~mv2.png`, href: "/idea-bank" },
  { label: "Factory Price", sub: "Factory Price Products", img: `${W}7021d0_4e0db1caa08a4426846c041e52011fb0~mv2.png/v1/fill/w_114,h_113,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_4e0db1caa08a4426846c041e52011fb0~mv2.png`, href: "/factory-price" },
  { label: "CEO CLUB", sub: "Show Interest for Exclusive Benefits", img: `${W}7021d0_fbe8f52c48ab4f33892e267693ec9f37~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/7021d0_fbe8f52c48ab4f33892e267693ec9f37~mv2.png`, href: "/ceo-club" },
];

const managementItems = [
  { label: "Retail Solution", sub: "A 2 Z of Retail Management System", href: "/services" },
  { label: "Warehouse Management", sub: "Everything in Warehouse Management", href: "/services" },
  { label: "Manufacturing Management", sub: "All Product and Services for your manufacturing Needs", href: "/services" },
];

const techProducts = [
  { name: "LED TV", price: "FROM ₹ 6,999/-", img: `${W}7021d0_5b2902254c804a37b43e1a5e1c8c478e~mv2.png/v1/fit/w_480,h_271,q_90,enc_avif,quality_auto/7021d0_5b2902254c804a37b43e1a5e1c8c478e~mv2.png` },
  { name: "Smart Home Devices", price: "FROM ₹ 5999/-", img: `${W}7021d0_3cc4b3ab91f842ef8b8741e291beda21~mv2.jpg/v1/fit/w_480,h_411,q_90,enc_avif,quality_auto/7021d0_3cc4b3ab91f842ef8b8741e291beda21~mv2.jpg` },
  { name: "MUSIC SYSTEM", price: "FROM ₹4999/-", img: `${W}7021d0_5b2902254c804a37b43e1a5e1c8c478e~mv2.png/v1/fit/w_480,h_271,q_90,enc_avif,quality_auto/7021d0_5b2902254c804a37b43e1a5e1c8c478e~mv2.png` },
  { name: "Smartwatches", price: "FROM ₹1999/-", img: `${W}7021d0_3cc4b3ab91f842ef8b8741e291beda21~mv2.jpg/v1/fit/w_480,h_411,q_90,enc_avif,quality_auto/7021d0_3cc4b3ab91f842ef8b8741e291beda21~mv2.jpg` },
];

const serviceCards = [
  { label: "Branding", sub: "Promotion" },
  { label: "advertisement", sub: "" },
  { label: "new business", sub: "" },
  { label: "Business idea", sub: "" },
  { label: "Consulting", sub: "" },
];

const saleProducts = [
  { name: "Shopping Bags", price: "FROM ₹ 6/-", sub: "Business Promotion" },
  { name: "Gift Items", price: "FROM ₹ 5/-", sub: "" },
  { name: "Retail Management Software", price: "FROM ₹ 7999/-", sub: "" },
  { name: "Paper Label", price: "FROM ₹ 0.50/-", sub: "" },
  { name: "Barcode Scanner", price: "FROM ₹ 2599/-", sub: "" },
  { name: "Website + Domain", price: "FROM ₹ 7500/-", sub: "" },
  { name: "ISO credit card size plastic card", price: "FROM ₹ 15/-", sub: "" },
  { name: "Non Woven Bag", price: "FROM ₹ 5/-", sub: "" },
  { name: "Business Consultancy", price: "FROM ₹ 2999/-", sub: "" },
  { name: "Thermal Printer", price: "FROM ₹ 13,500/-", sub: "" },
  { name: "Content Creation", price: "FROM ₹ 1100/-", sub: "" },
  { name: "IT Consultancy", price: "FROM ₹ 5999/-", sub: "" },
];

const traditionalProducts = [
  { name: "Banarasi Sari", img: `${W}7021d0_1c9eaac186e44aecb834048e743b3d44~mv2.jpeg/v1/fill/w_116,h_116,q_90,enc_avif,quality_auto/7021d0_1c9eaac186e44aecb834048e743b3d44~mv2.jpeg` },
  { name: "Terracotta Pottery", img: `${W}7021d0_1314b72356964dafa5555bd0bad678dc~mv2.webp/v1/fill/w_116,h_116,q_90,enc_avif,quality_auto/7021d0_1314b72356964dafa5555bd0bad678dc~mv2.webp` },
  { name: "Spice", img: `${W}7021d0_0e0f9f2f85164c359c3d3fe2277f2f0b~mv2.webp/v1/fill/w_116,h_116,q_90,enc_avif,quality_auto/7021d0_0e0f9f2f85164c359c3d3fe2277f2f0b~mv2.webp` },
  { name: "Traditional Oil Lamps", img: `${W}7021d0_74ebe0f3c5344d87b25e91aff99c72f8~mv2.webp/v1/fill/w_116,h_116,q_90,enc_avif,quality_auto/7021d0_74ebe0f3c5344d87b25e91aff99c72f8~mv2.webp` },
];

export default function HomePage() {
  return (
    <div className="bg-white text-[#1f2833]">

      {/* Orange banner */}
      <div className="bg-[#ff9933] text-white text-center font-extrabold text-lg py-3 px-4 tracking-wide">
        START YOUR BUSINESS NOW .. ASK US HOW ?
      </div>

      {/* Hero slideshow (static 3-slide display) */}
      <section className="bg-[#f6ebe4] py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
          {slideItems.map((s) => (
            <Link key={s.label} href={s.href}
              className="flex flex-col items-center gap-3 group">
              <div className="w-48 h-48 rounded-xl overflow-hidden bg-white shadow flex items-center justify-center">
                <Image src={s.img} alt={s.label} width={192} height={192} className="object-contain w-full h-full" unoptimized />
              </div>
              <span className="text-sm font-bold text-center text-[#1f2833] group-hover:text-[#ff9933] transition max-w-[160px]">{s.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Welcome hero */}
      <section className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold leading-tight mb-4">
            Welcome to <span className="text-[#1f2833]">BUSINESS MALL OF INDIA</span> the Hub of Business Opportunities
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Where we Empower Businesses to Succeed &amp; Help in Connecting Businesses to Build a Stronger Economy
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link href="/contact" className="bg-[#ff9933] text-white font-bold px-6 py-2.5 rounded hover:bg-orange-500 transition">
              Request Quote
            </Link>
            <Link href="/about" className="border-2 border-[#1f2833] text-[#1f2833] font-bold px-6 py-2.5 rounded hover:bg-gray-100 transition">
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg bg-[#9b8fd4] flex items-center justify-center min-h-[280px]">
          <Image
            src={`${W}7021d0_204fe071d40a47a89d29f408bd5ca48a~mv2.jpg/v1/fill/w_480,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7021d0_204fe071d40a47a89d29f408bd5ca48a~mv2.jpg`}
            alt="Business" width={480} height={320} className="object-cover w-full h-full" unoptimized
          />
        </div>
      </section>

      {/* Category icons grid */}
      <section className="bg-[#eff1f2] py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categoryIcons.map((c) => (
            <Link key={c.label} href={c.href}
              className="bg-white rounded-xl p-4 flex flex-col items-center text-center gap-2 hover:shadow-md hover:border-[#ff9933] border border-transparent transition group">
              <Image src={c.img} alt={c.label} width={60} height={60} className="object-contain" unoptimized />
              <span className="font-bold text-xs text-[#1f2833] group-hover:text-[#ff9933] transition">{c.label}</span>
              <span className="text-[10px] text-gray-500 leading-tight">{c.sub}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Management solutions */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4">
          {managementItems.map((m) => (
            <Link key={m.label} href={m.href}
              className="border border-gray-200 rounded-xl p-5 hover:border-[#ff9933] hover:shadow-sm transition">
              <div className="font-bold text-[#1f2833] mb-1">{m.label}</div>
              <div className="text-xs text-gray-500">{m.sub}</div>
              <div className="text-[#ff9933] text-xs font-semibold mt-2">Go to →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tech products strip */}
      <section className="bg-[#1f2833] py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techProducts.map((p) => (
            <Link key={p.name} href="/hot-products"
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition group">
              <div className="h-36 bg-gray-100 overflow-hidden">
                <Image src={p.img} alt={p.name} width={240} height={144} className="object-cover w-full h-full group-hover:scale-105 transition" unoptimized />
              </div>
              <div className="p-3">
                <div className="font-bold text-sm text-[#1f2833]">{p.name}</div>
                <div className="text-[#ff9933] font-extrabold text-sm mt-0.5">{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Traditional Products */}
      <section className="py-10 px-4 bg-[#f6ebe4]">
        <h2 className="text-center text-xl font-extrabold text-[#1f2833] mb-6">Traditional Products from India</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {traditionalProducts.map((p) => (
            <Link key={p.name} href="/export"
              className="flex flex-col items-center gap-2 group">
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow">
                <Image src={p.img} alt={p.name} width={96} height={96} className="object-cover w-full h-full group-hover:scale-105 transition" unoptimized />
              </div>
              <span className="text-xs font-semibold text-center text-[#1f2833] group-hover:text-[#ff9933]">{p.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Services section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {serviceCards.map((s) => (
            <Link key={s.label} href="/services"
              className="bg-[#566fb8] text-white rounded-xl p-4 text-center hover:bg-[#ff9933] transition group">
              <div className="font-bold text-sm capitalize">{s.label}</div>
              {s.sub && <div className="text-xs mt-1 text-blue-100 group-hover:text-white">{s.sub}</div>}
              <div className="mt-3 text-xs font-semibold border border-white/50 rounded px-2 py-1 inline-block">
                Contact Now
              </div>
              <div className="text-xs mt-1 text-blue-200 group-hover:text-white">Read More &gt;</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sale marquee */}
      <div className="bg-[#ff9933] text-white py-2 overflow-hidden">
        <div className="marquee-track font-extrabold text-sm">
          {Array(2).fill("SALE • SALE • SALE • SALE • SALE • SALE • SALE • SALE • SALE • SALE • SALE • SALE • ").join("")}
        </div>
      </div>

      {/* Sale products grid */}
      <section className="py-10 px-4 bg-[#eff1f2]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {saleProducts.map((p) => (
            <div key={p.name} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
              {p.sub && <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">{p.sub}</div>}
              <div className="font-bold text-sm text-[#1f2833]">{p.name}</div>
              <div className="text-[#ff9933] font-extrabold text-sm mt-1">{p.price}</div>
              <Link href="/contact" className="block mt-2 text-xs text-[#566fb8] font-semibold hover:text-[#ff9933] transition">
                Contact Now →
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
