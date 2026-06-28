import { NextResponse } from “next/server”;
import { getMarketIntelligence } from “@/lib/market-intelligence”;

export async function GET() {
try {
const data = await getMarketIntelligence();

return NextResponse.json({
  success: true,
  data
});

} catch (err: any) {
return NextResponse.json(
{ success: false, error: err.message },
{ status: 500 }
);
}
}
