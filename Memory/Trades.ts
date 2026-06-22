const tradeMemory:any[] = [];

export function rememberTrade(
  trade:any
) {

  tradeMemory.push(trade);

}

export function getMemory() {

  return tradeMemory;

}
