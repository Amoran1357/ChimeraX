export function runDebate(votes:any[]) {

  const argumentsList = votes.map(v => ({
    elder: v.elder,
    vote: v.vote,
    confidence: v.confidence
  }));

  return argumentsList;

}
export function runDebate(votes:any[]) {

  return votes.map(v => ({
    elder: v.elder,
    position: v.vote,
    confidence: v.confidence
  }));

}
