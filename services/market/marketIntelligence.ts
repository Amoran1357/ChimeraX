import {

latestQuotes

}

from "./coinmarketcap";

import {

getCache,

setCache

}

from "./marketCache";

import {

trend,

momentum

}

from "./indicators";

export async function getMarketSnapshot(){

const cached=

getCache(

"snapshot"

);

if(cached){

return cached;

}

const quotes=

await latestQuotes();

const btc=

quotes.data.BTC[0].quote.USD;

const eth=

quotes.data.ETH[0].quote.USD;

const bnb=

quotes.data.BNB[0].quote.USD;

const snapshot={

timestamp:Date.now(),

btc,

eth,

bnb,

marketTrend:trend(

btc.percent_change_24h

),

momentum:momentum(

btc.percent_change_24h,

btc.percent_change_7d

)

};

setCache(

"snapshot",

snapshot

);

return snapshot;

}
