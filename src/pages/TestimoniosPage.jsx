import Testimonials from '../components/Testimonials'

export default function TestimoniosPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-28 pb-12 bg-gradient-to-b from-navy to-trust-blue">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
                    <span className="inline-block text-teal font-semibold text-sm tracking-wider uppercase mb-3">
                        Testimonios
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Historias de Regreso
                    </h1>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                        Cada paciente tiene una historia de superación. Estas son algunas de las que nos inspiran cada día.
                    </p>
                </div>
            </section>

            <Testimonials />

            {/* Trust stats */}
            <section className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '98%', label: 'Satisfacción del Paciente' },
                            { value: '5,000+', label: 'Cirugías Exitosas' },
                            { value: '15+', label: 'Años de Experiencia' },
                            { value: '100%', label: 'Especialistas Certificados' },
                        ].map((s) => (
                            <div key={s.label}>
                                <div className="text-4xl font-bold text-teal">{s.value}</div>
                                <div className="text-gray-500 text-sm mt-2">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
