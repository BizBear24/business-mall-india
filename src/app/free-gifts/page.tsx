import PageHero from "@/components/PageHero";
import Link from "next/link";
export const metadata = { title: "Free Gifts — Business Mall of India" };
export default function Page() {
  return (
    <div>
      <PageHero title="Free Gifts" subtitle="Exciting free gifts with select products and memberships." emoji="🎁" ctaLabel="Get Free Gifts" ctaHref="/contact" />
      <section className="max-w-4xl mx-auto px-4 py-10 text-center text-gray-600 text-sm">
        <p className="mb-6"><Link href="/contact" className="text-orange-500 font-semibold hover:underline">Contact us</Link> to learn how to claim your free gifts.</p>
        <Link href="/ai-advisor" className="inline-block bg-[#0d1b5e] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1a2a8f] transition text-sm">Ask AI Advisor</Link>
      </section>
    </div>
  );
}
