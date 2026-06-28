export async function analyzeGovernanceProposal(
  proposal: string
) {

  return {
    proposal,
    support: 68,
    oppose: 18,
    abstain: 14,
    recommendation: "SUPPORT",
    confidence: 82
  };

}
