import React, { useState } from 'react';
import { Star, Plus, Clock, Flame } from 'lucide-react';
import { menuItems, categories } from '../data/menuData';
import { useCart } from '../../components/context/CartContext';
import { useScrollAnimation } from '../../components/hooks/useScrollAnimation';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart } = useCart();
  const { ref, isVisible } = useScrollAnimation();

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const activeCategoryData = categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Our Delicious <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully crafted dishes made with the freshest
            ingredients and authentic flavors. From sizzling burgers to
            decadent desserts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {/* ✅ Render Lucide icons dynamically */}
              <category.icon
                className={`w-5 h-5 ${
                  activeCategory === category.id
                    ? 'text-white'
                    : 'text-primary-600'
                }`}
              />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Header */}
        {activeCategoryData && (
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-2 flex justify-center items-center space-x-2">
              <activeCategoryData.icon className="w-6 h-6 text-primary-600" />
              <span>{activeCategoryData.name}</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 card-hover overflow-hidden group animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {item.popular && (
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Flame className="w-4 h-4" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-white text-primary-600 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:scale-110"
                  >
                    <Plus size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary-600">
                    Rs.{item.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Item Details */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{item.prepTime}</span>
                  </div>
                  <span>{item.calories} cal</span>
                </div>

                {/* Ingredients */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.ingredients.slice(0, 3).map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {ingredient}
                    </span>
                  ))}
                  {item.ingredients.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                      +{item.ingredients.length - 3} more
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary text-lg px-12 py-4">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
