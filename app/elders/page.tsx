"use client";

import { useEffect, useState } from "react";

export default function Elders() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/elders")
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Elder Council Intelligence</h1>

      <div
        style={{
          display: "grid",
          gap: 12,
        }}
      >
        {data.map((e, i) => (
          <div
            key={i}
            style={{
              padding: 16,
              border: "1px solid #333",
              borderRadius: 8,
            }}
          >
            <h3>{e.elder?.toUpperCase()}</h3>

            <p>Vote: {e.vote}</p>

            <p>Confidence: {e.confidence}</p>

            <p>{e.reason}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
