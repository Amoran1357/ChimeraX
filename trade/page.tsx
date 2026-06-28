"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

import { useEffect, useState } from “react”;

export default function TradesPage() {
const [trades, setTrades] = useState<any[]>([]);

useEffect(() => {
fetch(”/api/trade”)
.then(res => res.json())
.then(setTrades);
}, []);

return (
<main style={{ padding: 24 }}>
Trades

  {trades.map((t, i) => (
    <div key={i}>
      <p>{t.asset} → {t.action}</p>
      <p>Status: {t.status}</p>
      <p>Tx: {t.txHash}</p>
    </div>
  ))}
</main>

);
}
