import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Object.values(ProductCategory)];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Katalog Produk</h1>
          <p className="text-gray-600 max-w-2xl">
            Temukan berbagai jenis kandang hewan berkualitas galvanis untuk kebutuhan hobi maupun industri peternakan Anda.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex items-center space-x-2 min-w-max">
            <span className="text-gray-400 mr-2 flex items-center">
              <Filter size={18} className="mr-1" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">Produk untuk kategori ini belum tersedia.</p>
            <button 
              onClick={() => setSelectedCategory('All')} 
              className="mt-4 text-primary-600 hover:underline font-medium"
            >
              Lihat semua produk
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;