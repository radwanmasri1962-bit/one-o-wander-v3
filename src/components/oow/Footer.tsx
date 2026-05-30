const GH = "https://raw.githubusercontent.com/radwanmasri1962-bit/one-o-wander-v3/main/public/assets";

const labelStyle: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  fontSize: "0.65rem",
  color: "#609EE7",
  marginBottom: 20,
};

const linkStyle: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 300,
  fontSize: "0.85rem",
  color: "#8AA4BF",
  lineHeight: 2.4,
  textDecoration: "none",
  display: "block",
  transition: "color 0.2s",
};

const navLinks: { label: string; href: string }[] = [
  { label: "Destinos", href: "/#destinos" },
  { label: "Experiencias", href: "/#experiencias" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Planear mi viaje", href: "/planear-mi-viaje" },
  { label: "Riviera Maya", href: "/riviera-maya" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      style={linkStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#8AA4BF")}
    >
      {label}
    </a>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      style={{ color: "#8AA4BF", display: "inline-flex", transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#8AA4BF")}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#0F1E2E", color: "white" }}>
      {/* Row 1 */}
      <div
        style={{
          padding: "64px 80px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 48,
        }}
      >
        {/* Left */}
        <div>
          <img src={`${GH}/logo-white.png`} alt="One O Wander" style={{ height: 56, width: "auto" }} />
          <p
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 300,
              fontSize: "0.82rem",
              color: "#8AA4BF",
              lineHeight: 1.7,
              marginTop: 16,
            }}
          >
            Agencia de viajes boutique.
            <br />
            Cancún, México.
          </p>
          <a
            href="https://wa.me/529981290915"
            style={{
              color: "#609EE7",
              fontSize: "0.82rem",
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 400,
              textDecoration: "none",
              display: "inline-block",
              marginTop: 12,
            }}
          >
            +52 998 129 0915
          </a>
        </div>

        {/* Center */}
        <div>
          <div style={labelStyle}>NAVEGACIÓN</div>
          {navLinks.map((l) => (
            <NavLink key={l.label} {...l} />
          ))}
        </div>

        {/* Right */}
        <div>
          <div style={labelStyle}>SÍGUENOS</div>
          <div style={{ display: "flex", gap: 20, marginBottom: 24 }}>
            <SocialIcon href="https://www.facebook.com/OneOWander/">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/oneowander">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@oneowander">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
              </svg>
            </SocialIcon>
          </div>
          <div style={labelStyle}>HORARIOS</div>
          <p
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 300,
              fontSize: "0.82rem",
              color: "#8AA4BF",
              lineHeight: 2,
              margin: 0,
            }}
          >
            Lunes a Viernes: 9:00 – 18:00
            <br />
            WhatsApp disponible los 7 días
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div
        style={{
          padding: "24px 80px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src="https://raw.githubusercontent.com/radwanmasri1962-bit/one-o-wander-v3/main/public/assets/2.svg"
            alt="JARA AI"
            style={{ height: 32, marginRight: 10 }}
          />
          <span
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 300,
              fontSize: "0.72rem",
              color: "#4A6280",
            }}
          >
            Powered &amp; built by JARA AI
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: "auto" }}>
          <img
            src="https://raw.githubusercontent.com/radwanmasri1962-bit/one-o-wander-v3/main/public/assets/rnt-logo.png"
            alt="RNT"
            style={{ height: 32, marginRight: 10 }}
          />
          <div
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 300,
              fontSize: "0.72rem",
              color: "#4A6280",
              lineHeight: 1.6,
            }}
          >
            RNT: 0423005c575d2
            <a
              href="https://oneowander.com/privacy.html"
              style={{
                color: "#609EE7",
                fontSize: "0.7rem",
                textDecoration: "none",
                display: "block",
                marginTop: 2,
              }}
            >
              Aviso de privacidad
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p
        style={{
          textAlign: "center",
          fontFamily: '"Raleway", sans-serif',
          fontWeight: 300,
          fontSize: "0.68rem",
          color: "#2A3F5A",
          paddingBottom: 20,
          margin: 0,
        }}
      >
        © 2026 One O Wander · Cancún, México · Todos los derechos reservados
      </p>
    </footer>
  );
}
