const testimonials = [
  {
    quote: "Alejandra lo organizó todo perfectamente. Solo tuve que aparecer y disfrutar.",
    name: "María G.",
    route: "Cancún → Estambul",
  },
  {
    quote: "El grupo era pequeño, la atención era total. No volvería a viajar de otra manera.",
    name: "Roberto M.",
    route: "CDMX → Marruecos",
  },
  {
    quote: "Nuestra luna de miel fue exactamente lo que soñamos. Cada detalle, perfecto.",
    name: "Sofía & Diego",
    route: "Guadalajara → Maldivas",
  },
  {
    quote: "Un viaje que cambió mi forma de ver el mundo.",
    name: "Claudia R.",
    route: "Monterrey → Patagonia",
  },
];

export function Testimonials() {
  return (
    <section style={{ background: "white", padding: "64px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "0.65rem",
              color: "#609EE7",
              marginBottom: 12,
            }}
          >
            Lo Que Dicen
          </p>
          <h2
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 300,
              fontSize: "1.8rem",
              color: "#1E3048",
            }}
          >
            Viajeros que lo vivieron.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 32,
          }}
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              style={{
                background: "white",
                border: "1px solid #D6E4F0",
                borderRadius: 4,
                padding: 32,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 300,
                  fontSize: "2.5rem",
                  lineHeight: 0,
                  color: "#609EE7",
                  marginBottom: 12,
                  marginTop: 12,
                }}
              >
                “
              </span>
              <p
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "#4A6280",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 400,
                  fontSize: "0.75rem",
                  color: "#1E3048",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: 20,
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.72rem",
                  color: "#8AA4BF",
                  marginTop: 4,
                }}
              >
                {t.route}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
