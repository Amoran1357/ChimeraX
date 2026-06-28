“use client”;

import { useEffect, useState } from “react”;
import Layout from “@/components/Layout”;

export default function Market() {
const [data, setData] = useState(null);

useEffect(() => {
fetch(”/api/market”)
.then(r => r.json())
.then(setData);
}, []);

return (
Market Intelligence Feed

  {!data ? (
    <p>Loading CMC stream...</p>
  ) : (
    <pre style={{
      background: "#0a0f1a",
      padding: 16,
      border: "1px solid #1f2937"
    }}>
      {JSON.stringify(data, null, 2)}
    </pre>
  )}
</Layout>

);
}
