"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

interface Trade {
  asset: string;
  action: string;
  status: string;
  txHash?: string;
}

export default function TradesPage() {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    fetch("/api/trade")
      .then((res) => res.json())
      .then(setTrades)
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <main style={{ padding: 24 }}>
        <h1>Trades</h1>

        {trades.length === 0 ? (
          <p>No trades available.</p>
        ) : (
          trades.map((t, i) => (
            <div
              key={i}
              style={{
                marginBottom: 20,
                padding: 16,
                border: "1px solid #333",
                borderRadius: 10,
              }}
            >
              <p>
                <strong>Asset:</strong> {t.asset}
              </p>

              <p>
                <strong>Action:</strong> {t.action}
              </p>

              <p>
                <strong>Status:</strong> {t.status}
              </p>

              {t.txHash && (
                <p>
                  <strong>Transaction:</strong> {t.txHash}
                </p>
              )}
            </div>
          ))
        )}
      </main>
    </Layout>
  );
}
