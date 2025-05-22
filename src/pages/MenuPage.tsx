
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Store } from 'lucide-react';

// Define a type for the position object to fix the TypeScript error
interface PositionStyle {
  top?: string;
  left?: string;
  right?: string;
  rotate?: string;
}

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Store data with better descriptions
  const stores = [
    { 
      id: 1, 
      name: "STORE 1", 
      description: "Toko premium kami dengan koleksi lengkap peralatan dapur kualitas terbaik", 
      image: "/lovable-uploads/4c956da1-19b8-4276-a991-28eb88361a04.png" 
    },
    { 
      id: 2, 
      name: "STORE 2", 
      description: "Outlet yang menyediakan berbagai jenis pisau dan peralatan memotong", 
      image: "/lovable-uploads/4c956da1-19b8-4276-a991-28eb88361a04.png" 
    },
    { 
      id: 3, 
      name: "STORE 3", 
      description: "Gerai utama dengan area demo memasak dan konsultasi chef", 
      image: "/lovable-uploads/4c956da1-19b8-4276-a991-28eb88361a04.png" 
    },
    { 
      id: 4, 
      name: "STORE 4", 
      description: "Toko khusus alat dapur modern dan teknologi memasak terkini", 
      image: "/lovable-uploads/4c956da1-19b8-4276-a991-28eb88361a04.png" 
    },
    { 
      id: 5, 
      name: "STORE 5", 
      description: "Outlet premium dengan layanan khusus dan produk eksklusif", 
      image: "/lovable-uploads/4c956da1-19b8-4276-a991-28eb88361a04.png" 
    }
  ];

  // Pre-defined positions for each store card with proper typing
  const positions: PositionStyle[] = [
    { top: '5%', left: '30%', rotate: '-15deg' },    // Store 1 - top left
    { top: '60%', left: '5%', rotate: '15deg' },     // Store 2 - bottom left
    { top: '40%', left: '40%', rotate: '0deg' },     // Store 3 - center
    { top: '70%', right: '20%', rotate: '-10deg' },  // Store 4 - bottom right
    { top: '15%', right: '5%', rotate: '10deg' },    // Store 5 - top right
  ];

  // Mobile layout will use a simple grid
  const isMobile = () => window.innerWidth < 768;

  return (
    <div className="min-h-screen gradient-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-16 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-display">Our Stores</h1>
        
        {/* Mobile view - grid layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stores.map((store) => (
            <div 
              key={store.id}
              className="bg-white/20 backdrop-blur-md rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all hover:scale-105"
              onClick={() => navigate(`/store/${store.id}`)}
            >
              <div className="p-2 bg-white/30 font-bold text-lg font-display">
                {store.name}
              </div>
              <div className="h-40 overflow-hidden">
                {store.image ? (
                  <img 
                    src={store.image} 
                    alt={store.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/10">
                    <Store className="h-12 w-12 text-white/70" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop view - circular layout */}
        <div className="hidden md:block relative w-full aspect-square max-w-5xl mx-auto">
          {/* Central circle background */}
          <div className="absolute inset-[15%] rounded-full bg-teal-dark/80 backdrop-blur-sm z-0"></div>
          
          {/* Store items positioned around the circle */}
          {stores.map((store, index) => {
            const position = positions[index] || {};
            
            return (
              <div 
                key={store.id}
                style={{
                  ...position,
                  transform: position.rotate ? `rotate(${position.rotate})` : undefined,
                  position: 'absolute',
                  zIndex: 10,
                  width: '30%',
                }}
                className="bg-white rounded-md shadow-xl overflow-hidden cursor-pointer transition-all hover:shadow-2xl hover:scale-105"
                onClick={() => navigate(`/store/${store.id}`)}
              >
                <div className="p-2 bg-white text-black text-center font-bold text-xl font-display">
                  {store.name}
                </div>
                <div className="h-40 relative">
                  {store.image ? (
                    <img 
                      src={store.image} 
                      alt={store.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <Store className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
