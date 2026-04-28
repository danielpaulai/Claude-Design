// ProofRow.jsx — big stat row
function ProofRow({ items, variant = "light" }) {
  const isDark = variant === "dark";
  const rule = isDark ? "rgba(255,255,255,0.22)" : "#0a0a0a";
  const labelFg = isDark ? "rgba(255,255,255,0.85)" : "#0a0a0a";
  return (
    <div style={{
      display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: 0,
      borderTop: `4px solid ${rule}`,
      borderBottom: `4px solid ${rule}`,
      marginTop: 110,
    }}>
      {items.map((it, i) => (
        <div key={i} style={{
          padding: "56px 40px", textAlign: "left",
          borderRight: i < items.length - 1 ? `2px solid ${rule}` : "none",
        }}>
          <div style={{
            fontFamily: "Rethink Sans, sans-serif", fontWeight: 800,
            fontSize: 170, lineHeight: 1, letterSpacing: "-0.045em",
            backgroundImage: isDark
              ? "linear-gradient(135deg, #ff2d5e 0%, #e90d41 60%, #a9082f 100%)"
              : "none",
            WebkitBackgroundClip: isDark ? "text" : "border-box",
            backgroundClip: isDark ? "text" : "border-box",
            color: isDark ? "transparent" : "#e90d41",
          }}>{it.value}</div>
          <div style={{
            marginTop: 18, fontFamily: "Inter, sans-serif", fontSize: 34,
            lineHeight: 1.3, color: labelFg, fontWeight: 600,
          }}>{it.label}</div>
        </div>
      ))}
    </div>
  );
}
window.ProofRow = ProofRow;
