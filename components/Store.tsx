import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import { Product } from '../types';
import StoreLogo from './StoreLogo';

interface StoreProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const Store: React.FC<StoreProps> = ({ products, onAddToCart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('Todos');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = filter === 'Todos' ? products : products.filter(p => p.category === filter);

  return (
    <section id="tienda" ref={sectionRef} className="py-20 bg-gray-100 dark:bg-brand-brown">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <div className="w-48 mx-auto mb-4">
                <StoreLogo />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark-green dark:text-brand-amber tracking-wide">
                Un Recuerdo de la Selva
            </h2>
            <div className="mt-3 h-1 w-20 bg-brand-amber mx-auto"></div>
        </div>
        
        <div className={`flex justify-center items-center gap-2 md:gap-4 mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {categories.map(category => (
                <button 
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${filter === category ? 'bg-brand-amber text-brand-dark-green' : 'bg-white dark:bg-brand-dark-green/30 text-brand-dark-text dark:text-brand-light hover:bg-gray-200 dark:hover:bg-brand-dark-green/50'}`}
                >
                    {category}
                </button>
            ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
