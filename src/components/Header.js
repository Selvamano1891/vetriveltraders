import React, { useState } from 'react';
import { companyInfo } from '../data/companyData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      {/* Professional Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6 mb-2 sm:mb-0">
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{companyInfo.email}</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{companyInfo.phone}</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Connect with us:</span>
            <button className="text-gray-300 hover:text-blue-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </button>
            <button className="text-gray-300 hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-14 h-14 mr-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-2 shadow-lg">
              <img 
                src="/assets/images/company-logo.jpeg" 
                alt="Vetrivel Traders Logo"
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center">
                <span className="text-white font-bold text-xl">VT</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{companyInfo.name}</h1>
              <p className="text-sm text-gray-600 font-medium">{companyInfo.tagline}</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors font-medium">About Us</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-blue-600 transition-colors font-medium">Products</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition-colors font-medium">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-blue-600 transition-colors font-medium">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">Contact Us</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white border rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 p-4">
              <button onClick={() => scrollToSection('home')} className="text-left py-3 hover:text-blue-600 transition-colors font-medium border-b border-gray-100 last:border-b-0">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-3 hover:text-blue-600 transition-colors font-medium border-b border-gray-100 last:border-b-0">About Us</button>
              <button onClick={() => scrollToSection('products')} className="text-left py-3 hover:text-blue-600 transition-colors font-medium border-b border-gray-100 last:border-b-0">Products</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-3 hover:text-blue-600 transition-colors font-medium border-b border-gray-100 last:border-b-0">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left py-3 hover:text-blue-600 transition-colors font-medium border-b border-gray-100 last:border-b-0">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 mt-2 px-4">Contact Us</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;