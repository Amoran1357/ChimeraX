import { callOpenRouter } from “@/lib/openrouter”;

export async function chaosElder(market: any) {
const prompt = `
You are Chaos Elder.

You detect black swan probability, instability, and unpredictable risk.

Return JSON only.
`;

const res = await callOpenRouter(prompt, JSON.stringify(market));
return JSON.parse(res);
}
