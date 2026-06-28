export async function executeTrade(signal:any) {

  return {
    status: "READY_FOR_EXECUTION",
    signal
  };

}
