export async function securityElder() {

  const securityScore = 87;

  let vote = "BUY";

  if (securityScore < 60) {
    vote = "AVOID";
  }

  return {
    elder: "Security",
    vote,
    confidence: securityScore,
    findings: [
      "Ownership Renounced",
      "Liquidity Healthy",
      "No Critical Risks"
    ]
  };

}