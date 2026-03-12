import { useState, useEffect, useRef } from 'react';

const navItems = [
    {
        label: 'Especialidades',
        hasMegaMenu: true,
    },
    { label: 'Medicina Deportiva', href: '#medicina-deportiva' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
];

const megaMenuItems = [
    {
        title: 'Rodilla y Pierna',
        desc: 'Lesiones de menisco, ligamentos y articulaciones',
        icon: (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 4v10M24 14c-3 4-5 10-5 16v14M24 14c3 4 5 10 5 16v14" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="14" r="3" />
            </svg>
        ),
    },
    {
        title: 'Hombro y Codo',
        desc: 'Manguito rotador, luxaciones, epicondilitis',
        icon: (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 8v12M14 8c0 6 4 12 10 12s10-6 10-12M24 20v16" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="8" r="3" />
            </svg>
        ),
    },
    {
        title: 'Columna',
        desc: 'Hernias discales, estenosis, escoliosis',
        icon: (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 4v40" strokeLinecap="round" />
                {[8, 16, 24, 32].map(y => (
                    <ellipse key={y} cx="24" cy={y} rx="6" ry="3" />
                ))}
            </svg>
        ),
    },
    {
        title: 'Mano y Muñeca',
        desc: 'Túnel carpiano, fracturas, tendones',
        icon: (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 28V14a2 2 0 114 0v10M20 24V10a2 2 0 114 0v14M24 24V12a2 2 0 114 0v12M28 24V16a2 2 0 114 0v12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 28c0 6 4 12 12 12s10-6 10-12" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Medicina Deportiva',
        desc: 'Rehabilitación atlética de alto rendimiento',
        icon: (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="24" cy="10" r="5" />
                <path d="M24 15v10M18 20l6 5 6-5M20 25l-6 14M28 25l6 14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const megaTimer = useRef(null);
    const openMega = () => { clearTimeout(megaTimer.current); setMegaOpen(true); };
    const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 180); };
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
              background: (scrolled || mobileOpen) ? 'rgba(255,255,255,0.97)' : 'transparent',
              backdropFilter: (scrolled || mobileOpen) ? 'blur(12px)' : 'none',
              borderBottom: (scrolled || mobileOpen) ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
              boxShadow: (scrolled || mobileOpen) ? '0 1px 24px rgba(0,0,0,0.06)' : 'none',
            }}
        >
            <style>{`
                .hdr-bar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
                .hdr-right {
                    position: absolute;
                    right: 0; top: 0; bottom: 0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                @media (min-width: 1024px) {
                    .hdr-bar {
                        display: grid;
                        grid-template-columns: 1fr auto 1fr;
                        position: static;
                    }
                    .hdr-right {
                        position: static;
                        justify-content: flex-end;
                    }
                }
            `}</style>
            <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
                <div className="hdr-bar" style={{ height: 72 }}>

                    {/* ── Logo — far left ── */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
                        <img
                            src={(scrolled || mobileOpen) ? '/LogoWhite.png' : '/Logo.png'}
                            alt="Península OC"
                            style={{
                                height: 36,
                                width: 'auto',
                                maxWidth: 'clamp(120px,30vw,200px)',
                                objectFit: 'contain',
                                transition: 'opacity .3s',
                            }}
                        />
                    </a>

                    {/* ── Nav — centered ── */}
                    <nav className="hidden lg:flex items-center" style={{ gap: 6 }}>
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.hasMegaMenu && openMega()}
                                onMouseLeave={() => item.hasMegaMenu && closeMega()}
                            >
                                <a
                                    href={item.href || '#'}
                                    style={{
                                        fontFamily: "'Jost', sans-serif",
                                        fontSize: '.65rem', fontWeight: 300,
                                        letterSpacing: '.14em', textTransform: 'uppercase',
                                        color: scrolled ? 'rgba(44,40,36,.7)' : 'rgba(255,255,255,.65)',
                                        padding: '8px 14px',
                                        display: 'inline-flex', alignItems: 'center', gap: 5,
                                        textDecoration: 'none',
                                        transition: 'color .2s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = scrolled ? '#1C1917' : '#fff'}
                                    onMouseLeave={e => e.currentTarget.style.color = scrolled ? 'rgba(44,40,36,.7)' : 'rgba(255,255,255,.65)'}
                                >
                                    {item.label}
                                    {item.hasMegaMenu && (
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            style={{ transition: 'transform .2s', transform: megaOpen ? 'rotate(180deg)' : 'none' }}>
                                            <path d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    )}
                                </a>

                                {/* Mega Menu */}
                                {item.hasMegaMenu && megaOpen && (
                                    <div onMouseEnter={openMega} onMouseLeave={closeMega} style={{
                                        position: 'fixed', top: 68, left: 0, right: 0, paddingTop: 4,
                                        background: scrolled ? '#fff' : 'transparent',
                                        backdropFilter: 'none',
                                        WebkitBackdropFilter: 'none',
                                        borderTop: scrolled ? '1px solid rgba(0,0,0,.06)' : '1px solid rgba(255,255,255,.08)',
                                        borderBottom: scrolled ? '1px solid rgba(0,0,0,.07)' : '1px solid rgba(255,255,255,.08)',
                                        boxShadow: 'none',
                                        zIndex: 100,
                                    }}>
                                        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '20px clamp(20px,4vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0 }}>
                                            {megaMenuItems.map((mi, idx) => (
                                                <a key={mi.title} href="#"
                                                    style={{
                                                        display: 'flex', alignItems: 'flex-start', gap: 12,
                                                        padding: '14px 18px',
                                                        textDecoration: 'none',
                                                        borderLeft: idx > 0 ? (scrolled ? '1px solid rgba(0,0,0,.06)' : '1px solid rgba(255,255,255,.1)') : 'none',
                                                        transition: 'background .15s',
                                                    }}
                                                    onMouseEnter={e => e.currentTarget.style.background = scrolled ? 'rgba(0,0,0,.03)' : 'rgba(255,255,255,.07)'}
                                                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                                >
                                                    <div style={{ color: '#5A92BE', flexShrink: 0, marginTop: 2 }}>{mi.icon}</div>
                                                    <div>
                                                        <div style={{ fontFamily:"'Jost',sans-serif", fontSize:'.72rem', fontWeight:400, color: scrolled ? '#1C1917' : 'rgba(255,255,255,.9)', letterSpacing:'.02em', marginBottom: 3 }}>{mi.title}</div>
                                                        <div style={{ fontFamily:"'Jost',sans-serif", fontSize:'.62rem', fontWeight:300, color: scrolled ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,.42)', lineHeight:1.5 }}>{mi.desc}</div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* ── Right — phone + hamburger ── */}
                    <div className="hdr-right">
                        {/* Phone — desktop only */}
                        <a href="tel:6865510099" className="hidden lg:flex" style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '.72rem', fontWeight: 300,
                            letterSpacing: '.08em',
                            color: scrolled ? 'rgba(44,40,36,.65)' : 'rgba(255,255,255,.6)',
                            textDecoration: 'none',
                            transition: 'color .2s',
                            alignItems: 'center', gap: 8,
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = scrolled ? '#1C1917' : '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = scrolled ? 'rgba(44,40,36,.65)' : 'rgba(255,255,255,.6)'}
                        >
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                            </svg>
                            686 551 0099
                        </a>

                        {/* Hamburger — mobile only */}
                        <button
                            className="lg:hidden"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Abrir menú"
                            style={{ color: (scrolled || mobileOpen) ? '#1C1917' : '#fff', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 4px' }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                                {mobileOpen
                                    ? <><path d="M6 18L18 6"/><path d="M6 6l12 12"/></>
                                    : <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>
                                }
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderTop: '1px solid rgba(0,0,0,.07)' }}>
                    <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href || '#'}
                                style={{ fontFamily:"'Jost',sans-serif", fontSize:'.9rem', fontWeight:300, letterSpacing:'.08em', textTransform:'uppercase', color:'rgba(44,40,36,.75)', padding:'14px 8px', textDecoration:'none', borderBottom:'1px solid rgba(0,0,0,.06)' }}
                                onClick={() => setMobileOpen(false)}
                            >{item.label}</a>
                        ))}

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/526865510099?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Pen%C3%ADnsula%20OC."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            style={{
                                marginTop: 16,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                                padding: '14px 20px',
                                background: '#0f2a3f',
                                borderRadius: 12,
                                textDecoration: 'none',
                                fontFamily: "'Jost',sans-serif",
                                fontSize: '.8rem', fontWeight: 400, letterSpacing: '.08em', textTransform: 'uppercase',
                                color: '#fff',
                            }}
                        >
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.85 }}>
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212l-.257-.17-2.87.852.782-2.777-.182-.271A8 8 0 1112 20z"/>
                            </svg>
                            Agendar cita por WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}