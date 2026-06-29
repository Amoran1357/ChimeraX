// =========================================================
// ChimeraX Trade Pipeline
// =========================================================

import { twak } from "./Twak";
import { tradeEngine } from "./trade_engine";

class TradePipeline{

    async run(asset:string){

        console.log("Pipeline Started");

        // STEP 1

        const decision =
            await twak.think(asset);

        // STEP 2

        const result =
            await tradeEngine.execute({

                action:decision.action,

                confidence:decision.confidence,

                positionSize:decision.allocation,

                slippage:0.5,

                stopLoss:3,

                takeProfit:8

            },asset);

        return{

            decision,

            result

        };

    }

    // =====================================
    // Autonomous Trading
    // =====================================

    async autonomous(){

        // TODO

        // Scheduler

        // CoinMarketCap

        // Elder Council

        // Execute

    }

}

export const tradePipeline =
new TradePipeline();
