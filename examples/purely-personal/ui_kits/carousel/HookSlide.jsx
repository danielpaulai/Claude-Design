// HookSlide.jsx — big statement frame, majority-black with gradient accent option.
function HookSlide({ eyebrow, title, body, accentWords = [] }) {
  const renderTitle = () => {
    let out = title;
    accentWords.forEach((w) => { out = out.split(w).join(`__ACC__${w}__END__`); });
    const parts = out.split(/(__ACC__[^_]+__END__)/g);
    return parts.map((p, i) => {
      if (p.startsWith("__ACC__")) {
        const text = p.replace("__ACC__", "").replace("__END__", "");
        return (
          <span key={i} style={{
            backgroundImage: "linear-gradient(135deg, #ff2d5e, #e90d41 60%, #8b0626)",
            WebkitBackgroundClip: "text", backgroundClip: "text",
            color: "transparent", fontStyle: "italic",
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
        radial-gradient(900px 500px at 90% 0%, rgba(233,13,65,0.14), transparent 55%),
        linear-gradient(180deg, #0a0a0a 0%, #060606 100%)
      `,
      color: "#fff",
      padding: "140px 76px 220px",
      display: "flex", flexDirection: "column", justifyContent: "center",
      overflow: "hidden",
    }}>
      {eyebrow && (
        <div style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 18,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "#e90d41", marginBottom: 36,
          display: "inline-flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ width: 40, height: 2, background: "#e90d41" }} />
          {eyebrow}
        </div>
      )}
      <h2 style={{
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 800,
        fontSize: 116, lineHeight: 1.0, letterSpacing: "-0.04em",
        color: "#fff", margin: 0, textWrap: "balance",
      }}>{renderTitle()}</h2>
      {body && (
        <div style={{
          fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 32,
          lineHeight: 1.35, color: "rgba(255,255,255,.7)", marginTop: 48, maxWidth: 860,
        }}>{body}</div>
      )}
    </div>
  );
}
window.HookSlide = HookSlide;
