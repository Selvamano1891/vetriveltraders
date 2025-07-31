import React from 'react';
import { productCategories } from '../data/companyData';

const ProductCategories = () => {
  const handleViewProducts = () => {
    // This will be handled by parent App component for navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // We'll pass this up through props later
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Complete Product Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive industrial solutions engineered for modern enterprises. 
            Each category features IS-certified, EMS-compliant products designed for professional environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {productCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 card-hover overflow-hidden group">
              <div className="h-56 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 group-hover:from-blue-500/10 group-hover:to-emerald-500/10 transition-colors duration-300"></div>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center w-full h-full">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-3xl font-bold text-white">VT</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-700">{category.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">{category.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base">{category.description}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">Key Products</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full border border-blue-200 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm uppercase tracking-wide"
                    onClick={handleViewProducts}
                  >
                    View All Products
                  </button>
                  <button 
                    className="px-6 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 font-semibold text-sm uppercase tracking-wide"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;