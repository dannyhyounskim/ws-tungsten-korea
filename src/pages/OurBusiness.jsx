import React from "react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { InquiryForm } from "../components/InquiryForm.jsx";

const IMG = import.meta.env.BASE_URL + "assets/images/";
const SECTION = { paddingInline: "5%", paddingBlock: "clamp(56px,8vw,112px)" };
const WRAP = { maxWidth: 1280, margin: "0 auto" };

function PageHeader({ title, intro }) {
  return (
    <section className="scheme-1" style={SECTION}>
      <div style={{ maxWidth: 768, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>{title}</h1>
        <p style={{ fontSize: "var(--text-medium)", color: "var(--color-white-60)" }}>{intro}</p>
      </div>
    </section>
  );
}

function BusinessCTA() {
  return (
    <section className="scheme-1" style={SECTION}>
      <div style={WRAP}>
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

export function OurBusiness() {
  const items = [
    ["01", "AUTOMATION", "To maximize productivity, 85% of the smelter is automated. Automation handles hazardous-area tasks to protect workers and create an efficient operating environment."],
    ["02", "AI-POWERED QUALITY CONTROL", "A real-time AI quality-analysis system manages quality, reduces raw-material usage, and maximizes production efficiency through data-driven optimization."],
    ["03", "ESG COMPLIANCE", "Eco-friendly processes exclude harmful substances, minimize carbon emissions, and operate recycling systems — with ethical, RMI-compliant supply-chain management."],
    ["04", "CUSTOMIZED PRODUCTION", "Customized ferro tungsten tailored to your requirements, with fast response, flexible low- and high-volume production, and R&D cooperation."],
  ];
  return (
    <main>
      <PageHeader
        title="Our Business"
        intro="WSTK supplies ferro tungsten to customer specification using an automated, environmentally friendly production line."
      />
      <section className="scheme-2" style={SECTION}>
        <div style={WRAP}>
          <div className="biz-list" style={{ display: "grid", gap: 80 }}>
            {items.map(([n, t, d]) => (
              <div key={n} className="biz-row" style={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: 56, alignItems: "start" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: "clamp(72px,11vw,160px)", lineHeight: 0.85, color: "var(--color-neutral-darkest)" }}>{n}</div>
                <div>
                  <div style={{ height: 2, background: "var(--color-neutral-lighter)", marginBottom: 28 }}>
                    <div style={{ height: 2, width: "100%", background: "var(--color-neutral-darkest)" }} />
                  </div>
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
