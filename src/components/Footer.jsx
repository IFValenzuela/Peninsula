const footerLinks = {
    'Especialidades': ['Rodilla y Pierna', 'Hombro y Codo', 'Columna Vertebral', 'Mano y Muñeca', 'Cadera'],
    'Servicios': ['Medicina Deportiva', 'Cirugía Artroscópica', 'Rehabilitación', 'Segunda Opinión'],
    'Clínica': ['Sobre Nosotros', 'Nuestro Equipo', 'Tecnología', 'Blog Médico'],
};

export default function Footer() {
    return (
        <footer className="bg-navy text-white" id="contacto">
            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-teal to-trust-blue">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white">¿Listo para recuperar tu vida activa?</h2>
                            <p className="text-white/80 mt-2 text-lg">Agenda tu consulta hoy y da el primer paso hacia tu recuperación.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="inline-flex items-center gap-2 bg-white text-navy font-bold px-8 py-4 rounded-full hover:bg-off-white hover:-translate-y-0.5 transition-all shadow-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                Agendar Cita
                            </a>
                            <a href="https://wa.me/526641234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 hover:-translate-y-0.5 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212l-.257-.17-2.87.852.782-2.777-.182-.271A8 8 0 1112 20z" /></svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal to-trust-blue rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <div>
                                <span className="text-xl font-bold tracking-tight">Península</span>
                                <span className="block text-[10px] font-semibold text-teal tracking-[0.3em] uppercase -mt-1">Ortopedia & Deportiva</span>
                            </div>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm">Clínica de ortopedia y medicina deportiva de élite. Combinamos tecnología de vanguardia con atención personalizada.</p>
                        <div className="mt-6 space-y-3">
                            <a href="tel:+526641234567" className="flex items-center gap-3 text-white/70 hover:text-teal text-sm transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                                +52 (664) 123-4567
                            </a>
                            <a href="mailto:contacto@peninsulaoc.com" className="flex items-center gap-3 text-white/70 hover:text-teal text-sm transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                contacto@peninsulaoc.com
                            </a>
                            <div className="flex items-start gap-3 text-white/70 text-sm">
                                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                                Blvd. Agua Caliente #1234, Tijuana, B.C., México
                            </div>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold text-sm mb-4 text-white/90">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-white/50 hover:text-teal text-sm transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">&copy; 2026 Península OC. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        {['Aviso de Privacidad', 'Términos y Condiciones'].map(l => (
                            <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{l}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
