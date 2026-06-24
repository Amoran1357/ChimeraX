// lib/elders/grand-elder.ts

type ElderVote = {
  elder: string;
  vote: "BUY" | "SELL" | "HOLD";
  confidence: number;
};

type GrandElderInput = {
  votes: ElderVote[];
  consensus: string;
  riskLevel: string;
};

export async function grandElderReview(
  input: GrandElderInput
) {

  const strongestVote =
    [...input.votes].sort(
      (a, b) => b.confidence - a.confidence
    )[0];

  const buyVotes =
    input.votes.filter(
      v => v.vote === "BUY"
    ).length;

  const sellVotes =
    input.votes.filter(
      v => v.vote === "SELL"
    ).length;

  const holdVotes =
    input.votes.filter(
      v => v.vote === "HOLD"
    ).length;

  let explanation = "";

  if (input.consensus === "BUY") {

    explanation =
      `The Council favors BUY. ` +
      `${buyVotes} Elders supported accumulation. ` +
      `The strongest conviction came from ${strongestVote.elder} Elder ` +
      `with confidence of ${strongestVote.confidence}%.`;

  } else if (input.consensus === "SELL") {

    explanation =
      `The Council favors SELL. ` +
      `${sellVotes} Elders identified downside risk. ` +
      `The strongest warning came from ${strongestVote.elder} Elder.`;

  } else {

    explanation =
      `The Council favors HOLD. ` +
      `Signals remain mixed and uncertainty is elevated.`;

  }

  return {

    elder: "Grand Elder",

    consensus: input.consensus,

    risk: input.riskLevel,

    voteBreakdown: {
      buy: buyVotes,
      sell: sellVotes,
      hold: holdVotes
    },

    explanation,

    timestamp: new Date().toISOString()

  };

}
