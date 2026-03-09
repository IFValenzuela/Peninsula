import { useState, useEffect } from 'react';

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
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
                    : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal to-trust-blue rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-navy tracking-tight">Península</span>
                            <span className="text-[10px] font-semibold text-teal tracking-[0.3em] uppercase -mt-1">Ortopedia & Deportiva</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.hasMegaMenu && setMegaOpen(true)}
                                onMouseLeave={() => item.hasMegaMenu && setMegaOpen(false)}
                            >
                                <a
                                    href={item.href || '#'}
                                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy transition-colors rounded-lg hover:bg-gray-100/60 flex items-center gap-1"
                                >
                                    {item.label}
                                    {item.hasMegaMenu && (
                                        <svg className={`w-4 h-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </a>

                                {/* Mega Menu */}
                                {item.hasMegaMenu && megaOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-slide-down" style={{ width: '700px' }}>
                                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-4">
                                            {megaMenuItems.map((mi) => (
                                                <a
                                                    key={mi.title}
                                                    href="#"
                                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-off-white transition-colors group/item"
                                                >
                                                    <div className="text-teal group-hover/item:text-trust-blue transition-colors flex-shrink-0 mt-0.5">
                                                        {mi.icon}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-sm text-navy">{mi.title}</div>
                                                        <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{mi.desc}</div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA + Mobile toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#contacto"
                            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-teal to-teal-dark text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-teal/25 hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Agendar Cita
                        </a>

                        {/* Hamburger */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Abrir menú"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-down">
                    <div className="px-6 py-4 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href || '#'}
                                className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gray-50 rounded-lg transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="block mt-3 text-center bg-gradient-to-r from-teal to-teal-dark text-white font-semibold text-sm px-6 py-3 rounded-full"
                        >
                            Agendar Cita
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
