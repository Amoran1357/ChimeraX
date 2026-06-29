// ==========================================================
// ChimeraX Elder Orchestrator
// ==========================================================

import { openRouter } from "./openrouter";

export interface ElderVote {
  elder: string;
  vote: "BUY" | "SELL" | "HOLD";
  confidence: number;
  reasoning: string;
}

export interface ElderConsensus {
  action: "BUY" | "SELL" | "HOLD";
  confidence: number;
  votes: ElderVote[];
  summary: string;
}

class ElderOrchestrator {

  async deliberate(asset: string, market: any): Promise<ElderConsensus> {

    const elders = [

      {
        name: "Reflection",
        fn: openRouter.reflection.bind(openRouter)
      },

      {
        name: "Strategy",
        fn: openRouter.strategy.bind(openRouter)
      },

      {
        name: "Liquidity",
        fn: openRouter.liquidity.bind(openRouter)
      },

      {
        name: "Macro",
        fn: openRouter.macro.bind(openRouter)
      },

      {
        name: "Portfolio",
        fn: openRouter.portfolio.bind(openRouter)
      },

      {
        name: "Risk",
        fn: openRouter.risk.bind(openRouter)
      },

      {
        name: "Security",
        fn: openRouter.security.bind(openRouter)
      },

      {
        name: "Execution",
        fn: openRouter.execution.bind(openRouter)
      }

    ];

    const votes: ElderVote[] = [];

    for (const elder of elders) {

      try {

        const response = await elder.fn(
          JSON.stringify({
            asset,
            market
          })
        );

        const text = response.content.toUpperCase();

        let vote: "BUY" | "SELL" | "HOLD" = "HOLD";

        if (text.includes("BUY"))
          vote = "BUY";

        if (text.includes("SELL"))
          vote = "SELL";

        votes.push({

          elder: elder.name,

          vote,

          confidence: 90,

          reasoning: response.content

        });

      } catch {

        votes.push({

          elder: elder.name,

          vote: "HOLD",

          confidence: 50,

          reasoning: "AI unavailable"

        });

      }

    }

    const buy =
      votes.filter(v => v.vote === "BUY").length;

    const sell =
      votes.filter(v => v.vote === "SELL").length;

    let action: "BUY" | "SELL" | "HOLD" = "HOLD";

    if (buy > sell)
      action = "BUY";

    if (sell > buy)
      action = "SELL";

    const confidence = Math.round(

      votes.reduce(
        (sum, v) => sum + v.confidence,
        0
      ) / votes.length

    );

    return {

      action,

      confidence,

      votes,

      summary:
        `${buy} BUY | ${sell} SELL | ${votes.length} Elders`

    };

  }

}

export const elderOrchestrator =
new ElderOrchestrator();
