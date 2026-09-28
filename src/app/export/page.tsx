import PageHero from "@/components/PageHero";
import Link from "next/link";
export const metadata = { title: "Export from India — Business Mall of India" };
export default function Page() {
  return (
    <div>
      <PageHero title="Export from India" subtitle="Discover traditional and modern Indian products ideal for international export." emoji="🌏" ctaLabel="Start Exporting" ctaHref="/contact" />
      <section className="max-w-4xl mx-auto px-4 py-10 text-center text-gray-600 text-sm">
        <p className="mb-6"><Link href="/contact" className="text-orange-500 font-semibold hover:underline">Contact us</Link> to explore export opportunities.</p>
        <Link href="/ai-advisor" className="inline-block bg-[#0d1b5e] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1a2a8f] transition text-sm">Ask AI Advisor</Link>
      </section>
    </div>
  );
}
