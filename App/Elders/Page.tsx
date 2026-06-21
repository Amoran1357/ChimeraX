“use client”;

import { useEffect, useState } from “react”;
import Layout from “@/components/Layout”;

export default function Elders() {
const [data, setData] = useState<any[]>([]);

useEffect(() => {
fetch(”/api/elders”)
.then(r => r.json())
.then(setData);
}, []);

return (
Elder Council Intelligence

  <div style={{ display: "grid", gap: 12 }}>
    {data.map((e, i) => (
      <div key={i} style={card()}>
        <h3>{e.elder.toUpperCase()}</h3>
        <p>Vote: {e.vote}</p>
        <p>Confidence: {e.confidence}%</p>
        <p style={{ opacity: 0.7 }}>{e.reason}</p>
      </div>
    ))}
  </div>
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
