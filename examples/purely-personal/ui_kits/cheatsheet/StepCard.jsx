// StepCard.jsx — dense step card for process cheatsheets
function StepCard({ stepNum, title, doing, prompt, outcome }) {
  return (
    <div style={{
      border: "2px solid #0a0a0a", background: "#fff",
      padding: "16px 18px", height: "100%", boxSizing: "border-box",
    }}>
      <div style={{
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 15,
        letterSpacing: "0.04em", textTransform: "uppercase", color: "#e90d41",
      }}>Step {stepNum}</div>
      <div style={{
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 22,
        letterSpacing: "-0.015em", color: "#0a0a0a", marginTop: 2, lineHeight: 1.15,
      }}>{title}</div>
      {doing && (
        <div style={{ marginTop: 10, fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.45, color: "#0a0a0a" }}>
          <strong>What you're doing:</strong> {doing}
        </div>
      )}
      {prompt && (
        <div style={{
          marginTop: 10, fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.45,
          color: "#e90d41", fontStyle: "italic",
        }}>"{prompt}"</div>
      )}
      {outcome && (
        <div style={{
          marginTop: 10, background: "#e90d41", color: "#fff",
          padding: "6px 10px", display: "inline-block",
          fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 12,
          lineHeight: 1.3,
        }}>Delivers: {outcome}</div>
      )}
    </div>
  );
}
window.StepCard = StepCard;
