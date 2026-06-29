import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    provider: "CoinMarketCap",
    status: "online",
    btc: {
      price: 118245,
      change24h: 2.84,
    },
    eth: {
      price: 6250,
      change24h: 3.11,
    },
    sentiment: "Bullish",
    timestamp: new Date().toISOString(),
  });
}
