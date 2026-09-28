import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Services — Business Mall of India" };

const services = [
  { title: "Business Consultancy", price: "From ₹2,999", desc: "Expert consulting for business setup, growth, and strategy.", emoji: "🤝" },
  { title: "IT Consultancy", price: "From ₹5,999", desc: "Technology solutions for your business needs.", emoji: "💻" },
  { title: "Content Creation", price: "From ₹1,100", desc: "Professional content for marketing, social media, and websites.", emoji: "✍️" },
  { title: "Website + Domain", price: "From ₹7,500", desc: "Complete web presence setup for your business.", emoji: "🌐" },
  { title: "Branding", price: "Custom Quote", desc: "Build a strong brand identity that stands out.", emoji: "🎨" },
  { title: "Promotion & Advertisement", price: "Custom Quote", desc: "Reach your target audience across channels.", emoji: "📣" },
  { title: "Retail Management", price: "From ₹7,999", desc: "A to Z of retail management systems.", emoji: "🏪" },
  { title: "Warehouse Management", price: "Custom Quote", desc: "Everything in warehouse management.", emoji: "📦" },
  { title: "Manufacturing Support", price: "Custom Quote", desc: "Products and services for manufacturing needs.", emoji: "🏭" },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Business solutions for all your business concerns — from IT to branding to full retail management."
        emoji="💼"
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="border border-blue-100 rounded-xl p-5 hover:shadow-md transition">
              <div className="text-4xl mb-3">{s.emoji}</div>
              <h3 className="font-bold text-[#0d1b5e] mb-1">{s.title}</h3>
              <p className="text-xs text-gray-600 mb-3">{s.desc}</p>
              <div className="text-orange-500 font-bold text-sm">{s.price}</div>
              <Link href="/contact" className="block mt-3 text-xs text-[#0d1b5e] font-semibold hover:text-orange-500 transition">
                Contact Now →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
