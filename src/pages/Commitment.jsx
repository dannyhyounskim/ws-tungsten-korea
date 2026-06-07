import React from "react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { Accordion } from "../components/Accordion.jsx";

const IMG = "/assets/images/";
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

export function Commitment() {
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
      <PageHeader
        title="Our commitment to quality & responsibility"
        intro="An overview of W.S. Tungsten Korea's dedication to high standards in metallurgical manufacturing."
      />
      <section className="scheme-2" style={SECTION}>
        <div style={WRAP}>
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
      <section className="scheme-3" style={SECTION}>
        <div style={WRAP}>
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
