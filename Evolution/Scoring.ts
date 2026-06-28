export function scoreElder(
  vote:string,
  outcome:string
) {

  if(vote === outcome)
    return 10;

  return -5;

}
