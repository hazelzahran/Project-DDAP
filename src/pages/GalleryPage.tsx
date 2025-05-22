
import React from 'react';
import Navbar from '@/components/Navbar';

const GalleryPage: React.FC = () => {
  // Dummy gallery items - would typically come from a CMS or API
  const galleryItems = [
    { id: 1, title: "Chef Knife in Action" },
    { id: 2, title: "Professional Kitchen Setup" },
    { id: 3, title: "Precision Cutting Technique" },
    { id: 4, title: "Knife Collection" },
    { id: 5, title: "Food Preparation" },
    { id: 6, title: "Artisan Knifemaking" },
  ];

  return (
    <div className="min-h-screen gradient-background">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-display">Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="aspect-square bg-white/20 backdrop-blur-md rounded-lg overflow-hidden relative shadow-xl group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="triangle" style={{transform: 'scale(0.4)'}}></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
