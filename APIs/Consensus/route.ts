import { NextResponse } from “next/server”;
import { consensus } from “@/lib/consensus”;
import { getMarketIntelligence } from “@/lib/market-intelligence”;
import { callOpenRouter } from “@/lib/openrouter”;

const elders = [
{ name: “momentum”, prompt: “You are Momentum Elder…” },
{ name: “narrative”, prompt: “You are Narrative Elder…” },
{ name: “risk”, prompt: “You are Risk Elder…” }
];

export async function GET() {
try {
const market = await getMarketIntelligence();

const votes = await Promise.all(
  elders.map(async (e) => {
    const res = await callOpenRouter(
      e.prompt,
      JSON.stringify(market)
    );
    try {
      return JSON.parse(res);
    } catch {
      return {
        elder: e.name,
        vote: "HOLD",
        confidence: 50
      };
    }
  })
);
const decision = consensus(votes);
return NextResponse.json({
  market,
  votes,
  decision
});

} catch (err: any) {
return NextResponse.json(
{ error: err.message },
{ status: 500 }
);
}
}
