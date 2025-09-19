import React, { useState, useEffect } from 'react';
import { Product, Experience } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  tours: Experience[];
  onAddProduct: (product: Omit<Product, 'id'>) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
}

const emptyProduct: Omit<Product, 'id'> = {
    name: '',
    category: 'Artesanía',
    price: 0,
    image: '',
    description: '',
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  products,
  tours,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct
}) => {
  const [activeTab, setActiveTab] = useState('products');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Omit<Product, 'id'>>(emptyProduct);

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
      setIsFormOpen(true);
    } else {
      setFormData(emptyProduct);
    }
  }, [editingProduct]);

  if (!isOpen) return null;
  
  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
  };
  
  const handleAddNewClick = () => {
    setEditingProduct(null);
    setFormData(emptyProduct);
    setIsFormOpen(true);
  };
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) : value }));
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      onUpdateProduct({ ...editingProduct, ...formData });
    } else {
      onAddProduct(formData);
    }
    closeForm();
  };
  
  const closeForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
    setFormData(emptyProduct);
  };

  const renderProductForm = () => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
        <div className="bg-white dark:bg-brand-dark-green rounded-lg shadow-xl w-full max-w-lg m-4">
            <form onSubmit={handleFormSubmit}>
                <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-brand-dark-green dark:text-brand-amber mb-4">
                        {editingProduct ? 'Editar Producto' : 'Añadir Producto'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleFormChange} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-black dark:text-white" />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Categoría</label>
                            <select name="category" id="category" value={formData.category} onChange={handleFormChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-black dark:text-white">
                                <option>Artesanía</option>
                                <option>Libro Digital</option>
                                <option>Audiolibro</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Precio</label>
                            <input type="number" name="price" id="price" value={formData.price} onChange={handleFormChange} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-black dark:text-white" />
                        </div>
                         <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL de Imagen</label>
                            <input type="text" name="image" id="image" value={formData.image} onChange={handleFormChange} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-black dark:text-white" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
                            <textarea name="description" id="description" value={formData.description} onChange={handleFormChange} rows={3} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-black dark:text-white"></textarea>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3 flex justify-end gap-3">
                    <button type="button" onClick={closeForm} className="py-2 px-4 rounded-md text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300">Cancelar</button>
                    <button type="submit" className="py-2 px-4 rounded-md text-white bg-brand-blue hover:bg-brand-blue/80">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-brand-dark-green rounded-lg shadow-xl w-full max-w-4xl h-[90vh] flex flex-col m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/20">
          <h2 className="text-xl font-serif font-bold text-brand-dark-green dark:text-brand-amber">CRM Lite</h2>
          <button type="button" className="p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300" onClick={onClose}>
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-white/20">
            <nav className="flex space-x-4 p-4">
                <button onClick={() => setActiveTab('products')} className={`px-3 py-2 font-medium text-sm rounded-md ${activeTab === 'products' ? 'bg-brand-amber text-brand-dark-green' : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                    Gestión de Tienda
                </button>
                 <button onClick={() => setActiveTab('tours')} className={`px-3 py-2 font-medium text-sm rounded-md ${activeTab === 'tours' ? 'bg-brand-amber text-brand-dark-green' : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                    Gestión de Tours
                </button>
            </nav>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Productos</h3>
                <button onClick={handleAddNewClick} className="bg-brand-blue text-white py-2 px-4 rounded-md hover:bg-brand-blue/80">Añadir Producto</button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Producto</th>
                            <th scope="col" className="px-6 py-3">Categoría</th>
                            <th scope="col" className="px-6 py-3">Precio</th>
                            <th scope="col" className="px-6 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-3">
                                    <img src={p.image} alt={p.name} className="w-10 h-10 rounded-md object-cover" />
                                    {p.name}
                                </th>
                                <td className="px-6 py-4">{p.category}</td>
                                <td className="px-6 py-4">${p.price.toFixed(2)}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button onClick={() => handleEditClick(p)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
                                    <button onClick={() => confirm('¿Seguro que quieres eliminar este producto?') && onDeleteProduct(p.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
              </div>
            </div>
          )}
          {activeTab === 'tours' && (
             <div>
                <h3 className="text-lg font-semibold mb-4">Tours (Vista)</h3>
                <p className="text-gray-500 dark:text-gray-400">La funcionalidad para editar tours se implementará en una futura actualización.</p>
             </div>
          )}
        </div>
        {isFormOpen && renderProductForm()}
      </div>
    </div>
  );
};

export default AdminDashboard;
