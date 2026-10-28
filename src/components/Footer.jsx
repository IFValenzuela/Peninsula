import { Link } from 'react-router-dom';

// Every entry points at a page that exists
const footerLinks = {
    'Especialidades': [
        { label: 'Rodilla', to: '/especialidades' },
        { label: 'Hombro', to: '/especialidades' },
        { label: 'Cadera', to: '/especialidades' },
        { label: 'Columna', to: '/especialidades' },
        { label: 'Pie y tobillo', to: '/especialidades' },
    ],
    'Servicios': [
        { label: 'Medicina deportiva', to: '/especialidades' },
        { label: 'Cirugía artroscópica', to: '/especialidades' },
        { label: 'Rehabilitación', to: '/especialidades' },
        { label: 'Segunda opinión', to: '/contacto' },
    ],
    'Clínica': [
        { label: 'Nuestro equipo', to: '/equipo' },
        { label: 'Testimonios', to: '/testimonios' },
        { label: 'Contacto', to: '/contacto' },
    ],
};

export default function Footer() {
    return (
        <footer id="contacto" style={{ background: '#0A1628', color: 'rgba(255,255,255,.72)' }}>
            <style>{`
                .ft-link {
                    font-size: 16px;
                    color: rgba(255,255,255,.72);
                    text-decoration: none;
                    transition: color .2s;
                }
                .ft-link:hover { color: #fff; }
                .ft-main-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 48px;
                }
                @media (min-width: 640px) {
                    .ft-main-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .ft-main-grid > .ft-brand {
                        grid-column: 1 / -1;
                    }
                }
                @media (min-width: 1024px) {
                    .ft-main-grid {
                        grid-template-columns: 2fr 1fr 1fr 1fr;
                    }
                    .ft-main-grid > .ft-brand {
                        grid-column: auto;
                    }
                }
            `}</style>

            {/* CTA strip */}
            <div style={{
                borderBottom: '1px solid rgba(255,255,255,.12)',
                padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,56px)',
            }}>
                <div style={{
                    maxWidth: 1400, margin: '0 auto',
                    display: 'flex', alignItems: 'flex-end',
                    justifyContent: 'space-between', flexWrap: 'wrap', gap: 32,
                }}>
                    <div>
                        <h2 className="t-section" style={{ color: '#fff', margin: '0 0 12px', maxWidth: '20ch' }}>
                            ¿Listo para recuperar tu vida activa?
                        </h2>
                        <p className="t-lead" style={{ color: 'rgba(255,255,255,.72)', margin: 0 }}>
                            Llámanos y da el primer paso hacia tu recuperación.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <a href="tel:6865510099" className="btn btn-light" style={{ fontVariantNumeric: 'tabular-nums' }}>
                            686 551 0099
                        </a>
                        <a href="https://wa.me/526865510099" target="_blank" rel="noopener noreferrer" className="btn btn-line-light">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212l-.257-.17-2.87.852.782-2.777-.182-.271A8 8 0 1112 20z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Main footer */}
            <div style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(56px,6vw,80px) clamp(20px,4vw,56px)' }}
                className="ft-main-grid">
                {/* Brand */}
                <div className="ft-brand">
                    {/* Logo.png is the light-lettering version (LogoWhite.png is the dark one, used on white) */}
                    <Link to="/" aria-label="Península OC, inicio" style={{ display: 'inline-block' }}>
                        <img src="/Logo.png" alt="Península OC" width="1600" height="339" style={{ height: 44, width: 'auto', display: 'block' }} />
                    </Link>
                    <p style={{ fontSize: 16, margin: '20px 0 24px', maxWidth: '34ch', lineHeight: 1.6 }}>
                        Traumatología, ortopedia y terapia física en Mexicali, Baja California.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <li><a href="tel:6865510099" className="ft-link" style={{ fontVariantNumeric: 'tabular-nums' }}>686 551 0099</a></li>
                        <li><a href="mailto:recepcion.peninsulaoc@gmail.com" className="ft-link">recepcion.peninsulaoc@gmail.com</a></li>
                        <li><a href="https://maps.google.com/?q=Av+Reforma+1089+Mexicali+Mexico" target="_blank" rel="noopener noreferrer" className="ft-link">Av. Reforma #1089 Esq. Calle C, Mexicali</a></li>
                    </ul>
                </div>

                {/* Link columns */}
                {Object.entries(footerLinks).map(([title, links]) => (
                    <nav key={title} aria-label={title}>
                        <h4 style={{ fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,.6)', margin: '0 0 18px' }}>{title}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {links.map(link => (
                                <li key={link.label}>
                                    <Link to={link.to} className="ft-link">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
                <div style={{
                    padding: '24px clamp(20px,4vw,56px)',
                    maxWidth: 1400, margin: '0 auto',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
                    fontSize: 15, color: 'rgba(255,255,255,.65)',
                }}>
                    <p style={{ margin: 0 }}>© 2026 Península OC. Todos los derechos reservados.</p>
                    <div style={{ display: 'flex', gap: 24 }}>
                        {['Aviso de privacidad', 'Términos y condiciones'].map(l => (
                            <a key={l} href="#" className="ft-link" style={{ fontSize: 15, color: 'inherit' }}>{l}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
