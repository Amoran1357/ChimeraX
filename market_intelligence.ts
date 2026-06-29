// =======================================================
// ChimeraX Market Intelligence
// =======================================================

import { cmc } from "./CMC";

export interface MarketReport{

    sentiment:string;

    volatility:number;

    liquidity:string;

    trend:string;

    btc:number;

    eth:number;

    summary:string;

}

class MarketIntelligence{

    async analyse(asset:string):Promise<MarketReport>{

        const snapshot = await cmc.snapshot();

        return{

            sentiment:snapshot.sentiment,

            volatility:32,

            liquidity:
                snapshot.macro?.liquidity ??
                "Unknown",

            trend:
                snapshot.sentiment==="BULLISH"
                ? "UPTREND"
                : "DOWNTREND",

            btc:snapshot.btc.price,

            eth:snapshot.eth.price,

            summary:
                `${asset} market analysed successfully.`

        };

    }

    // =======================================
    // Future integrations
    // =======================================

    async orderBook(){

        // TODO
        // Binance DEX

    }

    async derivatives(){

        // TODO
        // Funding
        // OI
        // Liquidations

    }

    async onChain(){

        // TODO

        // Glassnode

        // Arkham

        // Nansen

    }

    async macro(){

        // TODO

        // CoinMarketCap Skill Hub

        // daily_market_overview

    }

}

export const marketIntelligence =
new MarketIntelligence();
