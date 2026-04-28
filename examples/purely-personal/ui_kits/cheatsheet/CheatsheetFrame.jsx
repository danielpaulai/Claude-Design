// CheatsheetFrame.jsx — full 1080x1350 canvas
function CheatsheetFrame({ title, subtitle, accent, children }) {
  const renderTitle = () => {
    if (!accent) return title;
    const parts = title.split(accent);
    return parts.map((p, i) => (
      <React.Fragment key={i}>
        {p}{i < parts.length - 1 && <span style={{ color: "#e90d41" }}>{accent}</span>}
      </React.Fragment>
    ));
  };
  return (
    <div style={{
      width: 1080, height: 1350, position: "relative",
      background: "#f7f7f8",
      backgroundImage:
        "linear-gradient(to right, rgba(10,10,10,0.05) 1px, transparent 1px)," +
        "linear-gradient(to bottom, rgba(10,10,10,0.05) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      padding: "52px 56px 130px", boxSizing: "border-box",
      fontFamily: "Inter, sans-serif", color: "#0a0a0a",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontFamily: "Rethink Sans, sans-serif", fontWeight: 700,
            fontSize: 58, lineHeight: 1.05, letterSpacing: "-0.025em",
            margin: 0, textWrap: "balance",
          }}>{renderTitle()}</h1>
          {subtitle && (
            <div style={{
              marginTop: 16, background: "#e90d41", color: "#fff",
              padding: "10px 18px", display: "inline-block",
              fontFamily: "Rethink Sans, sans-serif", fontWeight: 600, fontSize: 18,
              letterSpacing: "-0.005em",
            }}>{subtitle}</div>
          )}
        </div>
        <div style={{
          background: "#e90d41", color: "#fff",
          padding: "10px 18px", borderRadius: 999,
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 16,
          letterSpacing: "0.02em", whiteSpace: "nowrap",
        }}>↻ Repost</div>
      </div>
      <div style={{ marginTop: 30 }}>{children}</div>
      {/* Footer byline */}
      <div style={{
        position: "absolute", left: 56, right: 56, bottom: 40,
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 999,
          background: "url('../../assets/daniel-paul-headshot.jpg') center 16% / 180% auto no-repeat, #0a0a0a",
          boxShadow: "0 0 0 2px #fff, 0 0 0 4px rgba(233,13,65,.35)",
          flex: "0 0 auto",
        }} />
        <div>
          <div style={{ fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 17 }}>Daniel Paul</div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#3a3d40" }}>
            Building powerful personal brands for CEOs &amp; Founders using AI
          </div>
        </div>
        <div style={{
          marginLeft: "auto",
          background: "#0a0a0a", color: "#fff",
          padding: "8px 16px", borderRadius: 999,
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 14,
          letterSpacing: "0.04em",
        }}>↻ REPOST</div>
      </div>
    </div>
  );
}
window.CheatsheetFrame = CheatsheetFrame;
