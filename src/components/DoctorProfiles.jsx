const doctors = [
    {
        name: 'Dr. Carlos Mendoza Rivera',
        specialty: 'Cirugía de Rodilla y Artroscopía',
        image: '/doctor-1.png',
        credentials: [
            { label: 'Fellow — HSS New York', icon: 'academic' },
            { label: 'Consejo Mexicano Certificado', icon: 'shield' },
            { label: '2,000+ artroscopías', icon: 'surgery' },
        ],
    },
    {
        name: 'Dra. Ana Sofía Herrera',
        specialty: 'Medicina Deportiva y Rehabilitación',
        image: '/doctor-2.png',
        credentials: [
            { label: 'Médico de Selección Nacional', icon: 'academic' },
            { label: 'Especialista en PRP/Células Madre', icon: 'shield' },
            { label: 'Certificación FIFA', icon: 'surgery' },
        ],
    },
    {
        name: 'Dr. Roberto Guzmán Pérez',
        specialty: 'Cirugía de Columna y Mínima Invasión',
        image: '/doctor-3.png',
        credentials: [
            { label: 'Fellow — Mayo Clinic', icon: 'academic' },
            { label: 'Especialista en Cirugía Robótica', icon: 'shield' },
            { label: '1,500+ cirugías de columna', icon: 'surgery' },
        ],
    },
];

const credentialIcons = {
    academic: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
    ),
    shield: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    surgery: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    ),
};

export default function DoctorProfiles() {
    return (
        <section className="py-12 md:py-24 bg-white" id="nosotros">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <span className="inline-block text-teal font-semibold text-sm tracking-wider uppercase mb-3">
                        Equipo Médico
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
                        Conoce a Nuestros Especialistas
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Cada uno de nuestros cirujanos combina formación internacional con un compromiso personal por tu bienestar.
                    </p>
                </div>

                {/* Doctor Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doc, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-2xl border border-gray-200/60 overflow-hidden hover:shadow-2xl hover:shadow-trust-blue/10 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Photo */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                                {/* Specialty badge */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                                        {doc.specialty}
                                    </span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-navy">{doc.name}</h3>

                                {/* Credentials */}
                                <div className="mt-4 space-y-2.5">
                                    {doc.credentials.map((cred, j) => (
                                        <div key={j} className="flex items-center gap-2.5 text-gray-500">
                                            <div className="text-teal">{credentialIcons[cred.icon]}</div>
                                            <span className="text-sm">{cred.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Video CTA */}
                                <button
                                    className="mt-6 w-full flex items-center justify-center gap-2 bg-off-white hover:bg-teal-light text-navy hover:text-trust-blue font-semibold text-sm py-3 rounded-xl border border-gray-200 hover:border-teal/30 transition-all duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    Ver Video de Presentación
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
