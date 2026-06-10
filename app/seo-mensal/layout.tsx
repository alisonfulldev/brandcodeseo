const styles = `
  /* ── Hide root layout chrome ── */
  body > header { display: none !important; }
  body > footer { display: none !important; }
  body > div.fixed { display: none !important; }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --green: #25D366;
    --green-dark: #128C7E;
    --accent: #3b82f6;
    --accent-dark: #1d4ed8;
    --accent-glow: rgba(59,130,246,0.25);
    --red: #ef4444;
    --yellow: #f59e0b;
    --dark: #0a0f1e;
    --dark2: #111827;
    --dark3: #1f2937;
    --dark4: #374151;
    --text: #e2e8f0;
    --muted: #94a3b8;
    --white: #ffffff;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', sans-serif !important;
    background: var(--dark) !important;
    color: var(--text) !important;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ── Top bar ── */
  .top-bar {
    background: linear-gradient(90deg, #1e3a5f, #1d4ed8, #1e3a5f);
    background-size: 200% 100%;
    animation: slide-bg 5s linear infinite;
    padding: 10px 20px;
    text-align: center;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--white);
    letter-spacing: 0.4px;
  }
  .top-bar span { color: #93c5fd; }

  @keyframes slide-bg {
    0%   { background-position: 0% 0%; }
    50%  { background-position: 100% 0%; }
    100% { background-position: 0% 0%; }
  }

  /* ── Hero ── */
  .hero {
    background: radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 65%),
                linear-gradient(180deg, #0a0f1e 0%, #0d1526 100%);
    padding: 72px 20px 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid rgba(59,130,246,0.12);
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(59,130,246,0.12);
    border: 1px solid rgba(59,130,246,0.35);
    color: #93c5fd;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    padding: 7px 18px;
    border-radius: 100px;
    margin-bottom: 32px;
  }

  .hero h1 {
    font-size: clamp(1.9rem, 5vw, 3.4rem);
    font-weight: 900;
    line-height: 1.15;
    max-width: 860px;
    margin: 0 auto 24px;
    color: var(--white);
  }

  .hero h1 .hl-blue {
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero h1 .hl-red {
    background: linear-gradient(90deg, #f87171, #ef4444);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: var(--muted);
    max-width: 620px;
    margin: 0 auto 44px;
    line-height: 1.75;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--green);
    color: var(--white);
    font-size: 1.05rem;
    font-weight: 700;
    padding: 18px 36px;
    border-radius: 50px;
    text-decoration: none;
    animation: pulse-green 2s infinite;
    transition: background 0.2s, transform 0.2s;
  }
  .hero-cta:hover {
    background: var(--green-dark);
    animation: none;
    transform: scale(1.04);
    box-shadow: 0 8px 30px rgba(37,211,102,0.4);
  }
  .hero-cta svg { width: 24px; height: 24px; flex-shrink: 0; }

  /* ── Proof bar ── */
  .proof-bar {
    background: var(--dark2);
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    padding: 24px 20px;
    display: flex;
    justify-content: center;
    gap: clamp(24px, 5vw, 64px);
    flex-wrap: wrap;
    text-align: center;
  }
  .proof-item strong { display: block; font-size: 1.7rem; font-weight: 900; color: var(--accent); }
  .proof-item span { font-size: 0.78rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; display: block; }

  /* ── Sections ── */
  .section { padding: 80px 20px; }
  .section.bg-alt { background: var(--dark2); }
  .container { max-width: 1040px; margin: 0 auto; }

  .section-tag {
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
  }
  .section-title {
    text-align: center;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 800;
    color: var(--white);
    margin-bottom: 16px;
    line-height: 1.2;
  }
  .section-desc {
    text-align: center;
    color: var(--muted);
    font-size: 1.02rem;
    max-width: 600px;
    margin: 0 auto 52px;
    line-height: 1.75;
  }

  /* ── Warning box ── */
  .warning-box {
    background: rgba(239,68,68,0.07);
    border: 1.5px solid rgba(239,68,68,0.25);
    border-radius: 16px;
    padding: 28px 32px;
    margin-bottom: 52px;
    text-align: center;
  }
  .warning-box .icon { font-size: 2rem; margin-bottom: 12px; }
  .warning-box p {
    font-size: 1.05rem;
    color: #fca5a5;
    line-height: 1.7;
  }
  .warning-box strong { color: #f87171; }

  /* ── Problem cards ── */
  .problem-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
  }
  .problem-card {
    background: rgba(239,68,68,0.06);
    border: 1px solid rgba(239,68,68,0.18);
    border-radius: 14px;
    padding: 24px 20px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .problem-card .emoji { font-size: 1.6rem; flex-shrink: 0; }
  .problem-card h3 { font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 5px; }
  .problem-card p { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }

  /* ── What is SEO mensal ── */
  .benefit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
  .benefit-card {
    background: var(--dark3);
    border: 1px solid rgba(59,130,246,0.15);
    border-radius: 16px;
    padding: 26px 24px;
    transition: border-color 0.3s, transform 0.3s;
  }
  .benefit-card:hover {
    border-color: rgba(59,130,246,0.4);
    transform: translateY(-3px);
  }
  .benefit-icon {
    width: 48px;
    height: 48px;
    background: rgba(59,130,246,0.12);
    border: 1px solid rgba(59,130,246,0.25);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 16px;
  }
  .benefit-card h3 { font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 8px; }
  .benefit-card p { font-size: 0.87rem; color: var(--muted); line-height: 1.65; }

  /* ── O que está incluso ── */
  .includes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
  }
  .include-item {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--dark3);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    padding: 16px 18px;
    font-size: 0.9rem;
    color: var(--text);
    font-weight: 500;
  }
  .include-check {
    width: 24px;
    height: 24px;
    background: rgba(37,211,102,0.12);
    border: 1px solid rgba(37,211,102,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: var(--green);
    flex-shrink: 0;
  }

  /* ── Compare ── */
  .compare-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  @media (max-width: 640px) { .compare-wrap { grid-template-columns: 1fr; } }

  .compare-col {
    border-radius: 16px;
    overflow: hidden;
  }
  .compare-header {
    padding: 16px 20px;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
  }
  .compare-header.bad { background: rgba(239,68,68,0.18); color: #f87171; }
  .compare-header.good { background: rgba(37,211,102,0.18); color: #4ade80; }

  .compare-body { background: var(--dark3); border: 1px solid rgba(255,255,255,0.07); border-top: none; border-radius: 0 0 16px 16px; padding: 8px 0; }

  .compare-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 13px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    font-size: 0.87rem;
    color: var(--muted);
    line-height: 1.5;
  }
  .compare-row:last-child { border-bottom: none; }
  .compare-row .ic { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }
  .compare-row.good-row { color: var(--text); }

  /* ── Pricing ── */
  .price-card {
    max-width: 480px;
    margin: 0 auto;
    background: var(--dark2);
    border: 2px solid var(--accent);
    border-radius: 24px;
    padding: 44px 40px;
    text-align: center;
    box-shadow: 0 0 60px rgba(59,130,246,0.12);
    position: relative;
  }
  .price-ribbon {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, var(--accent), #60a5fa);
    color: var(--white);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 5px 20px;
    border-radius: 100px;
    white-space: nowrap;
  }
  .price-icon { font-size: 2.8rem; margin-bottom: 20px; }
  .price-card h3 { font-size: 1.4rem; font-weight: 800; color: var(--white); margin-bottom: 6px; }
  .price-card .subtitle { font-size: 0.9rem; color: var(--muted); margin-bottom: 32px; }

  .price-display {
    margin-bottom: 32px;
  }
  .price-display .from { font-size: 0.82rem; color: var(--muted); text-decoration: line-through; margin-bottom: 4px; }
  .price-display .amount {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    line-height: 1;
  }
  .price-display .currency { font-size: 1.3rem; font-weight: 800; color: var(--accent); margin-top: 8px; }
  .price-display .value { font-size: 4rem; font-weight: 900; color: var(--white); }
  .price-display .period { font-size: 1rem; color: var(--muted); align-self: flex-end; padding-bottom: 8px; }
  .price-display .note { font-size: 0.78rem; color: var(--muted); margin-top: 6px; }

  .price-features {
    list-style: none;
    text-align: left;
    margin-bottom: 36px;
    border-top: 1px solid rgba(255,255,255,0.07);
    padding-top: 28px;
  }
  .price-features li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.9rem;
    color: var(--text);
    padding: 9px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .price-features li:last-child { border-bottom: none; }
  .price-features .ck { color: var(--green); font-size: 1rem; margin-top: 1px; flex-shrink: 0; }

  .price-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 18px;
    border-radius: 14px;
    font-size: 1rem;
    font-weight: 800;
    text-decoration: none;
    background: var(--green);
    color: var(--white);
    animation: pulse-green 2.2s infinite;
    transition: all 0.2s;
    margin-bottom: 14px;
  }
  .price-btn:hover { background: var(--green-dark); animation: none; transform: scale(1.02); }
  .price-btn svg { width: 22px; height: 22px; }

  .price-guarantee { font-size: 0.78rem; color: var(--muted); display: flex; align-items: center; justify-content: center; gap: 5px; }

  /* ── Two-phase pricing ── */
  .pricing-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    max-width: 860px;
    margin: 0 auto;
  }
  @media (max-width: 680px) { .pricing-cols { grid-template-columns: 1fr; } }

  .price-card.setup { border-color: rgba(245,158,11,0.5); box-shadow: 0 0 60px rgba(245,158,11,0.08); }
  .price-card.setup .price-ribbon { background: linear-gradient(90deg, #d97706, #f59e0b); }
  .price-card.setup .price-display .currency { color: #f59e0b; }
  .price-card.setup .price-btn { background: #f59e0b; color: #000; }
  .price-card.setup .price-btn:hover { background: #d97706; }

  .price-tag-once {
    display: inline-block;
    background: rgba(245,158,11,0.12);
    border: 1px solid rgba(245,158,11,0.3);
    color: #fbbf24;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 20px;
  }
  .price-tag-recur {
    display: inline-block;
    background: rgba(59,130,246,0.12);
    border: 1px solid rgba(59,130,246,0.3);
    color: #93c5fd;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 20px;
  }

  /* ── Timeline ── */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: 680px;
    margin: 0 auto;
    position: relative;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 27px;
    top: 24px;
    bottom: 24px;
    width: 2px;
    background: linear-gradient(180deg, var(--accent), rgba(59,130,246,0.1));
  }
  .tl-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding: 0 0 32px 0;
  }
  .tl-item:last-child { padding-bottom: 0; }
  .tl-dot {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), #60a5fa);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 900;
    color: var(--white);
    flex-shrink: 0;
    box-shadow: 0 0 0 6px rgba(59,130,246,0.1);
    position: relative;
    z-index: 1;
  }
  .tl-content { padding-top: 10px; }
  .tl-content h4 { font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 5px; }
  .tl-content p { font-size: 0.87rem; color: var(--muted); line-height: 1.65; }

  /* ── FAQ ── */
  .faq-list { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
  .faq-item { background: var(--dark3); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 22px 24px; }
  .faq-item h4 { font-size: 0.97rem; font-weight: 700; color: var(--white); margin-bottom: 10px; display: flex; gap: 10px; align-items: flex-start; }
  .faq-item h4 span.q { color: var(--accent); font-size: 1.1rem; flex-shrink: 0; }
  .faq-item p { font-size: 0.87rem; color: var(--muted); line-height: 1.7; padding-left: 24px; }

  /* ── Final CTA ── */
  .final-cta {
    background: radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%),
                var(--dark2);
    padding: 100px 20px;
    text-align: center;
    border-top: 1px solid rgba(59,130,246,0.12);
  }
  .final-cta h2 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 900;
    color: var(--white);
    max-width: 700px;
    margin: 0 auto 20px;
    line-height: 1.2;
  }
  .final-cta p {
    color: var(--muted);
    font-size: 1.02rem;
    margin-bottom: 44px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
  .cta-big {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: var(--green);
    color: var(--white);
    font-size: 1.1rem;
    font-weight: 800;
    padding: 20px 44px;
    border-radius: 50px;
    text-decoration: none;
    animation: pulse-green 2s infinite;
    transition: all 0.2s;
  }
  .cta-big:hover { background: var(--green-dark); animation: none; transform: scale(1.04); box-shadow: 0 10px 40px rgba(37,211,102,0.4); }
  .cta-big svg { width: 28px; height: 28px; }
  .cta-note { margin-top: 20px; font-size: 0.82rem; color: var(--muted); }

  /* ── Float WPP ── */
  .float-wpp { position: fixed; bottom: 28px; right: 24px; z-index: 999; }
  .float-btn {
    width: 60px; height: 60px;
    background: var(--green);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    animation: pulse-green 2s infinite;
    transition: background 0.2s, transform 0.2s;
    box-shadow: 0 4px 20px rgba(37,211,102,0.4);
  }
  .float-btn:hover { background: var(--green-dark); animation: none; transform: scale(1.1); }
  .float-btn svg { width: 30px; height: 30px; }

  /* ── Footer ── */
  .page-footer { text-align: center; padding: 28px 20px; font-size: 0.75rem; color: var(--dark4); border-top: 1px solid rgba(255,255,255,0.04); }

  /* ── Animations ── */
  @keyframes pulse-green {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
    70%  { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }

  @media (max-width: 600px) {
    .proof-bar { gap: 24px; }
    .price-card { padding: 36px 24px; }
    .float-wpp { bottom: 20px; right: 16px; }
  }
`;

export default function SeoMensalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {children}
    </>
  );
}
