import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/menuData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            What Our <span className="text-orange-300">Customers</span> Say
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers who love our food and service
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-scale-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="text-primary-500 mb-6">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-primary-500">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-3">4.9/5</div>
            <div className="text-primary-200 font-medium">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-3">10K+</div>
            <div className="text-primary-200 font-medium">Deliveries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-3">98%</div>
            <div className="text-primary-200 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-3">25min</div>
            <div className="text-primary-200 font-medium">Avg. Delivery Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;