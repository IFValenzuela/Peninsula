import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDoctorBySlug } from '../data/doctors';
import { useReveal, revealStyle } from '../hooks/useReveal';

/* ── small icon helpers ── */
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212l-.257-.17-2.87.852.782-2.777-.182-.271A8 8 0 1112 20z"/>
    </svg>
  );
}

/* ── page ── */
export default function DoctorPage() {
  const { slug } = useParams();
  const doctor = getDoctorBySlug(slug);

  const [visible, setVisible] = useState(false);
  const [bioRef, bioStyle]   = useReveal();
  const [formRef, formStyle] = useReveal();
  const [certRef, certStyle] = useReveal();
  const [specRef, specStyle] = useReveal();
  const [ctaRef, ctaStyle]   = useReveal();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  if (!doctor) return <Navigate to="/equipo" replace />;

  /* fade helper for hero elements */
  const fi = (delay) => revealStyle(visible, delay);

  /* credential summary line */
  const credLine = doctor.credentials.map(c => c.label).join('  ·  ');

  const sectionPad = 'clamp(64px,7vw,104px) clamp(24px,5.5vw,80px)';

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO  —  2-column split: content left / photo right
          On mobile: content stacks above a photo band
      ══════════════════════════════════════════════════════════════ */}
      <section aria-label={`Perfil de ${doctor.name}`}>

        {/* Grid container — md+ is 2 equal columns */}
        <div
          className="md:grid"
          style={{
            gridTemplateColumns: '1fr 1fr',
            minHeight: '100dvh',
            background: '#fff',
          }}
        >
          {/* ── LEFT: text content ── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(112px,14vh,144px) clamp(24px,5.5vw,80px) clamp(48px,6vh,72px)',
          }}>

            {/* Back breadcrumb */}
            <div style={{ marginBottom: 40, ...fi(80) }}>
              <Link to="/equipo" className="link-line text-muted" style={{ fontSize: 15 }}>
                Volver al equipo
              </Link>
            </div>

            {/* Name — no eyebrow above, specialty follows below */}
            <h1 style={{
              fontSize: 'clamp(2.6rem, 4.4vw, 4.5rem)',
              lineHeight: 1.04,
              letterSpacing: '-.015em',
              margin: 0,
              ...fi(180),
            }}>
              {doctor.name}
            </h1>

            {/* Specialty — descriptor below the name, not an eyebrow above */}
            <p className="kicker text-teal-dark" style={{ margin: '20px 0 0', ...fi(300) }}>
              {doctor.specialty}
            </p>

            {/* Credential summary — single readable line */}
            <p className="text-muted" style={{ margin: '12px 0 0', maxWidth: '40ch', ...fi(380) }}>
              {credLine}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36, ...fi(540) }}>
              <a href="tel:6865510099" className="btn btn-primary">
                <PhoneIcon />
                Agendar consulta
              </a>
              <a href="https://wa.me/526865510099" target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>

            {/* Schedule */}
            <p className="t-small text-muted" style={{ margin: '16px 0 0', ...fi(640) }}>
              {doctor.schedule}
            </p>
          </div>

          {/* ── RIGHT: photo — desktop only ── */}
          <div
            className="hidden md:block"
            style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-mist)' }}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: '50% 12%',
              }}
            />
          </div>
        </div>

        {/* Mobile-only photo band — appears below the text content */}
        <div
          className="block md:hidden"
          style={{ height: 320, position: 'relative', overflow: 'hidden' }}
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 12%' }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PHILOSOPHY / BIO
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: sectionPad, borderTop: '1px solid #E3E6EA' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>

          {/* Philosophy quote */}
          <div ref={bioRef} style={bioStyle}>
            <blockquote className="font-serif" style={{
              fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)',
              color: '#0A1628',
              textIndent: '-.42em',
              lineHeight: 1.35,
              margin: '0 0 56px',
              maxWidth: '30ch',
            }}>
              “{doctor.philosophy}”
            </blockquote>
          </div>

          {/* Bio paragraphs — two columns on wide screens */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
            style={{ maxWidth: 1040 }}
          >
            {doctor.bio.map((para, i) => (
              <p key={i} style={{ lineHeight: 1.7, margin: 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Languages */}
          <p style={{ marginTop: 40, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px 0' }}>
            <span className="text-muted" style={{ marginRight: 16 }}>Idiomas</span>
            {doctor.languages.map((lang, i) => (
              <span key={lang} className="text-ink" style={{ display: 'inline-flex', alignItems: 'center' }}>
                {i > 0 && <span aria-hidden="true" style={{ width: 1, height: 14, background: 'currentColor', opacity: .3, margin: '0 12px' }} />}
                {lang}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FORMATION + CERTIFICATIONS  (2-col on desktop)
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-mist)', padding: sectionPad }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">

            {/* Education timeline */}
            <div ref={formRef} style={formStyle}>
              <h2 className="t-section" style={{ margin: '0 0 36px' }}>
                Formación académica
              </h2>
              <div style={{ marginLeft: 4 }}>
                {doctor.education.map((item, i) => (
                  <div key={i} style={{
                    borderLeft: '1px solid #D3D8DE',
                    paddingLeft: 24,
                    paddingBottom: i < doctor.education.length - 1 ? 32 : 0,
                    position: 'relative',
                  }}>
                    {/* Timeline dot */}
                    <div style={{
                      position: 'absolute', left: -4, top: 7,
                      width: 7, height: 7,
                      borderRadius: '50%', background: 'var(--color-primary)',
                    }} />
                    <div className="tabular-nums text-teal-dark" style={{ fontSize: 16, marginBottom: 4 }}>
                      {item.year}
                    </div>
                    <div className="text-ink" style={{ fontSize: '1.125rem', lineHeight: 1.4, marginBottom: 2 }}>
                      {item.degree}
                    </div>
                    <div className="t-small text-muted">
                      {item.institution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div ref={certRef} style={certStyle}>
              <h2 className="t-section" style={{ margin: '0 0 36px' }}>
                Certificaciones
              </h2>
              <ul style={{ borderTop: '1px solid #D3D8DE' }}>
                {doctor.certifications.map((cert, i) => (
                  <li key={i} className="text-ink" style={{ padding: '16px 0', borderBottom: '1px solid #D3D8DE', lineHeight: 1.5 }}>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SPECIALIZATIONS
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: sectionPad }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div ref={specRef} style={{ ...specStyle, marginBottom: 36 }}>
            <h2 className="t-section" style={{ margin: '0 0 12px' }}>
              Especialidades clínicas
            </h2>
            <p className="text-muted" style={{ margin: 0 }}>
              Procedimientos y áreas certificadas en los que el especialista está activo.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 border-t border-line">
            {doctor.specializations.map((spec, i) => (
              <li key={i} className="text-ink-soft" style={{ padding: '14px 0', borderBottom: '1px solid #E3E6EA', lineHeight: 1.5 }}>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PATIENT TESTIMONIALS
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-mist)', padding: sectionPad }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <h2 className="t-section" style={{ margin: '0 0 40px' }}>
            Experiencias de pacientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {doctor.testimonials.map((t, i) => (
              <figure key={i} style={{ margin: 0, paddingTop: 28, borderTop: '1px solid rgba(10,22,40,.15)' }}>
                <blockquote className="font-serif" style={{
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                  textIndent: '-.42em',
                  color: '#0A1628',
                  lineHeight: 1.5, margin: '0 0 20px',
                }}>
                  “{t.text}”
                </blockquote>
                <figcaption>
                  <p className="text-teal-dark" style={{ margin: '0 0 2px' }}>{t.outcome}</p>
                  <p className="t-small text-muted" style={{ margin: 0 }}>{t.name}, {t.age} años</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          APPOINTMENT CTA
      ══════════════════════════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        style={{ background: '#fff', padding: sectionPad, ...ctaStyle }}
      >
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ maxWidth: 620 }}>
            <h2 className="t-section" style={{ margin: '0 0 14px' }}>
              Agenda una consulta con {doctor.title.replace('.', '')}{' '}
              {doctor.name.split(' ').slice(1, 3).join(' ')}
            </h2>
            <p className="t-lead text-muted" style={{ margin: '0 0 32px' }}>
              Llama o escribe por WhatsApp. Te contactaremos para coordinar tu cita.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="tel:6865510099" className="btn btn-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <PhoneIcon />
                686 551 0099
              </a>
              <a href="https://wa.me/526865510099" target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
            <p className="t-small text-muted" style={{ margin: '16px 0 0' }}>
              {doctor.schedule}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
