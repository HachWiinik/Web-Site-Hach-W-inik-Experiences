import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white dark:bg-brand-dark-green/30 rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col">
      <div className="h-64 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
         <div className="absolute top-2 right-2 bg-brand-amber text-brand-dark-green text-xs font-bold px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-brand-brown dark:text-brand-amber mb-2 flex-grow">{product.name}</h3>
        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-bold text-brand-dark-green dark:text-brand-light">${product.price.toFixed(2)}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-brand-blue text-white font-semibold py-2 px-4 rounded-full hover:bg-brand-amber hover:text-brand-dark-green transition-colors duration-300"
            aria-label={`Añadir ${product.name} al carrito`}
          >
            <i className="fas fa-cart-plus mr-2"></i>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
