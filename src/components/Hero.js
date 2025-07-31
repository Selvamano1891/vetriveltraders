import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              End-to-End <span className="text-yellow-300">Corporate Solutions</span>
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Your trusted partner for corporate apparel, safety equipment, housekeeping supplies, 
              and production support materials. Serving industries across India with quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-yellow-400 text-slate-800 hover:bg-yellow-300 font-semibold px-8 py-3 rounded-lg transition-colors"
                onClick={() => scrollToSection('products')}
              >
                View Products
              </button>
              <button 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-lg transition-colors"
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold">VT</span>
                </div>
                <p className="text-lg opacity-90">Professional Corporate Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;