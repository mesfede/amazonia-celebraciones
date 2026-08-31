import { Facility, ServiceDetail } from '../types';

export const BUSINESS_INFO = {
  name: 'Amazonia celebraciones',
  tagline: 'En Amazonia los esperamos para festejar juntos momentos inolvidables',
  phone: '0221 564-2036',
  phoneRaw: '5492215642036',
  address: 'Calle 41 N° 866 (entre 12 y 13), La Plata, Buenos Aires',
  postalCode: '1900',
  instagram: 'https://www.instagram.com/amazonia.celebraciones/',
  instagramHandle: '@amazonia.celebraciones',
  whatsappUrl: (message: string) => `https://wa.me/5492215642036?text=${encodeURIComponent(message)}`,
};

export const FACILITIES: Facility[] = [
  {
    id: 'pelotero',
    title: 'Pelotero y Laberinto Gigante',
    category: 'juegos',
    description: 'Estructura tubular multinivel con túneles colgantes, toboganes y piscina de pelotas coloridas con total seguridad.',
    highlights: ['Estructura acolchada certificada', 'Túnel aéreo panorámico', 'Piscina de pelotas multicolor'],
    icon: 'Boxes',
  },
  {
    id: 'arcades',
    title: 'Zona Gamer & Videojuegos Arcade',
    category: 'juegos',
    description: 'Máquinas recreativas retro multijuego para que chicos y grandes compartan desafíos de arcade clásicos.',
    highlights: ['Máquinas arcade dobles', 'Juegos clásicos multijugador', 'Espacio Just Dance'],
    icon: 'Gamepad2',
  },
  {
    id: 'cama-elastica',
    title: 'Cama Elástica & Plaza Blanda',
    category: 'juegos',
    description: 'Cama elástica con red perimetral de protección y sector dedicado para primera infancia con piso antigolpes.',
    highlights: ['Red perimetral de seguridad', 'Plaza blanda para primera infancia', 'Inflable integrado'],
    icon: 'Sparkles',
  },
  {
    id: 'metegol',
    title: 'Metegol Profesional',
    category: 'juegos',
    description: 'Cancha de metegol de primera línea para torneos rápidos y diversión garantizada entre amigos.',
    highlights: ['Metegol de competición', 'Ubicación techada con ventilación', 'Fácil acceso'],
    icon: 'Trophy',
  },
  {
    id: 'salon-adultos',
    title: 'Salón Comedor para Adultos',
    category: 'salon',
    description: 'Espacio climatizado, elegante y cómodo con mesas redondas vestidas, sillas de diseño y ambientación cálida.',
    highlights: ['Mesas con mantelería blanca', 'Iluminación cálida con arañas', 'Ambiente climatizado'],
    icon: 'Users',
  },
  {
    id: 'sector-infantil',
    title: 'Sector Merienda Infantil',
    category: 'salon',
    description: 'Mesas bajas de madera con banquetas y puffs de colores vibrantes en un entorno alegre decorado con confeti.',
    highlights: ['Puffs y banquetas multicolor', 'Mesas adaptadas para chicos', 'Murales festivos'],
    icon: 'PartyPopper',
  },
  {
    id: 'parque-exterior',
    title: 'Parque & Jardín al Aire Libre',
    category: 'exterior',
    description: 'Hermoso espacio verde con césped natural, gazebo con livings de jardín, mural selvático y parrilla/quincho.',
    highlights: ['Gazebo con sillones de relax', 'Parrilla y quincho para eventos', 'Murales selváticos de Amazonia'],
    icon: 'Trees',
  },
  {
    id: 'animacion-maquillaje',
    title: 'Animación Temática & Maquillaje Artístico',
    category: 'servicios',
    description: 'Equipo de coordinadores y animadores con dinámicas grupales, shows de personajes favoritos y estación de glitter.',
    highlights: ['Shows y personajes temáticos', 'Maquillaje artístico y glitter', 'Música y juegos coordinados'],
    icon: 'Smile',
  },
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'vajilla',
    title: 'Vajilla Completa y Mantelería',
    description: 'Servicio de vajilla para adultos y chicos, copas, platos y manteles incluidos.',
    icon: 'Utensils',
    included: true,
  },
  {
    id: 'mobiliario',
    title: 'Mesas y Sillas Vestidas',
    description: 'Disposición completa de mobiliario para comensales adultos e infancias.',
    icon: 'Armchair',
    included: true,
  },
  {
    id: 'menu-infantil',
    title: 'Menú Infantil',
    description: 'Propuesta gastronómica pensada especialmente para los chicos durante el evento.',
    icon: 'Sandwich',
    included: true,
  },
  {
    id: 'animacion',
    title: 'Animación y Coordinación',
    description: 'Profesionales a cargo de la diversión, juegos grupales y coordinación del festejo.',
    icon: 'Smile',
    included: true,
  },
  {
    id: 'maquillaje',
    title: 'Maquillaje Artístico',
    description: 'Pintacaritas, brillos y diseños para todos los invitados.',
    icon: 'Palette',
    included: true,
  },
  {
    id: 'juegos-todos',
    title: 'Acceso Total a Juegos',
    description: 'Pelotero, inflable, cama elástica, plaza blanda, arcades, metegol y Just Dance.',
    icon: 'Gamepad2',
    included: true,
  },
  {
    id: 'candy-bar',
    title: 'Espacio para Mesa Temática / Torta',
    description: 'Mobiliario cilíndrico moderno y fondos para la temática elegida del cumple.',
    icon: 'Cake',
    included: true,
  },
  {
    id: 'parrilla',
    title: 'Parrilla & Espacio Quincho',
    description: 'Sector exterior preparado para asados y servicio de parrilla.',
    icon: 'Flame',
    included: true,
  },
];

export const FAQ_ITEMS = [
  {
    q: '¿Con cuánta anticipación conviene reservar una fecha?',
    a: 'Recomendamos consultar disponibilidad con 1 a 3 meses de anticipación, especialmente para turnos de fin de semana.',
  },
  {
    q: '¿Qué turnos y horarios tienen disponibles?',
    a: 'Ofrecemos turnos de tarde y noche para festejos de 2.5 a 3 horas habitualmente, con opción de horario extendido o personalizado según el festejo.',
  },
  {
    q: '¿Podemos llevar nuestra propia temática y decoración?',
    a: '¡Sí, por supuesto! Contamos con las bases, cilindros y fondos listos para que vistas la mesa principal con la temática favorita del cumpleañero/a.',
  },
  {
    q: '¿Cómo confirmo una reserva?',
    a: 'Podés enviar tu consulta directamente a través de nuestro formulario o por WhatsApp para verificar que la fecha y turno estén libres y coordinar la seña de confirmación.',
  },
];
