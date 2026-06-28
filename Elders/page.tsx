"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

import { useEffect, useState } from "react";

export default function EldersPage() {
const [elders, setElders] = useState<any[]>([]);

useEffect(() => {
fetch("/api/elders")
.then(res => res.json())
.then(setElders);
}, []);

return (
<main style={{ padding: 24 }}>
Elder Council

  {elders.map((e, i) => (
    <div key={i} style={{ marginBottom: 16 }}>
      <h3>{e.elder}</h3>
      <p>Vote: {e.vote}</p>
      <p>Confidence: {e.confidence}</p>
      <p>{e.reason}</p>
    </div>
  ))}
</main>

);
}
