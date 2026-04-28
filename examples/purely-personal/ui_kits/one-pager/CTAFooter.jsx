// CTAFooter.jsx — next-step footer
function CTAFooter({ ctaLabel, ctaSub, variant = "light" }) {
  const isDark = variant === "dark";
  const fg = isDark ? "#ffffff" : "#0a0a0a";
  const meta = isDark ? "rgba(255,255,255,0.6)" : "#6b7075";
  const subFg = isDark ? "rgba(255,255,255,0.8)" : "#0a0a0a";
  const rule = isDark ? "rgba(255,255,255,0.24)" : "#0a0a0a";

  return (
    <div style={{
      marginTop: 110, padding: "64px 0 0",
      borderTop: `4px solid ${rule}`,
      display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 80,
    }}>
      <div>
        <div style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 800, fontSize: 32,
          letterSpacing: "0.14em", textTransform: "uppercase", color: meta,
        }}>Next step</div>
        <div style={{
          marginTop: 28, display: "flex", alignItems: "center", gap: 44,
        }}>
          <div style={{
            background: "linear-gradient(135deg, #ff2d5e 0%, #e90d41 50%, #a9082f 100%)",
            color: "#fff",
            padding: "42px 64px", borderRadius: 9999,
            fontFamily: "Rethink Sans, sans-serif", fontWeight: 800, fontSize: 56,
            letterSpacing: "-0.015em",
            boxShadow: isDark
              ? "0 24px 80px rgba(233,13,65,0.45), 0 0 0 2px rgba(255,255,255,0.1) inset"
              : "0 24px 60px rgba(233,13,65,0.28)",
          }}>{ctaLabel}</div>
          {ctaSub && (
            <div style={{
              fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 34,
              lineHeight: 1.35, color: subFg, maxWidth: 800,
            }}>{ctaSub}</div>
          )}
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 800, fontSize: 44,
          letterSpacing: "-0.02em", color: fg,
        }}>Daniel Paul</div>
        <div style={{
          fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 28,
          color: meta, marginTop: 10, lineHeight: 1.4,
        }}>
          Purely Personal · purelypersonal.ai<br/>
          linkedin.com/in/danielpaulai
        </div>
      </div>
    </div>
  );
}
window.CTAFooter = CTAFooter;
