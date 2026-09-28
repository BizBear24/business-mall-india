import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request: Request) {
  const { message, history } = await request.json();

  if (!message?.trim()) {
    return Response.json({ error: "No message provided" }, { status: 400 });
  }

  const messages: Anthropic.MessageParam[] = [
    ...(history ?? []),
    { role: "user", content: message },
  ];

  const response = await client.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 1024,
    system: `You are the AI Business Advisor for Business Mall of India (BMI), a comprehensive business platform based in India.
You help entrepreneurs, business owners, and aspiring professionals with:
- Business ideas suited for the Indian market
- Skill development recommendations
- MLM and direct marketing guidance
- Product sourcing and factory pricing
- Export opportunities from India
- Retail and warehouse management
- Investment and investor guidance
- Business model advice
- How to join the CEO Club, Young Entrepreneur Club, or Business Club

Keep answers practical, India-focused, and encouraging. Use ₹ for prices. Be concise and helpful.
When relevant, mention that Business Mall of India offers consultancy starting from ₹2,999, IT consultancy from ₹5,999, and website+domain packages from ₹7,500.`,
    messages,
  });

  const reply = response.content[0].type === "text" ? response.content[0].text : "";

  return Response.json({ reply });
}
