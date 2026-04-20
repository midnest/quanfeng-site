"use client";

import { useState, useEffect } from "react";
import { withBasePath } from "@/quanfeng/lib/base-path";
import { locales, translations, type Locale } from "@/quanfeng/lib/i18n";

const heroSlides = [
  { image: "/images/quanfeng/hero/slide-1.jpg", alt: "工厂实景" },
  { image: "/images/quanfeng/hero/slide-2.jpg", alt: "生产线" },
  { image: "/images/quanfeng/hero/slide-3.jpg", alt: "产品展示" },
];

export function SimplePage({ initialLocale = "zh" }: { initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[locale];
  const isRTL = locale === "ar";

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-locked");
    } else {
      document.body.classList.remove("menu-locked");
    }
    return () => {
      document.body.classList.remove("menu-locked");
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "company", label: t.nav.company },
    { id: "products", label: t.nav.products },
    { id: "technology", label: t.nav.technology },
    { id: "catalog", label: t.nav.catalog },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero slideshow auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`simple-page ${isRTL ? "rtl" : ""}`}>
      {/* Header */}
      <header className={`simple-header ${isScrolled ? "scrolled" : ""} ${mobileMenuOpen ? "menu-open" : ""}`}>
        <div className="simple-header-inner">
          <div className="simple-logo">
            <img
              src={withBasePath(
                locale === "zh" ? "/images/quanfeng/cn/logo.png" : "/images/quanfeng/logo.png"
              )}
              alt={t.companyName}
              className="simple-header-logo-img"
            />
          </div>
          <nav className="simple-nav">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="simple-lang-wrapper">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="simple-lang-select"
            >
              {locales.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.name}
                </option>
              ))}
            </select>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="simple-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>
        {/* Mobile Navigation */}
        <div className={`simple-mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="simple-mobile-nav-item"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section className="simple-hero-v2">
        {/* Hero Background Slideshow */}
        <div className="simple-hero-slideshow">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`simple-hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{
                backgroundImage: `url(${withBasePath(slide.image)})`,
              }}
            />
          ))}
          <div className="simple-hero-overlay" />
        </div>
        {/* Hero Content */}
        <div className="simple-hero-content-v2">
          <div className="simple-hero-brand">
            <img
              src={withBasePath(
                locale === "zh" ? "/images/quanfeng/cn/logo.png" : "/images/quanfeng/logo.png"
              )}
              alt={t.companyName}
              className="simple-hero-logo-full"
            />
          </div>
          <p>{t.hero.subtitle}</p>
          <div className="simple-hero-buttons">
            <button
              onClick={() => setShowPdfModal(true)}
              className="simple-btn-primary"
            >
              {t.hero.cta}
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="simple-btn-outline"
            >
              {t.nav.products}
            </button>
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="simple-hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`simple-hero-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="simple-section simple-section-alt">
        <div className="simple-container">
          <div className="simple-section-header">
            <span className="simple-section-tag">{t.company.founded}</span>
            <h2>{t.company.title}</h2>
          </div>
          <div className="simple-company-logo-showcase">
            <img
              src={withBasePath(
                locale === "zh" ? "/images/quanfeng/cn/logo.png" : "/images/quanfeng/logo.png"
              )}
              alt={t.companyName}
              className="simple-company-main-logo"
            />
            <p className="simple-company-honors">{(t.company as any).honors}</p>
          </div>
          <div className="simple-company-grid">
            <div className="simple-company-content">
              <p className="simple-company-desc">{t.company.description}</p>
              <p className="simple-company-desc">{(t.company as any).description2}</p>
              <div className="simple-company-philosophy">
                <p>📋 {(t.company as any).philosophy}</p>
                <p>💪 {(t.company as any).spirit}</p>
              </div>
              <div className="simple-stats">
                {t.company.stats.map((stat, i) => (
                  <div key={i} className="simple-stat-item">
                    <div className="simple-stat-value">{stat.value}</div>
                    <div className="simple-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="simple-company-image">
              <img
                src={withBasePath(
                  locale === "zh"
                    ? "/images/quanfeng/cn/about/video-cover.jpg"
                    : "/images/quanfeng/about/video-cover.jpg"
                )}
                alt={t.company.title}
              />
            </div>
          </div>
          {/* Company History */}
          {(t.company as any).history && (
            <div className="simple-history">
              <h3>🏆 发展历程</h3>
              <div className="simple-timeline">
                {(t.company as any).history.map((item: any, i: number) => (
                  <div key={i} className="simple-timeline-item">
                    <span className="simple-timeline-year">{item.year}</span>
                    <span className="simple-timeline-event">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="simple-section">
        <div className="simple-container">
          <div className="simple-section-header">
            <h2>{t.products.title}</h2>
            <p className="simple-section-subtitle">{(t.products as any).subtitle}</p>
          </div>
          <div className="simple-products-grid-v2">
            {t.products.items.map((product: any, i) => (
              <div key={i} className="simple-product-card-v2">
                <div className="simple-product-image-v2">
                  <img
                    src={withBasePath(product.image || `/images/quanfeng/${locale === "zh" ? "cn/" : ""}services/icon-${i + 1}.jpg`)}
                    alt={product.name}
                  />
                </div>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <p className="simple-product-specs">{product.specs}</p>
              </div>
            ))}
          </div>
          {/* Applications */}
          {(t.products as any).applications && (
            <div className="simple-applications">
              <h3>{(t.products as any).applications.title}</h3>
              <p className="simple-applications-desc">{(t.products as any).applications.description}</p>
              <div className="simple-applications-grid">
                {(t.products as any).applications.items.map((app: any, i: number) => (
                  <div key={i} className="simple-application-card">
                    <h4>{app.name}</h4>
                    <p>{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Product Table */}
          {(t.products as any).productTable && (
            <div className="simple-product-table-section">
              <h3>{(t.products as any).productTable.title}</h3>
              <p className="simple-product-table-desc">{(t.products as any).productTable.description}</p>
              <div className="simple-product-table-wrapper">
                <table className="simple-product-table">
                  <thead>
                    <tr>
                      {(t.products as any).productTable.headers.map((header: string, i: number) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(t.products as any).productTable.products.map((product: any, i: number) => (
                      <tr key={i}>
                        <td className="model-cell">{product.model}</td>
                        <td>{product.voltage}</td>
                        <td>{product.frequency}</td>
                        <td>{product.current}</td>
                        <td>{product.power}</td>
                        <td>{product.speed}</td>
                        <td>{product.airflow}</td>
                        <td>{product.noise}</td>
                        <td>{product.bearing}</td>
                        <td>{product.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="simple-product-table-notes">
                {(t.products as any).productTable.notes.map((note: string, i: number) => (
                  <p key={i}>{note}</p>
                ))}
              </div>
            </div>
          )}
          <div className="simple-center">
            <button
              onClick={() => setShowPdfModal(true)}
              className="simple-btn-primary"
            >
              {t.products.viewCatalog}
            </button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="simple-section simple-section-tech">
        <div className="simple-container">
          <div className="simple-section-header">
            <h2>{t.technology.title}</h2>
            <p className="simple-section-subtitle">{t.technology.subtitle}</p>
          </div>
          
          {/* Certifications List */}
          {(t.technology as any).certifications && (
            <div className="simple-cert-list-section">
              <h3 className="simple-cert-section-title">
                <span className="simple-cert-title-icon">📜</span>
                {(t.technology as any).certifications.title}
              </h3>
              <div className="simple-cert-cards">
                {(t.technology as any).certifications.items.map((cert: any, i: number) => (
                  <div key={i} className="simple-cert-card">
                    <div className="simple-cert-card-header">
                      <span className="simple-cert-card-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="simple-cert-card-name">{cert.name}</span>
                    </div>
                    <p className="simple-cert-card-desc">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Honors Section */}
          {(t.technology as any).honors && (
            <div className="simple-honors-section">
              <h3 className="simple-honors-title">
                <span className="simple-honors-icon">🏆</span>
                {(t.technology as any).honors.title}
              </h3>
              <div className="simple-honors-tags">
                {(t.technology as any).honors.items.map((honor: string, i: number) => (
                  <span key={i} className="simple-honor-tag">{honor}</span>
                ))}
              </div>
            </div>
          )}

          {/* IPR Section */}
          {(t.technology as any).ipr && (
            <div className="simple-ipr-section-v2">
              <h3>{(t.technology as any).ipr.title}</h3>
              <p>{(t.technology as any).ipr.description}</p>
              <div className="simple-ipr-stats-v2">
                <div className="simple-ipr-item-v2">
                  <div className="simple-ipr-icon">📋</div>
                  <span className="simple-ipr-number-v2">{(t.technology as any).ipr.patents.match(/\d+/)?.[0] || '34'}</span>
                  <span className="simple-ipr-label-v2">{(t.technology as any).ipr.patents.replace(/\d+/, '').trim()}</span>
                </div>
                <div className="simple-ipr-item-v2">
                  <div className="simple-ipr-icon">™️</div>
                  <span className="simple-ipr-number-v2">{(t.technology as any).ipr.trademarks.match(/\d+/)?.[0] || '10'}</span>
                  <span className="simple-ipr-label-v2">{(t.technology as any).ipr.trademarks.replace(/\d+/, '').trim()}</span>
                </div>
                <div className="simple-ipr-item-v2">
                  <div className="simple-ipr-icon">📜</div>
                  <span className="simple-ipr-number-v2">{(t.technology as any).ipr.certificates.match(/\d+/)?.[0] || '19'}</span>
                  <span className="simple-ipr-label-v2">{(t.technology as any).ipr.certificates.replace(/\d+/, '').trim()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="simple-tech-features">
            {t.technology.features.map((feature, i) => (
              <div key={i} className="simple-tech-feature-card">
                <div className="simple-tech-feature-icon">
                  <span>{["👨‍💻", "🔬", "🏭", "🌍"][i]}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="simple-section simple-section-highlight">
        <div className="simple-container">
          <div className="simple-catalog-content">
            <h2>{t.catalog.title}</h2>
            <p>{t.catalog.subtitle}</p>
            <div className="simple-catalog-buttons">
              <a
                href={withBasePath("/products-catalog.pdf")}
                download
                className="simple-btn-primary"
              >
                📥 {t.catalog.download}
              </a>
              <button
                onClick={() => setShowPdfModal(true)}
                className="simple-btn-outline-light"
              >
                👁️ {t.catalog.view}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="simple-footer">
        <div className="simple-container">
          <div className="simple-footer-content">
            <div className="simple-footer-brand">
              <img
                src={withBasePath(
                  locale === "zh"
                    ? "/images/quanfeng/cn/logo.png"
                    : "/images/quanfeng/logo.png"
                )}
                alt={t.companyName}
                className="simple-footer-logo"
              />
              <p className="simple-footer-tagline">{t.companyName}</p>
              <p className="simple-footer-honors">{(t.company as any).footerHonors}</p>
            </div>
            <div className="simple-footer-contact">
              <h4>{t.footer.contact}</h4>
              <p>{t.footer.address}</p>
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
            </div>
          </div>
          <div className="simple-footer-bottom">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* PDF Modal */}
      {showPdfModal && (
        <div className="simple-modal" onClick={() => setShowPdfModal(false)}>
          <div className="simple-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="simple-modal-header">
              <h3>{t.catalog.title}</h3>
              <button
                className="simple-modal-close"
                onClick={() => setShowPdfModal(false)}
              >
                ×
              </button>
            </div>
            <div className="simple-modal-body">
              <iframe
                src={withBasePath("/products-catalog.pdf")}
                title={t.catalog.title}
                className="simple-pdf-viewer"
              />
            </div>
            <div className="simple-modal-footer">
              <a
                href={withBasePath("/products-catalog.pdf")}
                download
                className="simple-btn-primary"
              >
                📥 {t.catalog.download}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
