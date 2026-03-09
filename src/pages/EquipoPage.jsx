import DoctorProfiles from '../components/DoctorProfiles'

export default function EquipoPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-28 pb-12 bg-gradient-to-b from-navy to-trust-blue">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
                    <span className="inline-block text-teal font-semibold text-sm tracking-wider uppercase mb-3">
                        Equipo Médico
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Especialistas de Clase Mundial
                    </h1>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                        Nuestros cirujanos combinan formación internacional con un compromiso personal por tu bienestar y recuperación.
                    </p>
                </div>
            </section>

            <DoctorProfiles />

            {/* Values section */}
            <section className="py-20 bg-off-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <h2 className="text-3xl font-bold text-navy text-center mb-12">Nuestros Valores</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Excelencia', desc: 'Nos mantenemos a la vanguardia con formación y certificación continua.', icon: '⭐' },
                            { title: 'Empatía', desc: 'Cada paciente recibe atención cálida, humana y personalizada.', icon: '❤️' },
                            { title: 'Integridad', desc: 'Transparencia total en diagnósticos, tratamientos y costos.', icon: '🛡️' },
                        ].map((v) => (
                            <div key={v.title} className="bg-white rounded-2xl p-8 text-center border border-gray-200/60 shadow-sm">
                                <div className="text-4xl mb-4">{v.icon}</div>
                                <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
