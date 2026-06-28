export function elderLearn(
  elder:any,
  outcome:string
) {

  return {

    ...elder,

    learnedFromOutcome:true

  };

}
