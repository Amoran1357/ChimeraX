import { callOpenRouter } from “@/lib/openrouter”;

export async function whaleElder(market: any) {
const prompt = `
You are Whale Elder.

Detect accumulation, manipulation, or large player behavior.

Return JSON only:
{
“elder”:“whale”,
“vote”:“BUY|SELL|HOLD”,
“confidence”:0-100,
“reason”:””
}
`;

const res = await callOpenRouter(prompt, JSON.stringify(market));
return JSON.parse(res);
}