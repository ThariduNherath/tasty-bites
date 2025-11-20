import React from 'react';
import { CheckCircle, Users, Award, Heart, Clock, Shield, Star } from 'lucide-react';

import { useScrollAnimation } from '../../components/hooks/useScrollAnimation';



const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Fresh Ingredients",
      description: "We use only the freshest, locally-sourced ingredients daily"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Chefs",
      description: "Our chefs have 10+ years of experience in culinary arts"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our dishes"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Made with Love",
      description: "Every dish is prepared with care and attention to detail"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Average delivery time of 25 minutes guaranteed"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Food Safety",
      description: "100% hygienic and safe food preparation standards"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div 
            ref={ref}
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900">
                Our Story & Passion for <span className="text-gradient">Food</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2022, TastyBites has been serving the community with authentic, 
                delicious food made from the heart. Our journey began with a simple mission: 
                to bring people together through amazing food experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to innovate while staying true to our roots, using 
                traditional recipes combined with modern culinary techniques. Every dish 
                tells a story of passion, quality, and dedication.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Menu Items</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className={`relative transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop"
                  alt="Chef cooking"
                  className="rounded-3xl shadow-2xl object-cover h-64 w-full animate-float"
                />
                <img
                  src="https://images.unsplash.com/photo-1761594607277-305e41d972d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZXNoJTIwaW5ncmVkaWVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400"
                  alt="Fresh ingredients"
                  className="rounded-3xl shadow-2xl object-cover h-48 w-full animate-float"
                  style={{ animationDelay: '2s' }}
                />
              </div>
              <div className="space-y-6 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop"
                  alt="Restaurant interior"
                  className="rounded-3xl shadow-2xl object-cover h-48 w-full animate-float"
                  style={{ animationDelay: '1s' }}
                />
                <img
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop"
                  alt="Delicious food"
                  className="rounded-3xl shadow-2xl object-cover h-64 w-full animate-float"
                  style={{ animationDelay: '3s' }}
                />
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">4.9/5</div>
                <div className="text-gray-600 text-sm">Customer Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;