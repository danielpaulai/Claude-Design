// CTASlide.jsx — final swipe. Huge portrait on the left (~2/3 width),
// bold copy column on the right. Majority-black with red gradient accent.
function CTASlide({ title, keyword, ps }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: `
        radial-gradient(1100px 600px at 100% -10%, rgba(233,13,65,0.22), transparent 60%),
        radial-gradient(700px 400px at 0% 100%, rgba(233,13,65,0.10), transparent 55%),
        linear-gradient(180deg, #0a0a0a 0%, #050505 100%)
      `,
      color: "#fff",
      overflow: "hidden",
    }}>
      {/* Huge portrait, anchored bottom-left, taller — roughly 2/3 of canvas */}
      <div style={{
        position: "absolute",
        left: 0, bottom: 0,
        width: 620, height: 1180,
        background: "url('../../assets/daniel-paul-headshot.jpg') 52% 18% / cover no-repeat",
        WebkitMaskImage:
          "linear-gradient(to right, #000 0%, #000 72%, rgba(0,0,0,.35) 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, #000 0%, #000 72%, rgba(0,0,0,.35) 92%, transparent 100%)",
      }} />

      {/* Soft red glow behind portrait */}
      <div style={{
        position: "absolute",
        left: -160, top: 220,
        width: 720, height: 900, pointerEvents: "none",
        background: "radial-gradient(closest-side, rgba(233,13,65,.18), transparent 70%)",
        filter: "blur(30px)",
      }} />

      {/* Right column — copy, positioned to clear the portrait */}
      <div style={{
        position: "absolute",
        right: 72, top: 132, width: 460,
        display: "flex", flexDirection: "column",
      }}>
        <div style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 20,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: "#e90d41", marginBottom: 32,
          display: "inline-flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ width: 44, height: 2, background: "#e90d41" }} />
          Your turn
        </div>

        <h2 style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 800,
          fontSize: 74, lineHeight: 0.98, letterSpacing: "-0.04em",
          color: "#fff", margin: 0, textWrap: "balance",
        }}>{title}</h2>

        {/* Oversized comment-AI CTA */}
        <div style={{ marginTop: 44 }}>
          <div style={{
            display: "inline-flex", alignItems: "baseline", gap: 16,
            background: "linear-gradient(135deg, #ff2d5e 0%, #e90d41 45%, #a9082f 100%)",
            color: "#fff",
            padding: "22px 34px",
            borderRadius: 6,
            boxShadow: "0 20px 50px rgba(233,13,65,.45), 0 0 0 1px rgba(255,255,255,.15) inset",
          }}>
            <span style={{
              fontFamily: "Rethink Sans, sans-serif", fontWeight: 600, fontSize: 22,
              letterSpacing: "0.01em", opacity: 0.92,
            }}>Comment</span>
            <span style={{
              fontFamily: "Rethink Sans, sans-serif", fontWeight: 800, fontSize: 40,
              letterSpacing: "0.06em",
            }}>"{keyword}"</span>
          </div>
          <div style={{
            fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 28,
            lineHeight: 1.3, color: "rgba(255,255,255,.92)",
            marginTop: 22,
          }}>
            I'll send it your way.
          </div>
        </div>

        {ps && (
          <div style={{
            marginTop: 48, paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,.14)",
            fontFamily: "Inter, sans-serif", fontSize: 20,
            color: "rgba(255,255,255,.72)", lineHeight: 1.5,
          }}>
            <strong style={{
              color: "#e90d41", fontFamily: "Rethink Sans, sans-serif",
              fontWeight: 700, letterSpacing: "0.04em", marginRight: 10,
            }}>P.S.</strong>
            {ps}
          </div>
        )}
      </div>

      {/* Dark gradient scrim behind footer for legibility */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 220,
        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, transparent 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
}
window.CTASlide = CTASlide;
