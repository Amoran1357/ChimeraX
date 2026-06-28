export async function executeDecision(
  consensus:any
) {

  return {

    executed: true,

    decision:
      consensus.decision

  };

}
