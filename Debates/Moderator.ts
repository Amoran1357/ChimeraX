export function moderateDebate(
  votes:any[]
) {

  return {
    strongest:
      votes.sort(
        (a,b) =>
        b.confidence - a.confidence
      )[0]
  };

}
export function moderate(
  votes:any[]
) {

  const strongest =
    votes.sort(
      (a,b)=>
      b.confidence-a.confidence
    )[0];

  return strongest;

}
