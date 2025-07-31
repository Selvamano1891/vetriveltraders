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
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">VT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">{companyInfo.name}</h1>
              <p className="text-sm text-slate-600">{companyInfo.tagline}</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600">About Us</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-blue-600">Products</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-blue-600">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Contact Us</button>
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
              <button onClick={() => scrollToSection('home')} className="text-left py-2 hover:text-blue-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-blue-600">About Us</button>
              <button onClick={() => scrollToSection('products')} className="text-left py-2 hover:text-blue-600">Products</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left py-2 hover:text-blue-600">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-blue-600">Contact Us</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;