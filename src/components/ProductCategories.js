import React, { useState } from 'react';
import { productCategories } from '../data/companyData';
import ProductModal from './ProductModal';

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Product Categories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive range of corporate solutions designed to meet all your business needs 
            with quality, compliance, and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {productCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg card-hover overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center w-full h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">VT</span>
                    </div>
                    <p className="text-sm text-slate-600">{category.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{category.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-3">Key Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                    onClick={() => openModal(category)}
                  >
                    View Details
                  </button>
                  <button 
                    className="px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 font-medium"
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
      
      <ProductModal 
        category={selectedCategory}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProductCategories;