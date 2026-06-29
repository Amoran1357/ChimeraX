"use client";

import { useEffect, useState } from "react";

export default function MarketPage() {
  const [market, setMarket] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/market")
      .then((res) => res.json())
      .then((data) => {
        setMarket(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main
      style={{
        padding: 24,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>📈 Market Intelligence</h1>

      {loading ? (
        <p>Loading market intelligence...</p>
      ) : (
        <pre
          style={{
            background: "#111827",
            color: "#22c55e",
            padding: 20,
            borderRadius: 12,
            overflowX: "auto",
          }}
        >
          {JSON.stringify(market, null, 2)}
        </pre>
      )}
    </main>
  );
}
