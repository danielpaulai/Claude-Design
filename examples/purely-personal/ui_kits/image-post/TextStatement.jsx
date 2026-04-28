// TextStatement.jsx — no imagery, giant headline on paper
function TextStatement({ eyebrow, headline, accent }) {
  const render = () => {
    if (!accent) return headline;
    const parts = headline.split(accent);
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
        "linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px)," +
        "linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)",
      backgroundSize: "44px 44px",
      padding: "100px 80px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", justifyContent: "center",
      fontFamily: "Inter, sans-serif", color: "#0a0a0a",
    }}>
      {eyebrow && (
        <div style={{
          fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 20,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "#e90d41", marginBottom: 36,
        }}>{eyebrow}</div>
      )}
      <h1 style={{
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 700,
        fontSize: 96, lineHeight: 1.02, letterSpacing: "-0.035em",
        color: "#0a0a0a", margin: 0, textWrap: "balance",
      }}>{render()}</h1>
      <div style={{
        position: "absolute", bottom: 60, left: 80,
      }}>
        <LinkedInAuthorCard dark={false} />
      </div>
    </div>
  );
}
window.TextStatement = TextStatement;
