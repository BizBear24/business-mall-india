"use client";

import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to us for quotes, partnerships, or any business inquiry."
        emoji="📞"
      />
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-[#0d1b5e]">Get In Touch</h2>
            {[
              { label: "WhatsApp", value: "+91 9311667784", href: "https://wa.me/919311667784", emoji: "📱" },
              { label: "Telegram", value: "@BusinessMallofIndia", href: "https://t.me/BusinessMallofIndia", emoji: "✈️" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#f1f5f9] rounded-xl p-4 hover:bg-blue-50 transition"
              >
                <span className="text-2xl">{c.emoji}</span>
                <div>
                  <div className="font-semibold text-sm text-[#0d1b5e]">{c.label}</div>
                  <div className="text-xs text-gray-600">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="bg-[#0d1b5e] text-white rounded-xl p-4 text-sm">
              <div className="font-bold mb-1">Business Hours</div>
              <div className="text-gray-300 text-xs">Monday – Saturday: 9 AM – 7 PM IST</div>
            </div>
          </div>

          {/* Quote form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will contact you soon on WhatsApp.");
            }}
            className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm space-y-4"
          >
            <h2 className="text-lg font-bold text-[#0d1b5e]">Request a Quote</h2>
            {[
              { label: "Name", type: "text", placeholder: "Your full name" },
              { label: "Phone / WhatsApp", type: "tel", placeholder: "+91 XXXXXXXXXX" },
              { label: "Email", type: "email", placeholder: "you@example.com" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold text-gray-700 mb-1">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0d1b5e]"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                rows={3}
                placeholder="Tell us about your business need..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0d1b5e] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f97316] text-white font-bold py-2.5 rounded-lg hover:bg-orange-500 transition text-sm"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
