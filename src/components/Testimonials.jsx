import { useState, useEffect, useCallback } from 'react';

const testimonials = [
    {
        name: 'Alejandro Ruiz', age: 34,
        diagnosis: 'Reconstrucción Compleja de LCA', sport: 'Fútbol Amateur',
        quote: 'Después de romperme el ligamento cruzado en un partido, pensé que no volvería a jugar. El Dr. Mendoza no solo reconstruyó mi rodilla, sino mi confianza. A los 8 meses ya estaba de vuelta en la cancha.',
        timeframe: '8 meses de recuperación',
    },
    {
        name: 'María Elena Cortés', age: 45,
        diagnosis: 'Reparación de Manguito Rotador', sport: 'Natación',
        quote: 'El dolor en mi hombro me impedía hasta levantar el brazo. La Dra. Herrera diseñó un plan integral que combinó cirugía mínimamente invasiva con rehabilitación deportiva. Hoy nado 3 km diarios sin dolor.',
        timeframe: '6 meses de recuperación',
    },
    {
        name: 'Fernando Castillo', age: 28,
        diagnosis: 'Hernia Discal L4-L5', sport: 'CrossFit',
        quote: 'Como atleta de CrossFit, mi espalda era mi punto débil. El Dr. Guzmán realizó una cirugía mínimamente invasiva que me cambió la vida. En 4 meses volví a competir y logré mi mejor marca personal.',
        timeframe: '4 meses de recuperación',
    },
    {
        name: 'Laura Peña', age: 52,
        diagnosis: 'Reemplazo Total de Cadera', sport: 'Senderismo',
        quote: 'Caminar era una tortura. Después del reemplazo de cadera, volví a recorrer los senderos de la sierra. El equipo de Península OC me acompañó en cada paso de mi recuperación.',
        timeframe: '5 meses de recuperación',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [auto, setAuto] = useState(true);
    const next = useCallback(() => setCurrent(p => (p + 1) % testimonials.length), []);
    const prev = useCallback(() => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length), []);

    useEffect(() => {
        if (!auto) return;
        const id = setInterval(next, 6000);
        return () => clearInterval(id);
    }, [auto, next]);

    const t = testimonials[current];

    return (
        <section className="py-24 bg-off-white" id="testimonios">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <span className="inline-block text-teal font-semibold text-sm tracking-wider uppercase mb-3">Testimonios</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy tracking-tight">Historias de Regreso</h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Cada paciente tiene una historia de superación. Estas son algunas de las que nos inspiran cada día.</p>
                </div>
                <div className="relative max-w-5xl mx-auto" onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}>
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid lg:grid-cols-5">
                            <div className="lg:col-span-2 bg-gradient-to-br from-navy to-trust-blue p-10 flex flex-col justify-center text-white">
                                <div className="mb-6">
                                    <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-6">
                                        <span className="text-3xl font-bold text-teal">{t.name.charAt(0)}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold">{t.name}</h3>
                                    <p className="text-white/60 text-sm mt-1">{t.age} años</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/10 rounded-xl p-4">
                                        <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Diagnóstico</div>
                                        <div className="font-semibold text-sm">{t.diagnosis}</div>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4">
                                        <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Deporte</div>
                                        <div className="font-semibold text-sm">{t.sport}</div>
                                    </div>
                                    <div className="bg-teal/20 border border-teal/30 rounded-xl p-4">
                                        <div className="text-xs text-teal uppercase tracking-wider mb-1">Resultado</div>
                                        <div className="font-semibold text-sm text-teal-light">{t.timeframe}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-center">
                                <svg className="w-12 h-12 text-teal/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                                </svg>
                                <blockquote className="text-xl lg:text-2xl text-navy leading-relaxed font-normal italic">&ldquo;{t.quote}&rdquo;</blockquote>
                                <div className="mt-10 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {testimonials.map((_, i) => (
                                            <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-teal' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} aria-label={`Testimonio ${i + 1}`} />
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 hover:border-teal hover:bg-teal-light flex items-center justify-center transition-all" aria-label="Anterior">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                        </button>
                                        <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 hover:border-teal hover:bg-teal-light flex items-center justify-center transition-all" aria-label="Siguiente">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
