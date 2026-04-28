// LinkedInAuthorCard.jsx
function LinkedInAuthorCard({ dark = true }) {
  const bg = dark ? "rgba(255,255,255,0.08)" : "#fff";
  const fg = dark ? "#fff" : "#0a0a0a";
  const sub = dark ? "rgba(255,255,255,.7)" : "#3a3d40";
  const border = dark ? "rgba(255,255,255,.1)" : "#e8eaec";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 14,
      padding: "12px 18px 12px 12px",
      background: bg, borderRadius: 999,
      border: `1px solid ${border}`,
    }}>
      <div style={{
        width: 46, height: 46, borderRadius: 999,
        background: "linear-gradient(135deg,#e90d41,#0a0a0a)", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 16,
        border: "2px solid #fff",
      }}>DP</div>
      <div>
        <div style={{ fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 18, color: fg, display: "flex", alignItems: "center", gap: 6 }}>
          Daniel Paul
          <span style={{ width: 15, height: 15, background: "#2563eb", borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 900 }}>✓</span>
        </div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: sub, marginTop: 1 }}>
          Building powerful personal brands for CEOs &amp; Founders
        </div>
      </div>
    </div>
  );
}
window.LinkedInAuthorCard = LinkedInAuthorCard;
