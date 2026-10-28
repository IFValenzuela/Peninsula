import Testimonials from '../components/Testimonials'
import PageHeader from '../components/PageHeader'

export default function TestimoniosPage() {
    return (
        <>
            <PageHeader
                surface="white"
                title="Historias de regreso"
                lead="Cada paciente tiene una historia de superación. Estas son algunas de las que nos inspiran cada día."
            />

            <Testimonials />

            {/* Trust stats */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                        {[
                            { value: '98%', label: 'Satisfacción del paciente' },
                            { value: '3,500+', label: 'Cirugías realizadas' },
                            { value: '15+', label: 'Años de experiencia' },
                            { value: '100%', label: 'Especialistas certificados' },
                        ].map((s) => (
                            <div key={s.label} className="border-t border-ink/15 pt-6">
                                <div className="t-num text-5xl text-ink">{s.value}</div>
                                <div className="t-small text-muted mt-3">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
