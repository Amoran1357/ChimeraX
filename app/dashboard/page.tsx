"use client";

import { useEffect, useState } from "react";

interface DashboardData {
  market?: any;
  elders?: any[];
  portfolio?: any;
  trades?: any[];
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData>({
    market: null,
    elders: [],
    portfolio: null,
    trades: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [market, elders, trades] = await Promise.all([
          fetch("/api/market").then((r) => r.json()).catch(() => null),
          fetch("/api/elders").then((r) => r.json()).catch(() => []),
          fetch("/api/trade").then((r) => r.json()).catch(() => []),
        ]);

        setData({
          market,
          elders,
          trades,
          portfolio: {
            value: "$0",
            pnl: "0%",
            positions: 0,
          },
        });
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <main style={{ padding: 30 }}>
        <h1>🚀 ChimeraX Dashboard</h1>
        <p>Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main
      style={{
        padding: 30,
        fontFamily: "Arial, sans-serif",
        background: "#08111f",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1>🚀 ChimeraX Command Center</h1>

      <p>Autonomous AI Trading Agent</p>

      <hr />

      <h2>📈 Market Intelligence</h2>

      <pre
        style={{
          background: "#111827",
          padding: 15,
          borderRadius: 8,
          overflowX: "auto",
        }}
      >
        {JSON.stringify(data.market, null, 2)}
      </pre>

      <hr />

      <h2>🧠 Elder Council</h2>

      {data.elders?.length === 0 ? (
        <p>No Elder decisions yet.</p>
      ) : (
        data.elders?.map((elder: any, index: number) => (
          <div
            key={index}
            style={{
              border: "1px solid #333",
              padding: 15,
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <h3>{elder.elder}</h3>

            <p>
              <strong>Vote:</strong> {elder.vote}
            </p>

            <p>
              <strong>Confidence:</strong> {elder.confidence}
            </p>

            <p>{elder.reason}</p>
          </div>
        ))
      )}

      <hr />

      <h2>💼 Portfolio</h2>

      <div
        style={{
          border: "1px solid #333",
          padding: 15,
          borderRadius: 8,
        }}
      >
        <p>
          <strong>Total Value:</strong> {data.portfolio?.value}
        </p>

        <p>
          <strong>PnL:</strong> {data.portfolio?.pnl}
        </p>

        <p>
          <strong>Open Positions:</strong> {data.portfolio?.positions}
        </p>
      </div>

      <hr />

      <h2>⚡ Recent Trades</h2>

      {data.trades?.length === 0 ? (
        <p>No executed trades.</p>
      ) : (
        data.trades?.map((trade: any, index: number) => (
          <div
            key={index}
            style={{
              border: "1px solid #333",
              padding: 15,
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <p>
              <strong>Asset:</strong> {trade.asset}
            </p>

            <p>
              <strong>Action:</strong> {trade.action}
            </p>

            <p>
              <strong>Status:</strong> {trade.status}
            </p>

            {trade.txHash && (
              <p>
                <strong>Tx:</strong> {trade.txHash}
              </p>
            )}
          </div>
        ))
      )}
    </main>
  );
}
