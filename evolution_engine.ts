let memory: any[] = [];

export function storeDecision(data: any) {
memory.push(data);

if (memory.length > 50) {
memory = memory.slice(-50);
}
}

export function evolveStrategy() {
const buyWins = memory.filter(m => m.result === “win”).length;
const total = memory.length || 1;

return {
winRate: buyWins / total,
adaptation: buyWins / total > 0.55 ? “aggressive” : “defensive”
};
}