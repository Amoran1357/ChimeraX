export default function Layout({ children }: any) {
return (
<div style={{ display: “flex”, height: “100vh” }}>

  {/* Sidebar */}
  <div style={{
    width: 260,
    background: "#0a0f1a",
    padding: 20,
    borderRight: "1px solid #1f2937"
  }}>
    <h2>CHIMERAX Ω</h2>
    <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <a href="/dashboard">Dashboard</a>
      <a href="/market">Market</a>
      <a href="/elders">Elders</a>
      <a href="/trades">Trades</a>
    </nav>
    <div style={{ marginTop: 30, fontSize: 12, opacity: 0.7 }}>
      Autonomous AI Trading System
    </div>
  </div>
  {/* Main */}
  <div style={{ flex: 1, padding: 24 }}>
    {children}
  </div>
</div>

);
}
