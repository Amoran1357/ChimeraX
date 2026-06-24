import { NextResponse } from “next/server”;
import { callOpenRouter } from “@/lib/openrouter”;
import { getMarketIntelligence } from “@/lib/market-intelligence”;

const elders = [
{ name: “momentum”, file: “You are Momentum Elder…” },
{ name: “narrative”, file: “You are Narrative Elder…” },
{ name: “risk”, file: “You are Risk Elder…” }
];

export async function GET() {
try {
const market = await getMarketIntelligence();

const results = await Promise.all(
  elders.map(async (e) => {
    const response = await callOpenRouter(
      e.file,
      JSON.stringify(market)
    );
    try {
      return JSON.parse(response);
    } catch {
      return {
        elder: e.name,
        vote: "HOLD",
        confidence: 50,
        reason: "parse error fallback"
      };
    }
  })
);
return NextResponse.json(results);

} catch (err: any) {
return NextResponse.json(
{ error: err.message },
{ status: 500 }
);
}
}
import { supabase } from "@/lib/db/supabase";

export async function GET() {

  const { data } =
    await supabase
      .from("elders")
      .select("*");

  return Response.json(data);

}
