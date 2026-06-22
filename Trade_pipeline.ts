import { getMarketIntelligence } from "./market-intelligence";
const decision = consensus(votes);

const agentAction =
  await executeBNBAgent({
    decision,
    confidence: 85,
    timestamp: Date.now()
  });

const trade =
  await executeTWAKTrade(decision);
import { executeBNBAgent } from "./bnb-agent";

