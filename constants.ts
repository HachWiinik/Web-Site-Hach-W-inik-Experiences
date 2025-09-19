
import { Experience, TeamMember, Value, Testimonial, Product } from './types';

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 1,
    title: "El Despertar de la Selva",
    description: "Una caminata al amanecer para escuchar los sonidos de la fauna local, guiada por un experto que te enseñará los secretos de las plantas medicinales.",
    image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235395/1000587208_xflz2q.jpg",
    duration: "4 horas",
    price: "$1,200 MXN",
  },
  {
    id: 2,
    title: "Ruta del Jaguar",
    description: "Explora los senderos menos transitados y descubre las ruinas de una ciudad maya olvidada, aprendiendo sobre la cosmovisión de nuestros ancestros.",
    image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235398/1000588231_s3n8jy.jpg",
    duration: "Día completo",
    price: "$2,500 MXN",
  },
  {
    id: 3,
    title: "Noche de Historias y Estrellas",
    description: "Alrededor de una fogata, escucha las leyendas de los Hach Wíinik contadas por un abuelo de la comunidad, bajo el manto de estrellas de la Vía Láctea.",
    image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235397/1000587977_flqjbf.jpg",
    duration: "3 horas",
    price: "$900 MXN",
  }
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
    {
      name: "K'in Obregón",
      role: "Guía Principal y Guardián",
      image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235402/1000589254_u0v2kl.jpg",
      quote: "La selva no nos pertenece; nosotros pertenecemos a la selva. Mi trabajo es traducir sus susurros."
    },
    {
      name: "Ixchel Chan",
      role: "Maestra Artesana y Cocinera",
      image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235400/1000588726_xrvqjr.jpg",
      quote: "En cada tejido y en cada platillo, comparto la historia de mi pueblo, una historia de resiliencia y sabor."
    },
    {
      name: "Balam Cohuo",
      role: "Líder Comunitario y Narrador",
      image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235401/1000589209_fpxk6p.jpg",
      quote: "Nuestra cultura es un árbol vivo. El turismo responsable ayuda a que sus raíces se hagan más fuertes."
    },
    {
      name: "Yatzil Pech",
      role: "Especialista en Flora y Fauna",
      image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235400/1000588827_f973gm.jpg",
      quote: "Cada planta, cada animal, es una palabra en el gran libro de la vida. Te enseñaré a leerlo."
    }
  ];
  
export const VALUES_DATA: Value[] = [
    {
      icon: "fa-seedling",
      title: "Autenticidad",
      description: "No actuamos. Compartimos nuestra vida, nuestras tradiciones y nuestra casa contigo."
    },
    {
      icon: "fa-hand-holding-heart",
      title: "Respeto",
      description: "A la Madre Tierra, a nuestros ancestros y a ti, nuestro invitado. Caminamos con reverencia."
    },
    {
      icon: "fa-people-carry",
      title: "Comunidad",
      description: "Tu visita beneficia directamente a las familias locales, fortaleciendo nuestra economía y cultura."
    },
    {
      icon: "fa-leaf",
      title: "Sostenibilidad",
      description: "Practicamos un turismo que protege y regenera, asegurando que la selva prospere para futuras generaciones."
    }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
      quote: "Fue más que un viaje; fue una lección de vida. Sentí una conexión que ninguna foto puede capturar. Los Hach Wíinik no te muestran la selva, te hacen parte de ella.",
      author: "Ana Sofía R.",
      location: "Ciudad de México, MX"
    },
    {
      quote: "La hospitalidad, las historias, la comida... todo fue increíblemente auténtico. Ver el compromiso que tienen con su tierra y su cultura es inspirador. Volveré.",
      author: "Michael B.",
      location: "Toronto, CA"
    },
    {
      quote: "Nunca olvidaré el sonido de los monos aulladores al amanecer ni el sabor del pozol preparado por Doña Ixchel. Este lugar te cambia. Gracias, Yuum B'otik.",
      author: "Elena G.",
      location: "Madrid, ES"
    }
];

// FIX: Added PRODUCTS_DATA which was missing.
export const PRODUCTS_DATA: Product[] = [
  {
    id: 101,
    name: "Collar de Semillas de la Selva",
    category: 'Artesanía',
    price: 450,
    image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235405/1000590400_llv2fr.jpg",
    description: "Tejido a mano por artesanas de la comunidad, este collar utiliza semillas recolectadas de forma sostenible en la selva. Cada pieza es única."
  },
  {
    id: 102,
    name: "Jarrón de Barro con Glifos Mayas",
    category: 'Artesanía',
    price: 800,
    image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235404/1000590217_c0pfk7.jpg",
    description: "Moldeado y pintado a mano, este jarrón representa la conexión de los Hach Wíinik con sus ancestros a través de los sagrados glifos."
  },
  {
    id: 201,
    name: "Libro Digital: 'Susurros del Jaguar'",
    category: 'Libro Digital',
    price: 250,
    image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235402/1000589574_f71kiz.jpg",
    description: "Una colección de cuentos y leyendas Lacandonas, transmitidas de generación en generación. Descubre los secretos de la selva en este Ebook."
  },
  {
    id: 301,
    name: "Audiolibro: 'El Canto del Cenzontle'",
    category: 'Audiolibro',
    price: 300,
    image: "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235403/1000589885_q4w46w.jpg",
    description: "Escucha las historias de la selva narradas por un abuelo de la comunidad, con sonidos ambientales grabados en el corazón de la Lacandona."
  }
];