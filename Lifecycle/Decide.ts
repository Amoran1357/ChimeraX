import { generateConsensus }
from "@/lib/consensus";

export async function decide(
  elderVotes:any[]
) {

  return generateConsensus(
    elderVotes
  );

}
