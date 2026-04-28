// CategoryBand.jsx — pastel band with pill label (list cheatsheets)
function CategoryBand({ label, labelColor, bg, children }) {
  return (
    <div style={{
      background: bg, borderRadius: 10, padding: "44px 28px 22px",
      position: "relative", marginBottom: 18,
    }}>
      <div style={{
        position: "absolute", top: -14, right: 24,
        background: labelColor, color: "#fff",
        padding: "8px 18px", borderRadius: 999,
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 16,
        letterSpacing: "0.02em",
      }}>{label}</div>
      <div style={{ display: "flex", gap: 10, justifyContent: "space-around" }}>
        {children}
      </div>
    </div>
  );
}
window.CategoryBand = CategoryBand;
