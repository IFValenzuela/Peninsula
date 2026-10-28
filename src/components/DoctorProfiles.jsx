import { Link } from 'react-router-dom';
import { useReveal, useRevealStagger } from '../hooks/useReveal';
import { doctors } from '../data/doctors';

// Every doctor gets the same card — no one is featured over the others
function DoctorCard({ doc, index }) {
  const [ref, style] = useRevealStagger(index);

  return (
    <Link to={`/equipo/${doc.id}`} ref={ref} style={style} className="group flex flex-col cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        <img
          src={doc.image}
          alt={doc.name}
          loading="lazy"
          className="photo-zoom absolute inset-0 w-full h-full object-top"
        />
      </div>
      <h3 className="t-card mt-6">{doc.name}</h3>
      <p className="text-base text-teal-dark mt-1.5">{doc.specialty}</p>
      <ul className="mt-6 border-t border-line flex-1">
        {doc.credentials.map((cred, j) => (
          <li key={j} className="t-small text-ink-soft py-3 border-b border-line">
            {cred.label}
          </li>
        ))}
      </ul>
      <span className="link-line text-ink mt-6 self-start">Ver perfil</span>
    </Link>
  );
}

export default function DoctorProfiles() {
  const [headerRef, headerStyle] = useReveal();

  return (
    <section className="py-20 md:py-28 bg-white" id="nosotros">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div ref={headerRef} style={headerStyle} className="mb-12 md:mb-16 max-w-2xl">
          <h2 className="t-section">Conoce a nuestros especialistas</h2>
          <p className="t-lead mt-5 text-muted max-w-[46ch]">
            Cada especialista combina formación internacional con un compromiso personal por tu recuperación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-16">
          {doctors.map((doc, i) => (
            <DoctorCard key={doc.id} doc={doc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
