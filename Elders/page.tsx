"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

interface ElderDecision {
  elder: string;
  vote: string;
  confidence: number;
  reason: string;
}

export default function EldersPage() {
  const [elders, setElders] = useState<ElderDecision[]>([]);

  useEffect(() => {
    fetch("/api/elders")
      .then((res) => res.json())
      .then(setElders)
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <main style={{ padding: 24 }}>
        <h1>Elder Council</h1>

        {elders.length === 0 ? (
          <p>Loading Elder Council...</p>
        ) : (
          elders.map((e, i) => (
            <div
              key={i}
              style={{
                marginBottom: 20,
                padding: 16,
                border: "1px solid #333",
                borderRadius: 10,
              }}
            >
              <h3>{e.elder}</h3>

              <p>
                <strong>Vote:</strong> {e.vote}
              </p>

              <p>
                <strong>Confidence:</strong> {e.confidence}%
              </p>

              <p>{e.reason}</p>
            </div>
          ))
        )}
      </main>
    </Layout>
  );
}
