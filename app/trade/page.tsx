“use client”;

import { useEffect, useState } from “react”;
import Layout from “@/components/Layout”;

export default function Trades() {
const [data, setData] = useState(null);

useEffect(() => {
fetch(”/api/trade”)
.then(r => r.json())
.then(setData);
}, []);

return (
Execution Log

  {!data ? (
    <p>Waiting for trades...</p>
  ) : (
    <div style={card()}>
      <h2>Latest Trade</h2>
      <p>Action: {data[0].action}</p>
      <p>Status: {data[0].status}</p>
      <p>TX: {data[0].txHash}</p>
      <p>PnL: {data[0].pnl}</p>
    </div>
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
