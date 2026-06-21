import { NextResponse } from “next/server”;
import { DEMO_MODE } from “@/lib/demo-mode”;
import { getMarketIntelligence } from “@/lib/market-intelligence”;

export async function GET() {
try {
const market = await getMarketIntelligence();

// fake decision (replace later with consensus output)
const action = market.sentiment > 0.6 ? "BUY" : "HOLD";
const trade = DEMO_MODE
  ? {
      status: "SIMULATED",
      action,
      txHash: "demo_" + Date.now(),
      pnl: (Math.random() * 5).toFixed(2) + "%"
    }
  : {
      status: "LIVE",
      action,
      txHash: "bnb_" + Date.now(),
      pnl: null
    };
return NextResponse.json([trade]);

} catch (err: any) {
return NextResponse.json(
{ error: err.message },
{ status: 500 }
);
}
}
