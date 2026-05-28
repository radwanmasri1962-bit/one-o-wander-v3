const destinations = [
  { name: "Estambul", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80", tag: "Cultural · Histórico" },
  { name: "París", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", tag: "Romántico · Gastronómico" },
  { name: "Sevilla", img: "https://images.unsplash.com/photo-1559060017-445fb9722f2a?w=800&q=80", tag: "Cultural · Flamenco" },
  { name: "Patagonia", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", tag: "Aventura · Naturaleza" },
  { name: "Costa Turca", img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80", tag: "Mar · Cultura" },
];

export function Destinations() {
  return (
    <section id="destinos" className="bg-offwhite py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow">Destinos</p>
          <h2 className="display text-navy text-[28px] md:text-[38px] mt-3 font-semibold">
            Experiencias que no olvidarás.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {destinations.slice(0, 3).map((d) => (
            <Card key={d.name} d={d} className="lg:col-span-2" />
          ))}
          <div className="hidden lg:block lg:col-span-1" />
          {destinations.slice(3).map((d) => (
            <Card key={d.name} d={d} className="lg:col-span-2" />
          ))}
          <div className="hidden lg:block lg:col-span-1" />
        </div>

        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="text-accent text-sm uppercase tracking-[0.18em] border-b border-accent pb-1 hover:opacity-80"
          >
            Ver todos los destinos →
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({
  d,
  className = "",
}: {
  d: { name: string; img: string; tag: string };
  className?: string;
}) {
  return (
    <a
      href="#contacto"
      className={`group relative block overflow-hidden bg-navy ${className}`}
      style={{ aspectRatio: "4 / 3" }}
    >
      <img
        src={d.img}
        alt={d.name}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-white text-2xl tracking-wide">{d.name}</h3>
        <p className="text-white/70 text-[11px] uppercase tracking-[0.2em] mt-1 font-body">
          {d.tag}
        </p>
        <span className="inline-block mt-3 text-accent text-[12px] uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 transition-opacity">
          Ver Experiencia →
        </span>
      </div>
    </a>
  );
}
