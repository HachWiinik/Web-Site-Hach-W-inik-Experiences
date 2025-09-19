import React from 'react';
import { CartItem } from '../types';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-labelledby="cart-heading">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 dark:bg-black/80 transition-opacity" onClick={onClose}></div>

      {/* Cart Panel */}
      <div className="relative ml-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-white dark:bg-brand-dark-green shadow-xl transition-transform duration-300 ease-in-out transform translate-x-0">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/20">
          <h2 id="cart-heading" className="text-xl font-serif font-bold text-brand-dark-green dark:text-brand-amber">
            Carrito de Compras
          </h2>
          <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white" onClick={onClose}>
            <span className="sr-only">Cerrar panel</span>
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cartItems.length > 0 ? (
            <ul role="list" className="divide-y divide-gray-200 dark:divide-white/20">
              {cartItems.map((item) => (
                <li key={item.id} className="flex p-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-white/20">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-brand-dark-text dark:text-white">
                        <h3>{item.name}</h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center border border-gray-300 dark:border-white/30 rounded-md">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-lg">-</button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-lg">+</button>
                      </div>
                      <div className="flex">
                        <button type="button" onClick={() => onRemoveItem(item.id)} className="font-medium text-red-600 hover:text-red-500">
                          Quitar
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center p-8">
              <p className="text-gray-500 dark:text-gray-400">Tu carrito está vacío.</p>
              <a href="#store" onClick={onClose} className="mt-4 inline-block text-brand-amber hover:text-brand-blue">
                Explorar la tienda
              </a>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 dark:border-white/20 p-4">
            <div className="flex justify-between text-lg font-bold text-brand-dark-text dark:text-white">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Envío e impuestos calculados al finalizar la compra.</p>
            <div className="mt-6">
              <button
                onClick={onCheckout}
                className="w-full bg-brand-amber text-brand-dark-green font-bold py-3 px-8 rounded-full text-lg hover:bg-transparent hover:text-brand-amber border-2 border-brand-amber transition-all duration-300"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
