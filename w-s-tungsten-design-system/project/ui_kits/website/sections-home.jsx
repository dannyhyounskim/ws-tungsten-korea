/* W.S. Tungsten — Home page sections.
 * Reads brand primitives from the compiled bundle namespace and exposes
 * each section on window for app.jsx to compose. */
(function () {
  const NS = window.WSTungstenDesignSystem_3ea155;
  const { Button, Card, Eyebrow, Badge } = NS;
  const IMG = "../../assets/images/";

  const Icon = ({ name, size = 48 }) => (
    <span className="material-symbols-outlined" style={{ fontSize: size, lineHeight: 1 }}>{name}</span>
  );

  /* ---- Hero (scheme-1, deep teal) ---- */
  function Hero({ onNav }) {
    return (
      <section className="scheme-1" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <h1 style={{ marginBottom: 20 }}>Ferro Tungsten made with precision</h1>
              <p style={{ fontSize: "var(--text-medium)", maxWidth: 520, color: "var(--color-white-60)" }}>
                W.S. Tungsten Korea has a stable raw material supply chain and advanced automation
                technology, and is the only tungsten smelter in a non-communist country, leading the
                world market.
              </p>
              <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
                <Button variant="light" onClick={() => onNav("business")}>Product</Button>
                <Button variant="secondary" onClick={() => onNav("contact")}>Contact</Button>
              </div>
            </div>
            <div>
              <img src={IMG + "home-hero-header-section.png"} alt="Tungsten ore" style={{ width: "100%", aspectRatio: "1.1/1", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Competitiveness (scheme-2, pampas) ---- */
  function Competitiveness() {
    const bullets = [
      "The only Ferro Tungsten manufacturer in Korea",
      "The only non-communist tungsten smelter",
      "85% AI automation production technology",
      "Use of various tungsten concentrates",
      "Wolframite, scheelite, low-grade WO₃, etc.",
    ];
    return (
      <section className="scheme-2" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start", marginBottom: 64 }}>
            <div>
              <Eyebrow style={{ color: "var(--color-deep-sea-green)", marginBottom: 12 }}>W. S. Tungsten Korea</Eyebrow>
              <h2>Our Competitiveness</h2>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: "var(--text-medium)" }}>
                  <span className="material-symbols-outlined" style={{ color: "var(--color-deep-sea-green)", fontSize: 22 }}>check</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <img src={IMG + "home-feature-section.png"} alt="WSTK business card on tungsten ore" style={{ width: "100%", aspectRatio: "16/7", objectFit: "cover" }} />
        </div>
      </section>
    );
  }

  /* ---- Stats: What is Ferro Tungsten (scheme-1, deep teal) ---- */
  function Stats() {
    const stats = [
      ["W", "Element Symbol"],
      ["3422 °C", "Melting Point"],
      ["74", "Atomic Number"],
      ["5930 °C", "Boiling Point"],
      ["183.84", "Atomic Weight (u)"],
      ["19.25", "Density"],
    ];
    return (
      <section className="scheme-1" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "0.6fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <Eyebrow style={{ color: "var(--color-web-orange)", marginBottom: 12 }}>Our Product</Eyebrow>
              <h2 style={{ marginBottom: 20 }}>What is Ferro Tungsten</h2>
              <p style={{ color: "var(--color-white-60)", fontSize: "var(--text-medium)" }}>
                Ferro Tungsten is an alloy of iron (Fe) and tungsten (over 75%). It is an additive for
                tungsten alloy steel — used for wear and heat resistance across the aerospace, defense,
                and alloy tool-steel industries.
              </p>
            </div>
            <div className="stat-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {stats.map(([v, l], i) => (
                <Card key={i} style={{ textAlign: "center", padding: 28 }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: "clamp(40px,4vw,72px)", lineHeight: 1.15, marginBottom: 6 }}>{v}</div>
                  <h6 style={{ fontWeight: 600 }}>{l}</h6>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Timeline: Ai automated process (scheme-3, teal tint) ---- */
  function ProcessTimeline() {
    const steps = [
      ["Concentrate Warehoused", "Fast concentrate analysis using portable XRF", "home-stats-section-0.jpg"],
      ["Automatic Weighing & Compounding", "Quick compounding-ratio analysis and automatic weighing", "home-stats-section-1.jpg"],
      ["Automated Thermite Reaction", "Quality control by measuring reaction time and temperature", "home-stats-section-2.jpg"],
      ["Cooling", "Controlled cooling process", "home-stats-section-3.jpg"],
      ["Analysis", "Precise analysis by ICP-OES", "home-stats-section-4.jpg"],
      ["Packing", "Size screening and packaging to customer requirements", "home-stats-section-5.jpg"],
    ];
    return (
      <section className="scheme-3" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 560, marginBottom: 56 }}>
            <Eyebrow style={{ color: "var(--color-deep-sea-green)", marginBottom: 12 }}>Our Technology</Eyebrow>
            <h2>AI-automated processes with safety and efficiency</h2>
          </div>
          <div className="timeline" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 24 }}>
            {steps.map(([t, d, img], i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <img src={IMG + img} alt={t} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 13, height: 13, borderRadius: "50%", background: "var(--color-neutral-darkest)", boxShadow: "0 0 0 6px var(--color-deep-sea-green-lightest)", flex: "none" }} />
                  <span style={{ height: 3, background: "var(--color-neutral-darkest)", width: "100%" }} />
                </div>
                <div>
                  <h6 style={{ fontWeight: 700, marginBottom: 6 }}>{t}</h6>
                  <p style={{ fontSize: "var(--text-small)" }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---- Home CTA: contact methods (scheme-2, pampas) ---- */
  function HomeContact() {
    const methods = [
      ["mail", "Email", "Send us your specifications and questions directly.", "info@wstk.kr"],
      ["chat", "Fax", "Send your specifications and questions via fax.", "+82 054-705-3602"],
      ["call", "Phone", "Call us to discuss your Ferro Tungsten needs today.", "+82 054-705-3601"],
      ["location_on", "Office", "Visit our facility to see operations firsthand.", "Gyeongju-si, Gyeongsangbuk-do, Korea"],
    ];
    return (
      <section className="scheme-2" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 560, marginBottom: 56 }}>
            <Eyebrow style={{ color: "var(--color-deep-sea-green)", marginBottom: 12 }}>Connect</Eyebrow>
            <h2 style={{ marginBottom: 20 }}>Ready to partner with us?</h2>
            <p style={{ fontSize: "var(--text-medium)" }}>For inquiries, please do not hesitate to contact us.</p>
          </div>
          <div className="methods" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {methods.map(([ic, h, d, link], i) => (
              <div key={i}>
                <span className="material-symbols-outlined" style={{ fontSize: 44, color: "var(--color-deep-sea-green)" }}>{ic}</span>
                <h4 style={{ margin: "20px 0 12px", fontWeight: 700 }}>{h}</h4>
                <p style={{ marginBottom: 16, fontSize: "var(--text-regular)" }}>{d}</p>
                <a href="#" style={{ textDecoration: "underline", textUnderlineOffset: 4, fontSize: "var(--text-regular)" }}>{link}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function HomePage({ onNav }) {
    return (
      <main>
        <Hero onNav={onNav} />
        <Competitiveness />
        <Stats />
        <ProcessTimeline />
        <HomeContact />
      </main>
    );
  }

  window.WSTKHome = { HomePage };
})();
