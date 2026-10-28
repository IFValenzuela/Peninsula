import { useEffect, useRef, useState } from 'react';
import { REVEAL, revealStyle, useInViewOnce } from '../hooks/useReveal';

const EASE = REVEAL.ease;

// Hero photo widths generated in public/hero (1200 → 5120 covers 5K / 8K-class screens)
const HERO_SIZES = [1200, 1920, 2560, 3840, 5120];
const HERO_SIZES_ATTR = '(orientation: portrait) 100vh, 100vw';

// Headline line rising out of an overflow mask
function mask(visible, delayMs) {
  return {
    display: 'block',
    transform: visible ? 'translateY(0)' : 'translateY(106%)',
    transition: `transform 1100ms ${EASE} ${delayMs}ms`,
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
  // Entrance plays once on load; scrolling back up doesn't replay it
  const [sectionRef, visible] = useInViewOnce(0.05);

  // Curtain: expose the hero's height so .curtain can pin it correctly at any viewport size
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => el.style.setProperty('--curtain-h', `${el.offsetHeight}px`));
    ro.observe(el);
    return () => ro.disconnect();
  }, [sectionRef]);

  // Touch devices: lock the hero to the height it opened with. Mobile address bars
  // grow/shrink the viewport while scrolling; a viewport-sized hero would resize and its
  // cover-fit photo would visibly zoom. Only a width change (rotation) re-measures.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !window.matchMedia('(pointer: coarse)').matches) return;
    let width = window.innerWidth;
    const lock = () => el.style.setProperty('--hero-h', `${window.innerHeight}px`);
    lock();
    const onResize = () => {
      if (window.innerWidth === width) return; // address bar moved — ignore
      width = window.innerWidth;
      lock();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [sectionRef]);

  // ── Timing — fully visible by ~1.6s ─────────────────────────────
  const T = {
    eyebrow: 300,
    line1:   450,
    line2:   570,
    rest:    1000,
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="curtain"
      style={{ width: '100%', height: 'var(--hero-h, 100svh)', minHeight: 600, overflow: 'hidden', background: '#1F252C' }}
    >
      <style>{`
        @keyframes cx-photo-in {
          from { opacity: 0; transform: scale(1.06); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes cx-photo-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .cx-photo-wrap { animation: cx-photo-in 1.8s ${EASE} both; }
        /* Phones: fade only — a scale on a small screen reads as a zoom */
        @media (max-width: 768px), (pointer: coarse) {
          .cx-photo-wrap { animation-name: cx-photo-fade; }
        }
        .cx-photo-pos { object-position: 50% 38%; }
        @media (max-width: 768px) {
          .cx-photo-pos { object-position: 75% 38%; }
        }


        @media (max-width: 900px) {
          .cx-stats { display: none !important; }
        }
        /* Keep the bottom row clear of the floating WhatsApp button (desktop only) */
        @media (min-width: 1024px) {
          .cx-content { padding-bottom: 104px !important; }
        }
        @media (max-width: 639px) {
          .cx-ctas { flex-direction: column; align-items: stretch !important; width: 100%; max-width: 360px; }
        }
      `}</style>

      {/* ── PHOTO ── */}
      <div className="cx-photo-wrap" style={{ position: 'absolute', inset: 0 }}>
        {/* Built from source-images/HeroUpscaled.png (7680², faithful upscale of the original).
            AVIF first, WebP fallback. Portrait phones fill the screen's height, so they size by vh. */}
        <picture>
          <source
            type="image/avif"
            srcSet={HERO_SIZES.map(w => `/hero/clinic-${w}.avif ${w}w`).join(', ')}
            sizes={HERO_SIZES_ATTR}
          />
          <source
            type="image/webp"
            srcSet={HERO_SIZES.map(w => `/hero/clinic-${w}.webp ${w}w`).join(', ')}
            sizes={HERO_SIZES_ATTR}
          />
          <img
            src="/hero/clinic-1920.webp"
            fetchPriority="high"
            alt="Clínica Península OC"
            className="cx-photo-pos photo-tone"
            onError={e => { e.target.src = '/clinic.jpg'; }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
            }}
          />
        </picture>
      </div>

      {/* ── OVERLAYS — one for the copy, one for the header ── */}
      <div style={{ position: 'absolute', inset: 'auto 0 0', height: '75%', background: 'linear-gradient(to top, rgba(10,22,40,.82) 0%, rgba(10,22,40,.4) 45%, transparent 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 220, background: 'linear-gradient(to bottom, rgba(10,22,40,.45) 0%, transparent 100%)', pointerEvents: 'none' }} />

      {/* ── LEFT CONTENT ── */}
      {/* Copy sits on the left edge, clear of the door graphic in the photo */}
      <div className="cx-content" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(20px,4vw,48px) clamp(20px,4vw,56px) clamp(28px,4vw,52px)', zIndex: 2 }}>

        {/* Eyebrow */}
        <p className="kicker" style={{ margin: '0 0 24px', color: 'rgba(255,255,255,.8)', ...revealStyle(visible, T.eyebrow) }}>
          Servicio ortopédico integral · Mexicali
        </p>

        {/* Headline — two lines rising out of a mask. The second line is highlighted by color alone (soft brand blue): same weight, upright. */}
        <h1 style={{ margin: 0, color: '#fff', fontSize: 'clamp(2.75rem,6.5vw,6.5rem)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '.08em' }}>
            <span style={{ ...mask(visible, T.line1), fontWeight: 300 }}>Recupera lo que</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '.12em' }}>
            <span style={{ ...mask(visible, T.line2), fontWeight: 300, color: '#9DC0DE' }}>más importa.</span>
          </span>
        </h1>

        {/* Body + CTAs — all land together */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, marginTop: 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

            <p style={{ fontSize: 'clamp(1rem,1.2vw,1.125rem)', color: 'rgba(255,255,255,.82)', lineHeight: 1.6, maxWidth: '38ch', margin: 0, ...revealStyle(visible, T.rest) }}>
              Cirugía avanzada y rehabilitación de alto rendimiento para que vuelvas a hacer lo que amas, sin dolor.
            </p>

            <div className="cx-ctas" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', ...revealStyle(visible, T.rest + 80) }}>
              <a href="tel:6865510099" className="btn btn-light">Agendar consulta</a>
              <a href="#nosotros" className="btn btn-line-light">Conocer al equipo</a>
            </div>
          </div>

          {/* Stats */}
          <div className="cx-stats" style={{ display: 'flex', alignItems: 'stretch', ...revealStyle(visible, T.rest) }}>
            {[{ n: 15, s: '+', l: 'Años de experiencia' }, { n: 3500, s: '+', l: 'Cirugías realizadas' }].map((st, i) => (
              <div key={st.l} style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '0 clamp(16px,2vw,32px)', borderLeft: i > 0 ? '1px solid rgba(255,255,255,.2)' : 'none', textAlign: 'right' }}>
                <span className="t-num" style={{ fontSize: 'clamp(2rem,2.6vw,2.75rem)', color: '#fff' }}>
                  <Counter to={st.n} suffix={st.s} />
                </span>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,.85)' }}>
                  {st.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
