import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/oow/Nav";
import { Footer } from "@/components/oow/Footer";

export const Route = createFileRoute("/planear-mi-viaje")({
  validateSearch: (s: Record<string, unknown>) => ({
    name: (s.name as string) || "",
    destination: (s.destination as string) || "",
    month: (s.month as string) || "",
    year: (s.year as string) || "",
    people: (s.people as string) || "",
  }),
  head: () => ({
    meta: [
      { title: "Planear mi viaje · One O Wander" },
      { name: "description", content: "Cuéntanos tu sueño. Diseñamos viajes únicos a medida." },
    ],
  }),
  component: PlanearPage,
});

const DESTINOS = ["Estambul", "París", "Maldivas", "Patagonia", "Japón", "Marruecos", "Aún no lo sé", "Sorpréndeme"];
const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const YEARS = ["2026", "2027", "2028"];
const DURACIONES = ["5 noches", "7 noches", "10 noches", "14+ noches"];
const PRESUPUESTOS = ["Menos de $3,000", "$3,000–$5,500", "$5,500–$8,000", "$8,000+"];
const OCASIONES = [
  { e: "💑", l: "Luna de Miel" },
  { e: "👫", l: "Pareja" },
  { e: "👯", l: "Amigas/os" },
  { e: "👨‍👩‍👧", l: "Familia" },
  { e: "🥂", l: "Celebración" },
  { e: "💼", l: "Corporativo" },
  { e: "🙋", l: "Solo/a" },
];
const COMPOSICION = ["Solo adultos", "Adultos y niños", "Solo mujeres", "Mixto"];
const INTERESES = [
  "🍜 Gastronomía", "🥾 Senderismo", "🏛️ Historia y Cultura", "🏖️ Playas",
  "🌙 Vida nocturna", "✨ Lujo", "🦁 Naturaleza y Wildlife", "🎭 Arte",
  "🛶 Aventura", "🧘 Bienestar",
];
const ORIGENES = ["Instagram", "TikTok", "Recomendación", "Google", "Otro"];

const sectionHeader: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 600,
  textTransform: "uppercase",
  fontSize: "0.7rem",
  letterSpacing: "0.2em",
  color: "#609EE7",
  borderBottom: "1px solid #D6E4F0",
  paddingBottom: 8,
  marginBottom: 32,
};

const fieldLabel: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 400,
  fontSize: "0.8rem",
  color: "#4A6280",
  marginBottom: 12,
  display: "block",
};

const textInput: React.CSSProperties = {
  width: "100%",
  borderBottom: "1px solid #D6E4F0",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  outline: "none",
  background: "transparent",
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 300,
  fontSize: "1rem",
  color: "#1E3048",
  padding: "8px 0",
};

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        borderRadius: 100,
        padding: "8px 20px",
        fontSize: "0.8rem",
        fontFamily: '"Raleway", sans-serif',
        fontWeight: 400,
        border: active ? "1px solid #1E3048" : "1px solid #D6E4F0",
        background: active ? "#1E3048" : "transparent",
        color: active ? "white" : "#4A6280",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {children}
    </button>
  );
}

function Field({ label, children, style }: { label: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ marginBottom: 40, ...style }}>
      <label style={fieldLabel}>{label}</label>
      {children}
    </div>
  );
}

