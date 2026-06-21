import { DEMO_MODE } from “./demo-mode”;

export async function executeTrade(decision: string) {
if (DEMO_MODE) {
return {
status: “SIMULATED”,
action: decision,
txHash: “demo_” + Date.now()
};
}

// REAL MODE (hook TWAK here later)
return {
status: “LIVE”,
action: decision,
txHash: “bnb_” + Date.now()
};
}