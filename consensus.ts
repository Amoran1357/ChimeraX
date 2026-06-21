export function consensus(votes: any[]) {
let score = { BUY: 0, SELL: 0, HOLD: 0 };

const weights: any = {
momentum: 1.2,
narrative: 1.0,
whale: 1.3,
risk: 1.5,
chaos: 1.8
};

votes.forEach(v => {
const weight = weights[v.elder] || 1;
score[v.vote] += (v.confidence || 50) * weight;
});

return Object.entries(score)
.sort((a, b) => b[1] - a[1])[0][0];
}