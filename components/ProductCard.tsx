import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img 
          src={product.imagePlaceholder} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.isBestSeller && (
          <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
            Best Seller
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs font-medium text-primary-600 mb-1">{product.category}</div>
        <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Harga mulai</span>
            <span className="font-bold text-gray-900">{product.priceRange.split('-')[0]}</span>
          </div>
          
          {product.shopeeUrl ? (
            <a 
              href={product.shopeeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-50 text-primary-600 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
              title="Lihat di Shopee"
            >
              <ShoppingBag size={20} />
            </a>
          ) : (
            <span className="text-gray-300">
              <ShoppingBag size={20} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;