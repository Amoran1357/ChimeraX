“use client”;

import { useEffect, useState } from “react”;
import Layout from “@/components/Layout”;

export default function Dashboard() {
const [data, setData] = useState(null);

useEffect(() => {
fetch(”/api/engine”)
.then(r => r.json())
.then(setData);
}, []);

return (
AI Trading Command Center

  {!data ? (
    <p>Initializing CHIMERAX intelligence...</p>
  ) : (
    <>
      <div style={card()}>
        <h2>FINAL DECISION</h2>
        <h1 style={{ color: "#6ee7ff" }}>
          {data.decision}
        </h1>
      </div>
      <div style={grid()}>
        <div style={card()}>
          <h3>Market Sentiment</h3>
          <p>{data.market.sentimentScore}</p>
        </div>
        <div style={card()}>
          <h3>Volatility</h3>
          <p>{data.market.volatility}</p>
        </div>
        <div style={card()}>
          <h3>Execution</h3>
          <p>{data.trade.status}</p>
        </div>
      </div>
    </>
  )}
</Layout>

);
}

function card() {
return {
background: “#0a0f1a”,
padding: 16,
border: “1px solid #1f2937”,
borderRadius: 8
};
}

function grid() {
return {
display: “grid”,
gridTemplateColumns: “repeat(3, 1fr)”,
gap: 12,
marginTop: 20
};
}
