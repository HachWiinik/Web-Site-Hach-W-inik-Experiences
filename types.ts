export interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Value {
    icon: string;
    title: string;
    description: string;
}