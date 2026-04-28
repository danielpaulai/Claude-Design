// PortraitStatement.jsx
function PortraitStatement({ headline }) {
  return (
    <div style={{
      width: 1080, height: 1350, position: "relative",
      background: "#0a0a0a", color: "#fff", overflow: "hidden",
      fontFamily: "Inter, sans-serif",
    }}>
      {/* Portrait placeholder — vertical gradient shade + silhouette */}
      <div style={{
        position: "absolute", inset: 0,
        background:
          "radial-gradient(ellipse 600px 700px at 55% 40%, #2a2a2a 0%, #151515 45%, #0a0a0a 80%)",
      }} />
      <div style={{
        position: "absolute", left: "50%", top: "18%", transform: "translateX(-50%)",
        width: 520, height: 700,
        background:
          "radial-gradient(ellipse 260px 340px at 50% 30%, #3a3a3a 0%, #222 60%, transparent 100%)",
        borderRadius: "50% 50% 45% 45% / 40% 40% 55% 55%",
        filter: "blur(3px)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "0 64px 60px",
      }}>
        <div style={{ marginBottom: 28 }}>
          <LinkedInAuthorCard dark={true} />
        </div>
        <h2 style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 700,
          fontSize: 56, lineHeight: 1.1, letterSpacing: "-0.025em",
          color: "#fff", margin: 0, textWrap: "balance",
        }}>{headline}</h2>
      </div>
      {/* Repost pill top-right */}
      <div style={{
        position: "absolute", top: 32, right: 32,
        background: "#e90d41", color: "#fff",
        padding: "10px 18px", borderRadius: 999,
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 14,
        letterSpacing: "0.04em",
      }}>↻ REPOST</div>
    </div>
  );
}
window.PortraitStatement = PortraitStatement;
