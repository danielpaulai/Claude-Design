// SlideFooter.jsx
// Persistent footer on every carousel slide except cover.
// Always rendered on dark (majority-black system); uses real headshot.
function SlideFooter({ slideNum, total, variant = "dark" }) {
  const isDark = variant !== "light";
  const fg = isDark ? "#ffffff" : "#0a0a0a";
  const sub = isDark ? "rgba(255,255,255,.55)" : "#6b7075";
  const hairline = isDark ? "rgba(255,255,255,.12)" : "rgba(10,10,10,.1)";

  return (
    <div style={{
      position: "absolute", left: 72, right: 72, bottom: 44,
      display: "flex", alignItems: "center", gap: 18,
      paddingTop: 22, borderTop: `1px solid ${hairline}`,
      color: fg,
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 999,
        background: `url('../../assets/daniel-paul-headshot.jpg') center 18% / 180% auto no-repeat, #0a0a0a`,
        boxShadow: isDark
          ? "0 0 0 2px rgba(255,255,255,.12), 0 0 0 4px rgba(233,13,65,.35)"
          : "0 0 0 2px rgba(10,10,10,.08)",
        flex: "0 0 auto",
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 19,
          letterSpacing: "-0.01em", display: "flex", alignItems: "center", gap: 8,
          color: fg,
        }}>
          Daniel Paul
          <span style={{
            width: 17, height: 17, background: "#2563eb", borderRadius: 999,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: 10, fontWeight: 900,
          }}>✓</span>
        </div>
        <div style={{
          fontFamily: "Inter, sans-serif", fontSize: 13, color: sub, marginTop: 2,
          letterSpacing: "0.005em",
        }}>
          Building powerful personal brands for CEOs &amp; Founders using AI
        </div>
      </div>
      <div style={{
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 13,
        letterSpacing: "0.08em", textTransform: "uppercase",
        background: "linear-gradient(135deg, #e90d41 0%, #a9082f 100%)",
        color: "#fff",
        padding: "12px 20px", borderRadius: 999,
        boxShadow: "0 1px 0 rgba(255,255,255,.18) inset, 0 8px 20px rgba(233,13,65,.25)",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ fontSize: 14, lineHeight: 1 }}>↻</span> Repost
      </div>
      <div style={{
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 600, fontSize: 13,
        letterSpacing: "0.06em", color: sub, marginLeft: 4,
        fontVariantNumeric: "tabular-nums",
      }}>
        {String(slideNum).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </div>
  );
}
window.SlideFooter = SlideFooter;
