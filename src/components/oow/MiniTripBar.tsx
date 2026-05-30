import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { WORLD_DESTINATION_GROUPS, SURPRISE_OPTION } from "./world-destinations";


const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const years = ["2026", "2027", "2028"];
const people = Array.from({ length: 11 }).map((_, i) => String(i + 2));

const labelStyle: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 400,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontSize: "0.65rem",
  color: "#8AA4BF",
  marginBottom: 6,
  display: "block",
};

const inputStyle: React.CSSProperties = {
  border: "none",
  outline: "none",
  background: "transparent",
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 300,
  fontSize: "1rem",
  color: "#1E3048",
  width: "100%",
};

export function MiniTripBar() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [persons, setPersons] = useState("2");

  const onSubmit = () => {
    const params = new URLSearchParams();
    if (name) params.set("name", name);
    if (destination) params.set("destination", destination);
    if (month) params.set("month", month);
    if (year) params.set("year", year);
    if (persons) params.set("people", persons);
    navigate({ to: "/planear-mi-viaje", search: Object.fromEntries(params) as any });
  };

  return (
    <div style={{ background: "#F7F9FC", padding: "48px 24px" }}>
      <p
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          fontSize: "0.7rem",
          color: "#609EE7",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        ¿Listo para diseñar tu viaje?
      </p>
      <div
        style={{
          background: "white",
          boxShadow: "0 8px 40px rgba(30,48,72,0.15)",
          border: "1px solid #D6E4F0",
          borderRadius: 4,
          padding: "24px 32px",
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1.3fr 0.8fr auto",
          alignItems: "stretch",
          gap: 0,
        }}
      >
        <div style={{ paddingRight: 20, borderRight: "1px solid #D6E4F0" }}>
          <span style={labelStyle}>Tu nombre</span>
          <input
            type="text"
            placeholder="¿Cómo te llamas?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ padding: "0 20px", borderRight: "1px solid #D6E4F0" }}>
          <span style={labelStyle}>Destino</span>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} style={inputStyle}>
            <option value="">Selecciona</option>
            {WORLD_DESTINATION_GROUPS.map((g) => (
              <optgroup key={g.label} label={g.label}>
                {g.options.map((o) => <option key={g.label + o} value={o}>{o}</option>)}
              </optgroup>
            ))}
            <option value={SURPRISE_OPTION}>{SURPRISE_OPTION}</option>
          </select>
        </div>

        <div style={{ padding: "0 20px", borderRight: "1px solid #D6E4F0" }}>
          <span style={labelStyle}>Fecha de salida</span>
          <div style={{ display: "flex", gap: 8 }}>
            <select value={month} onChange={(e) => setMonth(e.target.value)} style={inputStyle}>
              <option value="">Mes</option>
              {meses.map((m) => <option key={m}>{m}</option>)}
            </select>
            <select value={year} onChange={(e) => setYear(e.target.value)} style={inputStyle}>
              <option value="">Año</option>
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>

        <div style={{ padding: "0 20px", borderRight: "1px solid #D6E4F0" }}>
          <span style={labelStyle}>Personas</span>
          <select value={persons} onChange={(e) => setPersons(e.target.value)} style={inputStyle}>
            {people.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          style={{
            background: "#1E3048",
            color: "white",
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontSize: "0.75rem",
            padding: "16px 24px",
            borderRadius: 3,
            border: "none",
            marginLeft: 20,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Personalizar mi viaje →
        </button>
      </div>
    </div>
  );
}
