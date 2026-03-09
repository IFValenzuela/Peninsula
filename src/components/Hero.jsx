export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" id="inicio">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.png"
                    alt="Personas activas disfrutando deportes"
                    className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full py-32">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                        <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                        <span className="text-white/90 text-sm font-medium">Clínica de Élite en Ortopedia</span>
                    </div>

                    {/* Headline */}
                    <h1 className="animate-fade-in-up animation-delay-200 text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                        Recupera Tu{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-light">
                            Vida Activa.
                        </span>
                    </h1>
                    <p className="animate-fade-in-up animation-delay-400 mt-3 text-3xl lg:text-4xl font-semibold text-white/80 leading-tight">
                        Atención de Élite para tu Regreso.
                    </p>

                    {/* Sub-headline */}
                    <p className="animate-fade-in-up animation-delay-600 mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl">
                        Cirugía ortopédica avanzada y medicina deportiva diseñada para que vuelvas a hacer lo que amas, sin dolor.
                    </p>

                    {/* CTAs */}
                    <div className="animate-fade-in-up animation-delay-800 mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal to-teal-dark text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl shadow-teal/30 hover:shadow-teal/50 hover:-translate-y-1 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Agendar Cita
                        </a>
                        <a
                            href="#nosotros"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-lg px-6 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                        >
                            Conocer Más
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Stats mini bar */}
                    <div className="animate-fade-in-up animation-delay-800 mt-16 flex items-center gap-8">
                        {[
                            { value: '15+', label: 'Años de Experiencia' },
                            { value: '5,000+', label: 'Cirugías Exitosas' },
                            { value: '98%', label: 'Satisfacción' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-teal">{stat.value}</div>
                                <div className="text-xs text-white/50 mt-1 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
