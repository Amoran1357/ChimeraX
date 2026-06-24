export function challenge(votes:any[]) {

  const buyVotes =
    votes.filter(v => v.vote === "BUY");

  const sellVotes =
    votes.filter(v => v.vote === "SELL");

  return {
    majority: buyVotes.length > sellVotes.length
      ? "BUY"
      : "SELL",
    challenge:
      "What evidence contradicts the majority?"
  };

}
export function challengeMajority(
  votes:any[]
) {

  const minority =
    votes.filter(
      v => v.vote !== "BUY"
    );

  return minority;

}
