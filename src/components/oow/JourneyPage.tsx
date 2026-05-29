import { Link } from "@tanstack/react-router";
import { destinations, type Destination } from "./destinations-data";

export function JourneyPage({ d }: { d: Destination }) {
  return (
    <main className="bg-background text-body">
      <JourneyNav />
      <Hero d={d} />
      <Stats d={d} />
      <TheJourney d={d} />
      <DayByDay d={d} />
      <Gallery d={d} />
      <CTA d={d} />
      <Continue d={d} />
    </main>
  );
}

function JourneyNav() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Journeys", href: "/#destinos" },
    { label: "Itinerary", href: "/#proceso" },
    { label: "Gallery", href: "/#experiencias" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-white/70 hover:text-white text-[12px] uppercase tracking-[0.18em]">
            ← Volver
          </Link>
          <Link to="/">
            <img src="/assets/logo-white.png" alt="One O Wander" className="h-[40px] w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/85 hover:text-white text-[13px] uppercase tracking-[0.18em] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contacto"
            className="border border-white/70 hover:border-white text-white text-[13px] uppercase tracking-[0.18em] px-6 py-3 transition-colors"
          >
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ d }: { d: Destination }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img src={d.heroImg} alt={d.name} className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-6 md:px-16 pb-16 md:pb-24">
        <p className="text-white/70 text-[11px] uppercase tracking-[0.3em] mb-4 font-body">{d.tag}</p>
        <h1 className="font-display text-white text-[56px] md:text-[112px] leading-[0.95] tracking-tight">
          {d.name}
        </h1>
      </div>
    </section>
  );
}

function Stats({ d }: { d: Destination }) {
  const items = [
    { label: "Duración", value: d.stats.duracion },
    { label: "Mejor Temporada", value: d.stats.temporada },
    { label: "Ritmo", value: d.stats.ritmo },
    { label: "Inversión", value: d.stats.inversion },
  ];
  return (
    <section className="bg-navy-deep text-white py-14 md:py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {items.map((it) => (
          <div key={it.label}>
            <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] mb-3 font-body">
              {it.label}
            </p>
            <p className="font-display text-white text-[18px] md:text-[20px] leading-snug">
              {it.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TheJourney({ d }: { d: Destination }) {
  return (
    <section className="bg-offwhite py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="text-navy/60 text-[10px] uppercase tracking-[0.3em] font-body">— El Viaje</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-navy text-[36px] md:text-[52px] leading-[1.05] tracking-tight mb-10">
            {d.headline}
          </h2>
          <p className="text-navy/80 text-[17px] leading-[1.7] max-w-3xl font-body">
            {d.description}
          </p>
        </div>
      </div>
    </section>
  );
}

function DayByDay({ d }: { d: Destination }) {
  return (
    <section className="bg-navy-deep text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-4 font-body">Día a Día</p>
        <h2 className="font-display text-white text-[36px] md:text-[52px] mb-16 tracking-tight">
          El itinerario.
        </h2>
        <div>
          {d.days.map((day) => (
            <div
              key={day.n}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 border-t border-white/15"
            >
              <div className="md:col-span-2">
                <span className="font-display text-white/30 text-[44px] md:text-[56px] leading-none">
                  {day.n}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-white text-[22px] md:text-[26px] leading-tight">
                  {day.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-white/75 text-[15px] leading-[1.7] font-body">{day.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ d }: { d: Destination }) {
  const g = d.gallery;
  return (
    <section className="bg-offwhite py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-navy/60 text-[10px] uppercase tracking-[0.3em] mb-4 font-body">La Galería</p>
        <h2 className="font-display text-navy text-[36px] md:text-[52px] mb-12 tracking-tight">
          Momentos.
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Img src={g[0]} alt={d.name} className="col-span-12 md:col-span-8 aspect-[16/10]" />
          <Img src={g[1]} alt={d.name} className="col-span-12 md:col-span-4 aspect-[4/5]" />
          <Img src={g[2]} alt={d.name} className="col-span-6 md:col-span-4 aspect-[4/5]" />
          <Img src={g[3]} alt={d.name} className="col-span-6 md:col-span-4 aspect-[4/5]" />
          <Img src={g[4]} alt={d.name} className="col-span-12 md:col-span-4 aspect-[4/5]" />
        </div>
      </div>
    </section>
  );
}

function Img({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-navy ${className ?? ""}`}>
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" />
    </div>
  );
}

function CTA({ d }: { d: Destination }) {
  return (
    <section className="bg-navy-deep text-white py-28 md:py-36 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-6 font-body">— Comenzar</p>
        <h2 className="font-display text-white text-[44px] md:text-[68px] leading-[1.05] tracking-tight mb-8">
          Wander {d.name} with us.
        </h2>
        <p className="text-white/75 text-[17px] leading-[1.7] max-w-2xl mx-auto mb-12 font-body">
          Every itinerary is composed by hand. Tell us your dates and we'll begin.
        </p>
        <a
          href="/#contacto"
          className="inline-block bg-accent hover:bg-accent/90 text-white text-[13px] uppercase tracking-[0.18em] px-10 py-4 transition-colors"
        >
          Comenzar la conversación
        </a>
      </div>
    </section>
  );
}

function Continue({ d }: { d: Destination }) {
  const order = ["estambul", "paris", "maldivas", "patagonia", "japon", "marruecos"];
  const others = order.filter((s) => s !== d.slug).map((s) => destinations[s]).filter(Boolean);

  return (
    <section className="bg-offwhite py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-navy/60 text-[10px] uppercase tracking-[0.3em] mb-4 font-body">Continuar Viajando</p>
        <h2 className="font-display text-navy text-[36px] md:text-[44px] mb-12 tracking-tight">
          Otros viajes.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/destinos/$slug"
              params={{ slug: o.slug }}
              className="group relative block overflow-hidden bg-navy"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src={o.cardImg}
                alt={o.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-2 font-body">
                  {o.tag}
                </p>
                <h3 className="font-display text-white text-[28px] tracking-wide">{o.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
