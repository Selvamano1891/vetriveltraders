import React, { useState } from 'react';
import { galleryItems } from '../data/companyData';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Product Gallery</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive range of products and solutions across different categories.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="card-hover rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center w-full h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">VT</span>
                    </div>
                    <p className="text-sm text-slate-600">{item.category}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.category}</h3>
                <p className="text-slate-600 text-sm">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;