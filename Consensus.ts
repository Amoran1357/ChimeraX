export async function generateConsensus(votes: any[]) {

  const buyVotes =
    votes.filter(v => v.vote === "BUY").length;

  const sellVotes =
    votes.filter(v => v.vote === "SELL").length;

  const holdVotes =
    votes.filter(v => v.vote === "HOLD").length;

  let action = "HOLD";

  if (buyVotes > sellVotes && buyVotes > holdVotes)
    action = "BUY";

  if (sellVotes > buyVotes && sellVotes > holdVotes)
    action = "SELL";

  return {
    action,
    confidence:
      Math.round(
        (Math.max(buyVotes,sellVotes,holdVotes)
          / votes.length) * 100
      )
  };
}