function PlanearPage() {
  const search = useSearch({ from: "/planear-mi-viaje" });
  const [destinations, setDestinations] = useState<string[]>(
    search.destination ? [search.destination] : []
  );
  const [month, setMonth] = useState(search.month || "");
  const [year, setYear] = useState(search.year || "");
  const [duracion, setDuracion] = useState("");
  const [persons, setPersons] = useState(parseInt(search.people || "2", 10) || 2);
  const [presupuesto, setPresupuesto] = useState("");
  const [ocasion, setOcasion] = useState("");
  const [composicion, setComposicion] = useState("");
  const [intereses, setIntereses] = useState<string[]>([]);
  const [name, setName] = useState(search.name || "");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [origen, setOrigen] = useState("");
  const [sueno, setSueno] = useState("");
  const [sent, setSent] = useState(false);

  const toggle = (arr: string[], set: (a: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hola Alejandra, soy ${name}.`,
      destinations.length ? `Destinos: ${destinations.join(", ")}` : "",
      month || year ? `Cuándo: ${month} ${year}` : "",
      duracion ? `Duración: ${duracion}` : "",
      `Personas: ${persons}`,
      presupuesto ? `Presupuesto: ${presupuesto}` : "",
      ocasion ? `Ocasión: ${ocasion}` : "",
      composicion ? `Grupo: ${composicion}` : "",
      intereses.length ? `Intereses: ${intereses.join(", ")}` : "",
      origen ? `Conocí por: ${origen}` : "",
      sueno ? `Mi sueño: ${sueno}` : "",
      `Email: ${email} · Tel: ${phone}`,
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/529980000000?text=${encodeURIComponent(lines)}`;
    const mailUrl = `mailto:alejandra@oneowander.com?subject=${encodeURIComponent("Nueva solicitud de viaje · " + name)}&body=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank");
    window.location.href = mailUrl;
    setSent(true);
  };

  return (
    <main className="bg-white">
      <Nav />

      <section style={{ background: "#0F1E2E", paddingTop: 160, paddingBottom: 80 }} className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p style={{
            fontFamily: '"Raleway", sans-serif', fontWeight: 600,
            fontSize: "0.7rem", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#609EE7", marginBottom: 20,
          }}>
            Viajes a medida
          </p>
          <h1 style={{
            fontFamily: '"Raleway", sans-serif', fontWeight: 300,
            fontSize: "2.8rem", color: "white", marginBottom: 16, lineHeight: 1.15,
          }}>
            Vamos a crear algo extraordinario.
          </h1>
          <p style={{
            fontFamily: '"Raleway", sans-serif', fontWeight: 300,
            fontSize: "1rem", color: "#8AA4BF",
          }}>
            Cuéntanos todo. Alejandra lo leerá personalmente.
          </p>
        </div>
      </section>

      <section className="bg-white px-6" style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: "2.5rem", color: "#609EE7", marginBottom: 20 }}>✓</div>
              <p style={{
                fontFamily: '"Raleway", sans-serif', fontWeight: 300,
                fontSize: "1.5rem", color: "#1E3048",
              }}>
                Recibido. Alejandra te contactará pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <h2 style={sectionHeader}>Tu viaje</h2>

              <Field label="¿A dónde quieres ir?">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {DESTINOS.map((d) => (
                    <Pill key={d} active={destinations.includes(d)} onClick={() => toggle(destinations, setDestinations, d)}>
                      {d}
                    </Pill>
                  ))}
                </div>
              </Field>

              <Field label="¿Cuándo quieres viajar?">
                <div style={{ display: "flex", gap: 16 }}>
                  <select value={month} onChange={(e) => setMonth(e.target.value)} style={textInput}>
                    <option value="">Mes</option>
                    {MESES.map((m) => <option key={m}>{m}</option>)}
                  </select>
                  <select value={year} onChange={(e) => setYear(e.target.value)} style={textInput}>
                    <option value="">Año</option>
                    {YEARS.map((y) => <option key={y}>{y}</option>)}
                  </select>
                </div>
              </Field>

              <Field label="¿Cuántos días?">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {DURACIONES.map((d) => (
                    <Pill key={d} active={duracion === d} onClick={() => setDuracion(d)}>{d}</Pill>
                  ))}
                </div>
              </Field>

              <Field label="¿Cuántas personas viajan?">
                <div style={{ display: "inline-flex", alignItems: "center", gap: 16 }}>
                  <button type="button" onClick={() => setPersons(Math.max(2, persons - 1))}
                    style={{ border: "1px solid #D6E4F0", background: "transparent", width: 36, height: 36, borderRadius: 100, cursor: "pointer", color: "#1E3048", fontSize: "1.2rem" }}>−</button>
                  <span style={{ fontFamily: '"Raleway", sans-serif', fontSize: "1.2rem", color: "#1E3048", minWidth: 24, textAlign: "center" }}>{persons}</span>
                  <button type="button" onClick={() => setPersons(Math.min(12, persons + 1))}
                    style={{ border: "1px solid #D6E4F0", background: "transparent", width: 36, height: 36, borderRadius: 100, cursor: "pointer", color: "#1E3048", fontSize: "1.2rem" }}>+</button>
                </div>
              </Field>

              <Field label="Presupuesto por persona">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {PRESUPUESTOS.map((p) => (
                    <Pill key={p} active={presupuesto === p} onClick={() => setPresupuesto(p)}>{p}</Pill>
                  ))}
                </div>
              </Field>

              <h2 style={{ ...sectionHeader, marginTop: 48 }}>Tu grupo</h2>

              <Field label="¿Cuál es la ocasión?">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {OCASIONES.map((o) => (
                    <Pill key={o.l} active={ocasion === o.l} onClick={() => setOcasion(o.l)}>
                      {o.e} {o.l}
                    </Pill>
                  ))}
                </div>
              </Field>

              <Field label="¿Quién viene?">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {COMPOSICION.map((c) => (
                    <Pill key={c} active={composicion === c} onClick={() => setComposicion(c)}>{c}</Pill>
                  ))}
                </div>
              </Field>

              <Field label="¿Qué quieren vivir? (selecciona todo lo que aplica)">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {INTERESES.map((i) => (
                    <Pill key={i} active={intereses.includes(i)} onClick={() => toggle(intereses, setIntereses, i)}>
                      {i}
                    </Pill>
                  ))}
                </div>
              </Field>

              <h2 style={{ ...sectionHeader, marginTop: 48 }}>Tus datos</h2>

              <Field label="Nombre completo">
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} style={textInput} />
              </Field>
              <Field label="Correo electrónico">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={textInput} />
              </Field>
              <Field label="Teléfono / WhatsApp">
                <input type="tel" required placeholder="+52..." value={phone} onChange={(e) => setPhone(e.target.value)} style={textInput} />
              </Field>
              <Field label="¿Cómo nos encontraste?">
                <select value={origen} onChange={(e) => setOrigen(e.target.value)} style={textInput}>
                  <option value="">Selecciona</option>
                  {ORIGENES.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Cuéntanos tu sueño">
                <textarea rows={4} value={sueno} onChange={(e) => setSueno(e.target.value)}
                  placeholder="Descríbenos el viaje que siempre quisiste hacer..."
                  style={{ ...textInput, borderBottom: "1px solid #D6E4F0", resize: "vertical" }} />
              </Field>

              <button type="submit" style={{
                width: "100%", background: "#1E3048", color: "white",
                fontFamily: '"Raleway", sans-serif', fontWeight: 600,
                textTransform: "uppercase", fontSize: "0.85rem",
                letterSpacing: "0.15em", padding: 20, borderRadius: 3,
                border: "none", cursor: "pointer", marginTop: 16,
              }}>
                Enviar mi solicitud a Alejandra →
              </button>
              <p style={{
                marginTop: 16, textAlign: "center",
                fontFamily: '"Raleway", sans-serif', fontWeight: 300,
                fontSize: "0.8rem", color: "#8AA4BF",
              }}>
                Respondemos en menos de 24 horas · Vía WhatsApp o email
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
