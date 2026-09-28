"use client";

import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };

const starters = [
  "What business can I start with ₹50,000 in India?",
  "How does MLM work and how do I join?",
  "What products can I export from India?",
  "How do I get factory price products?",
  "Tell me about the CEO Club benefits",
  "What are the best retail business ideas?",
];

export default function AIAdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Namaste! I'm your AI Business Advisor from Business Mall of India. How can I help you start or grow your business today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: updatedMessages.slice(1).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Sorry, I couldn't get a response. Please try again." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1b5e] to-[#1a2a8f] flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-[#fbbf24] text-black font-extrabold text-xs px-3 py-1 rounded-full mb-2">
            POWERED BY CLAUDE AI
          </div>
          <h1 className="text-2xl font-extrabold text-white">
            ✨ AI Business Advisor
          </h1>
          <p className="text-gray-300 text-sm mt-1">
            Get instant business guidance tailored for India
          </p>
        </div>

        {/* Chat box */}
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ height: "60vh" }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#0d1b5e] text-white rounded-br-none"
                      : "bg-[#f1f5f9] text-gray-800 rounded-bl-none"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#f1f5f9] text-gray-500 px-4 py-3 rounded-2xl rounded-bl-none text-sm animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="border-t p-3 flex gap-2 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about business in India..."
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0d1b5e]"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[#f97316] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-orange-500 disabled:opacity-50 transition text-sm"
            >
              Send
            </button>
          </form>
        </div>

        {/* Starter prompts */}
        <div className="mt-4">
          <p className="text-gray-400 text-xs text-center mb-3">Try asking:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {starters.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                disabled={loading}
                className="bg-white/10 text-white border border-white/20 text-xs px-3 py-1.5 rounded-full hover:bg-white/20 transition disabled:opacity-50"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
