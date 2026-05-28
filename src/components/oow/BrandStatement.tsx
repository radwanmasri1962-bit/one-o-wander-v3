export function BrandStatement() {
  return (
    <section id="nosotros" className="bg-white py-28 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="display text-navy text-[28px] md:text-[42px] leading-[1.2] font-semibold max-w-[700px] mx-auto">
          Cada viaje, una historia que solo tú vivirás.
        </h2>

        <div className="mt-12 space-y-6 text-[17px] leading-[1.7] text-body max-w-[600px] mx-auto">
          <p>
            El mundo está lleno de opciones. Pero pocas personas saben realmente cómo vivirlo.
          </p>
          <p>
            En One O Wander, no vendemos paquetes. Diseñamos experiencias únicas para grupos
            pequeños — parejas, amigos, familias — que quieren algo más que un destino. Quieren una
            historia.
          </p>
          <p>Grupos pequeños. Atención total. Presencia real.</p>
        </div>

        <a
          href="#proceso"
          className="inline-block mt-12 text-accent text-sm uppercase tracking-[0.18em] border-b border-accent pb-1 hover:opacity-80 transition-opacity"
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
