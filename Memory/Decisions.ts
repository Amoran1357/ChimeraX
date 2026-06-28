import { saveMemory }
from "@/lib/db/memory";

export async function rememberDecision(
  consensus: any
) {

  await saveMemory(
    "consensus",
    consensus
  );

}
