import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { useCart } from '../../components/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, getCartItemsCount } = useCart();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="text-2xl font-display font-bold tracking-wide text-gray-900 transition-colors"
            >
              TastyBites
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 transition-all duration-200 hover:text-primary-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Section */}
          <div className="hidden lg:flex items-center space-x-5">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors">
              <Phone size={18} />
              <span className="text-sm font-medium">(+94) 71-223-3434</span>
            </button>

            <button className="btn-primary text-sm font-semibold">Order Now</button>

            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 transition-colors hover:scale-110 duration-200"
            >
              <ShoppingCart size={24} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white shadow-md">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="flex items-center space-x-4 pt-4">
                <button className="btn-primary flex-1">Order Now</button>
                <button
                  onClick={toggleCart}
                  className="relative p-3 text-gray-700 hover:text-primary-500 border border-gray-300 rounded-lg"
                >
                  <ShoppingCart size={24} />
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;