const footerLinks = {
    'Especialidades': ['Rodilla y Pierna', 'Hombro y Codo', 'Columna Vertebral', 'Mano y Muñeca', 'Cadera'],
    'Servicios': ['Medicina Deportiva', 'Cirugía Artroscópica', 'Rehabilitación', 'Segunda Opinión'],
    'Clínica': ['Sobre Nosotros', 'Nuestro Equipo', 'Tecnología', 'Blog Médico'],
};

export default function Footer() {
    return (
        <footer id="contacto" style={{ background: '#0A1628', color: '#fff' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Jost:wght@200;300;400&display=swap');
                .ft-link {
                    font-family: 'Jost', sans-serif;
                    font-size: .72rem; font-weight: 300;
                    color: rgba(255,255,255,.38);
                    text-decoration: none;
                    transition: color .2s;
                    letter-spacing: .03em;
                }
                .ft-link:hover { color: rgba(255,255,255,.8); }
                .ft-cta {
                    display: inline-flex; align-items: center; gap: 10px;
                    font-family: 'Jost', sans-serif;
                    font-size: .68rem; font-weight: 300;
                    letter-spacing: .16em; text-transform: uppercase;
                    padding: 13px 28px;
                    text-decoration: none;
                    transition: all .25s;
                    white-space: nowrap;
                }
                .ft-cta-primary {
                    background: transparent;
                    color: rgba(255,255,255,.88);
                    border: 1px solid rgba(255,255,255,.28);
                }
                .ft-cta-primary:hover {
                    border-color: rgba(255,255,255,.65);
                    color: #fff;
                    background: rgba(255,255,255,.06);
                }
                .ft-cta-ghost {
                    background: transparent;
                    color: rgba(255,255,255,.88);
                    border: 1px solid rgba(255,255,255,.28);
                }
                .ft-cta-ghost:hover {
                    border-color: rgba(255,255,255,.65);
                    color: #fff;
                    background: rgba(255,255,255,.06);
                }
                .ft-main-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 40px;
                }
                @media (min-width: 640px) {
                    .ft-main-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 40px;
                    }
                    .ft-main-grid > .ft-brand {
                        grid-column: 1 / -1;
                    }
                }
                @media (min-width: 1024px) {
                    .ft-main-grid {
                        grid-template-columns: 2fr 1fr 1fr 1fr;
                        gap: 48px;
                    }
                    .ft-main-grid > .ft-brand {
                        grid-column: auto;
                    }
                }
            `}</style>

            {/* CTA strip */}
            <div style={{
                borderBottom: '1px solid rgba(255,255,255,.08)',
                padding: 'clamp(48px,6vw,80px) clamp(20px,4vw,56px)',
            }}>
                <div style={{
                    maxWidth: 1400, margin: '0 auto',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', flexWrap: 'wrap', gap: 32,
                }}>
                    <div>
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 'clamp(1.8rem,3.5vw,3rem)',
                            fontWeight: 300, color: '#fff',
                            letterSpacing: '-.02em', lineHeight: 1.1,
                            margin: '0 0 10px',
                        }}>¿Listo para recuperar tu vida activa?</h2>
                        <p style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '.82rem', fontWeight: 300,
                            color: 'rgba(255,255,255,.4)',
                            margin: 0, letterSpacing: '.02em',
                        }}>Llámanos y da el primer paso hacia tu recuperación.</p>
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <a href="tel:6865510099" className="ft-cta ft-cta-primary">
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5A92BE', display: 'inline-block', flexShrink: 0 }} />
                            686 551 0099
                        </a>
                        <a href="https://wa.me/526865510099" target="_blank" rel="noopener noreferrer" className="ft-cta ft-cta-ghost">
                            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212l-.257-.17-2.87.852.782-2.777-.182-.271A8 8 0 1112 20z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Main footer */}
            <div style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(48px,6vw,72px) clamp(20px,4vw,56px)' }}
                className="ft-main-grid">
                {/* Brand */}
                <div className="ft-brand">
                    <div style={{ marginBottom: 20 }}>
                        <div style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: '1.3rem', fontWeight: 300,
                            color: '#fff', letterSpacing: '.02em', lineHeight: 1,
                            marginBottom: 4,
                        }}>Península OC</div>
                        <div style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '.75rem', fontWeight: 300,
                            letterSpacing: '.18em', textTransform: 'uppercase',
                            color: '#5A92BE',
                        }}>Traumatologia y Ortopedia - Terapia Fisica</div>
                    </div>
                    <p style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '.72rem', fontWeight: 300,
                        color: 'rgba(255,255,255,.3)',
                        lineHeight: 1.7, margin: '0 0 24px',
                        maxWidth: 280,
                    }}>Clínica de ortopedia y medicina deportiva de élite en Mexicali, Baja California.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {[
                            { icon: 'phone', text: '686 551 0099', href: 'tel:6865510099' },
                            { icon: 'mail', text: 'recepcion.peninsulaoc@gmail.com', href: 'mailto:recepcion.peninsulaoc@gmail.com' },
                            { icon: 'pin', text: 'Av. Reforma #1089 Esq. Calle C, Mexicali', href: '#' },
                        ].map(item => (
                            <a key={item.text} href={item.href} className="ft-link" style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                                    {item.icon === 'phone' && <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>}
                                    {item.icon === 'mail' && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
                                    {item.icon === 'pin' && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>}
                                </svg>
                                {item.text}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link columns */}
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title}>
                        <h4 style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '.75rem', fontWeight: 400,
                            letterSpacing: '.14em', textTransform: 'uppercase',
                            color: 'rgba(255,255,255,.4)',
                            margin: '0 0 20px',
                        }}>{title}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {links.map(link => (
                                <li key={link}>
                                    <a href="#" className="ft-link">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,.08)',
                padding: '20px clamp(20px,4vw,56px)',
                maxWidth: 1400, margin: '0 auto',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
            }}>
                <p style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '.72rem', fontWeight: 300,
                    color: 'rgba(255,255,255,.25)', margin: 0,
                }}>© 2026 Península OC. Todos los derechos reservados.</p>
                <div style={{ display: 'flex', gap: 24 }}>
                    {['Aviso de Privacidad', 'Términos y Condiciones'].map(l => (
                        <a key={l} href="#" className="ft-link" style={{ fontSize: '.72rem' }}>{l}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}