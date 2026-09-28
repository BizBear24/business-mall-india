import PageHero from "@/components/PageHero";
import Link from "next/link";
export const metadata = { title: "Sale & Clearance — Business Mall of India" };
const saleItems = [
  { name: "Shopping Bags", price: "From ₹6", emoji: "🛍️" },
  { name: "Gift Items", price: "From ₹5", emoji: "🎁" },
  { name: "Paper Label", price: "From ₹0.50", emoji: "🏷️" },
  { name: "Non-Woven Bag", price: "From ₹5", emoji: "👜" },
  { name: "Plastic Card (ISO)", price: "From ₹15", emoji: "💳" },
  { name: "Content Creation", price: "From ₹1,100", emoji: "✍️" },
];
export default function Page() {
  return (
    <div>
      <PageHero title="Sale & Clearance" subtitle="Never before prices — massive discounts on business essentials." emoji="🏷️" ctaLabel="Shop Now" ctaHref="/contact" />
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {saleItems.map((p) => (
            <div key={p.name} className="border border-orange-200 rounded-xl p-5 text-center bg-orange-50 hover:shadow-md transition">
              <div className="text-4xl mb-3">{p.emoji}</div>
              <div className="font-bold text-sm text-gray-800">{p.name}</div>
              <div className="text-orange-600 font-bold text-sm mt-1">{p.price}</div>
              <Link href="/contact" className="block mt-2 text-xs text-[#0d1b5e] font-semibold hover:text-orange-500 transition">Buy Now</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
