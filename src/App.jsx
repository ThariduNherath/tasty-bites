import React from 'react';
import { CartProvider } from "./components/context/CartContext";

import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Menu from './components/Sections/Menu';
import About from './components/Sections/About';
import Testimonials from './components/Sections/Testimonials';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import Cart from './components/Layout/Cart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Menu />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;