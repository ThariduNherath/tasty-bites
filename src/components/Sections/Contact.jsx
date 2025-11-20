import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../../components/hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { ref, isVisible } = useScrollAnimation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content - Contact Info */}
          <div 
            ref={ref}
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Have questions or want to place a large order? We'd love to hear from you. 
                Our team is here to help with any inquiries.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-primary-50 to-orange-50 rounded-3xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                  <p className="text-gray-600 text-lg">(+94) 71-223-3434</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-primary-50 to-orange-50 rounded-3xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                  <p className="text-gray-600 text-lg">hello@tastybites.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-primary-50 to-orange-50 rounded-3xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Address</h3>
                  <p className="text-gray-600 text-lg">123 Food Street, Colombo</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-primary-50 to-orange-50 rounded-3xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Hours</h3>
                  <p className="text-gray-600 text-lg">Mon-Sun: 08:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <MessageCircle className="w-8 h-8" />
                <h3 className="text-xl font-bold">Quick Response</h3>
              </div>
              <p className="text-primary-100 leading-relaxed">
                We typically respond to all inquiries within 2 hours during business hours. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white text-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white text-lg"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white text-lg resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;