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
