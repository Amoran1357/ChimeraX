"use client";

import { useEffect, useState } from "react";

interface Trade {
  asset: string;
  action: string;
  status: string;
  txHash?: string;
}

export default function TradePage() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/trade")
      .then((res) => res.json())
      .then((data) => {
        setTrades(data);
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
      <h1>⚡ Trade Execution</h1>

      {loading ? (
        <p>Loading trades...</p>
      ) : trades.length === 0 ? (
        <p>No trades found.</p>
      ) : (
        trades.map((trade, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #333",
              borderRadius: 10,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <h3>{trade.asset}</h3>

            <p>
              <strong>Action:</strong> {trade.action}
            </p>

            <p>
              <strong>Status:</strong> {trade.status}
            </p>

            {trade.txHash && (
              <p>
                <strong>Transaction:</strong> {trade.txHash}
              </p>
            )}
          </div>
        ))
      )}
    </main>
  );
}
