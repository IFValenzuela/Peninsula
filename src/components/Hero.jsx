import { useEffect, useRef, useState } from 'react';

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  const done = useRef(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let s = 0; const step = to / 55;
        const t = setInterval(() => {
          s += step;
          if (s >= to) { setVal(to); clearInterval(t); }
          else setVal(Math.floor(s));
        }, 28);
      }
    }, { threshold: 0.4 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: 600,
        overflow: 'hidden',
        background: '#0E141A',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        .cx-corm { font-family: 'Cormorant Garamond', Georgia, serif; }
        .cx-jost  { font-family: 'Jost', system-ui, sans-serif; }

        @keyframes cx-photo-in {
          from { opacity: 0; transform: scale(1.06); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes cx-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cx-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cx-line-x {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes cx-breathe {
          0%,100% { transform: scale(1.00); }
          50%      { transform: scale(1.04); }
        }
        @keyframes cx-bob {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(7px); }
        }
        @keyframes cx-pulse-dot {
          0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(90,146,190,.5); }
          60%      { opacity:.8; box-shadow: 0 0 0 6px rgba(90,146,190,0); }
        }
        @keyframes cx-card-in {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .cx-photo { animation: cx-photo-in 1.8s cubic-bezier(.25,.46,.45,.94) 0s both,
                               cx-breathe 18s ease-in-out 2s infinite; }

        .cx-a0 { animation: cx-fade-in  1s ease .0s both; }
        .cx-a1 { animation: cx-fade-up .9s cubic-bezier(.22,1,.36,1) .5s both; }
        .cx-a2 { animation: cx-fade-up .9s cubic-bezier(.22,1,.36,1) .65s both; }
        .cx-a3 { animation: cx-fade-up .9s cubic-bezier(.22,1,.36,1) .80s both; }
        .cx-a4 { animation: cx-fade-up .9s cubic-bezier(.22,1,.36,1) .95s both; }
        .cx-a5 { animation: cx-fade-up .9s cubic-bezier(.22,1,.36,1) 1.1s both; }
        .cx-a6 { animation: cx-fade-up .9s cubic-bezier(.22,1,.36,1) 1.25s both; }

        .cx-ln  { animation: cx-line-x .8s cubic-bezier(.22,1,.36,1) .9s both; }

        .cx-c1  { animation: cx-card-in .7s cubic-bezier(.22,1,.36,1) 1.4s both; }
        .cx-c2  { animation: cx-card-in .7s cubic-bezier(.22,1,.36,1) 1.55s both; }

        .cx-bob { animation: cx-bob 2.8s ease-in-out infinite; }
        .cx-live { animation: cx-pulse-dot 2.2s ease infinite; }
        .cx-float-info { display: block; transition: opacity 0.25s; }
        @media (max-width: 900px) { .cx-float-info { display: none; } }
        @media (min-width: 1600px) { .cx-float-info { right: 80px !important; } }
        .cx-hero-content { transition: opacity 0.25s; }
        body.mega-open .cx-float-info,
        body.mega-open .cx-hero-content { opacity: 0; pointer-events: none; }

        /* Primary CTA */
        .cx-cta {
          display: inline-flex; align-items: center; gap: 12px;
          background: transparent;
          color: rgba(255,255,255,.92);
          font-family: 'Jost', sans-serif;
          font-size: .72rem; font-weight: 300;
          letter-spacing: .18em; text-transform: uppercase;
          padding: 14px 28px;
          border: 1px solid rgba(255,255,255,.35);
          text-decoration: none; cursor: pointer;
          transition: border-color .25s, color .25s, transform .2s, background .25s;
          white-space: nowrap;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .cx-cta:hover {
          border-color: rgba(255,255,255,.7);
          color: #fff;
          background: rgba(255,255,255,.06);
          transform: translateY(-2px);
        }
        .cx-cta-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #5A92BE; flex-shrink: 0;
          animation: cx-pulse-dot 2.2s ease infinite;
        }

        /* Ghost CTA */
        .cx-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          color: rgba(255,255,255,.72);
          font-family: 'Jost', sans-serif;
          font-size: .72rem; font-weight: 300;
          letter-spacing: .14em; text-transform: uppercase;
          padding: 15px 0; border: none;
          border-bottom: 1px solid rgba(255,255,255,.28);
          text-decoration: none; cursor: pointer;
          transition: color .2s, border-color .2s, gap .25s;
        }
        .cx-ghost:hover {
          color: rgba(255,255,255,1);
          border-color: rgba(255,255,255,.6);
          gap: 14px;
        }

        /* Glass card */
        .cx-glass {
          background: rgba(14,20,26,.72);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,.1);
          box-shadow: 0 4px 40px rgba(0,0,0,.4);
        }

        @media (max-width: 900px) {
          .cx-float-info { display: none !important; }
          .cx-stats { display: none !important; }
        }
        @media (max-width: 768px) {
          .cx-h1-line { font-size: clamp(2.4rem, 8vw, 4rem) !important; }
          .cx-bottom-bar { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
          .cx-cards { display: none !important; }
          .cx-a5 { display: none !important; }
          .cx-eyebrow { margin-bottom: 16px !important; }
          .cx-photo { filter: brightness(.55) saturate(.75) contrast(1.04) !important; }
        }
      `}</style>

      {/* ── FULL-BLEED PHOTO ───────────────────────────────────────────── */}
      <img
        src="/clinic.png"
        alt="Clínica Península OC"
        className="cx-photo"
        onError={e => { e.target.src = '/clinic.jpg'; }}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: '50% 38%',
          transformOrigin: 'center center',
          /* Desaturated, slightly warm, high contrast — editorial */
          filter: 'brightness(.95) saturate(.85) contrast(1.04)',
        }}
      />

      {/* ── LAYERED OVERLAYS — craft the mood ────────────────────────── */}

      {/* 1. Deep vignette edges — draws eye to center */}
      <div className="cx-a0" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(8,14,10,.3) 100%)',
        pointerEvents: 'none',
      }} />

      {/* 2. Bottom gradient — anchors the text */}
      <div style={{
        position: 'absolute', inset: 'auto 0 0',
        height: '65%',
        background: 'linear-gradient(to top, rgba(6,12,8,.65) 0%, rgba(6,12,8,.28) 30%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* 3. Top gradient — floats the header */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 180,
        background: 'linear-gradient(to bottom, rgba(6,12,8,.28) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* 4. Subtle warm tint — expensive depth */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(20,30,22,.15) 0%, rgba(40,20,5,.2) 100%)',
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />


      {/* ── CONTENT ──────────────────────────────────────────────────── */}
      <div className="cx-hero-content" style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(20px,4vw,48px) clamp(20px,4vw,56px) clamp(28px,4vw,48px)',
        zIndex: 2,
      }}>

        {/* ── Eyebrow ── */}
        <div className="cx-jost cx-a1 cx-eyebrow" style={{
          display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28,
        }}>
          <span style={{
            fontSize: '.65rem', fontWeight: 300,
            letterSpacing: '.2em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.55)',
          }}>
            Servicio Ortopédico Integral · Mexicali
          </span>
        </div>

        {/* ── BIG HEADLINE ── */}
        <h1 className="cx-corm" style={{ margin: 0, padding: 0, lineHeight: .98 }}>
          <span
            className="cx-h1-line cx-a2"
            style={{
              display: 'block',
              fontSize: 'clamp(3rem, 6.5vw, 6.5rem)',
              fontWeight: 300,
              color: '#fff',
              letterSpacing: '-.025em',
            }}
          >
            Recupera lo que
          </span>
          <span
            className="cx-h1-line cx-a3"
            style={{
              display: 'block',
              fontSize: 'clamp(3rem, 6.5vw, 6.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-.025em',
              /* Warm off-white — feels more expensive than pure white */
              color: '#C8D8E8',
            }}
          >
            más importa.
          </span>
        </h1>

        {/* ── Thin teal rule ── */}
        <div className="cx-ln" style={{
          width: 48, height: 1.5,
          background: '#5A92BE',
          margin: '28px 0 24px',
        }} />

        {/* ── Subtext + CTAs row ── */}
        <div className="cx-a4" style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 28,
        }}>

          {/* Left — body + buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <p className="cx-jost" style={{
              fontSize: 'clamp(.8rem, .9vw, .92rem)',
              fontWeight: 300, color: 'rgba(255,255,255,.55)',
              lineHeight: 1.8, maxWidth: 400, margin: 0,
              letterSpacing: '.01em',
            }}>
              Cirugía avanzada y rehabilitación de alto rendimiento
              para que vuelvas a hacer lo que amas — sin dolor.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
              <a href="tel:6865510099" className="cx-cta">
                <span className="cx-cta-dot" />
                Contactar Clínica
              </a>
              <a href="#nosotros" className="cx-ghost">
                Conocer el equipo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="13 6 19 12 13 18"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div className="cx-stats" style={{
            display: 'flex', gap: 0, alignItems: 'stretch',
          }}>
            {[
              { n: 15, s: '+', l: 'Años de\nexperiencia' },
              { n: 5000, s: '+', l: 'Cirugías\nexitosas' },
            ].map((st, i) => (
              <div key={st.l} style={{
                display: 'flex', flexDirection: 'column', gap: 6,
                padding: '0 clamp(12px,2vw,32px)',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,.12)' : 'none',
                textAlign: 'right',
              }}>
                <span className="cx-corm" style={{
                  fontSize: 'clamp(1.4rem, 2vw, 2.2rem)',
                  fontWeight: 300, color: '#fff', lineHeight: 1,
                }}>
                  <Counter to={st.n} suffix={st.s} />
                </span>
                <span className="cx-jost" style={{
                  fontSize: '.65rem', fontWeight: 300,
                  color: 'rgba(255,255,255,.4)',
                  letterSpacing: '.12em', textTransform: 'uppercase',
                  whiteSpace: 'pre-line', lineHeight: 1.5,
                }}>
                  {st.l}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom strip — accreditations ── */}
        <div className="cx-jost cx-a5" style={{
          marginTop: 36,
          paddingTop: 20,
          borderTop: '1px solid rgba(255,255,255,.08)',
          display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
        }}>
          <span style={{
            fontSize: '.65rem', fontWeight: 300,
            color: 'rgba(255,255,255,.3)',
            letterSpacing: '.16em', textTransform: 'uppercase',
          }}>
            Avales
          </span>
          {['CMO', 'FIFA Med', 'HSS Fellow', 'Mayo Clinic'].map(a => (
            <span key={a} style={{
              fontSize: '.68rem', fontWeight: 300,
              color: 'rgba(255,255,255,.45)',
              padding: '4px 12px',
              border: '1px solid rgba(255,255,255,.12)',
              letterSpacing: '.06em',
            }}>
              {a}
            </span>
          ))}
        </div>

      </div>


      {/* ── INFO — top-right, no cards, just text floating on photo ── */}
      <div className="cx-cards cx-float-info" style={{
        position: 'absolute', top: 'max(88px, 12vh)', right: 'clamp(20px,3vw,48px)',
        zIndex: 4,
        display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vh,28px)',
        width: 'clamp(200px,18vw,300px)',
      }}>

        {/* Location */}
        <div className="cx-c1 cx-jost" style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(8px,1vw,14px)' }}>
          <svg width="clamp(13px,1.1vw,18px)" height="clamp(13px,1.1vw,18px)" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <div>
            <div style={{ fontSize: 'clamp(.72rem,.9vw,.92rem)', color: '#fff', fontWeight: 400, lineHeight: 1.4 }}>Av. Reforma #1089 Esq. Calle C</div>
            <div style={{ fontSize: 'clamp(.62rem,.78vw,.78rem)', color: 'rgba(255,255,255,.55)', fontWeight: 300, marginTop: 4 }}>Mexicali, Baja California</div>
            <a
              href="https://maps.google.com/?q=Av+Reforma+1089+Mexicali+Mexico"
              target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 'clamp(.62rem,.78vw,.78rem)', color: 'rgba(255,255,255,.5)', textDecoration: 'none', display: 'inline-block', marginTop: 6, borderBottom: '1px solid rgba(255,255,255,.25)', paddingBottom: 2 }}
            >Ver en mapa</a>
          </div>
        </div>

        {/* Thin divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,.12)' }} />

        {/* Hours */}
        <div className="cx-c2 cx-jost" style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(8px,1vw,14px)' }}>
          <svg width="clamp(13px,1.1vw,18px)" height="clamp(13px,1.1vw,18px)" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <div>
            <div style={{ fontSize: 'clamp(.72rem,.9vw,.92rem)', color: '#fff', fontWeight: 400, lineHeight: 1.4 }}>Lun–Vie &amp; Dom · 8am–8pm</div>
            <div style={{ fontSize: 'clamp(.62rem,.78vw,.78rem)', color: 'rgba(255,255,255,.55)', fontWeight: 300, marginTop: 4 }}>Sáb · 8am–2pm</div>
            <a href="tel:6865510099" style={{ fontSize: 'clamp(.62rem,.78vw,.78rem)', color: 'rgba(255,255,255,.5)', textDecoration: 'none', display: 'inline-block', marginTop: 6, borderBottom: '1px solid rgba(255,255,255,.25)', paddingBottom: 2 }}>686 551 0099</a>
          </div>
        </div>

      </div>

      {/* ── Scroll cue ───────────────────────────────────────────────── */}
      <div
        className="cx-jost cx-bob cx-a6"
        style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          zIndex: 3,
        }}
      >
        <span style={{
          fontSize: '.62rem', letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,.28)',
        }}>Scroll</span>
        <svg width="1" height="28" viewBox="0 0 1 28" fill="none" style={{ width: 1, height: 28 }}>
          <line x1="0.5" y1="0" x2="0.5" y2="28" stroke="rgba(255,255,255,.2)" strokeWidth="1"/>
        </svg>
      </div>

    </section>
  );
}