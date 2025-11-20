import React from 'react';
import { Star, Clock, Shield, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../components/hooks/useScrollAnimation';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-primary-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute top-20 right-4 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-10 left-1/4 sm:bottom-20 sm:left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="relative container-custom py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Left Content */}
          <div
            ref={ref}
            className={`space-y-6 sm:space-y-8 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center ">
                
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-display font-bold text-gray-900 leading-tight sm:leading-tight">
                Delicious
                <span className="text-gradient block">Food Delivered</span>
                Fast to You
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
                Experience restaurant-quality meals crafted by expert chefs and
                delivered to your doorstep in minutes. Fresh ingredients,
                authentic flavors, guaranteed satisfaction.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    25 min
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Average Delivery
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    100%
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">Food Safe</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    4.9/5
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Customer Rating
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="btn-primary text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center sm:justify-start space-x-2 group">
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4">
                View Menu
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative z-10 flex justify-center lg:justify-end">
              {/* Image container (hover only affects image area) */}
              <div className="relative rounded-full overflow-hidden shadow-2xl w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] cursor-pointer transition-transform duration-500 ease-out hover:scale-105 hover:rotate-1">
                <img
                  src="src/assets/hero.png"
                  alt="Delicious food"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                />

                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/0 via-transparent to-amber-400/0 hover:from-orange-400/10 hover:to-amber-400/10 transition-all duration-500 ease-out pointer-events-none"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
