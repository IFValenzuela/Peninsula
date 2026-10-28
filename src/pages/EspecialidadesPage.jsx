import TriageWidget from '../components/TriageWidget'
import PageHeader from '../components/PageHeader'

const technology = [
    'Artroscopía de alta definición',
    'Cirugía asistida por navegación',
    'Resonancia magnética 3T',
    'Terapia con células madre y PRP',
]

// Both figures appear elsewhere on the site and trace to doctors.js
const figures = [
    { value: '3,500+', label: 'Cirugías realizadas por nuestro equipo' },
    { value: '15+', label: 'Años de experiencia' },
]

export default function EspecialidadesPage() {
    return (
        <>
            <PageHeader
                kicker="Nuestras especialidades"
                title="Atención especializada para cada zona"
                lead="Contamos con subespecialistas en cada área de la ortopedia para brindarte el diagnóstico y tratamiento más preciso."
            />

            <TriageWidget surface="white" />

            {/* Additional info */}
            <section className="py-20 md:py-28 bg-mist">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="t-section mb-4">Tecnología de vanguardia</h2>
                            <p className="t-lead text-muted mb-8 max-w-[46ch]">
                                Utilizamos equipos de última generación para diagnósticos precisos y tratamientos mínimamente invasivos. Nuestro compromiso es ofrecerte la mejor atención con la tecnología más avanzada.
                            </p>
                            <ul className="border-t border-ink/15">
                                {technology.map((item) => (
                                    <li key={item} className="py-4 border-b border-ink/15 text-ink">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Figures set on hairlines like the list beside them — no container */}
                        <dl className="border-t border-ink/15">
                            {figures.map((f) => (
                                <div key={f.label} className="py-8 md:py-10 border-b border-ink/15">
                                    <dt className="sr-only">{f.label}</dt>
                                    <dd className="t-num text-6xl md:text-7xl text-ink">{f.value}</dd>
                                    <dd className="t-lead text-muted mt-3">{f.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </>
    )
}
