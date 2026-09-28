import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f3c] text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center font-extrabold text-white text-sm">
              BMI
            </div>
            <span className="font-bold text-white text-sm">Business Mall of India</span>
          </div>
          <p className="text-xs leading-relaxed">
            Your one-stop platform for business solutions, skill development,
            exclusive products, and entrepreneurship support across India.
          </p>
          <div className="mt-4 flex gap-3 text-lg">
            <a href="https://wa.me/919311667784" target="_blank" rel="noopener noreferrer" title="WhatsApp">📱</a>
            <a href="https://t.me/BusinessMallofIndia" target="_blank" rel="noopener noreferrer" title="Telegram">✈️</a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-3">Quick Links</h3>
          <ul className="space-y-1.5 text-xs">
            {[
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Business Skill", "/skill"],
              ["Industries", "/industries"],
              ["Business Opportunities", "/opportunities"],
              ["Investor Zone", "/investor-zone"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-orange-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-3">Shop</h3>
          <ul className="space-y-1.5 text-xs">
            {[
              ["Exclusive Shops", "/exclusive-shops"],
              ["HOT Products", "/hot-products"],
              ["Special Offers", "/special-offer"],
              ["New Products", "/new-products"],
              ["Sale & Clearance", "/sale"],
              ["Factory Price", "/factory-price"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-orange-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-3">Join Our Community</h3>
          <ul className="space-y-1.5 text-xs">
            {[
              ["CEO Club", "/ceo-club"],
              ["Young Entrepreneur Club", "/young-entrepreneur"],
              ["Business Club", "/business-club"],
              ["MLM", "/mlm"],
              ["Advertise With Us", "/advertise"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-orange-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/ai-advisor"
            className="inline-block mt-4 bg-[#f97316] text-white text-xs font-bold px-4 py-2 rounded hover:bg-orange-500 transition"
          >
            ✨ Try AI Business Advisor
          </Link>
        </div>
      </div>

      <div className="border-t border-blue-900 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Business Mall of India. All rights reserved.
      </div>
    </footer>
  );
}
