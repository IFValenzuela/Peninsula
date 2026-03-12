import { Link } from 'react-router-dom'

export default function ContactoPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-28 pb-12 bg-gradient-to-b from-navy to-trust-blue">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
                    <span className="inline-block text-teal font-semibold text-sm tracking-wider uppercase mb-3">Contacto</span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Agenda Tu Cita</h1>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                        Estamos listos para ayudarte. Elige el método de contacto que prefieras.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-off-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-200/60">
                            <h2 className="text-2xl font-bold text-navy mb-6">Envíanos un Mensaje</h2>
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1.5" htmlFor="nombre">Nombre completo</label>
                                        <input id="nombre" type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-off-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1.5" htmlFor="telefono">Teléfono</label>
                                        <input id="telefono" type="tel" placeholder="+52 (664) 000-0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-off-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1.5" htmlFor="email">Correo electrónico</label>
                                    <input id="email" type="email" placeholder="tu@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-off-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1.5" htmlFor="especialidad">Especialidad de interés</label>
                                    <select id="especialidad" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-off-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-sm text-gray-500">
                                        <option>Selecciona una especialidad</option>
                                        <option>Rodilla y Pierna</option>
                                        <option>Hombro y Codo</option>
                                        <option>Columna</option>
                                        <option>Mano y Muñeca</option>
                                        <option>Cadera</option>
                                        <option>Medicina Deportiva</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1.5" htmlFor="mensaje">Mensaje</label>
                                    <textarea id="mensaje" rows={4} placeholder="Describe brevemente tu situación..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-off-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-sm resize-none" />
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-teal to-teal-dark text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal/25 hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-0.5 transition-all text-sm">
                                    Enviar Solicitud
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* WhatsApp card */}
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212l-.257-.17-2.87.852.782-2.777-.182-.271A8 8 0 1112 20z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy text-lg">¿Atención Inmediata?</h3>
                                        <p className="text-gray-500 text-sm">Habla con un especialista ahora</p>
                                    </div>
                                </div>
                                <a href="https://wa.me/526865510099?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Pen%C3%ADnsula%20OC." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-colors text-sm">
                                    Agendar cita por WhatsApp
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200/60 shadow-sm">
                                <h3 className="font-bold text-navy mb-4">Información de Contacto</h3>
                                <div className="space-y-4">
                                    <a href="tel:+526641234567" className="flex items-center gap-4 text-gray-600 hover:text-teal transition-colors">
                                        <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                                            <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                                        </div>
                                        <span className="font-medium">+52 (664) 123-4567</span>
                                    </a>
                                    <a href="mailto:contacto@peninsulaoc.com" className="flex items-center gap-4 text-gray-600 hover:text-teal transition-colors">
                                        <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                                            <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                        </div>
                                        <span className="font-medium">contacto@peninsulaoc.com</span>
                                    </a>
                                    <div className="flex items-start gap-4 text-gray-600">
                                        <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                                        </div>
                                        <span className="font-medium">Blvd. Agua Caliente #1234<br />Tijuana, B.C., México</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200/60 shadow-sm">
                                <h3 className="font-bold text-navy mb-4">Horario de Atención</h3>
                                <div className="space-y-2 text-sm">
                                    {[
                                        { day: 'Lunes – Viernes', hours: '8:00 AM – 7:00 PM' },
                                        { day: 'Sábados', hours: '9:00 AM – 2:00 PM' },
                                        { day: 'Domingos', hours: 'Cerrado' },
                                    ].map((s) => (
                                        <div key={s.day} className="flex justify-between text-gray-600">
                                            <span>{s.day}</span>
                                            <span className="font-medium">{s.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
