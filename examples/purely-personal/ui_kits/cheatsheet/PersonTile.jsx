// PersonTile.jsx — circle avatar + name (list cheatsheets)
function PersonTile({ name, seed }) {
  const hue = (seed * 47) % 360;
  const isDaniel = name.trim().toLowerCase() === "daniel paul";
  const avatarStyle = isDaniel
    ? {
        background: "url('../../assets/daniel-paul-headshot.jpg') center 16% / 180% auto no-repeat, #0a0a0a",
        boxShadow: "0 0 0 3px #fff, 0 0 0 5px rgba(233,13,65,.5)",
      }
    : {
        background: `hsl(${hue}, 55%, 70%)`,
        border: "3px solid #fff",
      };
  return (
    <div style={{ textAlign: "center", width: 120 }}>
      <div style={{
        width: 96, height: 96, borderRadius: 999, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontFamily: "Rethink Sans, sans-serif", fontWeight: 700, fontSize: 22,
        ...avatarStyle,
      }}>{isDaniel ? "" : name.split(" ").map(w => w[0]).join("")}</div>
      <div style={{
        marginTop: 8, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14,
        color: "#0a0a0a", lineHeight: 1.2,
      }}>{name}</div>
    </div>
  );
}
window.PersonTile = PersonTile;
