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
              background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
              backdropFilter: scrolled ? 'blur(12px)' : 'none',
              borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
              boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.06)' : 'none',
            }}
        >
            <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: 72 }}>

                    {/* ── Logo — far left ── */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
                        <img
                            src={scrolled ? '/LogoWhite.png' : '/Logo.png'}
                            alt="Península OC"
                            style={{
                                height: 40,
                                width: 'auto',
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
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
                            className="lg:hidden p-2"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Abrir menú"
                            style={{ color: scrolled ? '#1C1917' : '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
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
                        <a href="tel:6865510099"
                            style={{ fontFamily:"'Jost',sans-serif", fontSize:'.9rem', fontWeight:300, letterSpacing:'.1em', textTransform:'uppercase', color:'#1C1917', padding:'14px 8px', textDecoration:'none', display:'flex', alignItems:'center', gap:8, marginTop:8, border:'1px solid rgba(28,25,23,.25)' }}
                        >
                            <span style={{ width:6, height:6, borderRadius:'50%', background:'#5A92BE', display:'inline-block' }} />
                            Contactar Clínica
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}