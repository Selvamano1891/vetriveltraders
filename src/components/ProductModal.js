import React from 'react';

const ProductModal = ({ category, isOpen, onClose }) => {
  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">{category.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-64 object-contain bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-4"
              />
            </div>
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {category.items.map((item, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {category.products && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-slate-800">Detailed Product List</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.products.map((product, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-slate-800 mb-2">{product.name}</h4>
                    <p className="text-slate-600 text-sm">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
            <button 
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              onClick={() => {
                onClose();
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Quote for {category.title}
            </button>
            <button 
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;