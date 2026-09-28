import Link from "next/link";

const featuredProducts = [
  { name: "LED TV", price: "₹6,999/-", emoji: "📺" },
  { name: "Smart Home Devices", price: "₹5,999/-", emoji: "🏠" },
  { name: "Music System", price: "₹4,999/-", emoji: "🎵" },
  { name: "Smartwatches", price: "₹1,999/-", emoji: "⌚" },
];

const businessProducts = [
  { name: "Shopping Bags", price: "₹6/-", emoji: "🛍️" },
  { name: "Gift Items", price: "₹5/-", emoji: "🎁" },
  { name: "Retail Mgmt Software", price: "₹7,999/-", emoji: "💻" },
  { name: "Paper Label", price: "₹0.50/-", emoji: "🏷️" },
  { name: "Barcode Scanner", price: "₹2,599/-", emoji: "📷" },
  { name: "Website + Domain", price: "₹7,500/-", emoji: "🌐" },
  { name: "Plastic Card (ISO)", price: "₹15/-", emoji: "💳" },
  { name: "Non-Woven Bag", price: "₹5/-", emoji: "👜" },
  { name: "Business Consultancy", price: "₹2,999/-", emoji: "🤝" },
  { name: "Thermal Printer", price: "₹13,500/-", emoji: "🖨️" },
  { name: "Content Creation", price: "₹1,100/-", emoji: "✍️" },
  { name: "IT Consultancy", price: "₹5,999/-", emoji: "🖥️" },
];

const sections = [
  { title: "Business Skill", desc: "Enter the world of Business Skill Development", href: "/skill", emoji: "📈" },
  { title: "Exclusive Shops", desc: "Exclusive Business Shops", href: "/exclusive-shops", emoji: "🏪" },
  { title: "Sale & Clearance", desc: "Never Before Price", href: "/sale", emoji: "🏷️" },
  { title: "Business Solutions", desc: "Solutions for All Your Business Concerns", href: "/services", emoji: "💼" },
  { title: "Hot Products", desc: "Hot Business Products", href: "/hot-products", emoji: "🔥" },
  { title: "MLM", desc: "Multi Level Marketing", href: "/mlm", emoji: "🔗" },
  { title: "Biz Opportunities", desc: "World of Business Opportunities", href: "/opportunities", emoji: "🌍" },
  { title: "New Products", desc: "New Business Products", href: "/new-products", emoji: "✨" },
  { title: "Investor Zone", desc: "Become an Investor", href: "/investor-zone", emoji: "💰" },
  { title: "Idea Bank", desc: "Business Ideas for Your Journey", href: "/idea-bank", emoji: "💡" },
  { title: "Factory Price", desc: "Factory Price Products", href: "/factory-price", emoji: "🏭" },
  { title: "CEO Club", desc: "Exclusive Benefits for Leaders", href: "/ceo-club", emoji: "👑" },
];

const services = [
  { title: "Branding", href: "/services", emoji: "🎨" },
  { title: "Promotion", href: "/services", emoji: "📣" },
  { title: "Advertisement", href: "/advertise", emoji: "📺" },
  { title: "New Business", href: "/opportunities", emoji: "🚀" },
  { title: "Business Idea", href: "/idea-bank", emoji: "💡" },
  { title: "Consulting", href: "/services", emoji: "🤝" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-gradient-to-br from-[#0d1b5e] to-[#1a2a8f] text-white py-16 px-4 text-center">
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-3 tracking-tight">
          START YOUR BUSINESS NOW
        </h1>
        <p className="text-orange-300 text-lg font-semibold mb-6">.. ASK US HOW ?</p>
        <p className="text-gray-300 max-w-xl mx-auto text-sm mb-8">
          Business Mall of India — your complete platform for business solutions,
          skill development, traditional products, and entrepreneurship support.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="bg-[#f97316] text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-500 transition"
          >
            Request a Quote
          </Link>
          <Link
            href="/ai-advisor"
            className="bg-[#fbbf24] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            ✨ AI Business Advisor
          </Link>
        </div>
      </section>

      {/* Marquee sale banner */}
      <div className="bg-[#f97316] text-white py-2 overflow-hidden">
        <div className="marquee-track font-bold text-sm">
          {Array(2)
            .fill(
              "🔥 SALE • SALE • SALE • LED TV from ₹6,999 • Smart Home Devices from ₹5,999 • Retail Software from ₹7,999 • Business Consultancy from ₹2,999 • Website + Domain from ₹7,500 • 🔥 SALE • SALE • SALE • "
            )
            .join("")}
        </div>
      </div>

      {/* Business sections grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#0d1b5e] mb-6 text-center">
          Explore Business Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {sections.map((s) => (
            <Link
              key={s.href + s.title}
              href={s.href}
              className="border border-blue-100 rounded-xl p-4 text-center hover:shadow-md hover:border-orange-400 transition group"
            >
              <div className="text-3xl mb-2">{s.emoji}</div>
              <div className="font-semibold text-sm text-[#0d1b5e] group-hover:text-[#f97316] transition">
                {s.title}
              </div>
              <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured tech products */}
      <section className="bg-[#f1f5f9] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-[#0d1b5e] mb-6 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {featuredProducts.map((p) => (
              <Link
                key={p.name}
                href="/hot-products"
                className="bg-white rounded-xl shadow p-5 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{p.emoji}</div>
                <div className="font-bold text-sm text-gray-800">{p.name}</div>
                <div className="text-orange-500 font-extrabold text-sm mt-1">
                  FROM {p.price}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services row */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#0d1b5e] mb-6 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="bg-[#0d1b5e] text-white rounded-xl p-4 text-center hover:bg-[#1a2a8f] transition group"
            >
              <div className="text-2xl mb-2">{s.emoji}</div>
              <div className="font-semibold text-xs">{s.title}</div>
              <div className="text-orange-300 text-xs mt-1 group-hover:underline">
                Contact Now →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Business products grid */}
      <section className="bg-gradient-to-b from-white to-[#f1f5f9] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="bg-[#f97316] text-white font-extrabold px-6 py-2 rounded-full text-sm tracking-widest">
              SALE • SALE • SALE
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {businessProducts.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{p.emoji}</div>
                <div className="font-semibold text-xs text-gray-800">{p.name}</div>
                <div className="text-orange-500 font-bold text-sm mt-1">
                  FROM {p.price}
                </div>
                <Link
                  href="/contact"
                  className="inline-block mt-2 text-xs text-[#0d1b5e] font-semibold hover:text-orange-500 transition"
                >
                  Contact Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advisor CTA */}
      <section className="bg-gradient-to-r from-[#0d1b5e] to-[#1a2a8f] text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-extrabold mb-3">
          ✨ Try Our AI Business Advisor
        </h2>
        <p className="text-gray-300 max-w-lg mx-auto text-sm mb-6">
          Powered by Claude AI — get instant answers to your business questions,
          ideas tailored to your goals, and guidance on starting or growing in India.
        </p>
        <Link
          href="/ai-advisor"
          className="bg-[#fbbf24] text-black font-extrabold px-8 py-3 rounded-lg hover:bg-yellow-400 transition text-sm"
        >
          Chat with AI Advisor →
        </Link>
      </section>
    </div>
  );
}
