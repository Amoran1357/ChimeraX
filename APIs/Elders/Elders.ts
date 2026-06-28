import { momentumElder } from "@/lib/elders/momentum";

export async function GET() {

  return Response.json(
    await momentumElder()
  );

}
