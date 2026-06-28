import { getBalance }
from "./wallet";

export async function
analyzePortfolio(
  address:`0x${string}`
) {

  const balance =
    await getBalance(address);

  return {

    address,

    bnbBalance:
      Number(balance)/1e18

  };

}
