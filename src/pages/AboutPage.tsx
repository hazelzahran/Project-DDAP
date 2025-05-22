
import React from 'react';
import Navbar from '@/components/Navbar';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen gradient-background">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-display">About Us</h1>
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-xl">
          <p className="text-lg mb-6">
            Welcome to our website! We are passionate about creating high-quality kitchen tools that make your cooking experience more enjoyable and efficient.
          </p>
          <p className="text-lg mb-6">
            Our team consists of experienced chefs and engineers who work together to design and produce the best kitchen tools on the market.
          </p>
          <p className="text-lg">
            Founded in 2010, we've been serving customers worldwide with our premium products that combine functionality, durability, and elegant design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
