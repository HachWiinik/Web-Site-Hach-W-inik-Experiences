export interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Product {
  id: number;
  name: string;
  category: 'Artesanía' | 'Libro Digital' | 'Audiolibro';
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
