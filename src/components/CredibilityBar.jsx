import { REVEAL, useInViewOnce, useReveal } from '../hooks/useReveal';

const EASE = REVEAL.ease;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Credentials as one centered statement rather than a grid of boxes.
// Every claim here is backed by src/data/doctors.js (certifications, HSS and Mayo Clinic fellowships).
export default function CredibilityBar() {
  // Plays once, like every other reveal on the site
  const [headRef, visible] = useInViewOnce(0.3);
  const [leadRef, leadStyle] = useReveal();

  // Each line rises out of its own mask as the section slides over the hero
  const line = (delayMs) => prefersReducedMotion() ? { display: 'block' } : {
    display: 'block',
    transform: visible ? 'translateY(0)' : 'translateY(106%)',
    transition: `transform 1100ms ${EASE} ${delayMs}ms`,
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <h2 ref={headRef} className="font-serif text-[1.875rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.1] tracking-[-0.015em]">
          <span className="block overflow-hidden pb-[0.08em]">
            <span style={line(0)}>Ortopedia y medicina deportiva</span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <span style={line(120)}>con estándares internacionales, en Mexicali.</span>
          </span>
        </h2>
        <p ref={leadRef} style={leadStyle} className="text-base md:text-[17px] leading-relaxed text-muted mt-6 md:mt-8 max-w-[88ch] mx-auto">
          Especialistas certificados por su consejo, con formación en Hospital for Special Surgery y Mayo Clinic.
          {/* One sentence per line on desktop */}
          <br className="hidden lg:block" />
          {' '}Cirugía mínimamente invasiva y atención completa en español e inglés.
        </p>
      </div>
    </section>
  );
}
