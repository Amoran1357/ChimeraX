import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    consensus: "BUY",
    confidence: 91,
    votes: {
      buy: 6,
      hold: 2,
      sell: 0,
    },
    timestamp: new Date().toISOString(),
  });
}
