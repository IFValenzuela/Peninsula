import TriageWidget from '../components/TriageWidget'

export default function EspecialidadesPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-28 pb-12 bg-gradient-to-b from-navy to-trust-blue">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
                    <span className="inline-block text-teal font-semibold text-sm tracking-wider uppercase mb-3">
                        Nuestras Especialidades
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Atención Especializada para Cada Zona
                    </h1>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                        Contamos con subespecialistas en cada área de la ortopedia para brindarte el diagnóstico y tratamiento más preciso.
                    </p>
                </div>
            </section>

            <TriageWidget />

            {/* Additional info */}
            <section className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-navy mb-4">Tecnología de Vanguardia</h2>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                Utilizamos equipos de última generación para diagnósticos precisos y tratamientos mínimamente invasivos. Nuestro compromiso es ofrecerte la mejor atención con la tecnología más avanzada.
                            </p>
                            <ul className="space-y-3">
                                {['Artroscopía de alta definición', 'Cirugía asistida por navegación', 'Resonancia magnética 3T', 'Terapia con células madre y PRP'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-600">
                                        <div className="w-6 h-6 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3.5 h-3.5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-off-white to-teal-light rounded-2xl p-6 sm:p-12 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal mb-2">+5,000</div>
                                <div className="text-gray-500 font-medium">Cirugías exitosas realizadas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
