
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-10 md:py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground font-display">
            "Eat, Code, Repeat"
          </h1>
          <p className="text-lg md:max-w-md mb-8 text-foreground/90">
            A passionate coder fueled by snacks and curiosity. Building digital wonders one line at a time — then grabbing a bite and doing it all over again.
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-md py-6 px-8 text-lg"
          >
            Buy now
          </Button>
        </div>
        <div className="w-full md:w-1/2 relative hidden md:flex justify-end items-center">
          <div className="triangle animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
