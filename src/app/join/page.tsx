import PageHero from "@/components/PageHero";
import Link from "next/link";
export const metadata = { title: "Join Us — Business Mall of India" };
export default function Page() {
  return (
    <div>
      <PageHero title="Join Us" subtitle="Join Business Mall of India and be part of India's largest business community." emoji="🌟" ctaLabel="Join Now" ctaHref="/contact" />
      <section className="max-w-4xl mx-auto px-4 py-10 text-center text-gray-600 text-sm">
        <p className="mb-6"><Link href="/contact" className="text-orange-500 font-semibold hover:underline">Contact us</Link> to join the BMI community.</p>
        <Link href="/ai-advisor" className="inline-block bg-[#0d1b5e] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1a2a8f] transition text-sm">Ask AI Advisor</Link>
      </section>
    </div>
  );
}
