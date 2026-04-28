// StepSlide.jsx — numbered step card on black, with prompt callout
function StepSlide({ stepNum, eyebrow, title, body, prompt, outcome }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: `
        radial-gradient(700px 400px at 100% 0%, rgba(233,13,65,0.09), transparent 55%),
        linear-gradient(180deg, #0a0a0a 0%, #060606 100%)
      `,
      color: "#fff",
      padding: "110px 76px 220px",
      overflow: "hidden",
    }}>
      {/* Oversized step numeral — background decoration */}
      <div style={{
        position: "absolute", top: 56, right: 64,
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 800,
        fontSize: 340, lineHeight: 0.8, letterSpacing: "-0.05em",
        backgroundImage: "linear-gradient(180deg, rgba(233,13,65,.25) 0%, rgba(233,13,65,0) 85%)",
        WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
        pointerEvents: "none",
      }}>
        {String(stepNum).padStart(2, "0")}
      </div>

      <div style={{ position: "relative" }}>
        <div style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 18,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "#e90d41", marginBottom: 24,
          display: "inline-flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ width: 40, height: 2, background: "#e90d41" }} />
          {eyebrow || `Step ${String(stepNum).padStart(2, "0")}`}
        </div>

        <h2 style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 800,
          fontSize: 82, lineHeight: 1.04, letterSpacing: "-0.035em",
          color: "#fff", margin: 0, maxWidth: 900, textWrap: "balance",
        }}>{title}</h2>

        {body && (
          <p style={{
            fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 26,
            lineHeight: 1.45, color: "rgba(255,255,255,.72)",
            marginTop: 34, maxWidth: 860,
          }}>{body}</p>
        )}

        {prompt && (
          <div style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,.14)",
            background: "rgba(255,255,255,0.03)",
            padding: "28px 32px",
            borderRadius: 4,
            maxWidth: 900,
            position: "relative",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, width: 4, height: "100%",
              background: "linear-gradient(180deg, #ff2d5e, #8b0626)",
            }} />
            <div style={{
              fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#e90d41", marginBottom: 14,
            }}>Paste this prompt</div>
            <div style={{
              fontFamily: "Inter, sans-serif", fontStyle: "italic", fontWeight: 400,
              fontSize: 26, lineHeight: 1.4, color: "#fff",
            }}>"{prompt}"</div>
          </div>
        )}

        {outcome && (
          <div style={{
            marginTop: 22, maxWidth: 900,
            background: "linear-gradient(135deg, #e90d41 0%, #8b0626 100%)",
            color: "#fff", padding: "20px 28px", borderRadius: 4,
            fontFamily: "Rethink Sans, sans-serif", fontWeight: 600, fontSize: 18,
            letterSpacing: "0.01em", lineHeight: 1.4,
            boxShadow: "0 10px 30px rgba(233,13,65,.25)",
          }}>
            <span style={{
              fontWeight: 800, letterSpacing: "0.1em",
              textTransform: "uppercase", fontSize: 12, marginRight: 10,
              opacity: 0.85,
            }}>What Claude delivers</span>
            {outcome}
          </div>
        )}
      </div>
    </div>
  );
}
window.StepSlide = StepSlide;
