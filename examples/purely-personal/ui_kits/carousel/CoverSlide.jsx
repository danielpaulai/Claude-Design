// CoverSlide.jsx — majority-black, huge display type, subtle red gradient accent,
// real headshot chip in byline.
function CoverSlide({ eyebrow, title, accentWords = [], subtitle }) {
  // Mark accent words for the gradient-red treatment
  const renderTitle = () => {
    let out = title;
    accentWords.forEach((w) => {
      out = out.split(w).join(`__ACC__${w}__END__`);
    });
    const parts = out.split(/(__ACC__[^_]+__END__)/g);
    return parts.map((p, i) => {
      if (p.startsWith("__ACC__")) {
        const text = p.replace("__ACC__", "").replace("__END__", "");
        return (
          <span key={i} style={{
            backgroundImage: "linear-gradient(135deg, #ff2d5e 0%, #e90d41 55%, #8b0626 100%)",
            WebkitBackgroundClip: "text", backgroundClip: "text",
            color: "transparent",
            fontStyle: "italic",
          }}>{text}</span>
        );
      }
      return <span key={i}>{p}</span>;
    });
  };

  return (
    <div style={{
      position: "absolute", inset: 0,
      background: `
        radial-gradient(1100px 600px at 85% -10%, rgba(233,13,65,0.18), transparent 60%),
        radial-gradient(900px 500px at -10% 110%, rgba(233,13,65,0.12), transparent 55%),
        linear-gradient(180deg, #0a0a0a 0%, #050505 100%)
      `,
      color: "#fff",
      padding: "96px 76px 90px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      overflow: "hidden",
    }}>
      {/* faint grid texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,.025) 1px, transparent 1px)," +
          "linear-gradient(to bottom, rgba(255,255,255,.025) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "radial-gradient(1200px 900px at 50% 40%, #000 40%, transparent 85%)",
      }} />

      <div style={{ position: "relative" }}>
        {eyebrow && (
          <div style={{
            fontFamily: "Rethink Sans, sans-serif", fontWeight: 700,
            fontSize: 20, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#e90d41", marginBottom: 40,
            display: "inline-flex", alignItems: "center", gap: 14,
          }}>
            <span style={{
              width: 44, height: 2, background: "#e90d41", display: "inline-block",
            }} />
            {eyebrow}
          </div>
        )}
        <h1 style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 800,
          fontSize: 138, lineHeight: 0.98, letterSpacing: "-0.045em",
          color: "#ffffff", margin: 0, textWrap: "balance",
        }}>{renderTitle()}</h1>
      </div>

      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 44 }}>
        {subtitle && (
          <div style={{
            fontFamily: "Inter, sans-serif", fontWeight: 400,
            fontSize: 32, lineHeight: 1.3, color: "rgba(255,255,255,.7)",
            maxWidth: 820, letterSpacing: "-0.005em",
          }}>{subtitle}</div>
        )}

        {/* Byline with real headshot chip */}
        <div style={{
          display: "flex", alignItems: "center", gap: 18,
          paddingTop: 26, borderTop: "1px solid rgba(255,255,255,.14)",
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: 999,
            background: `url('../../assets/daniel-paul-headshot.jpg') center 16% / 180% auto no-repeat, #0a0a0a`,
            boxShadow: "0 0 0 2px rgba(255,255,255,.18), 0 0 0 5px rgba(233,13,65,.38)",
            flex: "0 0 auto",
          }} />
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 22,
              color: "#fff", display: "flex", alignItems: "center", gap: 10,
            }}>
              Daniel Paul
              <span style={{
                width: 18, height: 18, background: "#2563eb", borderRadius: 999,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: 11, fontWeight: 900,
              }}>✓</span>
            </div>
            <div style={{
              fontFamily: "Inter, sans-serif", fontSize: 15,
              color: "rgba(255,255,255,.55)", marginTop: 3,
            }}>
              Purely Personal · purelypersonal.ai
            </div>
          </div>
          <div style={{
            fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "rgba(255,255,255,.5)",
          }}>
            Swipe →
          </div>
        </div>
      </div>
    </div>
  );
}
window.CoverSlide = CoverSlide;
