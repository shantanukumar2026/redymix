import { useState } from 'react';
import './index.css';
import Logo from './components/Logo';
import { translations } from './translations';

function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [activeMegaMenu, setActiveMegaMenu] = useState<'solutions' | 'industries' | 'products' | null>(null);

  const t = translations[lang];

  return (
    <>
      <header>
        {/* Top Info Strip */}
        <div className="top-info-strip">
          <div className="top-info-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
            {t.proudText}
          </div>
          <div className="top-info-right">
            <a href="#facebook" style={{ marginRight: '12px' }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            <a href="#linkedin" style={{ marginRight: '12px' }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
            <a href="#youtube"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></a>
          </div>
        </div>

        {/* Main White Header Row */}
        <div className="main-header-row">
          <a href="#" className="logo-container">
            <Logo className="app-logo header-logo" />
          </a>

          <div className="contact-widgets">
            <div className="widget-item">
              <div className="widget-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <div className="widget-text">
                <span className="widget-label">{t.callUsToday}</span>
                <span className="widget-val">{t.phoneNo}</span>
              </div>
            </div>

            <div className="widget-item">
              <div className="widget-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div className="widget-text">
                <span className="widget-label">{t.hoursTitle}</span>
                <span className="widget-val">{t.hoursVal}</span>
              </div>
            </div>

            <div className="widget-item">
              <div className="widget-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="widget-text">
                <span className="widget-label">{t.locationsTitle}</span>
                <span className="widget-val">{t.locationsVal}</span>
              </div>
            </div>

            <a href="#contact" className="red-contact-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
              {t.contactUsBtn}
            </a>
          </div>
        </div>

        {/* Sub Navigation Bar */}
        <div className="sub-nav-bar">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <a href="#" className="home-nav-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
            </a>

            <nav className="sub-nav" onMouseLeave={() => setActiveMegaMenu(null)}>
              <button
                onMouseEnter={() => setActiveMegaMenu('solutions')}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'solutions' ? null : 'solutions')}
              >
                {t.history}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <button
                onMouseEnter={() => setActiveMegaMenu('industries')}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'industries' ? null : 'industries')}
              >
                {t.ourValues}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <button
                onMouseEnter={() => setActiveMegaMenu('products')}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'products' ? null : 'products')}
              >
                {t.locations}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            </nav>
          </div>

          <div className="globe-select-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'en' | 'es')}
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>

          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        <div
          className={`mega-menu-container ${activeMegaMenu ? 'active' : ''}`}
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          {activeMegaMenu === 'solutions' && (
            <>
              <div className="mega-menu-columns">
                <div className="mega-column">
                  <span className="mega-column-title">Ready Mix Concrete</span>
                  <div className="mega-column-links">
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Standard Mixes
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      High Performance Concrete
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Decorative & Stamped
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Specialty Mix Designs
                    </a>
                  </div>
                </div>
                <div className="mega-column">
                  <span className="mega-column-title">Precast Solutions</span>
                  <div className="mega-column-links">
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Retaining Walls
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Concrete Pipes & Culverts
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Manholes & Catch Basins
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Custom Precast Elements
                    </a>
                  </div>
                </div>
                <div className="mega-column">
                  <span className="mega-column-title">Precision Logistics</span>
                  <div className="mega-column-links">
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Automated Batch Control
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Real-Time GPS Fleets
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      On-Site Material Labs
                    </a>
                  </div>
                </div>
              </div>
              <div className="mega-featured-card">
                <span className="mega-featured-tag">Featured Tech</span>
                <h4 className="mega-featured-title">AI Mix Chemist™</h4>
                <p className="mega-featured-desc">Our intelligent batch models analyze humidity and load limits to custom-design optimal strength mixes within minutes.</p>
                <a href="#innovation" className="mega-featured-btn" onClick={() => setActiveMegaMenu(null)}>Read Innovation Story →</a>
              </div>
            </>
          )}
          {activeMegaMenu === 'industries' && (
            <>
              <div className="mega-menu-columns">
                <div className="mega-column">
                  <span className="mega-column-title">Infrastructure</span>
                  <div className="mega-column-links">
                    <a href="#industries" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Highway Pavements
                    </a>
                    <a href="#industries" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Bridge Support Columns
                    </a>
                    <a href="#industries" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Runways & Airport Aprons
                    </a>
                  </div>
                </div>
                <div className="mega-column">
                  <span className="mega-column-title">Commercial Blocks</span>
                  <div className="mega-column-links">
                    <a href="#industries" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Skyscraper Basements
                    </a>
                    <a href="#industries" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Parking Garage Structures
                    </a>
                    <a href="#industries" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Multi-Tenant Office Parks
                    </a>
                  </div>
                </div>
                <div className="mega-column">
                  <span className="mega-column-title">Industrial Facilities</span>
                  <div className="mega-column-links">
                    <a href="#industries" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Heavy Machinery Slabs
                    </a>
                    <a href="#industries" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Warehouse Superflat Floors
                    </a>
                    <a href="#industries" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Storage Silos & Containments
                    </a>
                  </div>
                </div>
              </div>
              <div className="mega-featured-card">
                <span className="mega-featured-tag">Case Study</span>
                <h4 className="mega-featured-title">The Austin Grid</h4>
                <p className="mega-featured-desc">How supplying 45,000 cubic yards under continuous city traffic restrictions shaped the landmark Convention Center narrative.</p>
                <a href="#projects" className="mega-featured-btn" onClick={() => setActiveMegaMenu(null)}>Read Project Log →</a>
              </div>
            </>
          )}
          {activeMegaMenu === 'products' && (
            <>
              <div className="mega-menu-columns">
                <div className="mega-column">
                  <span className="mega-column-title">Specialty Concrete</span>
                  <div className="mega-column-links">
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Self-Consolidating Concrete
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Fiber Reinforced Concrete
                    </a>
                    <a href="#solutions" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Low-Carbon ecoMix™
                    </a>
                  </div>
                </div>
                <div className="mega-column">
                  <span className="mega-column-title">Locations & Distribution</span>
                  <div className="mega-column-links">
                    <a href="#contact" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Texas Distribution
                    </a>
                    <a href="#contact" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Midwest Dispatch Hubs
                    </a>
                    <a href="#contact" className="mega-column-link" onClick={() => setActiveMegaMenu(null)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Southern Plant Network
                    </a>
                  </div>
                </div>
              </div>
              <div className="mega-featured-card">
                <span className="mega-featured-tag">Sustainability</span>
                <h4 className="mega-featured-title">ecoMix™ lowCO2</h4>
                <p className="mega-featured-desc">Our green-optimized mixes replace clinker with supplementary materials, cutting carbon impact by 40%.</p>
                <a href="#sustainability" className="mega-featured-btn" onClick={() => setActiveMegaMenu(null)}>See Environmental Commitments →</a>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Hero Section with Full-Screen Background Video */}
      <section className="hero-section">
        <video
          src="/images/some_how_above_is_like_fake_i.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
          poster="/images/Hero_img.png"
        />
        <div className="hero-video-overlay" />

        <div className="hero-content">
          <div className="badge">
            <span className="badge-text">STRONGER FOUNDATIONS. BETTER FUTURES.</span>
          </div>
          <h1 className="hero-title">
            {t.heroTitlePart1} <span>{t.heroTitlePart2}</span> {t.heroTitlePart3}
          </h1>
          <p className="hero-sub">
            {t.heroSub}
          </p>
          <div className="hero-actions">
            <a href="#solutions" className="btn-primary">
              {t.viewProjects}
            </a>
            <a href="#contact" className="btn-secondary">
              {t.requestConsultation}
            </a>
            <a href="#who-we-are" className="btn-secondary" style={{ border: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-light)" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              {t.watchStory}
            </a>
          </div>
        </div>
      </section>

      {/* Overlapping Bottom Stats and Search Bar */}
      <div className="bottom-stats-search-bar">
        <div className="bottom-stat-item">
          <div className="bottom-stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
          </div>
          <div className="bottom-stat-text">
            <span className="bottom-stat-title">{t.products}</span>
            <span className="bottom-stat-sub">Smart solutions for tomorrow</span>
          </div>
        </div>

        <div className="bottom-stat-item">
          <div className="bottom-stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20" /><path d="M12 2v20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          </div>
          <div className="bottom-stat-text">
            <span className="bottom-stat-title">{t.capabilities}</span>
            <span className="bottom-stat-sub">Building a greener future</span>
          </div>
        </div>

        <div className="bottom-stat-item">
          <div className="bottom-stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M21 12H3" /><path d="M12 3v18" /></svg>
          </div>
          <div className="bottom-stat-text">
            <span className="bottom-stat-title">{t.industries}</span>
            <span className="bottom-stat-sub">Delivering excellence everywhere</span>
          </div>
        </div>

        <div className="bottom-stat-item">
          <div className="bottom-stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          </div>
          <div className="bottom-stat-text">
            <span className="bottom-stat-title">{t.quality}</span>
            <span className="bottom-stat-sub">Trusted. Local. Customer focused.</span>
          </div>
        </div>

        <div className="bottom-stat-item">
          <div className="bottom-stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
          </div>
          <div className="bottom-stat-text">
            <span className="bottom-stat-title">{t.company}</span>
            <span className="bottom-stat-sub">Build your future with us</span>
          </div>
        </div>

        <div className="bottom-search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <input type="text" placeholder={t.searchPlaceholder} />
        </div>
      </div>

      {/* Who We Are Section */}
      <section id="who-we-are" className="who-we-are-section">
        <div className="who-we-are-content">
          <div className="badge" style={{ background: 'rgba(76, 175, 80, 0.08)' }}>
            <span className="badge-text" style={{ color: 'var(--primary)' }}>{t.whoWeAre}</span>
          </div>
          <h2>{t.whoWeAreTitle}</h2>
          <p>{t.whoWeAreDesc}</p>
          <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', width: 'fit-content' }}>
            {t.learnMoreUs} <span style={{ marginLeft: '8px' }}>→</span>
          </a>
        </div>
        <div className="who-we-are-image">
          <img src="/images/Hero_img.png" alt="Summit Concrete Solutions Plant" />
        </div>
      </section>

      {/* Our Solutions Section */}
      <section id="solutions" className="solutions-section">
        <div className="solutions-header-container">
          <span className="solutions-subtitle-tag">BUILT ON STRENGTH. ENGINEERED TO LAST.</span>
          <h2 className="solutions-main-title">Engineered Concrete. Built for Life.</h2>
          <p className="solutions-desc-text">
            Every project has a purpose. Discover how our custom mix designs and factory-controlled casting shape structural landmarks across the USA.
          </p>
        </div>

        <div className="solutions-container">
          {/* Card 1 */}
          <div className="solution-card">
            <div className="solution-card-img-wrapper">
              <img src="/images/readymixconcreteplantaerial.jpg" alt="Flowing Foundations" />
              <div className="solution-card-icon-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" /><path d="M16 12h4l2 2v4h-6v-6z" /><circle cx="7.5" cy="18.5" r="2.5" /><circle cx="16.5" cy="18.5" r="2.5" /></svg>
              </div>
            </div>
            <div className="solution-card-content">
              <span className="solution-card-category">Ready Mix Concrete</span>
              <h3 className="solution-card-title">Flowing Foundations</h3>
              <p className="solution-card-desc">
                Consistent, molecularly optimized liquid stone delivered on time to build the bones of the city.
              </p>
              <a href="#contact" className="solution-learn-more">
                Learn More <span style={{ marginLeft: '6px' }}>→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="solution-card">
            <div className="solution-card-img-wrapper">
              <img src="/images/istockphoto-1313022650-1024x1024.jpg" alt="Engineered Fortresses" />
              <div className="solution-card-icon-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
              </div>
            </div>
            <div className="solution-card-content">
              <span className="solution-card-category">Precast Solutions</span>
              <h3 className="solution-card-title">Engineered Fortresses</h3>
              <p className="solution-card-desc">
                Precision-casted structural panels and columns built off-site to accelerate complex construction grids.
              </p>
              <a href="#contact" className="solution-learn-more">
                Learn More <span style={{ marginLeft: '6px' }}>→</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="solution-card">
            <div className="solution-card-img-wrapper">
              <img src="/images/istockphoto-1313022678-1024x1024.jpg" alt="Chronicles of Precision" />
              <div className="solution-card-icon-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
              </div>
            </div>
            <div className="solution-card-content">
              <span className="solution-card-category">Engineering Services</span>
              <h3 className="solution-card-title">Chronicles of Precision</h3>
              <p className="solution-card-desc">
                Expert mix design formulation and logistics management operating in absolute harmony.
              </p>
              <a href="#contact" className="solution-learn-more">
                Learn More <span style={{ marginLeft: '6px' }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Metrics Strip */}
      <div className="operations-strip">
        <div className="operations-panel">
          <div className="operations-grid">
            <div className="op-card-item">
              <div className="op-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 22H2M20 22V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14M10 22V12h4v10" /></svg>
              </div>
              <span className="op-card-value">160+</span>
              <span className="op-card-label">Production Plants</span>
            </div>
            <div className="op-card-item">
              <div className="op-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" /><path d="M16 12h4l2 2v4h-6v-6z" /><circle cx="7.5" cy="18.5" r="2.5" /><circle cx="16.5" cy="18.5" r="2.5" /></svg>
              </div>
              <span className="op-card-value">900+</span>
              <span className="op-card-label">Active Mixers</span>
            </div>
            <div className="op-card-item">
              <div className="op-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <span className="op-card-value">40+</span>
              <span className="op-card-label">States Supported</span>
            </div>
            <div className="op-card-item">
              <div className="op-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
              </div>
              <span className="op-card-value">12M+</span>
              <span className="op-card-label">Cubic Yards Poured Annually</span>
            </div>
            <div className="op-card-item">
              <div className="op-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /><path d="M12 2a10 10 0 1 0 10 10h-2" /></svg>
              </div>
              <span className="op-card-value">98%</span>
              <span className="op-card-label">On-Time Pour Guarantee</span>
            </div>
          </div>
        </div>
      </div>
      {/* Industries We Serve Section */}
      <section id="industries" className="industries-section">
        <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}>
          <div className="badge">
            <span className="badge-text">{t.industriesTitle}</span>
          </div>
        </div>

        <div className="industries-scroll-wrapper hide-scrollbar">
          {[
            { name: t.indCommercial, img: "/images/istockphoto-1345955492-1024x1024.jpg" },
            { name: t.indInfrastructure, img: "/images/istockphoto-179969577-1024x1024.jpg" },
            { name: t.indIndustrial, img: "/images/istockphoto-2166976559-1024x1024.jpg" },
            { name: t.indGovernment, img: "/images/istockphoto-2263288423-1024x1024.jpg" },
            { name: t.indEnergy, img: "/images/istockphoto-2263288606-1024x1024.jpg" },
            { name: t.indTransportation, img: "/images/istockphoto-2263816291-1024x1024.jpg" },
            { name: t.indDataCenters, img: "/images/istockphoto-2263817295-1024x1024.jpg" },
            { name: t.indWarehouses, img: "/images/istockphoto-2278348463-1024x1024.jpg" },
          ].map((ind, i) => (
            <div key={i} className="industry-scroll-card">
              <img src={ind.img} alt={ind.name} />
              <div className="industry-scroll-overlay">
                <h3>{ind.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>


      <footer id="contact">
        <div className="footer-bg-overlay" />

        {/* Upper Grid */}
        <div className="footer-top-row">
          {/* Column 1: Brand Info */}
          <div className="footer-brand">
            <div className="footer-brand-logo-container">
              <a href="#" style={{ display: 'inline-block' }}>
                <Logo className="app-logo footer-logo-img" />
              </a>
              <div className="footer-logo-divider" />
              <span className="footer-brand-subtitle">Building Stronger Foundations</span>
            </div>
            <p className="footer-brand-desc">
              Precision-engineered concrete solutions and infrastructure management dedicated to building a stronger, sustainable, and enduring tomorrow.
            </p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                <div>
                  Summit Plaza, Suite 400<br />
                  Houston, TX 77002
                </div>
              </div>
              <div className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span>(800) 123-4567</span>
              </div>
              <div className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /></svg>
                <span>info@abcredimix.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="footer-column-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#solutions" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Solutions
                </a>
              </li>
              <li>
                <a href="#industries" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Industries
                </a>
              </li>
              <li>
                <a href="#solutions" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#projects" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Projects
                </a>
              </li>
              <li>
                <a href="#innovation" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Innovation
                </a>
              </li>
              <li>
                <a href="#innovation" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#who-we-are" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Careers
                </a>
              </li>
              <li>
                <a href="#who-we-are" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Safety
                </a>
              </li>
              <li>
                <a href="#who-we-are" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Quality
                </a>
              </li>
              <li>
                <a href="#innovation" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  News & Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div>
            <h4 className="footer-column-title">Industries</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#industries" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Commercial
                </a>
              </li>
              <li>
                <a href="#industries" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Residential
                </a>
              </li>
              <li>
                <a href="#industries" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#industries" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Industrial
                </a>
              </li>
              <li>
                <a href="#industries" className="footer-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  Municipal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div>
            <h4 className="footer-column-title">Connect</h4>
            <p className="footer-connect-desc">
              Subscribe to our newsletter for the latest updates, insights, and industry news.
            </p>
            <div className="footer-subscribe-box">
              <input type="email" placeholder="Email address" className="footer-subscribe-input" />
              <button className="footer-subscribe-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>
            </div>
            <div className="footer-social-section">
              <span className="footer-social-label">Follow us</span>
              <div className="footer-social-icons">
                <a href="#facebook" className="footer-social-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="#linkedin" className="footer-social-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="#youtube" className="footer-social-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                </a>
                <a href="#instagram" className="footer-social-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Footer: Trust Badges Strip */}
        <div className="footer-badges-strip">
          <div className="footer-badges-grid">
            <div className="footer-badge-item">
              <div className="footer-badge-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 11 11 13 15 9" /></svg>
              </div>
              <div className="footer-badge-text-group">
                <span className="footer-badge-title">Built on Safety</span>
                <span className="footer-badge-desc">People and safety come first.</span>
              </div>
            </div>
            <div className="footer-badge-item">
              <div className="footer-badge-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 2 2 4a7 7 0 0 1-10 14z" /><path d="M19 2c-2.26 4.33-5.27 7.14-8 10" /></svg>
              </div>
              <div className="footer-badge-text-group">
                <span className="footer-badge-title">Sustainable Solutions</span>
                <span className="footer-badge-desc">Building for a greener future.</span>
              </div>
            </div>
            <div className="footer-badge-item">
              <div className="footer-badge-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
              </div>
              <div className="footer-badge-text-group">
                <span className="footer-badge-title">Quality Assurance</span>
                <span className="footer-badge-desc">Committed to highest standards.</span>
              </div>
            </div>
            <div className="footer-badge-item">
              <div className="footer-badge-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div className="footer-badge-text-group">
                <span className="footer-badge-title">Reliable Delivery</span>
                <span className="footer-badge-desc">On time. Every time. Everywhere.</span>
              </div>
            </div>
            <div className="footer-badge-item">
              <div className="footer-badge-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <div className="footer-badge-text-group">
                <span className="footer-badge-title">Stronger Partnerships</span>
                <span className="footer-badge-desc">Building lasting relationships.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <span>&copy; 2026 ABC Redimix. All rights reserved.</span>
              <span>|</span>
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms of Use</a>
            </div>
            <div className="footer-bottom-right">
              Proudly Building Stronger Foundations Across the USA.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
