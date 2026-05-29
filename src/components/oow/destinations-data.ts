export type Day = { n: string; title: string; desc: string };
export type Continue = { slug: string; name: string; tag: string; img: string };
export type Destination = {
  slug: string;
  name: string;
  tag: string;
  cardImg: string;
  heroImg: string;
  stats: { duracion: string; temporada: string; ritmo: string; inversion: string };
  headline: string;
  description: string;
  days: Day[];
  gallery: string[];
  continueSlugs: string[];
};

const U = (q: string, w = 1600) =>
  `https://source.unsplash.com/${w}x${Math.round(w * 0.66)}/?${encodeURIComponent(q)}`;

const IMG = {
  estambul: {
    card: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80",
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80",
      "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
  },
  paris: {
    card: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=800&q=80",
      "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=800&q=80",
      "https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=800&q=80",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80",
      "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800&q=80",
    ],
  },
  maldivas: {
    card: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80",
      "https://images.unsplash.com/photo-1586788680434-30d324626f4c?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    ],
  },
  patagonia: {
    card: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1682687982107-14492010e05e?w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    ],
  },
  japon: {
    card: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
      "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&q=80",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80",
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
    ],
  },
  marruecos: {
    card: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
      "https://images.unsplash.com/photo-1597212720057-4d34f5c6c5e7?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=800&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    ],
  },
};


