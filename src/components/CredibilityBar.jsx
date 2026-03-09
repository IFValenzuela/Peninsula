const credentials = [
    {
        title: '100% Especialistas Certificados',
        desc: 'Todos nuestros médicos cuentan con certificación vigente del Consejo Mexicano.',
        icon: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 4L6 12v12c0 11 8 18 18 20 10-2 18-9 18-20V12L24 4z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 24l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Tecnología Mínimamente Invasiva',
        desc: 'Artroscopía y técnicas avanzadas para una recuperación más rápida.',
        icon: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="24" cy="24" r="10" />
                <path d="M24 14v-8M24 42v-8M34 24h8M6 24h8M31 17l5.5-5.5M11.5 36.5L17 31M31 31l5.5 5.5M11.5 11.5L17 17" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Atención Bilingüe Premium',
        desc: 'Servicio completo en español e inglés para pacientes internacionales.',
        icon: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="24" cy="24" r="18" />
                <ellipse cx="24" cy="24" rx="8" ry="18" />
                <path d="M6 24h36M8 14h32M8 34h32" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Acreditación Internacional',
        desc: 'Estándares internacionales de calidad y seguridad del paciente.',
        icon: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 4l5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2z" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function CredibilityBar() {
    return (
        <section className="relative z-10 bg-navy">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                    {credentials.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 px-6 py-8 group hover:bg-white/5 transition-colors"
                        >
                            <div className="text-teal flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm leading-snug">{item.title}</h3>
                                <p className="text-white/50 text-xs mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
