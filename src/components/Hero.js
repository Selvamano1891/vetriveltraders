import React, { useState } from 'react';
import PrimaryProductsCarousel from './PrimaryProductsCarousel';
import SearchBar from './SearchBar';
import { productCategories } from '../data/companyData';

const Hero = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setShowSearchResults(false);
      return;
    }

    const results = productCategories.filter(category => 
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (category.products && category.products.some(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
    
    setSearchResults(results);
    setShowSearchResults(true);
  };

  const handleProductClick = (productId) => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-8 shadow-xl">
            <img 
              src="/assets/images/company-logo.jpeg" 
              alt="Vetrivel Traders Logo"
              className="w-16 h-16 object-contain rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-16 h-16 items-center justify-center">
              <span className="text-white font-bold text-2xl">VT</span>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Professional B2B Solutions
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 text-gray-600 leading-relaxed max-w-5xl mx-auto font-medium">
            Trusted corporate partner delivering end-to-end industrial solutions across India. 
            From safety equipment to production materials, we power your business operations.
          </p>

          {/* Product Search */}
          <div className="mb-16">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search products, categories, or solutions..."
            />
            
            {/* Search Results */}
            {showSearchResults && (
              <div className="mt-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Search Results ({searchResults.length} found)
                    </h3>
                    <button
                      onClick={() => setShowSearchResults(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {searchResults.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-4">
                      {searchResults.map((result) => (
                        <div key={result.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer"
                             onClick={() => scrollToSection('products')}>
                          <h4 className="font-semibold text-gray-900 mb-2">{result.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{result.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {result.items.slice(0, 3).map((item, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No products found. Try different keywords.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Primary Products Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Primary Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our core product categories designed for industrial and corporate applications
            </p>
          </div>
          <PrimaryProductsCarousel onProductClick={handleProductClick} />
        </div>

        {/* Professional Statistics */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Corporate Clients</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Cities Served</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Products Available</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Customer Support</div>
          </div>
        </div>

        {/* B2B Call to Action */}
        <div className="text-center">
          <div className="inline-flex gap-6">
            <button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
              onClick={() => scrollToSection('products')}
            >
              Browse All Products
            </button>
            <button 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Request Enterprise Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;