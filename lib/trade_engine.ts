// =========================================================
// ChimeraX Trade Engine
// =========================================================

import { ExecutionPlan } from "./execution_planner";

export interface TradeResult {

    success:boolean;

    txHash?:string;

    exchange:string;

    message:string;

}

class TradeEngine{

    async execute(
        plan:ExecutionPlan,
        asset:string
    ):Promise<TradeResult>{

        console.log("Trade Engine");

        console.log(plan);

        // ========================================
        // TODO
        //
        // Trust Wallet Agent Kit
        //
        // executeTrade()
        //
        // ========================================

        return{

            success:true,

            exchange:"Demo",

            txHash:
                "0xDEMO123456",

            message:
                `${plan.action} ${asset}`

        };

    }

    // ==========================================
    // Binance DEX
    // ==========================================

    async binanceDEX(){

        // TODO

    }

    // ==========================================
    // PancakeSwap
    // ==========================================

    async pancakeSwap(){

        // TODO

    }

    // ==========================================
    // Uniswap
    // ==========================================

    async uniswap(){

        // TODO

    }

}

export const tradeEngine =
new TradeEngine();
