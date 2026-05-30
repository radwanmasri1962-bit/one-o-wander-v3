import { Link } from "@tanstack/react-router";

const label: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 400,
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  fontSize: "0.65rem",
  color: "#609EE7",
  marginBottom: 20,
};

const headline: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 300,
  fontSize: "2.4rem",
  color: "white",
  lineHeight: 1.3,
};

const subtext: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 300,
  fontSize: "1rem",
  color: "#8AA4BF",
  marginTop: 16,
};

const btnBase: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontSize: "0.75rem",
  padding: "16px 32px",
  borderRadius: 3,
  textDecoration: "none",
  display: "inline-block",
};

export function CtaBlock() {
  return (
    <section
      id="contacto"
      style={{ background: "#1E3048", padding: "100px 40px" }}
      className="text-center"
    >
      <p style={label}>— COMENZAR</p>
      <h2 style={headline}>¿Lista para vivir tu próximo viaje?</h2>
      <p style={subtext}>Cuéntanos tu sueño. Alejandra se encarga del resto.</p>
      <div
        style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}
      >
        <Link
          to="/planear-mi-viaje"
          style={{ ...btnBase, background: "#609EE7", color: "white", border: "1px solid #609EE7" }}
        >
          PLANEAR MI VIAJE →
        </Link>
        <a
          href="https://wa.me/529980000000"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...btnBase, background: "transparent", color: "white", border: "1px solid white" }}
        >
          WHATSAPP DIRECTO →
        </a>
      </div>
    </section>
  );
}
