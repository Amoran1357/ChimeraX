export async function evolveCouncil(
  elders:any[],
  outcome:boolean
) {

  return elders.map(
    elder => ({
      ...elder,
      improved: outcome
    })
  );

}
