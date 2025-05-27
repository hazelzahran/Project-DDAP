
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

const GalleryPage: React.FC = () => {
  // Gallery items with placeholder images from Unsplash
  const galleryItems = [
    { 
      id: 1, 
      title: "Chef Knife in Action",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
    },
    { 
      id: 2, 
      title: "Professional Kitchen Setup",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800"
    },
    { 
      id: 3, 
      title: "Precision Cutting Technique",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
    },
    { 
      id: 4, 
      title: "Knife Collection",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800" 
    },
    { 
      id: 5, 
      title: "Food Preparation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800"
    },
    { 
      id: 6, 
      title: "Artisan Knifemaking",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800" 
    },
  ];

  return (
    <div className="gallery min-h-screen bg-gradient-to-br from-amber-400 to-teal-600">
      <div className="div relative w-full overflow-hidden">
        <Navbar />
        
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-display">"Eat, Code, Repeat"</h1>
          
          <div className="a-lightweight-and mb-12">
            <p className="text-lg mb-2">
              
            </p>
          </div>
          
          <div className="button-buy relative inline-block mb-16">
            <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-md transition-all transform hover:scale-105">
              Buy now
            </button>
          </div>

          <div className="carousel-container relative mb-16">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {galleryItems.map((item) => (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="aspect-square bg-white/20 backdrop-blur-md rounded-lg overflow-hidden relative shadow-xl group">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-medium">{item.title}</h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50" />
            </Carousel>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="aspect-square bg-white/20 backdrop-blur-md rounded-lg overflow-hidden relative shadow-xl group"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-3xl font-[Rochester],serif italic text-center mb-16">
            "Dari Suapan Pertama, Tersimpul Memori Yang Tak Terlupa"
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
            <p className="text-xl text-center">
              Find Delicious Favorite Foods at the NgeMEAL!!!
              <br />
              Enjoy a wide selection of menus from the best tenants at FILKOM UB.
              <br />
              Check menus, prices, opening hours, and the latest promos easily-all
              in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
