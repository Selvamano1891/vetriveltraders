import React, { useState, useEffect } from 'react';
import { productCategories } from '../data/companyData';

const PrimaryProductsCarousel = ({ onProductClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Primary products based on business importance
  const primaryProducts = [
    {
      id: "corporate-apparel",
      title: "Corporate Apparel",
      subtitle: "Custom Branded Professional Clothing",
      description: "Complete range of T-shirts, jackets, uniforms, and safety vests with custom branding for all industrial requirements.",
      image: "/assets/images/corporate-apparel.svg",
      bgGradient: "from-blue-600 via-blue-700 to-blue-800",
      highlights: ["Custom Branding", "All Sizes Available", "DL/CL/IDL Compliant"],
      cta: "Explore Apparel Solutions"
    },
    {
      id: "ppe-safety",
      title: "PPE Safety Equipment",
      subtitle: "Complete Personal Protective Equipment",
      description: "IS-certified safety equipment including helmets, gloves, shoes, masks, and protective gear for workplace safety.",
      image: "/assets/images/ppe-safety.svg",
      bgGradient: "from-red-600 via-orange-600 to-amber-600",
      highlights: ["IS Certified", "Industrial Grade", "Complete Protection"],
      cta: "View Safety Equipment"
    },
    {
      id: "production-support",
      title: "Production Support Materials",
      subtitle: "ESD-Safe Manufacturing Solutions",
      description: "Anti-static mats, assembly line covers, ESD wrist bands, and packaging materials for electronics manufacturing.",
      image: "/assets/images/production-support.svg",
      bgGradient: "from-gray-700 via-slate-700 to-zinc-800",
      highlights: ["ESD Compliant", "Manufacturing Ready", "Anti-Static"],
      cta: "Production Solutions"
    },
    {
      id: "housekeeping",
      title: "Industrial Housekeeping",
      subtitle: "Commercial Cleaning Solutions",
      description: "Professional-grade cleaning supplies, color-coded waste management, and facility maintenance products.",
      image: "/assets/images/housekeeping.svg",
      bgGradient: "from-emerald-600 via-teal-600 to-cyan-700",
      highlights: ["Commercial Grade", "Color-Coded Systems", "Eco-Friendly"],
      cta: "Cleaning Solutions"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % primaryProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + primaryProducts.length) % primaryProducts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      {primaryProducts.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 translate-x-0' : 
            index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${product.bgGradient} relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern"></div>
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                        {product.title}
                      </h2>
                      <p className="text-xl lg:text-2xl font-medium text-gray-100">
                        {product.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-gray-200 max-w-xl">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {product.highlights.map((highlight, idx) => (
                        <span 
                          key={idx} 
                          className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <button 
                        className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
                        onClick={() => onProductClick && onProductClick(product.id)}
                      >
                        {product.cta}
                      </button>
                      <button 
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full max-w-lg mx-auto">
                      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-72 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden items-center justify-center w-full h-72">
                          <div className="text-center text-white">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-3xl font-bold">VT</span>
                            </div>
                            <p className="text-lg font-medium">{product.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-full transition-all duration-300 z-20 group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-full transition-all duration-300 z-20 group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {primaryProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Progress */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / primaryProducts.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PrimaryProductsCarousel;