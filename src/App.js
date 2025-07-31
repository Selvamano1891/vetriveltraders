import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductCategories />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;