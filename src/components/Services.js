import React from 'react';
import { services } from '../data/companyData';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            End-to-end supply assurance with comprehensive support services 
            tailored to your business requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center card-hover bg-slate-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;