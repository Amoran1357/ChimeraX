"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

import { useEffect, useState } from “react”;

export default function MarketPage() {
const [market, setMarket] = useState(null);

useEffect(() => {
fetch(”/api/market”)
.then(res => res.json())
.then(setMarket);
}, []);

return (
<main style={{ padding: 24 }}>
Market Intelligence

  {!market ? (
    <p>Loading CMC data...</p>
  ) : (
    <pre>{JSON.stringify(market, null, 2)}</pre>
  )}
</main>

);
}
