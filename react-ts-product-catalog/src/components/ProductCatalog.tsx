// src/components/ProductCatalog.tsx
import React, { useState } from 'react';
import { Product } from '../types/Product';

interface ProductCatalogProps {
  products: Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter products by category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container w-full mx-auto px-6 py-12 min-h-screen ">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center text-white mb-12">Product Catalog</h1>

      {/* Search Bar */}
      <div className="mb-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-4 text-xl border border-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-8 text-center">
        <button
          onClick={() => handleCategoryChange('All')}
          className="px-6 py-3 mx-2 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-300 focus:outline-none"
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange('Electronics')}
          className="px-6 py-3 mx-2 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-300 focus:outline-none"
        >
          Electronics
        </button>
        <button
          onClick={() => handleCategoryChange('Clothing')}
          className="px-6 py-3 mx-2 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-300 focus:outline-none"
        >
          Clothing
        </button>
        <button
          onClick={() => handleCategoryChange('Home')}
          className="px-6 py-3 mx-2 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-300 focus:outline-none"
        >
          Home
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-white p-6 border border-white rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-md">
              {/* Apply filter or adjust image background */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-center transform transition-all duration-300 ease-in-out"
              />
              {/* Frosted effect */}
              <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm"></div>
            </div>
            <h3 className="text-2xl font-semibold text-center text-black mb-2">{product.title}</h3>
            <p className="text-lg font-bold text-center text-black">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
