import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/oow/Nav";
import { WORLD_DESTINATION_GROUPS, SURPRISE_OPTION } from "@/components/oow/world-destinations";

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

const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const YEARS = ["2026", "2027", "2028"];
const NOCHES = ["5 noches", "7 noches", "10 noches", "14 noches", "14+ noches"];
const PERSONAS = Array.from({ length: 11 }).map((_, i) => String(i + 2));
const PRESUPUESTOS = ["Menos de $3,000", "$3,000–$5,500", "$5,500–$8,000", "$8,000+"];
const TIPOS = ["Romántico","Aventura","Cultural","Celebración","Luna de Miel","Gastronomía","Corporativo","Familiar"];

const fieldLabel: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 400,
  fontSize: "0.7rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "#8AA4BF",
  display: "block",
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  borderBottom: "1px solid #D6E4F0",
  borderRadius: 0,
  padding: "10px 0",
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 300,
  fontSize: "0.95rem",
  color: "#1E3048",
  width: "100%",
  background: "transparent",
  outline: "none",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <label style={fieldLabel}>{label}</label>
      {children}
    </div>
  );
}

function PlanearPage() {
  const search = useSearch({ from: "/planear-mi-viaje" });
  const [name, setName] = useState(search.name || "");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destino, setDestino] = useState(search.destination || "");
  const [mes, setMes] = useState(search.month || "");
  const [ano, setAno] = useState(search.year || "");
  const [noches, setNoches] = useState("");
  const [personas, setPersonas] = useState(search.people || "2");
  const [presupuesto, setPresupuesto] = useState("");
  const [tipo, setTipo] = useState("");
  const [sueno, setSueno] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Alejandra, soy ${name}. Quiero viajar a ${destino} en ${mes} ${ano}, ${noches}, ${personas} personas, presupuesto ${presupuesto}/persona. Tipo de viaje: ${tipo}. Mi sueño: ${sueno}. Correo: ${email} · WhatsApp: ${phone}`;
    window.open(`https://wa.me/529980000000?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <main className="bg-white">
      <Nav />
      <div className="flex flex-col md:flex-row" style={{ minHeight: "100vh" }}>
        {/* LEFT PANEL */}
        <div className="md:w-[45%] md:fixed md:left-0 md:top-0 md:h-screen" style={{ position: "relative" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=900&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,30,46,0.4), rgba(15,30,46,0.7))",
            }}
          />
          <div className="relative h-full min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center text-center px-8 py-24">
            <p style={{
              fontFamily: '"Raleway", sans-serif', fontWeight: 400,
              textTransform: "uppercase", letterSpacing: "0.2em",
              fontSize: "0.65rem", color: "#609EE7", marginBottom: 20,
            }}>VIAJES A MEDIDA</p>
            <h1 style={{
              fontFamily: '"Raleway", sans-serif', fontWeight: 300,
              fontSize: "2.4rem", color: "white", lineHeight: 1.3,
            }}>Diseñemos tu próximo viaje.</h1>
            <p style={{
              fontFamily: '"Raleway", sans-serif', fontWeight: 300,
              fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginTop: 16,
            }}>Cuéntanos todo. Alejandra lo leerá personalmente.</p>
          </div>
          <p
            className="hidden md:block"
            style={{
              position: "absolute", bottom: 24, left: 0, right: 0, textAlign: "center",
              fontFamily: '"Raleway", sans-serif', fontWeight: 300,
              fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", zIndex: 1,
            }}
          >
            Respondemos en menos de 24 horas · WhatsApp disponible
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:ml-[45%] md:w-[55%] bg-white" style={{ padding: "64px 56px" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            {sent ? (
              <div className="text-center" style={{ padding: "120px 0" }}>
                <div style={{ fontSize: "48px", color: "#609EE7", lineHeight: 1 }}>✓</div>
                <p style={{
                  fontFamily: '"Raleway", sans-serif', fontWeight: 300,
                  fontSize: "1.4rem", color: "#1E3048", marginTop: 24,
                }}>Recibido.</p>
                <p style={{
                  fontFamily: '"Raleway", sans-serif', fontWeight: 300,
                  fontSize: "0.95rem", color: "#4A6280", marginTop: 12,
                }}>Alejandra te contactará pronto.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 style={{
                  fontFamily: '"Raleway", sans-serif', fontWeight: 300,
                  fontSize: "1.6rem", color: "#1E3048", marginBottom: 40,
                }}>Tu viaje empieza aquí.</h2>

                <Field label="Nombre completo">
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
                </Field>
                <Field label="Correo electrónico">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
                </Field>
                <Field label="Teléfono / WhatsApp">
                  <input type="tel" required placeholder="+52..." value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
                </Field>

                <Field label="¿A dónde quieres ir?">
                  <select value={destino} onChange={(e) => setDestino(e.target.value)} style={inputStyle} required>
                    <option value="">Selecciona</option>
                    {WORLD_DESTINATION_GROUPS.map((g) => (
                      <optgroup key={g.label} label={g.label}>
                        {g.options.map((o) => <option key={g.label + o} value={o}>{o}</option>)}
                      </optgroup>
                    ))}
                    <option value={SURPRISE_OPTION}>{SURPRISE_OPTION}</option>
                  </select>
                </Field>

                <Field label="¿Cuándo?">
                  <div style={{ display: "flex", gap: 16 }}>
                    <select value={mes} onChange={(e) => setMes(e.target.value)} style={inputStyle}>
                      <option value="">Mes</option>
                      {MESES.map((m) => <option key={m}>{m}</option>)}
                    </select>
                    <select value={ano} onChange={(e) => setAno(e.target.value)} style={inputStyle}>
                      <option value="">Año</option>
                      {YEARS.map((y) => <option key={y}>{y}</option>)}
                    </select>
                  </div>
                </Field>

                <Field label="¿Cuántas noches?">
                  <select value={noches} onChange={(e) => setNoches(e.target.value)} style={inputStyle}>
                    <option value="">Selecciona</option>
                    {NOCHES.map((n) => <option key={n}>{n}</option>)}
                  </select>
                </Field>

                <Field label="¿Cuántas personas?">
                  <select value={personas} onChange={(e) => setPersonas(e.target.value)} style={inputStyle}>
                    {PERSONAS.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </Field>

                <Field label="Presupuesto por persona">
                  <select value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} style={inputStyle}>
                    <option value="">Selecciona</option>
                    {PRESUPUESTOS.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </Field>

                <Field label="Tipo de viaje">
                  <select value={tipo} onChange={(e) => setTipo(e.target.value)} style={inputStyle}>
                    <option value="">Selecciona</option>
                    {TIPOS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>

                <Field label="Cuéntanos tu sueño">
                  <textarea
                    rows={4}
                    value={sueno}
                    onChange={(e) => setSueno(e.target.value)}
                    placeholder="Descríbenos el viaje que siempre quisiste hacer. Sin límites."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </Field>

                <button type="submit" style={{
                  width: "100%", background: "#1E3048", color: "white",
                  fontFamily: '"Raleway", sans-serif', fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.15em",
                  fontSize: "0.8rem", padding: 18, borderRadius: 3,
                  border: "none", cursor: "pointer", marginTop: 48,
                }}>
                  ENVIAR MI SOLICITUD A ALEJANDRA →
                </button>
                <p style={{
                  textAlign: "center", marginTop: 12,
                  fontFamily: '"Raleway", sans-serif', fontWeight: 300,
                  fontSize: "0.75rem", color: "#8AA4BF",
                }}>
                  Respondemos en menos de 24 horas · Vía WhatsApp o email
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
