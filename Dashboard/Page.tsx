“use client”;

import { useEffect, useState } from “react”;

export default function DashboardPage() {
const [data, setData] = useState(null);

useEffect(() => {
fetch(”/api/consensus”)
.then(res => res.json())
.then(setData);
}, []);

return (
<main style={{ padding: 24, fontFamily: “sans-serif” }}>
CHIMERAX Dashboard

  {!data ? (
    <p>Loading intelligence...</p>
  ) : (
    <>
      <h2>Final Decision: {data.decision}</h2>
      <h3>Elder Votes</h3>
      <div style={card()}>
  <h3>Elders</h3>
  <p>{data.votes?.length || 0} Active</p>

  <h3>BNB Agent</h3>
  <p>{data.agentAction?.status}</p>

  <h3>Trade Engine</h3>
  <p>{data.trade?.status}</p>
</div>
      <ul>
        {data.votes.map((v: any, i: number) => (
          <li key={i}>
            {v.elder}: {v.vote} ({v.confidence}%)
          </li>
        ))}
      </ul>
    </>
  )}
</main>

);
}
import { momentumElder }
from "@/lib/elders/momentum";

import { generateConsensus }
from "@/lib/consensus";

export default async function Dashboard() {

  const momentum =
    await momentumElder();

  const consensus =
    await generateConsensus([momentum]);

  return (
    <main>
      <h1>ChimeraX Dashboard</h1>

      <pre>
        {JSON.stringify(momentum,null,2)}
      </pre>

      <pre>
        {JSON.stringify(consensus,null,2)}
      </pre>

    </main>
  );
}
