import { getSentiment } from "@/lib/intelligence/sentiment";

export async function GET() {

  const data = await getSentiment();

  return Response.json(data);

}