export const destinations: Record<string, Destination> = {
  estambul: {
    slug: "estambul",
    name: "Estambul",
    tag: "MEDIO ORIENTE · Cultura y contraste",
    cardImg: IMG.estambul.card,
    heroImg: IMG.estambul.hero,
    stats: {
      duracion: "7 noches",
      temporada: "Abril–Junio, Septiembre–Noviembre",
      ritmo: "Pausado",
      inversion: "Desde €4,800 / persona",
    },
    headline:
      "Donde los minaretes atrapan la luz del Bósforo y los siglos se apilan como seda.",
    description:
      "Empezamos en el barrio antiguo al atardecer, cuando el llamado a la oración cruza los tejados y la ciudad guarda silencio por un momento. Durante una semana recorremos hammams escondidos, meyhanes familiares, y trasbordadores hacia el lado asiático donde el desayuno dura tres horas.",
    days: [
      { n: "01", title: "Llegada y la ciudad antigua", desc: "Traslado privado a boutique riad en Sultanahmet. Té de tarde en la azotea mientras la Hagia Sofía se pinta de dorado." },
      { n: "02", title: "Bazares sin multitudes", desc: "Entrada al amanecer al Gran Bazar con nuestro comerciante textil de confianza. Degustación de especias en Eminönü." },
      { n: "03", title: "El Bósforo en caique privado", desc: "Navegación matutina con desayuno a bordo. Almuerzo en pueblo de pescadores." },
      { n: "04", title: "El lado asiático, sin prisa", desc: "Ferry a Kadıköy. Tiendas de vinilo, almuerzo con poeta turco, atardecer de regreso a la orilla europea." },
      { n: "05", title: "Hammam y patios escondidos", desc: "Baño tradicional en hammam del siglo XVI. Callejones de Fener y Balat con historiador local." },
      { n: "06", title: "Las Islas de los Príncipes", desc: "Día en bicicleta y coche de caballos en Büyükada. Largo almuerzo bajo los pinos." },
      { n: "07", title: "Partida", desc: "Salida tardía. Último simit en el puente de Gálata. Traslado al aeropuerto." },
    ],
    gallery: IMG.estambul.gallery,
    continueSlugs: ["paris", "patagonia", "marruecos"],
  },
  paris: {
    slug: "paris",
    name: "París",
    tag: "EUROPA · Arte y gastronomía",
    cardImg: IMG.paris.card,
    heroImg: IMG.paris.hero,
    stats: {
      duracion: "5 noches",
      temporada: "Abril–Junio, Septiembre–Octubre",
      ritmo: "Elegante",
      inversion: "Desde €5,200 / persona",
    },
    headline: "Donde cada calle es una pintura y cada comida, un recuerdo.",
    description:
      "París no se visita. Se habita. Durante cinco días nos instalamos en el Marais, caminamos por mercados que los turistas no encuentran, cenamos en bistros que no están en ninguna lista. La ciudad revela sus secretos solo a quienes van despacio.",
    days: [
      { n: "01", title: "Llegada al Marais", desc: "Check-in en hôtel particulier boutique. Aperitivo en terraza. Primera cena francesa de verdad." },
      { n: "02", title: "Museos sin colas", desc: "Entrada privada al Louvre antes de apertura. Almuerzo en Le Palais Royal." },
      { n: "03", title: "Mercados y Montmartre", desc: "Mercado de Aligre al amanecer. Subida a Montmartre por rutas locales. Crepes en Place du Tertre." },
      { n: "04", title: "Versalles sin multitudes", desc: "Acceso temprano a los jardines. Picnic en los canales del parque. Tarde libre en Saint-Germain." },
      { n: "05", title: "La despedida perfecta", desc: "Crucero privado por el Sena al amanecer. Último café. Traslado al aeropuerto." },
    ],
    gallery: IMG.paris.gallery,
    continueSlugs: ["estambul", "japon", "marruecos"],
  },
  maldivas: {
    slug: "maldivas",
    name: "Maldivas",
    tag: "OCÉANO · Mundo submarino",
    cardImg: IMG.maldivas.card,
    heroImg: IMG.maldivas.hero,
    stats: {
      duracion: "8 noches",
      temporada: "Noviembre–Abril",
      ritmo: "Contemplativo",
      inversion: "Desde €7,400 / persona",
    },
    headline:
      "Donde el agua es tan clara que el horizonte desaparece y el tiempo se detiene.",
    description:
      "Las Maldivas no son un destino. Son un estado mental. Ocho días sobre el Índico, en una villa sobre el agua, con el arrecife de coral directamente debajo. Snorkel al amanecer, cenas bajo las estrellas, y el silencio más completo que hayas escuchado.",
    days: [
      { n: "01", title: "Llegada a Malé", desc: "Vuelo en hidroavión o lancha rápida al resort. Bienvenida en la villa sobre el agua." },
      { n: "02", title: "El arrecife", desc: "Snorkel guiado al amanecer con instructor privado. Tarde en la laguna privada." },
      { n: "03", title: "Buceo", desc: "Inmersión en el arrecife exterior. Avistamiento de mantarrayas y tiburones de arrecife." },
      { n: "04", title: "Isla deshabitada", desc: "Excursión en lancha a isla virgen. Picnic en la playa. Kayak al atardecer." },
      { n: "05", title: "Día de spa", desc: "Masaje sobre el agua. Yoga al amanecer. Tarde completamente libre." },
      { n: "06", title: "Pesca tradicional", desc: "Excursión de pesca al estilo maldivo con pescadores locales. Cocinamos la captura." },
      { n: "07", title: "Último arrecife", desc: "Snorkel de despedida. Cena privada en la playa bajo las estrellas." },
      { n: "08", title: "Partida", desc: "Desayuno en la terraza. Último baño. Traslado a Malé." },
    ],
    gallery: IMG.maldivas.gallery,
    continueSlugs: ["patagonia", "japon", "estambul"],
  },
  patagonia: {
    slug: "patagonia",
    name: "Patagonia",
    tag: "SUDAMÉRICA · Fin del mundo",
    cardImg: IMG.patagonia.card,
    heroImg: IMG.patagonia.hero,
    stats: {
      duracion: "10 noches",
      temporada: "Noviembre–Marzo",
      ritmo: "Aventurero",
      inversion: "Desde €6,800 / persona",
    },
    headline: "El fin del mundo no es un lugar. Es una sensación.",
    description:
      "Patagonia no tiene término medio. El viento dobla los árboles, los glaciares truenan en el silencio, y los cóndores planean sobre valles que ningún mapa captura bien. Diez días para entender que el mundo es más grande de lo que pensabas.",
    days: [
      { n: "01", title: "Llegada a Punta Arenas", desc: "Bienvenida patagónica. Cena de cordero al palo. Primer viento del sur." },
      { n: "02", title: "Estrecho de Magallanes", desc: "Navegación por el estrecho. Pingüinos en Isla Magdalena." },
      { n: "03", title: "Torres del Paine", desc: "Entrada al parque. Primer avistamiento de las torres al amanecer." },
      { n: "04", title: "Valle del Francés", desc: "Trekking intermedio. Picnic con vistas al glaciar Grey." },
      { n: "05", title: "Glaciar Grey", desc: "Navegación hasta el glaciar. Hielo milenario en las manos." },
      { n: "06", title: "El Calafate", desc: "Cruce a Argentina. Check-in en estancia boutique." },
      { n: "07", title: "Perito Moreno", desc: "El espectáculo natural más impresionante del hemisferio sur." },
      { n: "08", title: "El Chaltén", desc: "Trekking al Fitz Roy. Pueblo de montaña auténtico." },
      { n: "09", title: "Día de descanso", desc: "Spa, lago, silencio." },
      { n: "10", title: "Partida", desc: "Último amanecer patagónico. Traslado al aeropuerto." },
    ],
    gallery: IMG.patagonia.gallery,
    continueSlugs: ["marruecos", "maldivas", "estambul"],
  },
  japon: {
    slug: "japon",
    name: "Japón",
    tag: "ASIA · Antiguo y eléctrico",
    cardImg: IMG.japon.card,
    heroImg: IMG.japon.hero,
    stats: {
      duracion: "12 noches",
      temporada: "Marzo–Mayo, Octubre–Noviembre",
      ritmo: "Contemplativo · Eléctrico",
      inversion: "Desde €6,200 / persona",
    },
    headline: "Donde lo antiguo y lo eléctrico coexisten en el mismo aliento.",
    description:
      "Japón es el único país del mundo que es, simultáneamente, el más antiguo y el más futurista. Doce días que van de los templos de Kioto en silencio matutino a las calles de neón de Tokio a medianoche, pasando por ryokans en montaña, mercados de pescado al alba, y ceremonias de té que llevan quinientos años sin cambiar.",
    days: [
      { n: "01", title: "Llegada a Tokio", desc: "Check-in en hotel boutique en Shinjuku. Primera ramen de medianoche." },
      { n: "02", title: "Tokio moderno", desc: "Shibuya, Harajuku, Akihabara. Cena en izakaya escondido." },
      { n: "03", title: "Tokio clásico", desc: "Asakusa y el templo Senso-ji al amanecer. Mercado de Tsukiji. Jardines del Palacio Imperial." },
      { n: "04", title: "Hakone", desc: "Monte Fuji al amanecer desde el lago Ashi. Ryokan con onsen privado." },
      { n: "05", title: "Shinkansen a Kioto", desc: "El tren más puntual del mundo. Check-in en machiya (casa de madera tradicional)." },
      { n: "06", title: "Kioto de los templos", desc: "Fushimi Inari al amanecer. Bambú de Arashiyama. Té matcha en Uji." },
      { n: "07", title: "Nara y los ciervos", desc: "Ciervos libres en el parque. Tōdai-ji, el templo más grande de madera del mundo." },
      { n: "08", title: "Osaka", desc: "Dotonbori, takoyaki, y la mejor cocina callejera de Asia." },
      { n: "09", title: "Hiroshima y Miyajima", desc: "Reflexión en el Memorial de la Paz. Torii flotante al atardecer." },
      { n: "10", title: "Día libre en Kioto", desc: "Barrio de Gion. Posible avistamiento de geisha. Cena kaiseki." },
      { n: "11", title: "Regreso a Tokio", desc: "Tarde de compras en Ginza. Última cena de sushi omakase." },
      { n: "12", title: "Partida", desc: "Desayuno en el hotel. Traslado al aeropuerto de Narita." },
    ],
    gallery: IMG.japon.gallery,
    continueSlugs: ["estambul", "paris", "marruecos"],
  },
  marruecos: {
    slug: "marruecos",
    name: "Marruecos",
    tag: "ÁFRICA · Color y misterio",
    cardImg: IMG.marruecos.card,
    heroImg: IMG.marruecos.hero,
    stats: {
      duracion: "7 noches",
      temporada: "Marzo–Mayo, Septiembre–Noviembre",
      ritmo: "Sensorial",
      inversion: "Desde €4,200 / persona",
    },
    headline: "Donde los colores gritan y el silencio del desierto lo dice todo.",
    description:
      "Marruecos es el país más cercano a Europa que se siente más lejos. En siete días cruzamos la medina de Marrakech, dormimos en un riad con patio de naranjos, conducimos hasta las dunas del Sahara, y regresamos por la costa atlántica de Essaouira. Un viaje que no se parece a ningún otro.",
    days: [
      { n: "01", title: "Llegada a Marrakech", desc: "Recepción en el aeropuerto. Traslado a riad boutique en la medina. Primera cena en azotea." },
      { n: "02", title: "La medina sin mapa", desc: "Zoco de especias, curtidurías de Fes, Madraza Ben Youssef. Almuerzo en local sin señal." },
      { n: "03", title: "Jardines y palacios", desc: "Jardín Majorelle al amanecer (antes de las multitudes). Palacio Bahía. Hammam tradicional por la tarde." },
      { n: "04", title: "El desierto", desc: "Viaje al sur. Valle del Draa. Primera noche en campamento de lujo en las dunas." },
      { n: "05", title: "Sahara al amanecer", desc: "Camello al alba. Las dunas en silencio total. Desayuno beduino." },
      { n: "06", title: "Ouarzazate y el Atlas", desc: "\"Hollywood de África\". Kasbah Aït Benhaddou (patrimonio UNESCO). Cruce del Atlas." },
      { n: "07", title: "Essaouira", desc: "Ciudad costera azul y blanca. Argan oil, música gnawa, viento atlántico. Último ceviche de pescado fresco." },
    ],
    gallery: IMG.marruecos.gallery,
    continueSlugs: ["japon", "patagonia", "paris"],
  },
};

export const destinationList = [
  destinations.estambul,
  destinations.paris,
  destinations.maldivas,
  destinations.patagonia,
  destinations.japon,
  destinations.marruecos,
];
