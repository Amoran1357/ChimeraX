// =======================================================
// ChimeraX TWAK
// Trade Wisdom & Knowledge Core
// Master AI Coordinator
// =======================================================

import { marketIntelligence } from "./market_intelligence";
import { elderOrchestrator } from "./elder_orchestrator";
import { executionPlanner } from "./execution_planner";

export interface TradingDecision {
  action: "BUY" | "SELL" | "HOLD";
  confidence: number;
  asset: string;
  allocation: number;
  reason: string;
}

class Twak {

  async think(asset: string): Promise<TradingDecision> {

    console.log("──────────────");
    console.log("TWAK START");
    console.log("──────────────");

    // STEP 1
    const market = await marketIntelligence.analyse(asset);

    // STEP 2
    const council = await elderOrchestrator.deliberate(
      asset,
      market
    );

    // STEP 3
    const plan = executionPlanner.build(
      asset,
      council
    );

    return {
      action: plan.action,
      confidence: plan.confidence,
      allocation: plan.positionSize,
      asset,
      reason: council.summary
    };
  }

  async execute(asset: string){

      const decision = await this.think(asset);

      console.log(decision);

      // ===========================================
      // TODO
      //
      // tradeEngine.execute(decision)
      //
      // ===========================================

      return decision;

  }

}

export const twak = new Twak();
