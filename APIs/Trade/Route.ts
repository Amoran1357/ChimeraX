import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      asset: "BTC",
      action: "BUY",
      status: "Executed",
      txHash: "0xabc123",
    },
    {
      asset: "ETH",
      action: "HOLD",
      status: "Waiting",
      txHash: "",
    },
  ]);
}
