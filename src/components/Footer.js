import React from 'react';
import { companyInfo, productCategories } from '../data/companyData';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">VT</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">{companyInfo.name}</h3>
                <p className="text-sm text-slate-300">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Your trusted partner for end-to-end corporate solutions across India.
            </p>
            <div className="flex space-x-3">
              <button className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                📘
              </button>
              <button className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                🐦
              </button>
              <button className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                💼
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-slate-300 hover:text-white transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              {productCategories.slice(0, 4).map((category) => (
                <li key={category.id}>
                  <button 
                    onClick={() => scrollToSection('products')} 
                    className="text-slate-300 hover:text-white transition-colors text-left"
                  >
                    {category.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📧</span>
                <div>
                  <p className="text-slate-300 text-sm">Email</p>
                  <p className="text-white">{companyInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📞</span>
                <div>
                  <p className="text-slate-300 text-sm">Phone</p>
                  <p className="text-white">{companyInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <div>
                  <p className="text-slate-300 text-sm">Location</p>
                  <p className="text-white">{companyInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm mb-4 md:mb-0">
              © 2024 {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-slate-300 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;