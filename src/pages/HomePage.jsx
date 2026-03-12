import Hero from '../components/Hero'
import CredibilityBar from '../components/CredibilityBar'
import { Link } from 'react-router-dom'

// Google Fonts import for Figtree and Noto Sans
// Add this to index.html or main CSS if not already present
// @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;700&display=swap');

const quickLinks = [
    { name: 'Rodilla', path: '/especialidades', icon: '🦵' },
    { name: 'Hombro', path: '/especialidades', icon: '💪' },
    { name: 'Columna', path: '/especialidades', icon: '🧍' },
    { name: 'Cadera', path: '/especialidades', icon: '🏃' },
    { name: 'Pie y Tobillo', path: '/especialidades', icon: '🦶' },
]

    return (
        <>
            <div className="relative">
                <Hero />
                {/* Floating CTA button for quick appointment */}
                <a
                    href="#contacto"
                    className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#5A92BE] to-[#4A7EA8] text-white font-bold text-lg px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline-[#5A92BE] focus-visible:outline focus-visible:outline-4 animate-float"
                    aria-label="Agendar cita rápida"
                    tabIndex={0}
                >
                    <svg className="w-5 h-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Agendar Cita
                </a>
                <CredibilityBar />
            </div>

            {/* Quick Triage Preview */}
            <section
                className="py-20 bg-[#EAF2F9] font-[Figtree,Noto Sans,sans-serif] focus:outline-none animate-fade-in-up"
                aria-labelledby="triage-heading"
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
                    <span className="inline-block text-[#5A92BE] font-semibold text-sm tracking-wider uppercase mb-3">
                        Diagnóstico Rápido
                    </span>
                    <h2
                        id="triage-heading"
                        className="text-4xl lg:text-5xl font-bold text-[#164E63] tracking-tight"
                    >
                        ¿Dónde Te Duele?
                    </h2>
                    <p className="mt-4 text-lg text-[#4B5563] max-w-2xl mx-auto">
                        Selecciona la zona afectada y te guiaremos con el especialista adecuado.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {quickLinks.map((item, idx) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`group flex items-center gap-3 bg-white border border-[#D1D5DB] hover:border-[#5A92BE] rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline-[#5A92BE] focus-visible:outline focus-visible:outline-4 cursor-pointer animate-fade-in-up animation-delay-${200 + idx * 100}`}
                                aria-label={`Ir a especialidad: ${item.name}`}
                                tabIndex={0}
                                onMouseEnter={e => e.currentTarget.classList.add('ring-4', 'ring-[#5A92BE]')}
                                onMouseLeave={e => e.currentTarget.classList.remove('ring-4', 'ring-[#5A92BE]')}
                            >
                                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                                <span className="font-semibold text-[#164E63] group-hover:text-[#5A92BE] transition-colors">{item.name}</span>
                                <svg className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#5A92BE] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    <Link
                        to="/especialidades"
                        className="mt-8 inline-flex items-center gap-2 text-[#5A92BE] hover:text-[#4A7EA8] font-semibold transition-colors focus-visible:outline-[#5A92BE] focus-visible:outline focus-visible:outline-4"
                        aria-label="Ver todas las especialidades"
                        tabIndex={0}
                    >
                        Ver todas las especialidades
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Quick CTA to other pages */}
            <section className="py-20 bg-white font-[Figtree,Noto Sans,sans-serif] animate-fade-in">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link
                            to="/equipo"
                            className="group bg-gradient-to-br from-[#164E63] to-[#5A92BE] rounded-2xl p-8 text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 focus-visible:outline-[#5A92BE] focus-visible:outline focus-visible:outline-4"
                            aria-label="Ver equipo"
                            tabIndex={0}
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Nuestro Equipo</h3>
                            <p className="text-white/60 text-sm">Conoce a los especialistas que lideran tu recuperación.</p>
                            <div className="mt-4 flex items-center gap-1 text-[#5A92BE] text-sm font-semibold group-hover:gap-2 transition-all">
                                Ver equipo <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </Link>

                        <Link
                            to="/testimonios"
                            className="group bg-gradient-to-br from-[#5A92BE] to-[#4A7EA8] rounded-2xl p-8 text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 focus-visible:outline-[#5A92BE] focus-visible:outline focus-visible:outline-4"
                            aria-label="Leer testimonios"
                            tabIndex={0}
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Historias de Regreso</h3>
                            <p className="text-white/60 text-sm">Pacientes que volvieron a hacer lo que aman.</p>
                            <div className="mt-4 flex items-center gap-1 text-white/80 text-sm font-semibold group-hover:gap-2 transition-all">
                                Leer testimonios <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </Link>

                        <Link
                            to="/contacto"
                            className="group bg-gradient-to-br from-[#5A92BE] to-[#4A7EA8] rounded-2xl p-8 text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 focus-visible:outline-[#5A92BE] focus-visible:outline focus-visible:outline-4"
                            aria-label="Contactar"
                            tabIndex={0}
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Agendar Cita</h3>
                            <p className="text-white/60 text-sm">Contáctanos hoy y da el primer paso.</p>
                            <div className="mt-4 flex items-center gap-1 text-white/80 text-sm font-semibold group-hover:gap-2 transition-all">
                                Contactar <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
