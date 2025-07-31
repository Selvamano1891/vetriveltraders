import React, { useState, useEffect } from 'react';
import { productCategories } from '../data/companyData';

const PrimaryProductsCarousel = ({ onProductClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Primary products with realistic content and images
  const primaryProducts = [
    {
      id: "corporate-apparel",
      title: "Corporate Apparel Solutions",
      subtitle: "Professional Branded Clothing for Every Industry",
      description: "Complete range of custom T-shirts, branded jackets, industrial uniforms, and safety vests. All sizes available with DL/CL/IDL category compliance for professional environments.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop&crop=center",
      bgGradient: "from-slate-900 via-blue-900 to-slate-800",
      highlights: ["Custom Printing & Embroidery", "All Sizes & Colors", "IS Standards Compliant", "Fast Delivery"],
      cta: "View Corporate Apparel",
      stats: { clients: "500+", products: "50+", delivery: "7 Days" }
    },
    {
      id: "ppe-safety",
      title: "PPE Safety Equipment",
      subtitle: "Complete Personal Protection Solutions",
      description: "IS-certified safety helmets, industrial gloves, safety shoes, N95 masks, and protective eyewear. All equipment meets international safety standards for workplace protection.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=400&fit=crop&crop=center",
      bgGradient: "from-red-800 via-orange-700 to-red-900",
      highlights: ["IS Certified Equipment", "International Standards", "Complete Safety Range", "Bulk Orders"],
      cta: "Safety Equipment Catalog",
      stats: { certified: "IS", protection: "100%", categories: "15+" }
    },
    {
      id: "production-support",
      title: "Production Support Materials",
      subtitle: "ESD-Safe Manufacturing Solutions",
      description: "Anti-static ESD mats, custom assembly line covers, grounding wrist bands, and specialized packaging materials for electronics and manufacturing industries.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&h=400&fit=crop&crop=center",
      bgGradient: "from-gray-800 via-slate-800 to-gray-900",
      highlights: ["ESD Compliant Materials", "Custom Manufacturing", "Anti-Static Solutions", "Quality Assured"],
      cta: "Manufacturing Solutions",
      stats: { compliance: "ESD", industries: "20+", customization: "100%" }
    },
    {
      id: "housekeeping",
      title: "Commercial Housekeeping",
      subtitle: "Professional Facility Management",
      description: "Commercial-grade cleaning equipment, eco-friendly chemicals, color-coded waste management systems, and professional maintenance supplies for large facilities.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=400&fit=crop&crop=center",
      bgGradient: "from-emerald-800 via-teal-800 to-cyan-900",
      highlights: ["Commercial Grade", "Eco-Friendly Options", "Color-Coded Systems", "Bulk Supply"],
      cta: "Facility Solutions",
      stats: { facilities: "200+", products: "100+", coverage: "Pan India" }
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
                  <div className="text-white space-y-8">
                    <div className="space-y-6">
                      <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                        {product.title}
                      </h2>
                      <p className="text-lg lg:text-xl font-medium text-gray-100 leading-relaxed">
                        {product.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-base lg:text-lg leading-relaxed text-gray-200 max-w-2xl">
                      {product.description}
                    </p>
                    
                    {/* Product Stats */}
                    <div className="grid grid-cols-3 gap-4 max-w-md">
                      {Object.entries(product.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                          <div className="text-2xl font-bold">{value}</div>
                          <div className="text-xs uppercase tracking-wide opacity-90">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {product.highlights.map((highlight, idx) => (
                        <span 
                          key={idx} 
                          className="bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-full text-sm font-medium"
                        >
                          ✓ {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button 
                        className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-base"
                        onClick={() => onProductClick && onProductClick(product.id)}
                      >
                        {product.cta}
                      </button>
                      <button 
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base"
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Get Enterprise Quote
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full max-w-2xl mx-auto">
                      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-2xl">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-80 object-contain drop-shadow-2xl"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden items-center justify-center w-full h-80">
                          <div className="text-center text-white">
                            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                              <span className="text-4xl font-bold">VT</span>
                            </div>
                            <p className="text-xl font-semibold">{product.title}</p>
                            <p className="text-sm opacity-80 mt-2">Professional Solutions</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Quality Badge */}
                      <div className="absolute -top-4 -right-4 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Premium Quality
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