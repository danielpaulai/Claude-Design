// InclusionsList.jsx — numbered inclusions row
function InclusionsList({ title, items, variant = "light" }) {
  const isDark = variant === "dark";
  const fg = isDark ? "#ffffff" : "#0a0a0a";
  const sub = isDark ? "rgba(255,255,255,0.72)" : "#3a3d40";
  const rule = isDark ? "rgba(255,255,255,0.22)" : "#0a0a0a";

  return (
    <div style={{ marginTop: 110 }}>
      <h2 style={{
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 800,
        fontSize: 80, lineHeight: 1.05, letterSpacing: "-0.03em",
        color: fg, margin: 0,
      }}>{title}</h2>
      <div style={{ marginTop: 56, borderTop: `2px solid ${rule}` }}>
        {items.map((it, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "140px 1fr",
            gap: 44, padding: "44px 0", borderBottom: `2px solid ${rule}`,
            alignItems: "start",
          }}>
            <div style={{
              fontFamily: "Rethink Sans, sans-serif", fontWeight: 800, fontSize: 80,
              lineHeight: 1,
              backgroundImage: "linear-gradient(135deg, #ff2d5e 0%, #e90d41 55%, #a9082f 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text",
              color: "transparent",
            }}>{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div style={{
                fontFamily: "Rethink Sans, sans-serif", fontWeight: 800, fontSize: 48,
                lineHeight: 1.08, letterSpacing: "-0.02em", color: fg,
              }}>{it.title}</div>
              <div style={{
                marginTop: 14, fontFamily: "Inter, sans-serif", fontWeight: 400,
                fontSize: 30, lineHeight: 1.45, color: sub,
              }}>{it.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.InclusionsList = InclusionsList;
