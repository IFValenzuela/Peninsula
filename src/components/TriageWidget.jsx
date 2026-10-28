import { Link } from 'react-router-dom';
import { useReveal, useRevealStagger } from '../hooks/useReveal';


const bodyParts = [
  { name: 'Rodilla', conditions: 'Ligamentos, menisco y cartílago' },
  { name: 'Hombro', conditions: 'Manguito rotador, luxaciones y tendinitis' },
  { name: 'Cadera', conditions: 'Reemplazo articular y fracturas' },
  { name: 'Columna', conditions: 'Hernias discales, estenosis y dolor crónico' },
  { name: 'Pie y tobillo', conditions: 'Esguinces, fascitis plantar y fracturas' },
];

// surface: 'mist' on the home page (between two white sections), 'white' under the mist PageHeader
const t = {
  title: '',
  lead: 'text-muted',
  rule: 'border-ink/15',
  name: 'text-ink group-hover:text-primary',
  conditions: 'text-muted group-hover:text-ink-soft',
};

function AreaRow({ part, index }) {
  const [ref, style] = useRevealStagger(index);

  return (
    <li ref={ref} style={style} className={`border-b ${t.rule}`}>
      <Link
        to="/equipo"
        aria-label={`${part.name}: ver especialistas`}
        className="group grid grid-cols-[1fr_auto] md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] items-baseline gap-x-6 gap-y-1 py-6 md:py-8 cursor-pointer"
      >
        <span className={`col-start-1 row-start-1 font-serif text-[1.75rem] md:text-[2.25rem] leading-tight tracking-[-0.015em] transition-colors duration-300 ${t.name}`}>
          {part.name}
        </span>
        <span className={`col-start-1 row-start-2 md:col-start-2 md:row-start-1 text-base transition-colors duration-300 ${t.conditions}`}>
          {part.conditions}
        </span>
        <span className="col-start-2 row-start-1 md:col-start-3 justify-self-end link-line text-[15px] text-ink">
          Consultar
        </span>
      </Link>
    </li>
  );
}

export default function TriageWidget({ surface = 'mist' }) {
  const [headerRef, headerStyle] = useReveal();

  return (
    <section className={`py-20 md:py-28 ${surface === 'white' ? 'bg-white' : 'bg-mist'}`} id="triage">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-x-10 gap-y-12">
        <div ref={headerRef} style={headerStyle} className="lg:col-span-4 self-start">
          <h2 className={`t-section ${t.title}`}>Área de atención</h2>
          <p className={`t-lead mt-5 max-w-[34ch] ${t.lead}`}>
            Elige la zona afectada y te orientaremos con el especialista adecuado para tu caso.
          </p>
          {/* Solid white on the mist surface; outlined where the section sits on white */}
          <Link to="/contacto" className={`btn ${surface === 'white' ? 'btn-line' : 'btn-light'} mt-8`}>Agendar valoración</Link>
        </div>

        <ul className={`lg:col-span-8 border-t ${t.rule}`}>
          {bodyParts.map((part, i) => (
            <AreaRow key={part.name} part={part} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
