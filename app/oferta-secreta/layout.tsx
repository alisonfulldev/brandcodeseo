const styles = `
  /* ── Hide root layout chrome ── */
  body > header { display: none !important; }
  body > footer { display: none !important; }
  body > div.fixed { display: none !important; }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --green: #25D366;
    --green-dark: #128C7E;
    --accent: #f59e0b;
    --accent-dark: #d97706;
    --dark: #0f172a;
    --dark2: #1e293b;
    --dark3: #334155;
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

  .urgency-bar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 14px;
    justify-content: center;
    background: linear-gradient(90deg, #7b0000, #b91c1c, #7b0000);
    background-size: 200% 100%;
    animation: slide-bg 4s linear infinite, shake-urgency 6s 4s infinite;
    border-bottom: 2px solid rgba(255,100,100,0.4);
    padding: 11px 20px;
    box-shadow: 0 4px 24px rgba(239,68,68,0.35);
  }

  @keyframes slide-bg {
    0%   { background-position: 0% 0%; }
    50%  { background-position: 100% 0%; }
    100% { background-position: 0% 0%; }
  }

  @keyframes shake-urgency {
    0%, 88%, 100% { transform: translateX(0); }
    90%           { transform: translateX(-3px); }
    92%           { transform: translateX(3px); }
    94%           { transform: translateX(-2px); }
    96%           { transform: translateX(2px); }
  }

  .urgency-fire { font-size: 1.3rem; flex-shrink: 0; }

  .urgency-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .urgency-headline {
    font-size: clamp(0.82rem, 2.2vw, 1rem);
    font-weight: 800;
    color: var(--white);
    letter-spacing: 0.4px;
    line-height: 1.2;
    text-align: center;
  }

  .urgency-headline span { color: #fde68a; }
  .urgency-headline em { font-style: normal; color: #fbbf24; text-decoration: underline; text-decoration-style: wavy; text-underline-offset: 3px; }

  .urgency-sub-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }

  .urgency-live {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.72rem;
    color: rgba(255,255,255,0.7);
  }

  .live-dot {
    width: 7px; height: 7px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(74,222,128,0.7);
    animation: pulse-green-dot 1.2s infinite;
    flex-shrink: 0;
  }

  @keyframes pulse-green-dot {
    0%   { box-shadow: 0 0 0 0 rgba(74,222,128,0.7); }
    70%  { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
    100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
  }

  .urgency-progress-wrap {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.65);
  }

  .urgency-progress-bar {
    width: 70px;
    height: 6px;
    background: rgba(255,255,255,0.15);
    border-radius: 10px;
    overflow: hidden;
  }

  .urgency-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #fbbf24, #f97316);
    border-radius: 10px;
    transition: width 1s ease;
  }

  .hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
    padding: 60px 20px 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -200px; left: 50%;
    transform: translateX(-50%);
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .badge {
    display: inline-block;
    background: rgba(245,158,11,0.15);
    border: 1px solid rgba(245,158,11,0.4);
    color: var(--accent);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 100px;
    margin-bottom: 28px;
  }

  .hero h1 {
    font-size: clamp(2rem, 5vw, 3.6rem);
    font-weight: 900;
    line-height: 1.15;
    max-width: 820px;
    margin: 0 auto 20px;
    color: var(--white);
  }

  .hero h1 span {
    background: linear-gradient(90deg, var(--accent), #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: var(--muted);
    max-width: 600px;
    margin: 0 auto 40px;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--green);
    color: var(--white);
    font-size: 1.1rem;
    font-weight: 700;
    padding: 18px 36px;
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0 0 0 0 rgba(37,211,102,0.5);
    animation: pulse-green 2s infinite;
    transition: background 0.2s, transform 0.2s;
  }

  .hero-cta:hover {
    background: var(--green-dark);
    transform: scale(1.04);
    animation: none;
    box-shadow: 0 8px 30px rgba(37,211,102,0.4);
  }

  .hero-cta svg { width: 26px; height: 26px; flex-shrink: 0; }

  .proof-bar {
    background: var(--dark2);
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 22px 20px;
    display: flex;
    justify-content: center;
    gap: clamp(20px, 5vw, 60px);
    flex-wrap: wrap;
    text-align: center;
  }

  .proof-item strong { display: block; font-size: 1.6rem; font-weight: 900; color: var(--accent); }
  .proof-item span { font-size: 0.82rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; }

  .section { padding: 80px 20px; }
  .container { max-width: 1060px; margin: 0 auto; }

  .section-tag { text-align: center; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; }
  .section-title { text-align: center; font-size: clamp(1.6rem, 4vw, 2.5rem); font-weight: 800; color: var(--white); margin-bottom: 16px; line-height: 1.2; }
  .section-desc { text-align: center; color: var(--muted); font-size: 1.05rem; max-width: 600px; margin: 0 auto 56px; }

  .plans { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }

  .plan {
    background: var(--dark2);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 36px 28px;
    position: relative;
    transition: border-color 0.3s, transform 0.3s;
  }

  .plan:hover { border-color: rgba(245,158,11,0.4); transform: translateY(-4px); }
  .plan.highlight { border-color: var(--accent); box-shadow: 0 0 40px rgba(245,158,11,0.1); }

  .plan-ribbon {
    position: absolute;
    top: -13px; left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, var(--accent), #f97316);
    color: #000;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 5px 18px;
    border-radius: 100px;
    white-space: nowrap;
  }

  .plan-icon { font-size: 2.4rem; margin-bottom: 16px; }
  .plan-name { font-size: 1.2rem; font-weight: 700; color: var(--white); margin-bottom: 4px; }
  .plan-tagline { font-size: 0.85rem; color: var(--muted); margin-bottom: 24px; }

  .plan-price { margin-bottom: 28px; }
  .plan-price .from { font-size: 0.8rem; color: var(--muted); text-decoration: line-through; }
  .plan-price .amount { display: flex; align-items: flex-start; gap: 4px; line-height: 1; margin-top: 4px; }
  .plan-price .currency { font-size: 1.1rem; font-weight: 700; color: var(--accent); margin-top: 6px; }
  .plan-price .value { font-size: 3rem; font-weight: 900; color: var(--white); }
  .plan-price .note { font-size: 0.78rem; color: var(--muted); margin-top: 4px; }

  .plan-features { list-style: none; margin-bottom: 32px; }
  .plan-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: var(--text); padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
  .plan-features li:last-child { border-bottom: none; }
  .plan-features .check { color: var(--green); font-size: 1rem; margin-top: 1px; flex-shrink: 0; }

  .plan-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    width: 100%; padding: 15px; border-radius: 12px;
    font-size: 0.95rem; font-weight: 700; text-decoration: none; transition: all 0.2s;
  }

  .plan-btn.primary { background: var(--green); color: var(--white); animation: pulse-green 2.2s infinite; }
  .plan-btn.primary:hover { background: var(--green-dark); animation: none; transform: scale(1.02); }
  .plan-btn.secondary { background: rgba(37,211,102,0.1); border: 1.5px solid rgba(37,211,102,0.35); color: var(--green); }
  .plan-btn.secondary:hover { background: rgba(37,211,102,0.2); border-color: var(--green); }
  .plan-btn svg { width: 20px; height: 20px; flex-shrink: 0; }

  .bg-alt { background: var(--dark2); }

  .pain-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
  .pain-card { background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.18); border-radius: 14px; padding: 22px; display: flex; gap: 14px; align-items: flex-start; }
  .pain-card .emoji { font-size: 1.5rem; flex-shrink: 0; }
  .pain-card p { font-size: 0.92rem; color: var(--text); }

  .steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; }
  .step { text-align: center; padding: 28px 20px; }
  .step-num { width: 52px; height: 52px; background: linear-gradient(135deg, var(--accent), #f97316); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 900; color: #000; margin: 0 auto 16px; }
  .step h3 { font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 8px; }
  .step p { font-size: 0.87rem; color: var(--muted); }

  .testimonials { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
  .testimonial { background: var(--dark2); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 28px; }
  .stars { color: var(--accent); font-size: 1.1rem; margin-bottom: 14px; }
  .testimonial blockquote { font-size: 0.92rem; color: var(--text); font-style: italic; margin-bottom: 20px; line-height: 1.7; }
  .testimonial-author { display: flex; align-items: center; gap: 12px; }
  .avatar { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), #f97316); display: flex; align-items: center; justify-content: center; font-weight: 800; color: #000; font-size: 1rem; flex-shrink: 0; }
  .testimonial-author strong { display: block; font-size: 0.9rem; color: var(--white); }
  .testimonial-author span { font-size: 0.78rem; color: var(--muted); }

  .final-cta { background: linear-gradient(135deg, var(--dark2) 0%, var(--dark) 100%); padding: 100px 20px; text-align: center; border-top: 1px solid rgba(245,158,11,0.15); }
  .final-cta h2 { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; color: var(--white); max-width: 700px; margin: 0 auto 20px; line-height: 1.2; }
  .final-cta p { color: var(--muted); font-size: 1.05rem; margin-bottom: 40px; max-width: 500px; margin-left: auto; margin-right: auto; }

  .cta-big {
    display: inline-flex; align-items: center; gap: 12px;
    background: var(--green); color: var(--white);
    font-size: 1.15rem; font-weight: 800;
    padding: 20px 44px; border-radius: 50px; text-decoration: none;
    animation: pulse-green 2s infinite; transition: all 0.2s;
  }
  .cta-big:hover { background: var(--green-dark); animation: none; transform: scale(1.04); box-shadow: 0 10px 40px rgba(37,211,102,0.4); }
  .cta-big svg { width: 28px; height: 28px; }

  .guarantee { margin-top: 28px; font-size: 0.83rem; color: var(--muted); display: flex; align-items: center; justify-content: center; gap: 6px; }

  .float-wpp { position: fixed; bottom: 28px; right: 24px; z-index: 999; display: flex; align-items: center; gap: 10px; }
  .float-label { background: var(--dark2); color: var(--white); font-size: 0.82rem; font-weight: 600; padding: 8px 14px; border-radius: 8px; white-space: nowrap; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 14px rgba(0,0,0,0.3); opacity: 0; transform: translateX(10px); animation: fadeLabel 0.5s 1.5s forwards; }
  @keyframes fadeLabel { to { opacity: 1; transform: translateX(0); } }
  .float-btn { width: 60px; height: 60px; background: var(--green); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; animation: pulse-green 2s infinite; transition: background 0.2s, transform 0.2s; }
  .float-btn:hover { background: var(--green-dark); animation: none; transform: scale(1.1); }
  .float-btn svg { width: 30px; height: 30px; }

  .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 24px; }
  .port-card { background: var(--dark2); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden; transition: border-color 0.3s, transform 0.3s; }
  .port-card:hover { border-color: rgba(245,158,11,0.35); transform: translateY(-5px); }
  .port-browser { background: #1a2744; padding: 10px 14px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .port-dots { display: flex; gap: 5px; }
  .port-dots span { width: 10px; height: 10px; border-radius: 50%; }
  .port-dots span:nth-child(1) { background: #ff5f57; }
  .port-dots span:nth-child(2) { background: #febc2e; }
  .port-dots span:nth-child(3) { background: #28c840; }
  .port-url { flex: 1; background: rgba(255,255,255,0.06); border-radius: 6px; height: 22px; display: flex; align-items: center; padding: 0 10px; font-size: 0.7rem; color: var(--muted); overflow: hidden; white-space: nowrap; }
  .port-preview { height: 170px; position: relative; overflow: hidden; display: flex; flex-direction: column; }
  .port-preview .mock-nav { height: 36px; display: flex; align-items: center; padding: 0 16px; gap: 12px; flex-shrink: 0; }
  .mock-logo { width: 60px; height: 10px; border-radius: 4px; opacity: 0.9; }
  .mock-nav-links { display: flex; gap: 8px; margin-left: auto; }
  .mock-nav-links span { width: 28px; height: 7px; border-radius: 3px; background: rgba(255,255,255,0.25); }
  .port-preview .mock-hero { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; padding: 0 20px; }
  .mock-h1 { height: 12px; border-radius: 4px; background: rgba(255,255,255,0.85); width: 70%; }
  .mock-h2 { height: 8px; border-radius: 4px; background: rgba(255,255,255,0.4); width: 50%; }
  .mock-cta-btn { height: 24px; width: 90px; border-radius: 12px; background: rgba(255,255,255,0.9); margin-top: 4px; }
  .mock-sections { height: 28px; display: flex; gap: 3px; padding: 0 16px 8px; align-items: flex-end; }
  .mock-sections span { flex: 1; border-radius: 3px; background: rgba(255,255,255,0.12); }
  .theme-fitness { background: linear-gradient(160deg, #0f2027, #203a43, #2c5364); }
  .theme-fitness .mock-logo { background: #00d2ff; }
  .theme-fitness .mock-nav { background: rgba(0,0,0,0.2); }
  .theme-fitness .mock-cta-btn { background: #00d2ff; }
  .theme-beauty { background: linear-gradient(160deg, #2d1b69, #8b2fc9, #c165dd); }
  .theme-beauty .mock-logo { background: #f9c9ff; }
  .theme-beauty .mock-nav { background: rgba(0,0,0,0.15); }
  .theme-beauty .mock-cta-btn { background: #f9c9ff; }
  .theme-food { background: linear-gradient(160deg, #7b2d00, #c0392b, #e67e22); }
  .theme-food .mock-logo { background: #ffeaa7; }
  .theme-food .mock-nav { background: rgba(0,0,0,0.2); }
  .theme-food .mock-cta-btn { background: #ffeaa7; }
  .port-info { padding: 16px 18px 18px; }
  .port-tag { font-size: 0.7rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--accent); margin-bottom: 5px; }
  .port-name { font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 4px; }
  .port-desc { font-size: 0.8rem; color: var(--muted); margin-bottom: 14px; line-height: 1.5; }
  .port-footer { display: flex; align-items: center; justify-content: space-between; }
  .port-badge { display: flex; align-items: center; gap: 5px; font-size: 0.75rem; color: var(--green); font-weight: 600; }
  .port-badge::before { content: ''; width: 7px; height: 7px; background: var(--green); border-radius: 50%; box-shadow: 0 0 0 2px rgba(37,211,102,0.25); }
  .port-cta-link { font-size: 0.8rem; font-weight: 700; color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 4px; transition: gap 0.2s; }
  .port-cta-link:hover { gap: 7px; }
  .portfolio-cta-wrap { text-align: center; margin-top: 44px; }
  .portfolio-cta-wrap p { font-size: 1rem; color: var(--muted); margin-bottom: 20px; }

  .page-footer { text-align: center; padding: 30px 20px; font-size: 0.78rem; color: var(--dark3); border-top: 1px solid rgba(255,255,255,0.04); }

  @keyframes pulse-green {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
    70%  { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }

  @media (max-width: 600px) {
    .proof-bar { gap: 24px; }
    .float-label { display: none; }
  }

  @media (max-width: 500px) {
    .urgency-fire { display: none; }
    .urgency-sub-row { gap: 8px; }
  }
`;

export default function OfertaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {children}
    </>
  );
}
