import { getCMCQuotes } from "./cmc";

export async function getMarketSentiment() {

  const data = await getCMCQuotes();

  return {
    marketCap:
      data.data[0].quote.USD.market_cap,
    sentiment: "BULLISH"
  };

}
