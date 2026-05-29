import { Link } from "@tanstack/react-router";
import { destinationList } from "./destinations-data";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationList.map((d) => (
            <Card key={d.slug} d={d} />
          ))}
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
}: {
  d: { slug: string; name: string; cardImg: string; tag: string };
}) {
  return (
    <Link
      to="/destinos/$slug"
      params={{ slug: d.slug }}
      className="group relative block overflow-hidden bg-navy"
      style={{ aspectRatio: "4 / 3" }}
    >
      <img
        src={d.cardImg}
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
          Explorar →
        </span>
      </div>
    </Link>
  );
}
