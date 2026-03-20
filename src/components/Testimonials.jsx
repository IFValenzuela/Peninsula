import { useState, useEffect, useCallback, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    name: 'Alejandro Ruiz', age: 34,
    diagnosis: 'Reconstrucción de LCA', sport: 'Fútbol Amateur',
    quote: 'Después de romperme el ligamento cruzado en un partido, pensé que no volvería a jugar. El Dr. Mendoza no solo reconstruyó mi rodilla, sino mi confianza. A los 8 meses ya estaba de vuelta en la cancha.',
    timeframe: '8 meses de recuperación',
  },
  {
    name: 'María Elena Cortés', age: 45,
    diagnosis: 'Reparación de Manguito Rotador', sport: 'Natación',
    quote: 'El dolor en mi hombro me impedía hasta levantar el brazo. La Dra. Herrera diseñó un plan integral que combinó cirugía mínimamente invasiva con rehabilitación deportiva. Hoy nado 3 km diarios sin dolor.',
    timeframe: '6 meses de recuperación',
  },
  {
    name: 'Fernando Castillo', age: 28,
    diagnosis: 'Hernia Discal L4-L5', sport: 'CrossFit',
    quote: 'Como atleta de CrossFit, mi espalda era mi punto débil. El Dr. Guzmán realizó una cirugía mínimamente invasiva que me cambió la vida. En 4 meses volví a competir y logré mi mejor marca personal.',
    timeframe: '4 meses de recuperación',
  },
  {
    name: 'Laura Peña', age: 52,
    diagnosis: 'Reemplazo Total de Cadera', sport: 'Senderismo',
    quote: 'Caminar era una tortura. Después del reemplazo de cadera, volví a recorrer los senderos de la sierra. El equipo de Península OC me acompañó en cada paso de mi recuperación.',
    timeframe: '5 meses de recuperación',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const [quoteVisible, setQuoteVisible] = useState(true);
  const pendingIndex = useRef(null);

  // Left panel — left side
  const [leftRef, leftStyle] = useReveal('left');
  // Right panel — right side
  const [rightRef, rightStyle] = useReveal('right');
  // Header — left
  const [headerRef, headerStyle] = useReveal('left');

  const goTo = useCallback((index) => {
    if (index === current) return;
    setQuoteVisible(false);
    pendingIndex.current = index;
  }, [current]);

  useEffect(() => {
    if (!quoteVisible && pendingIndex.current !== null) {
      const t = setTimeout(() => {
        setCurrent(pendingIndex.current);
        pendingIndex.current = null;
        setQuoteVisible(true);
      }, 220);
      return () => clearTimeout(t);
    }
  }, [quoteVisible]);

  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length), [current, goTo]);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [auto, next]);

  const t = testimonials[current];

  return (
    <section className="bg-white" id="testimonios" style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,4vw,56px)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        .tm-nav-btn {
          width: 44px; height: 44px;
          border: 1px solid rgba(0,0,0,.15);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: border-color .3s ease, background .3s ease;
        }
        .tm-nav-btn:hover { border-color: rgba(0,0,0,.4); background: rgba(0,0,0,.03); }
        .tm-grid {
          display: grid; grid-template-columns: 1fr;
          border: 1px solid rgba(0,0,0,.09);
          box-shadow: 0 8px 48px rgba(0,0,0,.08), 0 2px 12px rgba(0,0,0,.04);
        }
        @media (min-width: 768px) {
          .tm-grid { grid-template-columns: 1fr 2fr; }
          .tm-left-panel { border-right: 1px solid rgba(0,0,0,.09); border-bottom: none !important; }
        }
        @keyframes slideUpIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Header — left reveal */}
        <div ref={headerRef} style={{ ...headerStyle, marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, background: '#5A92BE' }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '.62rem', fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#5A92BE' }}>
              Testimonios
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 300, color: '#1C1917', letterSpacing: '-.02em', lineHeight: 1.1, margin: 0 }}>
            Experiencias de nuestros pacientes.
          </h2>
        </div>

        {/* Card — left panel left, right panel right */}
        <div className="tm-grid" onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}>

          {/* Left — left reveal */}
          <div
            ref={leftRef}
            style={leftStyle}
            className="tm-left-panel"
            style2={{ padding: 'clamp(20px,4vw,52px)', background: '#FAFAF9', borderBottom: '1px solid rgba(0,0,0,.09)', display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <div style={{ padding: 'clamp(20px,4vw,52px)', background: '#FAFAF9', borderBottom: '1px solid rgba(0,0,0,.09)', display: 'flex', flexDirection: 'column', gap: 24, ...leftStyle }}>
              <div style={{ overflow: 'hidden' }}>
                <div key={`name-${current}`} style={{ animation: 'slideUpIn 0.4s cubic-bezier(0.22,1,0.36,1) both' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 300, color: '#1C1917', lineHeight: 1.2, marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '.68rem', fontWeight: 300, color: 'rgba(0,0,0,.35)', letterSpacing: '.06em' }}>{t.age} años</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid rgba(0,0,0,.08)' }}>
                {[
                  { label: 'Diagnóstico', value: t.diagnosis },
                  { label: 'Actividad', value: t.sport },
                  { label: 'Resultado', value: t.timeframe, accent: true },
                ].map((row, i) => {
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                  const delay = isMobile ? i * 0.03 : i * 0.06; // 30ms on mobile vs 60ms on desktop
                  return (
                    <div key={`${current}-${i}`} style={{ padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,.08)', animation: `slideUpIn 0.4s cubic-bezier(0.22,1,0.36,1) ${delay}s both` }}>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '.65rem', fontWeight: 300, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(0,0,0,.35)', marginBottom: 5 }}>{row.label}</div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '.8rem', fontWeight: 400, color: row.accent ? '#4A7EA8' : '#1C1917' }}>{row.value}</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{ width: i === current ? 24 : 6, height: 6, background: i === current ? '#4A7EA8' : 'rgba(0,0,0,.15)', border: 'none', cursor: 'pointer', padding: 0, transition: 'width .3s cubic-bezier(0.22,1,0.36,1), background .3s ease', borderRadius: 3 }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right — right reveal */}
          <div ref={rightRef} style={{ ...rightStyle, padding: 'clamp(24px,5vw,64px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}>
            <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.1rem, 2vw, 1.75rem)', fontWeight: 300, fontStyle: 'italic', color: '#1C1917', lineHeight: 1.6, margin: 0, opacity: quoteVisible ? 1 : 0, transition: 'opacity 0.22s ease' }}>
              "{t.quote}"
            </blockquote>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={prev} className="tm-nav-btn" aria-label="Anterior">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={next} className="tm-nav-btn" aria-label="Siguiente">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
