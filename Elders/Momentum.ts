import { askOpenRouter }
from "@/lib/models/openrouter";

export async function momentumElder(
  marketData:any
) {

  const analysis =
    await askOpenRouter(
      `
      Analyze:

      ${JSON.stringify(marketData)}

      Return:
      BUY SELL HOLD
      confidence 0-100
      `
    );

  return {

    elder:"Momentum",
    analysis

  };

}
import { saveElderVote }
from "@/lib/db/elders";

export async function momentumElder() {

  const result = {
    elder: "Momentum",
    vote: "BUY",
    confidence: 84
  };

  await saveElderVote(
    result.elder,
    result.vote,
    result.confidence
  );

  return result;

}
