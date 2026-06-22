export function runDebate(votes:any[]) {

  const argumentsList = votes.map(v => ({
    elder: v.elder,
    vote: v.vote,
    confidence: v.confidence
  }));

  return argumentsList;

}
