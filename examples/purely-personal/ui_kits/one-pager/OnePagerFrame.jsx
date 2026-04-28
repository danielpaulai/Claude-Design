// OnePagerFrame.jsx — A4 at 300dpi (2480 x 3508)
// variant: "light" (paper) or "dark" (premium black)
function OnePagerFrame({ children, variant = "light" }) {
  const isDark = variant === "dark";
  const style = isDark
    ? {
        // Deep black with layered red gradients and subtle 80px tile grid
        backgroundColor: "#050505",
        backgroundImage: [
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          "radial-gradient(1800px 1200px at 90% -5%, rgba(233,13,65,0.22), transparent 55%)",
          "radial-gradient(1400px 900px at -5% 110%, rgba(233,13,65,0.12), transparent 55%)",
          "linear-gradient(180deg, #0a0a0a 0%, #030303 100%)",
        ].join(","),
        backgroundSize: "160px 160px, 160px 160px, 100% 100%, 100% 100%, 100% 100%",
        color: "#ffffff",
      }
    : {
        backgroundColor: "#f7f7f8",
        backgroundImage:
          "linear-gradient(to right, rgba(10,10,10,0.035) 1px, transparent 1px)," +
          "linear-gradient(to bottom, rgba(10,10,10,0.035) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        color: "#0a0a0a",
      };

  return (
    <div style={{
      width: 2480, height: 3508, position: "relative",
      padding: "200px 200px 180px", boxSizing: "border-box",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
      ...style,
    }}>
      {/* Subtle corner watermark — "Purely Personal" stencil */}
      <div style={{
        position: "absolute", bottom: 80, right: 200,
        fontFamily: "Rethink Sans, sans-serif", fontWeight: 800,
        fontSize: 28, letterSpacing: "0.3em", textTransform: "uppercase",
        color: isDark ? "rgba(255,255,255,0.35)" : "rgba(10,10,10,0.35)",
      }}>Purely · Personal</div>
      {children}
    </div>
  );
}
window.OnePagerFrame = OnePagerFrame;
