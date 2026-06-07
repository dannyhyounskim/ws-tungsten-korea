/* W.S. Tungsten — Our Business / Commitment / Contact page bodies. */
(function () {
  const NS = window.WSTungstenDesignSystem_3ea155;
  const { Button, Card, Eyebrow, Accordion, Input, Textarea, Checkbox, Label } = NS;
  const IMG = "../../assets/images/";

  function PageHeader({ title, intro }) {
    return (
      <section className="scheme-1" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
        <div style={{ maxWidth: 768, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ marginBottom: 20 }}>{title}</h1>
          <p style={{ fontSize: "var(--text-medium)", color: "var(--color-white-60)" }}>{intro}</p>
        </div>
      </section>
    );
  }

  /* ---- Our Business ---- */
  function OurBusiness() {
    const items = [
      ["01", "AUTOMATION", "To maximize productivity, 85% of the smelter is automated. Automation handles hazardous-area tasks to protect workers and create an efficient operating environment."],
      ["02", "AI-POWERED QUALITY CONTROL", "A real-time AI quality-analysis system manages quality, reduces raw-material usage, and maximizes production efficiency through data-driven optimization."],
      ["03", "ESG COMPLIANCE", "Eco-friendly processes exclude harmful substances, minimize carbon emissions, and operate recycling systems — with ethical, RMI-compliant supply-chain management."],
      ["04", "CUSTOMIZED PRODUCTION", "Customized ferro tungsten tailored to your requirements, with fast response, flexible low- and high-volume production, and R&D cooperation."],
    ];
    return (
      <main>
        <PageHeader title="Our Business" intro="WSTK supplies ferro tungsten to customer specification using an automated, environmentally friendly production line." />
        <section className="scheme-2" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="biz-list" style={{ display: "grid", gap: 80 }}>
              {items.map(([n, t, d]) => (
                <div key={n} className="biz-row" style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: 56, alignItems: "start" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: "clamp(72px,11vw,160px)", lineHeight: 0.85, color: "var(--color-neutral-darkest)" }}>{n}</div>
                  <div>
                    <div style={{ height: 2, background: "var(--color-neutral-lighter)", marginBottom: 28 }}><div style={{ height: 2, width: "100%", background: "var(--color-neutral-darkest)" }} /></div>
                    <h2 style={{ marginBottom: 20 }}>{t}</h2>
                    <p style={{ fontSize: "var(--text-medium)", maxWidth: 640 }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <BusinessCTA />
      </main>
    );
  }

  function BusinessCTA() {
    return (
      <section className="scheme-1" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <div>
              <Eyebrow style={{ color: "var(--color-web-orange)", marginBottom: 16 }}>Locations</Eyebrow>
              <h2 style={{ marginBottom: 20 }}>Ready to work with us</h2>
              <p style={{ color: "var(--color-white-60)", fontSize: "var(--text-medium)", marginBottom: 32 }}>
                Contact W.S. Tungsten Korea today to discuss your ferro tungsten needs and partnership opportunities.
              </p>
              <InquiryForm dark />
            </div>
            <img src={IMG + "home-stats-section-2.jpg"} alt="Facility" style={{ width: "100%", height: "100%", minHeight: 420, objectFit: "cover" }} />
          </div>
        </div>
      </section>
    );
  }

  /* ---- Commitment ---- */
  function Commitment() {
    const faqs = [
      ["Commitment", "W.S. Tungsten Korea is committed to responsible sourcing of minerals, particularly tungsten (W), ensuring our procurement does not contribute to human-rights abuses, conflict, or environmental harm. We align with the OECD Due Diligence Guidance."],
      ["Scope", "This policy applies to all employees, suppliers, contractors, and business partners involved in the sourcing, procurement, and handling of raw materials used in our ferro-tungsten production."],
      ["Our Principles", "Avoid minerals that finance armed groups; respect human rights to international standards; promote transparency and traceability; and engage suppliers to ensure responsible sourcing."],
      ["Due Diligence Framework", "Identify and assess supply-chain risks, require origin disclosure, maintain procurement records, conduct periodic risk assessments, and take corrective action when risks are identified."],
      ["Supplier Requirements", "Suppliers must comply with this policy, provide accurate origin information, cooperate with due-diligence requests, and support responsible-sourcing initiatives."],
      ["Transparency & Disclosure", "This policy is publicly available on our website. We are committed to continuous improvement and transparent communication with stakeholders."],
    ];
    return (
      <main>
        <PageHeader title="Our commitment to quality & responsibility" intro="An overview of W.S. Tungsten Korea's dedication to high standards in metallurgical manufacturing." />
        <section className="scheme-2" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
              <div>
                <Eyebrow style={{ color: "var(--color-deep-sea-green)", marginBottom: 16 }}>Sustainability</Eyebrow>
                <h2 style={{ marginBottom: 20 }}>Built for a sustainable supply chain</h2>
                <p style={{ fontSize: "var(--text-medium)" }}>
                  We pursue sustainable corporate management through ethical supply-chain practices, energy-saving
                  equipment, and recycling systems — minimizing carbon emissions in compliance with RMI standards.
                </p>
              </div>
              <img src={IMG + "home-stats-section-4.jpg"} alt="Sustainable operations" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
            </div>
          </div>
        </section>
        <section className="scheme-3" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr", gap: 56, alignItems: "start" }}>
              <div>
                <h2 style={{ marginBottom: 20 }}>Responsible Mineral Sourcing Policy</h2>
                <p style={{ fontSize: "var(--text-medium)" }}>
                  W.S. Tungsten Korea is committed to continuous improvement, responsible sourcing, and transparent
                  communication with stakeholders across the global tungsten supply chain.
                </p>
              </div>
              <Accordion type="multiple" defaultOpen={[0]} items={faqs.map(([q, a]) => ({ q, a }))} />
            </div>
          </div>
        </section>
      </main>
    );
  }

  /* ---- Inquiry form (shared) ---- */
  function InquiryForm({ dark }) {
    const [agree, setAgree] = React.useState(false);
    return (
      <form style={{ display: "grid", gap: 20, maxWidth: 460 }} onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: "grid", gap: 8 }}><Label htmlFor="cn">Name</Label><Input id="cn" placeholder="Your name" /></div>
        <div style={{ display: "grid", gap: 8 }}><Label htmlFor="ce">Email</Label><Input id="ce" type="email" placeholder="you@company.com" /></div>
        <div style={{ display: "grid", gap: 8 }}><Label htmlFor="cm">Message</Label><Textarea id="cm" placeholder="Tell us about your project" style={{ minHeight: 140 }} /></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Checkbox id="ca" checked={agree} onChange={setAgree} />
          <Label htmlFor="ca" style={{ cursor: "pointer" }}>I agree to the terms</Label>
        </div>
        <div><Button variant={dark ? "light" : "primary"}>Send</Button></div>
      </form>
    );
  }

  /* ---- Contact Us ---- */
  function ContactUs() {
    const details = [
      ["mail", "Email", "info@wstk.kr"],
      ["call", "Phone", "+82 054-705-3601"],
      ["print", "Fax", "+82 054-705-3602"],
      ["location_on", "Office", "116-24, Cheonbuksandan-ro 2-gil, Cheonbuk-myeon, Gyeongju-si, Gyeongsangbuk-do, Republic of Korea"],
    ];
    return (
      <main>
        <PageHeader title="Contact Us" intro="Reach out to W.S. Tungsten Korea for inquiries or information. Available in English, Korean, and Japanese." />
        <section className="scheme-2" style={{ paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
              <div>
                <Eyebrow style={{ color: "var(--color-deep-sea-green)", marginBottom: 16 }}>Message</Eyebrow>
                <h2 style={{ marginBottom: 20 }}>Send inquiry</h2>
                <p style={{ fontSize: "var(--text-medium)", marginBottom: 32 }}>Tell us about your project.</p>
                <InquiryForm />
              </div>
              <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                {details.map(([ic, h, v]) => (
                  <div key={h}>
                    <span className="material-symbols-outlined" style={{ fontSize: 34, color: "var(--color-deep-sea-green)" }}>{ic}</span>
                    <h6 style={{ fontWeight: 700, margin: "14px 0 6px" }}>{h}</h6>
                    <p style={{ fontSize: "var(--text-regular)" }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  window.WSTKPages = { OurBusiness, Commitment, ContactUs };
})();
