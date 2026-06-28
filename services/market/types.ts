export interface MarketQuote {

  symbol: string;

  price: number;

  marketCap: number;

  volume24h: number;

  percentChange1h: number;

  percentChange24h: number;

  percentChange7d: number;

}

export interface FearGreed {

  value: number;

  classification: string;

}

export interface MarketSnapshot {

  timestamp: number;

  btc: MarketQuote;

  eth: MarketQuote;

  bnb: MarketQuote;

  fearGreed?: FearGreed;

}
