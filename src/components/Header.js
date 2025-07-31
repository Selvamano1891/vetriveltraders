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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="flex items-center">
              📧 {companyInfo.email}
            </span>
            <span className="flex items-center">
              📞 {companyInfo.phone}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Follow Us:</span>
            <button className="text-white hover:text-blue-300 p-1">📘</button>
            <button className="text-white hover:text-blue-300 p-1">🐦</button>
            <button className="text-white hover:text-blue-300 p-1">💼</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-3">
              <img 
                src="/assets/images/logo.svg" 
                alt="Vetrivel Traders Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg items-center justify-center">
                <span className="text-white font-bold text-xl">VT</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">{companyInfo.name}</h1>
              <p className="text-sm text-slate-600">{companyInfo.tagline}</p>
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