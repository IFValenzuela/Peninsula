import DoctorProfiles from '../components/DoctorProfiles'
import PageHeader from '../components/PageHeader'

const values = [
    { title: 'Excelencia', desc: 'Nos mantenemos a la vanguardia con formación y certificación continua.' },
    { title: 'Empatía', desc: 'Cada paciente recibe atención cálida, humana y personalizada.' },
    { title: 'Integridad', desc: 'Transparencia total en diagnósticos, tratamientos y costos.' },
]

export default function EquipoPage() {
    return (
        <>
            <PageHeader
                kicker="Nuestro equipo"
                title="Especialistas de clase mundial"
                lead="Nuestros especialistas combinan formación internacional con un compromiso personal por tu bienestar y recuperación."
            />

            <DoctorProfiles />

            {/* Values section */}
            <section className="py-20 md:py-28 bg-mist">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <h2 className="t-section mb-10 md:mb-14">Nuestros valores</h2>
                    <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
                        {values.map((v) => (
                            <div key={v.title} className="border-t border-ink/15 pt-6">
                                <h3 className="t-card">{v.title}</h3>
                                <p className="t-small text-muted mt-2 max-w-[34ch]">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
