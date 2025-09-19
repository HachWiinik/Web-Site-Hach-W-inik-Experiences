import { Value, TeamMember, Experience, Testimonial } from './types';

export const VALUES_DATA: Value[] = [
  {
    icon: 'fa-seedling',
    title: 'Autenticidad',
    description: 'Experiencias genuinas guiadas por miembros de nuestra comunidad, compartiendo nuestra cultura y tradiciones reales.',
  },
  {
    icon: 'fa-hand-holding-heart',
    title: 'Respeto',
    description: 'Profundo respeto por nuestra Madre Tierra, nuestras tradiciones ancestrales y por cada visitante que nos honra con su presencia.',
  },
  {
    icon: 'fa-people-carry',
    title: 'Comunidad',
    description: 'El turismo beneficia directamente a nuestras familias, fortaleciendo nuestra economía y preservando nuestro modo de vida.',
  },
  {
    icon: 'fa-leaf',
    title: 'Sostenibilidad',
    description: 'Prácticas de bajo impacto que protegen la biodiversidad de la Selva Lacandona para las futuras generaciones.',
  },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
    {
      name: 'Chan K’in',
      role: 'Guía Principal y Contador de Historias',
      image: 'https://res.cloudinary.com/dy08afhuz/image/upload/v1758235489/1000607130_nfkqtn.png',
      quote: 'Cada sendero tiene una historia, y cada planta un secreto. Yo solo soy el traductor de la selva.'
    },
    {
      name: 'Nikte’',
      role: 'Coordinadora de Talleres y Gastronomía',
      image: 'https://res.cloudinary.com/dy08afhuz/image/upload/v1758235489/1000607127_c7xghc.png',
      quote: 'Los sabores de nuestra cocina son el abrazo de nuestros ancestros. Cocinar es mantener viva nuestra memoria.'
    },
    {
      name: 'Balam',
      role: 'Experto en Supervivencia y Rastreo',
      image: 'https://res.cloudinary.com/dy08afhuz/image/upload/v1758235489/1000607116_vryg5k.png',
      quote: 'La selva no es un lugar para temer, sino un hogar para entender. Te enseña todo si sabes escuchar.'
    },
    {
      name: 'Ixchel',
      role: 'Guardián de Tradiciones y Artesanías',
      image: 'https://res.cloudinary.com/dy08afhuz/image/upload/v1758235488/1000607106_rchw3s.png',
      quote: 'En cada tejido, en cada pieza de barro, están las manos y los sueños de mi gente.'
    }
  ];

export const EXPERIENCES_DATA: Experience[] = [
    { id: 1, title: "Cavernas Subacuáticas y Nado con Tortugas", price: "$2,200 MXN", image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758237401/cavernas_tortugas_p6x2r1.jpg", description: "Explora místicas cavernas y nada junto a majestuosas tortugas marinas en su hábitat natural.", duration: "Medio Día" },
    { id: 2, title: "Nado con el Tiburón Ballena", price: "$3,950 MXN", image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758237401/tiburon_ballena_wfkzsv.jpg", description: "Vive la inolvidable experiencia de nadar junto al pez más grande del mundo en las aguas del Caribe.", duration: "Día Completo" },
    { id: 3, title: "Holbox y Cabo Catoche", price: "$2,800 MXN", image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758237401/holbox_catoche_z9u9f1.jpg", description: "Descubre un paraíso virgen ideal para la pesca y el snorkel en la punta norte de la península.", duration: "Día Completo" },
    { id: 4, title: "Holbox Mágico y 3 Islas", price: "$2,500 MXN", image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758237402/holbox_3islas_u8qfje.jpg", description: "Recorre la Isla Pasión, la Isla Pájaros y el cenote Yalahau en este tour clásico de Holbox.", duration: "Día Completo" },
    { id: 5, title: "Chichén Itzá Clásico", price: "$3,500 MXN", image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758237401/chichen_itza_j2z7k9.jpg", description: "Visita una de las Siete Maravillas del Mundo Moderno con un guía certificado y sumérgete en la historia Maya.", duration: "Día Completo" },
  ];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "No fue un viaje, fue una transformación. Los Hach Wíinik no te muestran la selva, te hacen parte de ella. Volví a casa con una nueva perspectiva de la vida y una profunda gratitud.",
        author: "Ana Sofía R.",
        location: "Ciudad de México, México"
    },
    {
        quote: "La autenticidad es palpable. Escuchar las historias de Chan K'in junto al fuego, con los sonidos de la selva de fondo, es algo que el dinero no puede comprar. Inolvidable.",
        author: "Michael B.",
        location: "Toronto, Canadá"
    },
    {
        quote: "Pensé que iba a ver ruinas y animales, y lo hice, pero lo que más me impactó fue la calidez y sabiduría de la comunidad. Su conexión con la tierra es inspiradora. ¡Y la comida de Nikte' es espectacular!",
        author: "Isabella G.",
        location: "Florencia, Italia"
    }
];