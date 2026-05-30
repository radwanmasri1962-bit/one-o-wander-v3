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
    <section style={{ background: "white", padding: "80px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: "0.65rem",
            color: "#609EE7",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          LO QUE DICEN
        </p>
        <h2
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 300,
            fontSize: "2rem",
            color: "#1E3048",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          Viajeros que lo vivieron.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
          }}
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              style={{
                background: "#F7F9FC",
                border: "1px solid #D6E4F0",
                borderRadius: 8,
                padding: 32,
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#F4B942",
                  fontSize: "1rem",
                  letterSpacing: "2px",
                  display: "block",
                  marginBottom: 16,
                }}
              >
                ★★★★★
              </span>
              <p
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  color: "#4A6280",
                  lineHeight: 1.8,
                  marginBottom: 20,
                  marginTop: 0,
                }}
              >
                {t.quote}
              </p>
              <div style={{ borderTop: "1px solid #D6E4F0", marginBottom: 16 }} />
              <span
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 600,
                  fontSize: "0.78rem",
                  color: "#1E3048",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "block",
                }}
              >
                {t.name}
              </span>
              <span
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.75rem",
                  color: "#8AA4BF",
                  marginTop: 4,
                  display: "block",
                }}
              >
                {t.route}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
