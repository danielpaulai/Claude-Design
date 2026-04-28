// OfferHero.jsx — letter-press hero, supports dark variant
function OfferHero({ eyebrow, title, accent, subtitle, variant = "light" }) {
  const isDark = variant === "dark";
  const fg = isDark ? "#ffffff" : "#0a0a0a";
  const sub = isDark ? "rgba(255,255,255,0.72)" : "#3a3d40";

  const renderTitle = () => {
    if (!accent) return title;
    const parts = title.split(accent);
    return parts.map((p, i) => (
      <React.Fragment key={i}>
        {p}
        {i < parts.length - 1 && (
          <span style={{
            backgroundImage: "linear-gradient(135deg, #ff2d5e 0%, #e90d41 55%, #8b0626 100%)",
            WebkitBackgroundClip: "text", backgroundClip: "text",
            color: "transparent", fontStyle: "italic",
          }}>{accent}</span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 800, fontSize: 40,
        letterSpacing: "0.14em", textTransform: "uppercase", color: "#e90d41",
        display: "flex", alignItems: "center", gap: 24,
      }}>
        <span style={{ display: "inline-block", width: 120, height: 4, background: "#e90d41" }} />
        {eyebrow}
      </div>
      <h1 style={{
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 800,
        fontSize: 240, lineHeight: 0.96, letterSpacing: "-0.045em",
        color: fg, margin: "44px 0 0", textWrap: "balance",
      }}>{renderTitle()}</h1>
      {subtitle && (
        <div style={{
          marginTop: 64, fontFamily: "Inter, sans-serif", fontWeight: 500,
          fontSize: 56, lineHeight: 1.32, color: sub, maxWidth: 1900,
        }}>{subtitle}</div>
      )}
    </div>
  );
}
window.OfferHero = OfferHero;
