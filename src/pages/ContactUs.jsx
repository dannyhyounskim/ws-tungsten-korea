import React from "react";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { Icon } from "../components/Icon.jsx";
import { InquiryForm } from "../components/InquiryForm.jsx";

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

export function ContactUs() {
  const details = [
    ["mail", "Email", "info@wstk.kr"],
    ["call", "Phone", "+82 054-705-3601"],
    ["print", "Fax", "+82 054-705-3602"],
    ["location_on", "Office", "116-24, Cheonbuksandan-ro 2-gil, Cheonbuk-myeon, Gyeongju-si, Gyeongsangbuk-do, Republic of Korea"],
  ];
  return (
    <main>
      <PageHeader
        title="Contact Us"
        intro="Reach out to W.S. Tungsten Korea for inquiries or information. Available in English, Korean, and Japanese."
      />
      <section className="scheme-2" style={SECTION}>
        <div style={WRAP}>
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
                  <Icon name={ic} size={34} color="var(--color-deep-sea-green)" />
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
