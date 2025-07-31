import React from 'react';
import { companyInfo } from '../data/companyData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About {companyInfo.name}</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-slate-800 mb-3">🎯 Our Mission</h3>
                <p className="text-slate-600">To provide comprehensive corporate solutions that enhance workplace safety, productivity, and brand identity.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-3">🏆 Our Vision</h3>
                <p className="text-slate-600">To be India's leading B2B supplier for corporate apparel, safety equipment, and industrial solutions.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Quality products with competitive pricing</li>
                <li>✓ Fast delivery across India</li>
                <li>✓ Custom branding and design services</li>
                <li>✓ EMS/ESG compliance ready solutions</li>
                <li>✓ Dedicated customer support</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">

                <img 
              src="/assets/images/about.svg" 
              alt="Vetrivel Traders Logo"
              className="w-full h-full object-contain rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl items-center justify-center shadow-xl">
              <span className="text-white font-bold text-2xl">VT</span>
            </div>
                {/* <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-blue-600">VT</span>
                </div>
                <p className="text-lg text-slate-700">Trusted Corporate Partner</p>
                <p className="text-sm text-slate-500 mt-2">Serving Industries Across India</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;