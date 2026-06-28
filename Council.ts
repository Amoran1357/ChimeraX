import { observeMarket }
from "./lifecycle/observe";

import { decide }
from "./lifecycle/decide";

export async function runCouncil() {

  const market =
    await observeMarket();

  const votes = [];

  const decision =
    await decide(votes);

  return {

    market,
    decision

  };

}
