import PageHeader from '../components/PageHeader'

const contactRows = [
    { label: 'Teléfono', value: '686 551 0099', href: 'tel:6865510099' },
    { label: 'Correo', value: 'recepcion.peninsulaoc@gmail.com', href: 'mailto:recepcion.peninsulaoc@gmail.com' },
    { label: 'Dirección', value: 'Av. Reforma #1089 Esq. Calle C, Mexicali, B.C.', href: 'https://maps.google.com/?q=Av+Reforma+1089+Mexicali+Mexico' },
]

const hours = [
    { day: 'Lunes – Viernes', hours: '8:00 AM – 7:00 PM' },
    { day: 'Sábados', hours: '9:00 AM – 2:00 PM' },
    { day: 'Domingos', hours: 'Cerrado' },
]

function Field({ id, label, children }) {
    return (
        <div>
            <label className="block t-small text-ink-soft mb-2" htmlFor={id}>{label}</label>
            {children}
        </div>
    )
}

export default function ContactoPage() {
    return (
        <>
            <PageHeader
                kicker="Contacto"
                title="Agenda tu cita"
                lead="Estamos listos para ayudarte. Elige el método de contacto que prefieras."
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Contact Form */}
                        <div>
                            <h2 className="t-section mb-8">Envíanos un mensaje</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Field id="nombre" label="Nombre completo">
                                        <input id="nombre" type="text" placeholder="Tu nombre" className="field" />
                                    </Field>
                                    <Field id="telefono" label="Teléfono">
                                        <input id="telefono" type="tel" placeholder="686 000 0000" className="field" />
                                    </Field>
                                </div>
                                <Field id="email" label="Correo electrónico">
                                    <input id="email" type="email" placeholder="tu@email.com" className="field" />
                                </Field>
                                <Field id="especialidad" label="Especialidad de interés">
                                    <select id="especialidad" className="field">
                                        <option>Selecciona una especialidad</option>
                                        <option>Rodilla</option>
                                        <option>Hombro</option>
                                        <option>Cadera</option>
                                        <option>Columna</option>
                                        <option>Pie y tobillo</option>
                                        <option>Medicina deportiva</option>
                                    </select>
                                </Field>
                                <Field id="mensaje" label="Mensaje">
                                    <textarea id="mensaje" rows={5} placeholder="Describe brevemente tu situación..." className="field" />
                                </Field>
                                <button type="submit" className="btn btn-primary w-full">
                                    Enviar solicitud
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-14">
                            {/* WhatsApp */}
                            <div className="bg-mist p-8 sm:p-10">
                                <h3 className="t-card">¿Atención inmediata?</h3>
                                <p className="text-muted mt-2">Escríbenos por WhatsApp y te ayudamos a agendar tu consulta.</p>
                                <a href="https://wa.me/526865510099?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Pen%C3%ADnsula%20OC." target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212l-.257-.17-2.87.852.782-2.777-.182-.271A8 8 0 1112 20z" /></svg>
                                    Agendar cita por WhatsApp
                                </a>
                            </div>

                            {/* Contact rows */}
                            <div>
                                <h3 className="kicker text-muted mb-4">Información de contacto</h3>
                                <ul className="border-t border-line">
                                    {contactRows.map((row) => (
                                        <li key={row.label} className="py-4 border-b border-line flex flex-col sm:flex-row sm:justify-between gap-1">
                                            <span className="text-muted">{row.label}</span>
                                            <a href={row.href} className="link-under text-ink sm:text-right" style={{ fontSize: 16 }}>{row.value}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hours */}
                            <div>
                                <h3 className="kicker text-muted mb-4">Horario de atención</h3>
                                <ul className="border-t border-line">
                                    {hours.map((s) => (
                                        <li key={s.day} className="py-4 border-b border-line flex justify-between">
                                            <span className="text-muted">{s.day}</span>
                                            <span className="text-ink tabular-nums">{s.hours}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
