"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

export default function MarketPage() {
  const [market, setMarket] = useState<any>(null);

  useEffect(() => {
    fetch("/api/market")
      .then((res) => res.json())
      .then(setMarket)
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <main style={{ padding: 24 }}>
        <h1>Market Intelligence</h1>

        {!market ? (
          <p>Loading CoinMarketCap market data...</p>
        ) : (
          <pre
            style={{
              background: "#111",
              color: "#00ff88",
              padding: 16,
              borderRadius: 8,
              overflowX: "auto",
            }}
          >
            {JSON.stringify(market, null, 2)}
          </pre>
        )}
      </main>
    </Layout>
  );
}
