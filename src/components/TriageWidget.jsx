const bodyParts = [
    {
        name: 'Rodilla',
        subtitle: 'Lesiones de ligamentos, menisco y cartílago',
        color: 'from-teal/10 to-trust-blue/10',
        hoverColor: 'group-hover:from-teal/20 group-hover:to-trust-blue/20',
        icon: (
            <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 8c-2 0-4 1-5 3l-3 8c-1 3-1 6 0 9l2 6c0 2 0 4-1 6l-4 10c-1 3-1 6 0 9l3 8c1 3 3 5 5 5s4-2 5-5l3-8c1-3 1-6 0-9l-4-10c-1-2-1-4-1-6l2-6c1-3 1-6 0-9l-3-8c-1-2-3-3-5-3z" strokeLinejoin="round" />
                <circle cx="40" cy="34" r="6" strokeDasharray="3 2" />
                <path d="M30 34h20" strokeLinecap="round" strokeDasharray="2 2" />
            </svg>
        ),
    },
    {
        name: 'Hombro',
        subtitle: 'Manguito rotador, luxaciones y tendinitis',
        color: 'from-trust-blue/10 to-teal/10',
        hoverColor: 'group-hover:from-trust-blue/20 group-hover:to-teal/20',
        icon: (
            <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 20v28" strokeLinecap="round" />
                <path d="M40 20c-12 0-22 4-22 10s10 10 22 10 22-4 22-10-10-10-22-10z" />
                <circle cx="40" cy="20" r="5" />
                <path d="M28 30l-8 16M52 30l8 16" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: 'Cadera',
        subtitle: 'Reemplazo articular y fracturas',
        color: 'from-orange/10 to-teal/10',
        hoverColor: 'group-hover:from-orange/20 group-hover:to-teal/20',
        icon: (
            <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="40" cy="32" rx="16" ry="10" />
                <circle cx="40" cy="32" r="5" strokeDasharray="3 2" />
                <path d="M28 38l-6 24M52 38l6 24" strokeLinecap="round" />
                <path d="M40 42v20" strokeLinecap="round" strokeDasharray="4 3" />
            </svg>
        ),
    },
    {
        name: 'Columna',
        subtitle: 'Hernias discales, estenosis y dolor crónico',
        color: 'from-teal/10 to-orange/10',
        hoverColor: 'group-hover:from-teal/20 group-hover:to-orange/20',
        icon: (
            <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 8v64" strokeLinecap="round" strokeDasharray="0" />
                {[16, 26, 36, 46, 56].map(y => (
                    <g key={y}>
                        <rect x="30" y={y - 3} width="20" height="6" rx="3" />
                    </g>
                ))}
            </svg>
        ),
    },
    {
        name: 'Pie y Tobillo',
        subtitle: 'Esguinces, fascitis plantar y fracturas',
        color: 'from-trust-blue/10 to-orange/10',
        hoverColor: 'group-hover:from-trust-blue/20 group-hover:to-orange/20',
        icon: (
            <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M36 12v30c0 4-8 10-8 18s6 10 16 10 14-4 14-8c0-6-6-8-10-10s-8-4-8-10V12" strokeLinejoin="round" />
                <circle cx="38" cy="42" r="3" strokeDasharray="2 2" />
                <path d="M30 60h22" strokeLinecap="round" strokeDasharray="3 2" />
            </svg>
        ),
    },
];

export default function TriageWidget() {
    return (
        <section className="py-24 bg-off-white" id="triage">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-teal font-semibold text-sm tracking-wider uppercase mb-3">
                        Diagnóstico Rápido
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy tracking-tight">
                        ¿Dónde Te Duele?
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Selecciona la zona afectada y te guiaremos con el especialista adecuado para tu recuperación.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {bodyParts.map((part, i) => (
                        <a
                            key={i}
                            href="#"
                            className="group relative bg-white rounded-2xl p-8 text-center border border-gray-200/60 hover:border-teal/30 shadow-sm hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            {/* Background gradient on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${part.color} ${part.hoverColor} transition-all duration-300 opacity-0 group-hover:opacity-100`} />

                            <div className="relative z-10">
                                <div className="text-gray-400 group-hover:text-teal transition-colors duration-300 flex justify-center mb-5">
                                    {part.icon}
                                </div>
                                <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-trust-blue transition-colors">
                                    {part.name}
                                </h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {part.subtitle}
                                </p>

                                {/* Arrow indicator */}
                                <div className="mt-5 inline-flex items-center gap-1 text-teal opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <span className="text-xs font-semibold">Ver especialista</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
