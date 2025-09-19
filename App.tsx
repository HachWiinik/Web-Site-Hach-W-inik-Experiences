
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Commitment from './components/Commitment';
import Experiences from './components/Experiences';
import AboutUs from './components/AboutUs';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MascotWidget from './components/MascotWidget';
import Store from './components/Store';
import ShoppingCart from './components/ShoppingCart';
import AdminDashboard from './components/AdminDashboard';
// FIX: Added PRODUCTS_DATA to the import from ./constants.
import { EXPERIENCES_DATA, PRODUCTS_DATA } from './constants';
import { CartItem, Product } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  const handleCheckout = () => {
    alert('¡Gracias por tu compra! (Esta es una simulación)');
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    setProducts(prev => [...prev, { ...newProduct, id: Date.now() }]);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const handleDeleteProduct = (productId: number) => {
     setProducts(prev => prev.filter(p => p.id !== productId));
  };


  return (
    <div className="bg-white dark:bg-brand-dark-green font-sans text-base text-brand-dark-text dark:text-brand-light transition-colors duration-300">
      <Header 
        theme={theme} 
        onToggleTheme={handleToggleTheme} 
        cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main>
        <Hero />
        <Welcome />
        <Commitment />
        <Experiences tours={EXPERIENCES_DATA} />
        <AboutUs />
        <Sustainability />
        <Testimonials />
        <Store products={products} onAddToCart={handleAddToCart} />
        <Contact tours={EXPERIENCES_DATA} />
      </main>
      <Footer onAdminClick={() => setIsAdminDashboardOpen(true)} />
      <MascotWidget />
      <ShoppingCart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      <AdminDashboard 
        isOpen={isAdminDashboardOpen}
        onClose={() => setIsAdminDashboardOpen(false)}
        tours={EXPERIENCES_DATA}
        products={products}
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default App;