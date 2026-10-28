export const doctors = [
  {
    id: 'carlos-mendoza-rivera',
    name: 'Dr. Carlos Mendoza Rivera',
    surnames: 'Mendoza Rivera',
    title: 'Dr.',
    specialty: 'Cirugía de rodilla y artroscopía',
    image: '/doctor-1.webp',
    // Brief credentials (used in cards)
    credentials: [
      { label: 'Fellow — HSS, Nueva York', icon: 'academic' },
      { label: 'Certificado por el Consejo Mexicano de Ortopedia', icon: 'shield' },
      { label: '2,000+ artroscopías', icon: 'surgery' },
    ],
    // Stats
    stats: [
      { value: '18', suffix: '', label: 'Años de experiencia' },
      { value: '2,000', suffix: '+', label: 'Artroscopías realizadas' },
      { value: '98', suffix: '%', label: 'Satisfacción del paciente' },
    ],
    // Biography
    bio: [
      'El Dr. Carlos Mendoza Rivera es uno de los cirujanos de rodilla más reconocidos en el norte de México. Su enfoque combina técnicas artroscópicas de vanguardia con un profundo respeto por el proceso de recuperación de cada paciente.',
      'Formado en las mejores instituciones de América y Europa, aporta un estándar de excelencia que pocas clínicas en la región pueden igualar. Su especialización en reconstrucción ligamentaria y tratamiento del cartílago lo posiciona como el referente en cirugía de rodilla para atletas y pacientes con lesiones complejas.',
    ],
    philosophy:
      'Mi objetivo no es solo reparar una articulación. Es devolverte la capacidad de vivir plenamente, sin limitaciones.',
    // Education
    education: [
      {
        institution: 'Universidad Nacional Autónoma de México',
        degree: 'Licenciatura en Medicina',
        year: '2002',
      },
      {
        institution: 'Hospital General de México',
        degree: 'Residencia — Traumatología y Ortopedia',
        year: '2007',
      },
      {
        institution: 'Hospital for Special Surgery, Nueva York',
        degree: 'Fellowship — Cirugía de Rodilla y Artroscopía',
        year: '2009',
      },
      {
        institution: 'Universidad de Barcelona',
        degree: 'Maestría en Medicina del Deporte',
        year: '2011',
      },
    ],
    // Certifications
    certifications: [
      'Consejo Mexicano de Ortopedia y Traumatología — Vigente',
      'AOSSM — American Orthopaedic Society for Sports Medicine',
      'ISAKOS — Arthroscopy, Knee Surgery & Orthopaedic Sports Medicine',
      'Sociedad Mexicana de Artroscopía — Miembro Activo',
    ],
    // Clinical specializations
    specializations: [
      'Reconstrucción de ligamento cruzado anterior (LCA)',
      'Reconstrucción de ligamento cruzado posterior (LCP)',
      'Reparación y trasplante de menisco',
      'Regeneración de cartílago articular',
      'Artroscopía de rodilla diagnóstica y terapéutica',
      'Prótesis total y parcial de rodilla',
      'Lesiones multiligamentarias complejas',
      'Tratamiento con células madre y PRP',
    ],
    // Patient testimonials
    testimonials: [
      {
        name: 'Alejandro Ruiz',
        age: 34,
        text: 'Después de romperme el LCA, pensé que no volvería a jugar fútbol. El Dr. Mendoza no solo reconstruyó mi rodilla, sino mi confianza. A los 8 meses ya estaba de vuelta en la cancha.',
        outcome: 'Reconstrucción de LCA — Vuelta al deporte en 8 meses',
      },
      {
        name: 'Patricia González',
        age: 58,
        text: 'El dolor de rodilla me impedía subir escaleras. La operación de prótesis fue todo lo que el Dr. Mendoza prometió: recuperación rápida, sin dolor y resultados que superaron mis expectativas.',
        outcome: 'Prótesis total de rodilla — Sin dolor a los 3 meses',
      },
    ],
    languages: ['Español', 'Inglés'],
    schedule: 'Lun – Vie: 9am – 6pm  ·  Sáb: 9am – 1pm',
  },

  {
    id: 'ana-sofia-herrera',
    name: 'Dra. Ana Sofía Herrera',
    surnames: 'Herrera',
    title: 'Dra.',
    specialty: 'Medicina deportiva y rehabilitación',
    image: '/doctor-2.webp',
    credentials: [
      { label: 'Médico de la Selección Nacional', icon: 'academic' },
      { label: 'Especialista en PRP y células madre', icon: 'shield' },
      { label: 'Certificación FIFA', icon: 'surgery' },
    ],
    stats: [
      { value: '12', suffix: '', label: 'Años de experiencia' },
      { value: '1,500', suffix: '+', label: 'Atletas tratados' },
      { value: '4', suffix: '', label: 'Competencias olímpicas atendidas' },
    ],
    bio: [
      'La Dra. Ana Sofía Herrera es especialista en medicina deportiva y una de las pocas médicas en México con certificación FIFA y experiencia directa en el acompañamiento de selecciones nacionales de alto rendimiento.',
      'Su enfoque integrador combina el diagnóstico preciso con protocolos de rehabilitación personalizados, terapias biológicas avanzadas y una profunda comprensión del atleta como persona. Atiende desde lesiones agudas hasta el manejo de condiciones crónicas en pacientes activos de todas las edades.',
    ],
    philosophy:
      'El cuerpo tiene una capacidad asombrosa de recuperarse. Mi trabajo es potenciar esa capacidad con ciencia y con empatía.',
    education: [
      {
        institution: 'Universidad Autónoma de Baja California',
        degree: 'Licenciatura en Medicina',
        year: '2007',
      },
      {
        institution: 'Instituto Nacional de Rehabilitación, CDMX',
        degree: 'Especialidad en Medicina del Deporte',
        year: '2012',
      },
      {
        institution: 'FIFA Medical Centre of Excellence',
        degree: 'Certificación FIFA',
        year: '2014',
      },
      {
        institution: 'Mayo Clinic, Rochester MN',
        degree: 'Entrenamiento en Medicina Regenerativa',
        year: '2016',
      },
    ],
    certifications: [
      'FIFA Medical Centre of Excellence — Certificada',
      'Federación Mexicana de Medicina del Deporte — Miembro Titular',
      'AMMD — Asociación Mexicana de Medicina del Deporte',
      'Ultrasonografía Músculo-Esquelética — Certificada',
    ],
    specializations: [
      'Medicina regenerativa: PRP y células madre mesenquimales',
      'Lesiones musculares y tendinosas en atletas',
      'Rehabilitación deportiva de alto rendimiento',
      'Prevención y manejo de lesiones por sobreuso',
      'Evaluación biomecánica y de rendimiento',
      'Nutrición deportiva clínica',
      'Retorno al deporte post-cirugía',
      'Inyecciones ecoguiadas de precisión',
    ],
    testimonials: [
      {
        name: 'María Elena Cortés',
        age: 45,
        text: 'El dolor en mi hombro me impedía hasta levantar el brazo. La Dra. Herrera diseñó un plan integral con PRP y rehabilitación. Hoy nado 3 km diarios sin dolor.',
        outcome: 'Tendinitis de hombro — Recuperación total en 4 meses',
      },
      {
        name: 'Marco Leyva',
        age: 22,
        text: 'Como corredor de élite, una lesión puede acabar con una carrera. La Dra. Herrera me trató con células madre y un protocolo que me regresó más fuerte que antes.',
        outcome: 'Tendinitis de Aquiles — Vuelta a competir en 5 meses',
      },
    ],
    languages: ['Español', 'Inglés', 'Francés (básico)'],
    schedule: 'Lun – Vie: 8am – 5pm  ·  Sáb: 9am – 2pm',
  },

  {
    id: 'roberto-guzman-perez',
    name: 'Dr. Roberto Guzmán Pérez',
    surnames: 'Guzmán Pérez',
    title: 'Dr.',
    specialty: 'Cirugía de columna y mínima invasión',
    image: '/doctor-3.webp',
    credentials: [
      { label: 'Fellow — Mayo Clinic', icon: 'academic' },
      { label: 'Especialista en cirugía robótica', icon: 'shield' },
      { label: '1,500+ cirugías de columna', icon: 'surgery' },
    ],
    stats: [
      { value: '15', suffix: '', label: 'Años de experiencia' },
      { value: '1,500', suffix: '+', label: 'Cirugías de columna' },
      { value: '0.8', suffix: '%', label: 'Tasa de complicaciones' },
    ],
    bio: [
      'El Dr. Roberto Guzmán Pérez es pionero en técnicas de mínima invasión para patología de columna en el noroeste de México. Su fellowship en la Clínica Mayo y su especialización en cirugía robótica le permiten ofrecer procedimientos que minimizan el daño tisular y aceleran la recuperación.',
      'Con más de 1,500 cirugías realizadas y una tasa de complicaciones por debajo del 1%, el Dr. Guzmán es la referencia regional para hernias discales, estenosis espinal, deformidades y cirugías de revisión de alta complejidad.',
    ],
    philosophy:
      'La columna no es solo una estructura. Es el eje de tu vida. Intervengo solo cuando el beneficio es claro, y cuando lo hago, lo hago con la máxima precisión disponible.',
    education: [
      {
        institution: 'Instituto Politécnico Nacional',
        degree: 'Licenciatura en Medicina',
        year: '2004',
      },
      {
        institution: 'Hospital Español de México',
        degree: 'Residencia — Traumatología y Ortopedia',
        year: '2009',
      },
      {
        institution: 'Mayo Clinic, Rochester MN',
        degree: 'Fellowship — Cirugía de Columna',
        year: '2011',
      },
      {
        institution: 'Medtronic Robotics Institute',
        degree: 'Certificación en Cirugía Robótica de Columna',
        year: '2019',
      },
    ],
    certifications: [
      'Consejo Mexicano de Ortopedia y Traumatología — Vigente',
      'North American Spine Society (NASS) — Miembro Activo',
      'AO Spine — Instructor Certificado',
      'Cirugía Robótica Mazor X — Certificado',
    ],
    specializations: [
      'Hernia discal lumbar y cervical — mínima invasión',
      'Estenosis del canal medular',
      'Cirugía robótica de columna (Mazor X)',
      'Fusión espinal mínimamente invasiva (MIS-TLIF)',
      'Escoliosis del adulto y del adolescente',
      'Espondilolistesis y fracturas vertebrales',
      'Neuromonitoreo intraoperatorio',
      'Cirugías de revisión y complicaciones',
    ],
    testimonials: [
      {
        name: 'Fernando Castillo',
        age: 28,
        text: 'El Dr. Guzmán realizó una cirugía de columna mínimamente invasiva que me cambió la vida. En 4 meses volví al CrossFit y logré mi mejor marca personal.',
        outcome: 'Hernia discal L4-L5 — Retorno al deporte en 4 meses',
      },
      {
        name: 'Carmen Valdez',
        age: 62,
        text: 'Llevaba 3 años con dolor que no me dejaba caminar más de una cuadra. Después de la cirugía, en dos semanas ya caminaba sin bastón. Es un profesional extraordinario.',
        outcome: 'Estenosis lumbar — Deambulación sin ayuda a las 2 semanas',
      },
    ],
    languages: ['Español', 'Inglés'],
    schedule: 'Lun – Vie: 10am – 7pm  ·  Sáb: por cita',
  },
];

export function getDoctorBySlug(slug) {
  return doctors.find((d) => d.id === slug) || null;
}
