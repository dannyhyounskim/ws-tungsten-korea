/* W.S. Tungsten — website app shell. Simple state-routed SPA tying the
 * navbar, page bodies, and footer together. */
(function () {
  const NS = window.WSTungstenDesignSystem_3ea155;
  const { Navbar, Footer } = NS;
  const { HomePage } = window.WSTKHome;
  const { OurBusiness, Commitment, ContactUs } = window.WSTKPages;
  const LOGO = "../../assets/logo/logo-light.png";

  const ROUTES = {
    home: "#home",
    business: "#business",
    commitment: "#commitment",
    contact: "#contact",
  };

  function App() {
    const [route, setRoute] = React.useState("home");
    const go = (r) => {
      setRoute(r);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const links = [
      { label: "Our Business", href: ROUTES.business, route: "business" },
      { label: "Commitment", href: ROUTES.commitment, route: "commitment" },
      { label: "Contact", href: ROUTES.contact, route: "contact" },
    ];
    const onLinkClick = (e, l) => { e.preventDefault(); go(l.route); };

    return (
      <div>
        <Navbar
          logoSrc={LOGO}
          activeHref={ROUTES[route]}
          links={links.map((l) => ({ label: l.label, href: l.href, onClick: (e) => onLinkClick(e, l) }))}
        />
        {route === "home" && <HomePage onNav={go} />}
        {route === "business" && <OurBusiness />}
        {route === "commitment" && <Commitment />}
        {route === "contact" && <ContactUs />}
        <Footer
          logoSrc={LOGO}
          links={[
            { label: "Our Business", href: ROUTES.business, onClick: (e) => { e.preventDefault(); go("business"); } },
            { label: "Commitment", href: ROUTES.commitment, onClick: (e) => { e.preventDefault(); go("commitment"); } },
            { label: "Contact Us", href: ROUTES.contact, onClick: (e) => { e.preventDefault(); go("contact"); } },
            { label: "Home", href: ROUTES.home, onClick: (e) => { e.preventDefault(); go("home"); } },
          ]}
        />
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("app")).render(<App />);
})();
