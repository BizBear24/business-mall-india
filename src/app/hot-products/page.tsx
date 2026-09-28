import PageHero from "@/components/PageHero";
import Link from "next/link";
export const metadata = { title: "HOT Products — Business Mall of India" };
const products = [
  { name: "LED TV", price: "From ₹6,999", emoji: "📺" },
  { name: "Smart Home Devices", price: "From ₹5,999", emoji: "🏠" },
  { name: "Music System", price: "From ₹4,999", emoji: "🎵" },
  { name: "Smartwatches", price: "From ₹1,999", emoji: "⌚" },
  { name: "Barcode Scanner", price: "From ₹2,599", emoji: "📷" },
  { name: "Thermal Printer", price: "From ₹13,500", emoji: "🖨️" },
];
export default function Page() {
  return (
    <div>
      <PageHero title="HOT Products" subtitle="The hottest business and consumer products — best prices guaranteed." emoji="🔥" ctaLabel="Order Now" ctaHref="/contact" />
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {products.map((p) => (
            <div key={p.name} className="border border-blue-100 rounded-xl p-5 text-center hover:shadow-md transition">
              <div className="text-4xl mb-3">{p.emoji}</div>
              <div className="font-bold text-sm text-gray-800">{p.name}</div>
              <div className="text-orange-500 font-bold text-sm mt-1">{p.price}</div>
              <Link href="/contact" className="block mt-2 text-xs text-[#0d1b5e] font-semibold hover:text-orange-500 transition">Order Now</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
