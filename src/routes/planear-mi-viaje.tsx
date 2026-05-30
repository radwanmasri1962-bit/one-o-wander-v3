import { createFileRoute, useSearch, Link } from "@tanstack/react-router";
import { useState } from "react";

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

const DEST_GROUPS: { label: string; options: string[] }[] = [
  { label: "DESTINOS CURADOS", options: ["Estambul", "París", "Maldivas", "Patagonia", "Japón", "Marruecos"] },
  { label: "RIVIERA MAYA", options: ["Cancún", "Tulum", "Holbox", "Playa del Carmen", "Isla Mujeres", "Costa Maya"] },
  { label: "EUROPA", options: ["España", "Francia", "Italia", "Portugal", "Grecia", "Croacia", "Turquía", "Países Bajos", "Alemania", "Reino Unido", "Suiza", "Austria"] },
  { label: "MEDIO ORIENTE", options: ["Jordania", "Líbano", "Emiratos Árabes", "Arabia Saudita", "Israel", "Omán", "Qatar"] },
  { label: "ASIA", options: ["Tailandia", "Indonesia", "Vietnam", "India", "Sri Lanka", "Singapur", "Corea del Sur", "Nepal", "Bali"] },
  { label: "AMÉRICAS", options: ["Argentina", "Brasil", "Colombia", "Perú", "Chile", "Costa Rica", "Cuba", "República Dominicana", "Guatemala"] },
  { label: "ÁFRICA", options: ["Kenia", "Tanzania", "Sudáfrica", "Egipto", "Etiopía"] },
  { label: "OCEANÍA", options: ["Australia", "Nueva Zelanda", "Fiyi", "Polinesia Francesa"] },
];
const SURPRISE = "Sorpréndeme — tú decides";
const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const YEARS = ["2026", "2027", "2028"];
const NOCHES = ["5 noches", "7 noches", "10 noches", "14 noches", "14+ noches"];
const PERSONAS = Array.from({ length: 11 }).map((_, i) => String(i + 2));
const PRESUPUESTOS = ["Menos de $3,000", "$3,000–$5,500", "$5,500–$8,000", "$8,000+"];
const OCASIONES = ["Luna de Miel","Pareja","Amigos/as","Familia","Celebración","Corporativo","Solo/a","Otro"];
const QUIENES = ["Solo adultos","Adultos y niños","Solo mujeres","Grupo mixto"];

const sectionHeader: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  fontSize: "0.65rem",
  color: "#609EE7",
  borderBottom: "1px solid #D6E4F0",
  paddingBottom: 10,
  marginBottom: 28,
  marginTop: 44,
};

const fieldLabel: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 400,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontSize: "0.65rem",
  color: "#8AA4BF",
  display: "block",
  marginBottom: 8,
};

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid #D6E4F0",
  borderRadius: 3,
  background: "white",
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 300,
  fontSize: "0.9rem",
  color: "#1E3048",
  outline: "none",
  appearance: "none" as any,
};

const chevronBg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%238AA4BF' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")";

const selectStyle: React.CSSProperties = {
  ...inputBase,
  backgroundImage: chevronBg,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
  paddingRight: 36,
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <label style={fieldLabel}>{label}</label>
      {children}
    </div>
  );
}

function FocusInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={inputBase}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "#609EE7";
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(96,158,231,0.1)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#D6E4F0";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}

function FocusSelect({ children, ...rest }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...rest}
      style={selectStyle}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "#609EE7";
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(96,158,231,0.1)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#D6E4F0";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </select>
  );
}

