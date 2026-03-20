import { useEffect, useRef, useState } from 'react';

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

// Blur + rise — single shared function
function r(visible, delayMs, durationMs = 900) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(18px)',
    filter: visible ? 'blur(0px)' : 'blur(4px)',
    transition: visible
      ? `opacity ${durationMs}ms ${EASE} ${delayMs}ms, transform ${durationMs}ms ${EASE} ${delayMs}ms, filter ${Math.round(durationMs * 0.6)}ms ${EASE} ${delayMs}ms`
      : 'none',
  };
}

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  const done = useRef(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let s = 0; const step = to / 60;
        const t = setInterval(() => {
          s += step;
          if (s >= to) { setVal(to); clearInterval(t); }
          else setVal(Math.floor(s));
        }, 30);
      }
    }, { threshold: 0.4 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Replays every time section enters/leaves
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!photoRef.current) return;
      photoRef.current.style.transform = `scale(1) translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Timing — fully visible by ~2s (desktop) / ~1s (mobile) ──────────────────────────────
  const isMobile = window.innerWidth < 768;
  const W = isMobile ? 70 : 180; // ms between words — much faster on mobile
  const initialDelay = isMobile ? 200 : 500; // start sooner on mobile
  const T = {
    photo:    0,
    eyebrow:  isMobile ? 150 : 300,
    w1:       initialDelay,              // Recupera
    w2:       initialDelay + W,          // lo
    w3:       initialDelay + W * 2,      // que
    w4:       initialDelay + W * 3,      // más
    w5:       initialDelay + W * 4,      // importa.
    // Everything else lands together after last word
    rest:     initialDelay + W * 4 + (isMobile ? 150 : 300),
    // Right side — same moment as rest
    right:    initialDelay + W * 4 + (isMobile ? 150 : 300),
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      style={{ position: 'relative', width: '100%', height: '100svh', minHeight: 600, overflow: 'hidden', background: '#060C08' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        .cx-corm { font-family: 'Cormorant Garamond', Georgia, serif; }
        .cx-jost  { font-family: 'Jost', system-ui, sans-serif; }

        /* Original subtle breathe — fades in, very slight scale */
        @keyframes cx-photo-in {
          from { opacity: 0; transform: scale(1.04) translateY(0px); }
          to   { opacity: 1; transform: scale(1.0) translateY(0px); }
        }
        /* Continuous breathe after entrance */
        @keyframes cx-breathe {
          0%,100% { transform: scale(1.0); }
          50%      { transform: scale(1.025); }
        }
        @keyframes cx-bob {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(6px); }
        }
        @keyframes cx-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(90,146,190,.5); }
          60%      { box-shadow: 0 0 0 5px rgba(90,146,190,0); }
        }

        .cx-photo {
          animation:
            cx-photo-in 1.8s ${EASE} 0s both,
            cx-breathe 18s ease-in-out 2s infinite;
        }
        .cx-bob   { animation: cx-bob 3.5s ease-in-out infinite; }
        .cx-pulse { animation: cx-pulse 2.5s ease infinite; }

        .cx-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: rgba(255,255,255,.55);
          font-family: 'Jost', sans-serif; font-size: .68rem; font-weight: 300;
          letter-spacing: .16em; text-transform: uppercase;
          padding-bottom: 4px; border: none;
          border-bottom: 1px solid rgba(255,255,255,.18);
          text-decoration: none; cursor: pointer;
          transition: color .4s ${EASE}, border-color .4s ${EASE}, gap .3s ${EASE};
        }
        .cx-ghost:hover { color: rgba(255,255,255,.9); border-color: rgba(255,255,255,.45); gap: 13px; }

        .cx-cta-wrap:hover .cx-cta-line  { background: rgba(255,255,255,.7) !important; }
        .cx-cta-wrap:hover .cx-cta-text  { color: #fff !important; }
        .cx-cta-wrap:hover .cx-cta-arrow { transform: translateX(5px) !important; }
        .cx-cta-arrow { transition: transform 0.4s ${EASE}; }

        .cx-float { display: block; }
        body.mega-open .cx-float,
        body.mega-open .cx-content { opacity: 0; pointer-events: none; }

        @media (max-width: 900px) {
          .cx-float, .cx-stats { display: none !important; }
        }
        @media (max-width: 768px) {
          .cx-word { font-size: clamp(2.6rem, 9vw, 4.2rem) !important; }
          .cx-accolades { display: none !important; }
        }
      `}</style>

      {/* ── PHOTO — original subtle breathe ── */}
      <img
        ref={photoRef}
        src="/clinic.png"
        alt="Clínica Península OC"
        className="cx-photo"
        onError={e => { e.target.src = '/clinic.jpg'; }}
        style={{
          position: 'absolute',
          top: '-10%', left: 0, right: 0,
          width: '100%', height: '120%',
          objectFit: 'cover', objectPosition: '50% 38%',
          willChange: 'transform',
          filter: 'brightness(.92) saturate(.8) contrast(1.05)',
        }}
      />

      {/* ── OVERLAYS ── */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(8,14,10,.32) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 'auto 0 0', height: '68%', background: 'linear-gradient(to top, rgba(6,12,8,.72) 0%, rgba(6,12,8,.3) 35%, transparent 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, rgba(6,12,8,.35) 0%, transparent 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(20,30,22,.14) 0%, rgba(40,20,5,.18) 100%)', mixBlendMode: 'multiply', pointerEvents: 'none' }} />

      {/* ── LEFT CONTENT ── */}
      <div className="cx-content" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(20px,4vw,48px) clamp(20px,4vw,56px) clamp(28px,4vw,52px)', zIndex: 2 }}>

        {/* Eyebrow */}
        <div className="cx-jost" style={{ marginBottom: 24, ...r(visible, T.eyebrow) }}>
          <span style={{ fontSize: '.62rem', fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.38)' }}>
            Servicio Ortopédico Integral · Mexicali
          </span>
        </div>

        {/* Headline — word by word, 180ms stagger */}
        <h1 className="cx-corm" style={{ margin: 0, padding: 0 }}>
          {/* Line 1 */}
          <div style={{ display: 'flex', gap: '0.7em', alignItems: 'baseline', lineHeight: 1.0 }}>
            {[
              { word: 'Recupera', t: T.w1 },
              { word: 'lo',       t: T.w2 },
              { word: 'que',      t: T.w3 },
            ].map(({ word, t }) => (
              <span key={word} className="cx-word" style={{ display: 'inline-block', fontSize: 'clamp(3rem,6.5vw,6.5rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.025em', ...r(visible, t, 1300) }}>
                {word}
              </span>
            ))}
          </div>
          {/* Line 2 */}
          <div style={{ display: 'flex', gap: '0.7em', alignItems: 'baseline', lineHeight: 1.0, marginTop: '0.05em' }}>
            {[
              { word: 'más',      t: T.w4 },
              { word: 'importa.', t: T.w5 },
            ].map(({ word, t }) => (
              <span key={word} className="cx-word" style={{ display: 'inline-block', fontSize: 'clamp(3rem,6.5vw,6.5rem)', fontWeight: 300, color: '#C8D8E8', letterSpacing: '-.025em', fontStyle: 'italic', ...r(visible, t, 1300) }}>
                {word}
              </span>
            ))}
          </div>
        </h1>

        {/* Teal rule */}
        <div style={{ margin: '28px 0 26px', height: 1, width: 44, overflow: 'hidden' }}>
          <div style={{
            height: '100%', background: '#5A92BE', transformOrigin: 'left',
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transition: visible ? `transform 800ms ${EASE} ${T.rest}ms` : 'none',
          }} />
        </div>

        {/* Body + CTAs — all land together */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            <p className="cx-jost" style={{ fontSize: 'clamp(.8rem,.9vw,.9rem)', fontWeight: 300, color: 'rgba(255,255,255,.46)', lineHeight: 1.85, maxWidth: 380, margin: 0, letterSpacing: '.015em', ...r(visible, T.rest) }}>
              Cirugía avanzada y rehabilitación de alto rendimiento para que vuelvas a hacer lo que amas — sin dolor.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 36, flexWrap: 'wrap', ...r(visible, T.rest) }}>
              {/* Line-draw CTA */}
              <a href="tel:6865510099" className="cx-cta-wrap" style={{ display: 'inline-flex', flexDirection: 'column', gap: 10, textDecoration: 'none', cursor: 'pointer' }}>
                <div style={{ position: 'relative', height: 1, width: 'clamp(160px,18vw,210px)' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,.1)' }} />
                  <div className="cx-cta-line" style={{
                    position: 'absolute', inset: 0, background: 'rgba(255,255,255,.5)', transformOrigin: 'left',
                    transform: visible ? 'scaleX(1)' : 'scaleX(0)',
                    transition: visible ? `transform 800ms ${EASE} ${T.rest + 100}ms` : 'none',
                  }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="cx-pulse" style={{ width: 5, height: 5, borderRadius: '50%', background: '#5A92BE', flexShrink: 0 }} />
                  <span className="cx-jost cx-cta-text" style={{ fontSize: '.68rem', fontWeight: 300, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.72)', transition: `color 0.4s ${EASE}` }}>
                    Contactar Clínica
                  </span>
                  <svg className="cx-cta-arrow" width="16" height="8" viewBox="0 0 16 8" fill="none" style={{ opacity: .5 }}>
                    <line x1="0" y1="4" x2="13" y2="4" stroke="white" strokeWidth="1"/>
                    <polyline points="9,1 13,4 9,7" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>

              {/* Ghost */}
              <a href="#nosotros" className="cx-ghost">
                Conocer el equipo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="cx-stats" style={{ display: 'flex', alignItems: 'stretch', ...r(visible, T.rest) }}>
            {[{ n: 15, s: '+', l: 'Años de\nexperiencia' }, { n: 5000, s: '+', l: 'Cirugías\nexitosas' }].map((st, i) => (
              <div key={st.l} style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '0 clamp(12px,2vw,32px)', borderLeft: i > 0 ? '1px solid rgba(255,255,255,.1)' : 'none', textAlign: 'right' }}>
                <span className="cx-corm" style={{ fontSize: 'clamp(1.4rem,2vw,2.2rem)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>
                  <Counter to={st.n} suffix={st.s} />
                </span>
                <span className="cx-jost" style={{ fontSize: '.62rem', fontWeight: 300, color: 'rgba(255,255,255,.32)', letterSpacing: '.14em', textTransform: 'uppercase', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                  {st.l}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations — all at once with rest */}
        <div className="cx-jost cx-accolades" style={{ marginTop: 28, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', ...r(visible, T.rest, 800) }}>
          <span style={{ fontSize: '.6rem', fontWeight: 300, color: 'rgba(255,255,255,.22)', letterSpacing: '.18em', textTransform: 'uppercase' }}>Avales</span>
          {['CMO', 'FIFA Med', 'HSS Fellow', 'Mayo Clinic'].map(a => (
            <span key={a} style={{ fontSize: '.63rem', fontWeight: 300, color: 'rgba(255,255,255,.32)', padding: '3px 10px', border: '1px solid rgba(255,255,255,.08)', letterSpacing: '.06em' }}>{a}</span>
          ))}
        </div>
      </div>

      {/* ── RIGHT SIDE — same moment as rest, icon→text→link stagger ── */}
      <div className="cx-float" style={{ position: 'absolute', top: 'max(88px,12vh)', right: 'clamp(20px,3vw,52px)', zIndex: 4, display: 'flex', flexDirection: 'column', gap: 'clamp(20px,2.5vh,34px)', width: 'clamp(230px,20vw,310px)' }}>

        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{ flexShrink: 0, marginTop: 3, ...r(visible, T.right, 800) }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div className="cx-jost">
            <div style={{ ...r(visible, T.right + 80, 800) }}>
              <div style={{ fontSize: '.92rem', color: 'rgba(255,255,255,.85)', fontWeight: 300, lineHeight: 1.5 }}>Av. Reforma #1089 Esq. Calle C</div>
              <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.42)', fontWeight: 300, marginTop: 4 }}>Mexicali, Baja California</div>
            </div>
            <div style={{ ...r(visible, T.right + 160, 800) }}>
              <a href="https://maps.google.com/?q=Av+Reforma+1089+Mexicali+Mexico" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.36)', textDecoration: 'none', display: 'inline-block', marginTop: 8, borderBottom: '1px solid rgba(255,255,255,.16)', paddingBottom: 2, transition: `color 0.4s ${EASE}` }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,.72)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.36)'}
              >Ver en mapa</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,.08)', ...r(visible, T.right + 200, 700) }} />

        {/* Hours */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{ flexShrink: 0, marginTop: 3, ...r(visible, T.right + 250, 800) }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div className="cx-jost">
            <div style={{ ...r(visible, T.right + 330, 800) }}>
              <div style={{ fontSize: '.92rem', color: 'rgba(255,255,255,.85)', fontWeight: 300, lineHeight: 1.5 }}>Lun–Vie &amp; Dom · 8am–8pm</div>
              <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.42)', fontWeight: 300, marginTop: 4 }}>Sáb · 8am–2pm</div>
            </div>
            <div style={{ ...r(visible, T.right + 410, 800) }}>
              <a href="tel:6865510099"
                style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.36)', textDecoration: 'none', display: 'inline-block', marginTop: 8, borderBottom: '1px solid rgba(255,255,255,.16)', paddingBottom: 2, transition: `color 0.4s ${EASE}` }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,.72)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.36)'}
              >686 551 0099</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCROLL CUE ── */}
      <div className="cx-jost cx-bob" style={{ position: 'absolute', bottom: 28, left: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 3, ...r(visible, T.rest + 200, 800) }}>
        <span style={{ fontSize: '.58rem', letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.18)' }}>Scroll</span>
        <svg width="1" height="28" viewBox="0 0 1 28" fill="none">
          <line x1="0.5" y1="0" x2="0.5" y2="28" stroke="rgba(255,255,255,.14)" strokeWidth="1"/>
        </svg>
      </div>
    </section>
  );
}