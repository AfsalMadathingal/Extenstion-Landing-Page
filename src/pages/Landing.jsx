import React, { useState } from 'react';
import { ArrowRight, Send, Shield, Clock, Users, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Send className="w-6 h-6 text-blue-400" />,
      title: "Automated Connections",
      description: "Send personalized connection requests automatically with custom notes to your target audience"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Safe & Secure",
      description: "Built with LinkedIn's best practices in mind to keep your account safe"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Save Time",
      description: "Automate hours of manual work and focus on what matters - building relationships"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Grow Network",
      description: "Expand your professional network efficiently with targeted connections"
    }
  ];

  const navItems = ['Features', 'Pricing', 'Documentation', 'About'];

  return (
    <div className="min-h-screen relative bg-gray-900 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                LinkedBoost
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent p-6 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Automate Your LinkedIn Networking
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Send personalized connection requests at scale with our powerful Chrome extension. Build your network while you sleep.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center mx-auto group">
            Add to Chrome
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-700/50 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold ml-3 text-gray-100">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our extension seamlessly integrates with LinkedIn to help you connect with the right people using personalized messages.
            </p>
          </div>
          
          <div className="bg-gray-700/30 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center relative group">
              <img 
                src="/api/placeholder/600/400" 
                alt="Extension Demo" 
                className="rounded-lg shadow-md mx-auto hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 dark:bg-gradient-to-r dark:from-blue-700 dark:to-purple-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Supercharge Your LinkedIn Networking?
          </h2>
          <p className="text-xl mb-8 opacity-90 dark:opacity-80">
            Join thousands of professionals using our extension to grow their network
          </p>
          <button className="bg-white hover:bg-gray-100  bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700">
            Install Now - It's Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;