function RadioGrid({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <label
            key={opt}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 14px",
              border: `1px solid ${selected ? "#1E3048" : "#D6E4F0"}`,
              borderRadius: 3,
              background: "white",
              cursor: "pointer",
              fontFamily: '"Raleway", sans-serif',
              fontWeight: selected ? 400 : 300,
              fontSize: "0.83rem",
              color: selected ? "#1E3048" : "#4A6280",
              transition: "all 0.18s",
            }}
            onMouseEnter={(e) => {
              if (!selected) e.currentTarget.style.borderColor = "#609EE7";
            }}
            onMouseLeave={(e) => {
              if (!selected) e.currentTarget.style.borderColor = "#D6E4F0";
            }}
          >
            <input
              type="radio"
              checked={selected}
              onChange={() => onChange(opt)}
              style={{ display: "none" }}
            />
            <span
              style={{
                width: 13,
                height: 13,
                borderRadius: "50%",
                border: "1.5px solid #D6E4F0",
                marginRight: 10,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selected && (
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1E3048" }} />
              )}
            </span>
            {opt}
          </label>
        );
      })}
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
  const [ocasion, setOcasion] = useState("");
  const [quien, setQuien] = useState("");
  const [sueno, setSueno] = useState("");
  const [sent, setSent] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Alejandra 👋 Soy ${name}. Quiero viajar a ${destino} en ${mes} ${ano}, ${noches}, ${personas} personas, presupuesto ${presupuesto}/persona. Ocasión: ${ocasion} (${quien}). ${sueno}. Correo: ${email} · Tel: ${phone}`;
    window.open(`https://wa.me/529980000000?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <main style={{ background: "#F7F9FC" }}>
      <div className="flex flex-col md:flex-row" style={{ minHeight: "100vh" }}>
        {/* LEFT */}
        <div
          className="md:w-[45%]"
          style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(160deg, rgba(15,30,46,0.5) 0%, rgba(15,30,46,0.72) 100%)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              padding: 64,
            }}
          >
            <p style={{
              fontFamily: '"Raleway", sans-serif', fontWeight: 400,
              textTransform: "uppercase", letterSpacing: "0.2em",
              fontSize: "0.65rem", color: "#609EE7", marginBottom: 20,
            }}>VIAJES A MEDIDA</p>
            <h1 style={{
              fontFamily: '"Raleway", sans-serif', fontWeight: 300,
              fontSize: "2.6rem", color: "white", lineHeight: 1.25, marginBottom: 20,
            }}>Diseñemos tu próximo viaje.</h1>
            <p style={{
              fontFamily: '"Raleway", sans-serif', fontWeight: 300,
              fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7,
            }}>Cuéntanos todo. Alejandra lo leerá personalmente.</p>
          </div>
          <p
            style={{
              position: "absolute", bottom: 40, left: 64, zIndex: 2,
              fontFamily: '"Raleway", sans-serif', fontWeight: 300,
              fontSize: "0.72rem", color: "rgba(255,255,255,0.4)",
            }}
          >
            Respondemos en menos de 24 horas · WhatsApp disponible
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="md:w-[55%]"
          style={{ padding: "56px 64px 80px 56px", minHeight: "100vh" }}
        >
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <Link to="/">
              <img
                src="/assets/logo-dark.png"
                alt="One O Wander"
                style={{ height: 32, marginBottom: 40, cursor: "pointer" }}
              />
            </Link>

            {sent ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto", display: "block" }}>
                  <circle cx="12" cy="12" r="11" stroke="#609EE7" strokeWidth="1.5"/>
                  <path d="M7 12.5l3.5 3.5L17 9" stroke="#609EE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 300, fontSize: "2rem", color: "#1E3048", marginTop: 24 }}>
                  Recibido.
                </p>
                <p style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 300, fontSize: "0.95rem", color: "#4A6280", marginTop: 12 }}>
                  Alejandra te contactará personalmente pronto.
                </p>
                <Link
                  to="/"
                  style={{
                    display: "inline-block", marginTop: 32,
                    fontFamily: '"Raleway", sans-serif', fontWeight: 400,
                    fontSize: "0.8rem", color: "#609EE7", textDecoration: "none",
                  }}
                >
                  ← Volver al inicio
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 style={{
                  fontFamily: '"Raleway", sans-serif', fontWeight: 300,
                  fontSize: "1.8rem", color: "#1E3048", marginBottom: 6,
                }}>Tu viaje empieza aquí.</h2>
                <p style={{
                  fontFamily: '"Raleway", sans-serif', fontWeight: 300,
                  fontSize: "0.83rem", color: "#8AA4BF", marginBottom: 44,
                }}>Completa el formulario y Alejandra te contactará personalmente.</p>

                <div style={{ ...sectionHeader, marginTop: 0 }}>TUS DATOS</div>

                <Field label="Nombre completo">
                  <FocusInput type="text" required placeholder="Tu nombre completo" value={name} onChange={(e) => setName(e.target.value)} />
                </Field>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                  <div>
                    <label style={fieldLabel}>Correo electrónico</label>
                    <FocusInput type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label style={fieldLabel}>Teléfono / WhatsApp</label>
                    <FocusInput type="tel" required placeholder="+52..." value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>

                <div style={sectionHeader}>TU VIAJE</div>

                <Field label="¿A dónde quieres ir?">
                  <FocusSelect value={destino} onChange={(e) => setDestino(e.target.value)} required>
                    <option value="" disabled>Selecciona un destino</option>
                    {DEST_GROUPS.map((g) => (
                      <optgroup key={g.label} label={g.label}>
                        {g.options.map((o) => <option key={g.label + o} value={o}>{o}</option>)}
                      </optgroup>
                    ))}
                    <option value={SURPRISE}>{SURPRISE}</option>
                  </FocusSelect>
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                  <div>
                    <label style={fieldLabel}>¿Cuándo? Mes</label>
                    <FocusSelect value={mes} onChange={(e) => setMes(e.target.value)}>
                      <option value="">Mes</option>
                      {MESES.map((m) => <option key={m}>{m}</option>)}
                    </FocusSelect>
                  </div>
                  <div>
                    <label style={fieldLabel}>Año</label>
                    <FocusSelect value={ano} onChange={(e) => setAno(e.target.value)}>
                      <option value="">Año</option>
                      {YEARS.map((y) => <option key={y}>{y}</option>)}
                    </FocusSelect>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                  <div>
                    <label style={fieldLabel}>¿Cuántas noches?</label>
                    <FocusSelect value={noches} onChange={(e) => setNoches(e.target.value)}>
                      <option value="">Selecciona</option>
                      {NOCHES.map((n) => <option key={n}>{n}</option>)}
                    </FocusSelect>
                  </div>
                  <div>
                    <label style={fieldLabel}>¿Cuántas personas?</label>
                    <FocusSelect value={personas} onChange={(e) => setPersonas(e.target.value)}>
                      {PERSONAS.map((p) => <option key={p}>{p}</option>)}
                    </FocusSelect>
                  </div>
                </div>

                <Field label="Presupuesto por persona">
                  <FocusSelect value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)}>
                    <option value="">Selecciona</option>
                    {PRESUPUESTOS.map((p) => <option key={p}>{p}</option>)}
                  </FocusSelect>
                </Field>

                <div style={sectionHeader}>TIPO DE VIAJE</div>

                <Field label="¿Cuál es la ocasión?">
                  <RadioGrid options={OCASIONES} value={ocasion} onChange={setOcasion} />
                </Field>

                <div style={{ marginTop: 20 }}>
                  <Field label="¿Quién viaja?">
                    <RadioGrid options={QUIENES} value={quien} onChange={setQuien} />
                  </Field>
                </div>

                <div style={sectionHeader}>TU SUEÑO</div>

                <Field label="Cuéntanos qué quieres vivir">
                  <textarea
                    rows={5}
                    value={sueno}
                    onChange={(e) => setSueno(e.target.value)}
                    placeholder="Descríbenos el viaje que siempre quisiste hacer. Sin límites."
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid #D6E4F0",
                      borderRadius: 3,
                      background: "white",
                      fontFamily: '"Raleway", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.9rem",
                      color: "#1E3048",
                      outline: "none",
                      resize: "vertical",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#609EE7";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(96,158,231,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#D6E4F0";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </Field>

                <button
                  type="submit"
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                  style={{
                    width: "100%", marginTop: 40,
                    background: btnHover ? "#0F1E2E" : "#1E3048",
                    color: "white", border: "none", borderRadius: 3,
                    padding: 16, cursor: "pointer",
                    fontFamily: '"Raleway", sans-serif', fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.15em",
                    fontSize: "0.8rem", transition: "background 0.2s",
                  }}
                >
                  ENVIAR MI SOLICITUD A ALEJANDRA →
                </button>
                <p style={{
                  textAlign: "center", marginTop: 12,
                  fontFamily: '"Raleway", sans-serif', fontWeight: 300,
                  fontSize: "0.72rem", color: "#8AA4BF",
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
