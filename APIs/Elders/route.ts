import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      elder: "Reflection",
      vote: "BUY",
      confidence: 94,
      reason: "Momentum remains positive.",
    },
    {
      elder: "Macro",
      vote: "BUY",
      confidence: 90,
      reason: "Liquidity conditions remain supportive.",
    },
    {
      elder: "Risk",
      vote: "HOLD",
      confidence: 87,
      reason: "Volatility elevated but acceptable.",
    },
    {
      elder: "Execution",
      vote: "BUY",
      confidence: 91,
      reason: "Execution conditions favourable.",
    },
  ]);
}
