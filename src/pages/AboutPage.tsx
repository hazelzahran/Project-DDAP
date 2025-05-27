
import React from 'react';
import Navbar from '@/components/Navbar';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen gradient-background">
      <Navbar />
      <div className="container mx-auto px-50 py-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-display">About Us</h1>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-7 shadow-xl text-justify  "> 
          <p className="text-lg mb-5  font-light font-display">
            GKMeal is a web-based food ordering platform designed specifically for students in a fast-paced academic environment. It helps users browse menus, check prices, and order meals from the GKM canteen quickly and efficiently — all without standing in long queues. GKMeal makes eating convenient, so you can focus on what matters: studying, coding, and staying productive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
