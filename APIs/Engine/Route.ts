import { NextResponse } from "next/server";
import { runPipeline } from "@/lib/trade-pipeline";

export async function GET() {
  const result = await runPipeline();

  return NextResponse.json(result);
}
