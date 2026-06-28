import { askOpenRouter }
from "@/lib/models/openrouter";

export async function narrativeElder(
  news:any
) {

  const analysis =
    await askOpenRouter(
      `
      Analyze crypto narrative:

      ${JSON.stringify(news)}
      `
    );

  return {

    elder:"Narrative",
    analysis

  };

}
