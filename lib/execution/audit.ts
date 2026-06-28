export function auditTrade(
  trade:any
) {

  return {

    timestamp: Date.now(),
    trade

  };

}
