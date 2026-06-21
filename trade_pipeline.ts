import { getMarketIntelligence } from “./market-intelligence”;
import { consensus } from “./consensus”;
import { executeTWAKTrade } from “./twak”;

import { momentumElder } from “@/elders/momentum”;
import { narrativeElder } from “@/elders/narrative”;
import { whaleElder } from “@/elders/whale”;
import { riskElder } from “@/elders/risk”;
import { chaosElder } from “@/elders/chaos”;

export async function runPipeline() {
const market = await getMarketIntelligence();

const votes = await Promise.all([
momentumElder(market),
narrativeElder(market),
whaleElder(market),
riskElder(market),
chaosElder(market)
]);

const decision = consensus(votes);

const trade = await executeTWAKTrade(decision);

return {
market,
votes,
decision,
trade
};
}