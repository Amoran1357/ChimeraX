export async function analyzePortfolio(
  balances:any[]
) {

  const total =
    balances.reduce(
      (sum,b) => sum + b.value,
      0
    );

  return {

    totalValue: total,

    diversificationScore: 81,

    riskLevel: "MEDIUM"

  };

}
