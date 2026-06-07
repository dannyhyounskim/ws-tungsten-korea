import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { OurBusiness } from "./pages/OurBusiness.jsx";
import { Commitment } from "./pages/Commitment.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";

/* Smooth-scroll to top on every route change (matches the prototype's
 * navigation behavior). */
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-business" element={<OurBusiness />} />
        <Route path="/commitment" element={<Commitment />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
