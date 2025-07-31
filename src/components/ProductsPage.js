import React, { useState } from 'react';
import { productCategories } from '../data/companyData';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Product Range</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive industrial solutions for modern enterprises
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {productCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center p-6">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {category.items.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                    {category.items.length > 3 && (
                      <span className="text-xs text-gray-500">+{category.items.length - 3} more</span>
                    )}
                  </div>
                </div>
                
                <button 
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                >
                  {selectedCategory === category.id ? 'Hide Details' : 'View Details'}
                </button>
                
                {selectedCategory === category.id && category.products && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-3">Complete Product List:</h4>
                    <div className="space-y-2">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3">
                          <h5 className="font-medium text-gray-900 text-sm">{product.name}</h5>
                          <p className="text-gray-600 text-xs mt-1">{product.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;