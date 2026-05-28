import { useState } from "react";

const destinos = ["Estambul", "París", "Sevilla", "Patagonia", "Costa Turca", "Aún no lo sé"];
const tipos = ["Romántico", "Aventura", "Cultural", "Celebración", "Luna de Miel", "Gastronomía"];
const presupuestos = ["$2,000-$3,500", "$3,500-$5,500", "$5,500-$8,000", "$8,000+"];
const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const years = [2026, 2027, 2028];

const inputCls =
  "w-full bg-white border border-hairline px-4 py-3 text-[15px] text-navy placeholder:text-muted-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";
const labelCls = "block text-[12px] uppercase tracking-[0.18em] text-navy mb-2 font-body";

export function InquiryForm() {
  const [tipo, setTipo] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggleTipo = (t: string) =>
    setTipo((arr) => (arr.includes(t) ? arr.filter((x) => x !== t) : [...arr, t]));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-offwhite py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 lg:gap-20">
        <div className="relative">
          <h2 className="display text-navy text-[28px] md:text-[38px] font-semibold leading-tight">
            Diseñemos tu próximo viaje.
          </h2>
          <p className="mt-5 text-body text-[16px] leading-relaxed max-w-md">
            Cuéntanos tu sueño. Nosotros nos encargamos del resto.
          </p>
          <p className="mt-8 text-[12px] uppercase tracking-[0.18em] text-muted-ink">
            Respondemos en menos de 24 horas · WhatsApp disponible
          </p>

          <div
            className="hidden lg:block mt-16 font-display text-[180px] leading-none text-hairline select-none"
            aria-hidden
          >
            1°
          </div>
        </div>

        <div>
          {sent ? (
            <div className="border border-hairline bg-white p-10 md:p-14 text-center">
              <p className="eyebrow">Gracias</p>
              <h3 className="mt-3 font-display text-navy text-3xl">Te contactamos pronto.</h3>
              <p className="mt-4 text-body text-[15px]">
                Hemos recibido tu solicitud. Un curador de One O Wander te escribirá en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nombre completo" className="md:col-span-2">
                <input type="text" required className={inputCls} />
              </Field>
              <Field label="Correo electrónico">
                <input type="email" required className={inputCls} />
              </Field>
              <Field label="Teléfono / WhatsApp">
                <input type="tel" required className={inputCls} />
              </Field>

              <Field label="¿A dónde quieres ir?">
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Selecciona</option>
                  {destinos.map((d) => <option key={d}>{d}</option>)}
                </select>
              </Field>

              <Field label="¿Cuándo?">
                <div className="grid grid-cols-2 gap-3">
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Mes</option>
                    {meses.map((m) => <option key={m}>{m}</option>)}
                  </select>
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Año</option>
                    {years.map((y) => <option key={y}>{y}</option>)}
                  </select>
                </div>
              </Field>

              <Field label="¿Cuántas personas?">
                <select className={inputCls} defaultValue="2">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <option key={i + 2} value={i + 2}>{i + 2}</option>
                  ))}
                </select>
              </Field>

              <Field label="Presupuesto por persona">
                <select className={inputCls} defaultValue="">
                  <option value="" disabled>Selecciona</option>
                  {presupuestos.map((p) => <option key={p}>{p}</option>)}
                </select>
              </Field>

              <Field label="Tipo de viaje" className="md:col-span-2">
                <div className="flex flex-wrap gap-2">
                  {tipos.map((t) => {
                    const active = tipo.includes(t);
                    return (
                      <button
                        type="button"
                        key={t}
                        onClick={() => toggleTipo(t)}
                        className={`px-4 py-2 text-[13px] tracking-wide border transition-colors ${
                          active
                            ? "bg-navy text-white border-navy"
                            : "bg-white text-navy border-hairline hover:border-accent"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Cuéntanos tu sueño" className="md:col-span-2">
                <textarea rows={4} className={inputCls} />
              </Field>

              <button
                type="submit"
                className="md:col-span-2 w-full bg-navy hover:bg-navy-deep text-white text-[14px] uppercase tracking-[0.2em] py-5 transition-colors"
              >
                Enviar mi solicitud →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className={labelCls}>{label}</span>
      {children}
    </label>
  );
}
