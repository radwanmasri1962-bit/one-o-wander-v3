export function BrandStatement() {
  return (
    <section id="nosotros" className="bg-white px-6" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <style>{`
        @media (max-width: 768px) {
          .brand-headline { font-size: 1.5rem !important; margin-bottom: 24px !important; }
          .brand-body { font-size: 1.15rem !important; }
        }
      `}</style>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="uppercase text-center brand-headline"
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 700,
            fontSize: "2.2rem",
            letterSpacing: "0.1em",
            color: "#1E3048",
            marginBottom: 32,
          }}
        >
          Cada viaje, una historia que solo tú vivirás.
        </h2>

        <p
          className="mx-auto text-center brand-body"
          style={{
            fontFamily: '"Cormorant", serif',
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "1.6rem",
            color: "#4A6280",
            lineHeight: 1.8,
            maxWidth: 680,
          }}
        >
          El mundo está lleno de opciones. Pero pocas personas saben realmente cómo vivirlo. En One O Wander, no vendemos paquetes. Diseñamos experiencias únicas para grupos pequeños — parejas, amigos, familias — que quieren algo más que un destino. Quieren una historia.
        </p>

        <p
          className="text-center italic"
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 300,
            fontSize: "1rem",
            color: "#609EE7",
            letterSpacing: "0.08em",
            marginTop: 24,
          }}
        >
          — Alejandra
        </p>

        <a
          href="#proceso"
          className="inline-block mt-12 text-accent text-sm uppercase border-b border-accent pb-1 hover:opacity-80 transition-opacity"
          style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 600, letterSpacing: "0.12em" }}
        >
          Conoce Cómo Trabajamos
        </a>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const stats = [
    "12 personas máximo por grupo",
    "5 continentes · destinos curados",
    "Grupos pequeños · Experiencias grandes",
    "Diseñado para ti, desde cero",
  ];
  return (
    <section className="bg-navy-deep py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
        {stats.map((s, i) => (
          <div
            key={s}
            className={`text-center text-white text-[13px] uppercase tracking-[0.18em] px-4 ${
              i < stats.length - 1 ? "md:border-r md:border-white/15" : ""
            }`}
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
