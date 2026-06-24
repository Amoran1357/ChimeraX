export async function
generateConsensus(
  elders:any[]
) {

  const votes =
    elders.map(
      e => e.analysis
    );

  return {

    votes,

    decision:"BUY"

  };
insert into elders (
  elder,
  vote,
  confidence
)
values (
  'Momentum',
  'BUY',
  87
);
}
