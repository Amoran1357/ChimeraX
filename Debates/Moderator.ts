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
