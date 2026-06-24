export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  impact: "LOW" | "MEDIUM" | "HIGH";
}

export interface GovernanceRecommendation {
  proposal: string;
  recommendation: "SUPPORT" | "REJECT" | "ABSTAIN";
  confidence: number;
  reasoning: string;
}

export async function analyzeGovernanceProposal(
  proposal: GovernanceProposal
): Promise<GovernanceRecommendation> {

  let recommendation:
    "SUPPORT" | "REJECT" | "ABSTAIN" = "ABSTAIN";

  let confidence = 50;

  if (proposal.impact === "HIGH") {
    recommendation = "SUPPORT";
    confidence = 85;
  }

  return {
    proposal: proposal.title,
    recommendation,
    confidence,
    reasoning:
      "Proposal strengthens ecosystem growth and long-term sustainability."
  };
}

export async function getGovernanceDashboard() {

  const proposal = {
    id: "BNB-001",
    title: "Increase Ecosystem Incentives",
    description:
      "Expand grants for ecosystem builders.",
    impact: "HIGH" as const
  };

  const analysis =
    await analyzeGovernanceProposal(
      proposal
    );

  return {
    proposal,
    analysis
  };
}
