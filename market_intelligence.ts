import { fetchCMCData } from “./cmc”;

export async function getMarketIntelligence() {
const cmc = await fetchCMCData();

const sentimentScore =
cmc.volume > 1000000000 ? 0.8 : 0.55;

const volatility =
Math.random() * 0.5 + 0.2;

return {
assets: {
btc: cmc.btc,
eth: cmc.eth
},

sentimentScore,
volatility,
narrative:
  sentimentScore > 0.7
    ? "risk-on accumulation phase"
    : "uncertain consolidation",
timestamp: cmc.timestamp

};
}