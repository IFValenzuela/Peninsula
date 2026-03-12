import { useState } from 'react';

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false);
    const phone = '526865510099';
    const message = encodeURIComponent('Hola, me gustaría agendar una cita en Península OC.');

    return (
        <div className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3">
            {/* Tooltip */}
            {showTooltip && (
                <div className="animate-slide-down bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 max-w-[280px]">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-navy text-sm">Agenda tu cita por WhatsApp</p>
                            <p className="text-gray-500 text-xs mt-1 leading-relaxed">Escríbenos y un especialista te ayudará a agendar tu consulta.</p>
                        </div>
                    </div>
                    <a
                        href={`https://wa.me/${phone}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors"
                    >
                        Agendar cita por WhatsApp
                    </a>
                </div>
            )}

            {/* FAB */}
            <button
                onClick={() => setShowTooltip(!showTooltip)}
                className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center hover:scale-110 transition-all duration-200"
                aria-label="Contactar por WhatsApp"
            >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-green-500 opacity-30" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
                <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212l-.257-.17-2.87.852.782-2.777-.182-.271A8 8 0 1112 20z" />
                </svg>
                {/* Notification dot */}
                {!showTooltip && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">1</span>
                    </span>
                )}
            </button>
        </div>
    );
}
