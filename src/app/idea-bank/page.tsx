import PageHero from "@/components/PageHero";
import Link from "next/link";
export const metadata = { title: "Business Idea Bank — Business Mall of India" };
export default function Page() {
  return (
    <div>
      <PageHero title="Business Idea Bank" subtitle="Find business ideas curated for the Indian market — from micro to large scale." emoji="💡" ctaLabel="Browse Ideas" ctaHref="/contact" />
      <section className="max-w-4xl mx-auto px-4 py-10 text-center text-gray-600 text-sm">
        <p className="mb-6">Not sure which business to start? <Link href="/ai-advisor" className="text-orange-500 font-semibold hover:underline">Ask our AI Advisor</Link> or <Link href="/contact" className="text-orange-500 font-semibold hover:underline">contact us</Link>.</p>
        <Link href="/ai-advisor" className="inline-block bg-[#0d1b5e] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1a2a8f] transition text-sm">AI Business Ideas</Link>
      </section>
    </div>
  );
}
