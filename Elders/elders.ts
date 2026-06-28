import {

getMarketSnapshot

}

from "@/Services/market/marketIntelligence";

const market=

await getMarketSnapshot();

context.market=market;
