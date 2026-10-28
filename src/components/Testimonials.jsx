import { useState, useEffect, useCallback, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

// Text controls; the min height keeps a 44px touch target
const navBtn = 'inline-flex items-center min-h-11 text-ink cursor-pointer';

const testimonials = [
  {
    name: 'Alejandro Ruiz', age: 34,
    diagnosis: 'Reconstrucción de LCA', sport: 'Fútbol amateur',
    quote: 'Después de romperme el ligamento cruzado en un partido, pensé que no volvería a jugar. El Dr. Mendoza no solo reconstruyó mi rodilla, sino mi confianza. A los 8 meses ya estaba de vuelta en la cancha.',
    timeframe: '8 meses',
  },
  {
    name: 'María Elena Cortés', age: 45,
    diagnosis: 'Reparación de manguito rotador', sport: 'Natación',
    quote: 'El dolor en mi hombro me impedía hasta levantar el brazo. La Dra. Herrera diseñó un plan integral que combinó cirugía mínimamente invasiva con rehabilitación deportiva. Hoy nado 3 km diarios sin dolor.',
    timeframe: '6 meses',
  },
  {
    name: 'Fernando Castillo', age: 28,
    diagnosis: 'Hernia discal L4-L5', sport: 'CrossFit',
    quote: 'Como atleta de CrossFit, mi espalda era mi punto débil. El Dr. Guzmán realizó una cirugía mínimamente invasiva que me cambió la vida. En 4 meses volví a competir y logré mi mejor marca personal.',
    timeframe: '4 meses',
  },
  {
    name: 'Laura Peña', age: 52,
    diagnosis: 'Reemplazo total de cadera', sport: 'Senderismo',
    quote: 'Caminar era una tortura. Después del reemplazo de cadera, volví a recorrer los senderos de la sierra. El equipo de Península OC me acompañó en cada paso de mi recuperación.',
    timeframe: '5 meses',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const [quoteVisible, setQuoteVisible] = useState(true);
  const pendingIndex = useRef(null);

  const [headerRef, headerStyle] = useReveal();
  const [bodyRef, bodyStyle] = useReveal();

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

  const details = [
    { label: 'Diagnóstico', value: t.diagnosis },
    { label: 'Actividad', value: t.sport },
    { label: 'Recuperación', value: t.timeframe },
  ];

  return (
    <section className="bg-mist py-20 md:py-28" id="testimonios">
      <style>{`
        @keyframes slideUpIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Heading + controls */}
        <div ref={headerRef} style={headerStyle} className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
          <h2 className="t-section">Experiencias de nuestros pacientes</h2>
          <div className="flex items-center gap-6 text-[15px]">
            <button onClick={() => { setAuto(false); prev(); }} className={navBtn}>
              <span className="link-line">Anterior</span>
            </button>
            <span className="text-muted tabular-nums" aria-live="polite">
              {current + 1} / {testimonials.length}
            </span>
            <button onClick={() => { setAuto(false); next(); }} className={navBtn}>
              <span className="link-line">Siguiente</span>
            </button>
          </div>
        </div>

        {/* Quote + patient details */}
        <div
          ref={bodyRef}
          style={bodyStyle}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-10 border-t border-ink/15 pt-10 md:pt-14"
          onMouseEnter={() => setAuto(false)}
          onMouseLeave={() => setAuto(true)}
        >
          <blockquote
            className="lg:col-span-8 font-serif text-ink text-[1.5rem] md:text-[2rem] leading-[1.35] tracking-[-0.01em] max-w-[34ch] min-h-[10.5em] md:min-h-[8.5em]"
            style={{ textIndent: '-.42em', opacity: quoteVisible ? 1 : 0, transition: 'opacity 0.22s ease' }}
          >
            “{t.quote}”
          </blockquote>

          <div className="lg:col-span-4">
            <div key={`name-${current}`} style={{ animation: 'slideUpIn 0.4s cubic-bezier(0.22,1,0.36,1) both' }}>
              <p className="text-ink font-medium">{t.name}</p>
              <p className="t-small text-muted">{t.age} años</p>
            </div>
            <dl className="mt-6 border-t border-ink/15">
              {details.map((row, i) => (
                <div key={`${current}-${i}`} className="flex justify-between gap-6 py-3.5 border-b border-ink/15" style={{ animation: `slideUpIn 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s both` }}>
                  <dt className="t-small text-muted">{row.label}</dt>
                  <dd className="t-small text-ink text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
