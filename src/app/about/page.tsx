import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "About Us — Business Mall of India" };

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Business Mall of India"
        subtitle="Empowering entrepreneurs and businesses across India with the right tools, products, and knowledge."
        emoji="🏢"
      />
      <section className="max-w-4xl mx-auto px-4 py-10 space-y-8 text-gray-700">
        <div className="bg-[#f1f5f9] rounded-2xl p-6">
          <h2 className="text-lg font-bold text-[#0d1b5e] mb-3">Who We Are</h2>
          <p className="text-sm leading-relaxed">
            Business Mall of India (BMI) is India&apos;s comprehensive business platform offering an
            integrated ecosystem of products, services, and opportunities designed to help businesses
            at every stage — from idea to execution to scale.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Business Solutions", desc: "Complete consulting and management solutions for all business types.", emoji: "💼" },
            { title: "Skill Development", desc: "Courses and mentorship to sharpen your business acumen.", emoji: "📚" },
            { title: "Product Sourcing", desc: "Factory-direct pricing on a vast range of business and retail products.", emoji: "🏭" },
            { title: "Community & Network", desc: "CEO Club, Young Entrepreneur Club, Business Club and more.", emoji: "🌐" },
          ].map((item) => (
            <div key={item.title} className="border border-blue-100 rounded-xl p-5">
              <div className="text-3xl mb-2">{item.emoji}</div>
              <h3 className="font-bold text-[#0d1b5e] text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/contact"
            className="bg-[#0d1b5e] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1a2a8f] transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
