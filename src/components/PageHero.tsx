import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  emoji?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageHero({ title, subtitle, emoji, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#0d1b5e] to-[#1a2a8f] text-white py-12 px-4 text-center">
      {emoji && <div className="text-5xl mb-3">{emoji}</div>}
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">{title}</h1>
      {subtitle && <p className="text-gray-300 max-w-xl mx-auto text-sm">{subtitle}</p>}
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="inline-block mt-5 bg-[#f97316] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-orange-500 transition text-sm"
        >
          {ctaLabel}
        </Link>
      )}
    </section>
  );
}
