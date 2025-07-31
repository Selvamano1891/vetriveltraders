import React from 'react';

const ProductModal = ({ category, isOpen, onClose }) => {
  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-10 mb-10">
            <div>
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-80 object-cover bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {category.description}
              </p>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Products:</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {category.products && (
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Complete Product Catalog</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{product.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
            <button 
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
              onClick={() => {
                onClose();
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Enterprise Quote for {category.title}
            </button>
            <button 
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors font-semibold text-lg sm:w-auto"
              onClick={onClose}
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;