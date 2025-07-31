import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Corporate Apparel Solutions",
      subtitle: "Custom branded clothing for all your business needs",
      description: "T-shirts, jackets, uniforms, and safety vests with DL/CL/IDL branding. All sizes and colors available.",
      image: "/assets/images/corporate_potofilo.svg",
      bgColor: "from-blue-600 to-blue-800",
      features: ["Custom Printing", "All Sizes & Colors", "Professional Branding"]
    },
    {
      id: 2,
      title: "PPE Safety Equipment",
      subtitle: "Complete protection for workplace safety",
      description: "Comprehensive range of personal protective equipment including gloves, masks, helmets, and safety gear.",
      image: "/assets/images/ppe-safety.svg",
      bgColor: "from-red-500 to-orange-600",
      features: ["IS Certified", "Industrial Grade", "Full Protection"]
    },
    {
      id: 3,
      title: "Housekeeping Supplies",
      subtitle: "Commercial-grade cleaning solutions",
      description: "Professional cleaning tools, disinfectants, and color-coded waste management systems.",
      image: "/assets/images/housekeeping.svg",
      bgColor: "from-cyan-500 to-emerald-600",
      features: ["Eco-Friendly", "Bulk Options", "Color-Coded Systems"]
    },
    {
      id: 4,
      title: "Production Support",
      subtitle: "ESD-safe manufacturing materials",
      description: "Anti-static mats, assembly line covers, grounding equipment, and packaging materials.",
      image: "/assets/images/production-support.svg",
      bgColor: "from-gray-600 to-gray-800",
      features: ["ESD Compliant", "Manufacturing Ready", "Quality Materials"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${slide.bgColor} relative`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <h3 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-lg lg:text-xl mb-6 text-gray-100">
                      {slide.subtitle}
                    </p>
                    <p className="text-base mb-8 text-gray-200 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {slide.features.map((feature, idx) => (
                        <span key={idx} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button 
                        className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors"
                        onClick={() => {
                          const element = document.getElementById('products');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        View Products
                      </button>
                      <button 
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors"
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-80 h-60 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center p-8">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden items-center justify-center w-full h-full">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold">VT</span>
                          </div>
                          <p className="text-sm">{slide.title}</p>
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

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-colors z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-colors z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;