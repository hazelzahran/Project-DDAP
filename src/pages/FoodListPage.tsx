import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus } from 'lucide-react';

// Food item type definition
interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: string;
  priceNumber: number;
  image: string;
  category: 'food' | 'drink';
  restaurantId: number;
}

// Cart item type
interface CartItem {
  id: number;
  quantity: number;
}

const FoodListPage = () => {
  // State for cart
  const [cart, setCart] = useState<CartItem[]>([]);

  // Food items data with restaurant assignments
  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Onigiri",
      description: "Onigiri Nenek Sumi dari Kampung Jambu, dibentuk dengan doa dan cinta. Nasi kepal isi tuna pedas, dibungkus nori, konon resepnya dari leluhur pelaut, kini hadir di kantin ini.",
      price: "Rp7.000",
      priceNumber: 7000,
      image: "../public/Image-Upload/png/image 139.png",
      category: "food",
      restaurantId: 1
    },
    {
      id: 2,
      name: "Mie Lidi",
      description: "Mie Lidi Kang Udin dari Gang Mawar, camilan renyah yang tercipta dari eksperimen malam di warung kecil. Mie tipis digoreng krispi dengan taburan bumbu pedas manis, kini jadi favorit di kantin ini.",
      price: "Rp10.000",
      priceNumber: 10000,
      image: "../public/Image-Upload/png/image 141.png",
      category: "food",
      restaurantId: 1
    },
    {
      id: 3,
      name: "Tahu Isi",
      description: "Tahu isi goreng adalah camilan berbahan dasar tahu yang diisi sayuran, lalu dibalut adonan tepung dan digoreng hingga renyah.",
      price: "Rp5.000",
      priceNumber: 5000,
      image: "../public/Image-Upload/png/image 149.png",
      category: "food",
      restaurantId: 1
    },
    {
      id: 4, 
      name: "Sushi",
      description: "Sushi adalah makanan Jepang yang terdiri dari nasi yang dibentuk bersama lauk (neta) berupa makanan laut, daging, sayuran mentah atau sudah dimasak.",
      price: "Rp15.000",
      priceNumber: 15000,
      image: "../public/Image-Upload/png/image 138.png",
      category: "food",
      restaurantId: 1
    },
    {
      id: 5,
      name: "Air Mineral",
      description: "Air Mineral Mbok Darmi dari Kampung Cempaka, kesegaran murni dari mata air desa. Dibotolkan dengan tangan penuh doa sejak zaman krisis air, kini hadir menyejukkan di kantin ini.",
      price: "Rp3.000",
      priceNumber: 3000,
      image: "../public/Image-Upload/png/image 146.png",
      category: "drink",
      restaurantId: 2
    },
    {
      id: 6,
      name: "Iced Tea",
      description: "Iced Tea Pak Tarmo dari Jalan Wijaya, racikan legenda yang lahir dari warung pinggir sawah. Teh hitam segar dicampur gula asli dan es batu, menyegarkan jiwa sejak tiga dekade, kini ada di kantin ini.",
      price: "Rp5.000",
      priceNumber: 5000,
      image: "../public/Image-Upload/png/Screenshot 2025-04-10 152100 2.png",
      category: "drink",
      restaurantId: 2
    },
    {
      id: 7,
      name: "Pop Ice Taro",
      description: "Pop Ice Taro Juragan Muda dari Pasar Lama, minuman serbuk legendaris yang lahir dari kios kecil di tepi gang. Rasa talas manis nan creamy, diblender dengan es hingga menyegarkan, kini jadi andalan di kantin ini.",
      price: "Rp10.000",
      priceNumber: 10000,
      image: "../public/Image-Upload/png/Screenshot 2025-04-10 152119 2.png",
      category: "drink",
      restaurantId: 2
    },
    {
      id: 8,
      name: "Ice Coffee",
      description: "Ice Coffee Mbah Joyo dari Kampung Duren, racikan kopi dingin yang tercipta dari biji pilihan pasar tradisional. Kopi hitam pekat dicampur es dan sedikit gula aren, menyegarkan sejak zaman kakek buyut, kini hadir di kantin ini.",
      price: "Rp10.000",
      priceNumber: 10000,
      image: "../public/Image-Upload/png/Screenshot 2025-04-10 153828 2.png",
      category: "drink",
      restaurantId: 2
    },
    {
      id: 9,
      name: "Nasi + Ayam Crispy",
      description: "Nasi ayam crispy, nasi hangat dengan ayam goreng renyah berbumbu gurih. Lezat, mengenyangkan, dan pas untuk temani kegiatan kuliahmu!",
      price: "Rp15.000",
      priceNumber: 15000,
      image: "../public/Image-Upload/pngimage 153.png",
      category: "food",
      restaurantId: 3
    },
    {
      id: 10,
      name: "Nasi + Jamur Crispy",
      description: "Nasi jamur crispy, nasi hangat dengan jamur goreng renyah berbumbu gurih. Lezat, sehat, dan mengenyangkan!",
      price: "Rp12.000",
      priceNumber: 12000,
      image: "../public/Image-Upload/png/image 154.png",
      category: "food",
      restaurantId: 3
    },
    {
      id: 11,
      name: "Indomie Goreng",
      description: "Indomie Goreng Bu Tuti dari Pasar Rebo, legenda mie instan yang diracik dengan bumbu rahasia sejak zaman warung kelontong. Mie kenyal dipadu telur, kol, dan sambal pedas, kini menggugah selera di kantin ini.",
      price: "Rp7.000",
      priceNumber: 7000,
      image: "../public/Image-Upload/png/image 151.png",
      category: "food",
      restaurantId: 4
    },
    {
      id: 12,
      name: "Indomie Kuah",
      description: "Lagi butuh yang hangat dan mengenyangkan? Indomie Kuah jawabannya! Mi lembut dengan kuah gurih yang bikin nyaman di tengah padatnya kuliah. Tambah telur atau sayur biar makin mantap.",
      price: "Rp7.000",
      priceNumber: 7000,
      image: "../public/Image-Upload/png/image 155.png",
      category: "food",
      restaurantId: 4
    },
    {
      id: 13,
      name: "Ramen Special",
      description: "Ramen istimewa dengan kuah kaya rasa, mie kenyal, dan topping lengkap. Sempurna untuk menghangatkan hari!",
      price: "Rp20.000",
      priceNumber: 20000,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      category: "food",
      restaurantId: 5
    },
    {
      id: 14,
      name: "Katsu Curry",
      description: "Katsu renyah dengan saus kari Jepang yang kaya rasa. Disajikan dengan nasi hangat yang mengenyangkan.",
      price: "Rp18.000",
      priceNumber: 18000,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      category: "food",
      restaurantId: 5
    },
    {
      id: 15,
      name: "Martabak Mini",
      description: "Martabak manis mini adalah kue berbentuk kecil dengan tekstur lembut dan empuk, biasanya diisi cokelat, keju, atau kacang, lalu dilipat dan disajikan sebagai camilan manis.",
      price: "Rp8.000",
      priceNumber: 8000,
      image: "../public/Image-Upload/png/image 166.png",
      category: "food",
      restaurantId: 1
    }
  ];

  // Restaurant categories
  const restaurants = [
    { name: "Snack Overflow", id: 1 },
    { name: "Lapak Minuman", id: 2 },
    { name: "Chicken Jockie", id: 3 },
    { name: "Warung Indomie", id: 4 },
    { name: "Noodles and Katsugoi", id: 5 }
  ];

  // Helper function to get quantity for an item
  const getQuantity = (itemId: number): number => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  // Function to update quantity
  const updateQuantity = (itemId: number, change: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + change;
        if (newQuantity <= 0) {
          return prevCart.filter(item => item.id !== itemId);
        }
        return prevCart.map(item =>
          item.id === itemId 
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else if (change > 0) {
        return [...prevCart, { id: itemId, quantity: 1 }];
      }
      return prevCart;
    });
  };

  // Calculate total items in cart
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce((sum, cartItem) => {
    const foodItem = foodItems.find(item => item.id === cartItem.id);
    return sum + (foodItem ? foodItem.priceNumber * cartItem.quantity : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 to-teal-600">
      {/* Navbar */}
      <div className="bg-[#005364] h-[42px] w-full">
        <Navbar />
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Cart Summary */}
        {totalCartItems > 0 && (
          <div className="fixed top-20 right-4 bg-white rounded-lg shadow-lg p-4 z-50 max-w-sm">
            <h3 className="font-bold text-lg mb-2">Keranjang ({totalCartItems} item)</h3>
            <p className="text-xl font-bold text-green-600">
              Total: Rp{totalPrice.toLocaleString('id-ID')}
            </p>
          </div>
        )}

        {/* Restaurant Categories */}
        {restaurants.map((restaurant) => {
          const restaurantItems = foodItems.filter(item => item.restaurantId === restaurant.id);
          
          if (restaurantItems.length === 0) return null;

          return (
            <div key={restaurant.id} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#4C4C4C] text-center md:text-left">
                {restaurant.name}
              </h2>

              {/* Food Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {restaurantItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-40 md:w-1/3 overflow-hidden">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop";
                          }}
                        />
                      </div>
                      <CardContent className="p-4 md:p-6 md:w-2/3 flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-normal mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-500 mb-4 flex-grow">{item.description}</p>
                        <div className="flex justify-between items-center mt-auto">
                          <p className="text-xl md:text-2xl font-bold text-green-600">{item.price}</p>
                          <div className="flex items-center bg-gray-100 rounded-lg">
                            <button 
                              className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={getQuantity(item.id) === 0}
                            >
                              <Minus className="h-4 w-4 text-[#526D82]" />
                            </button>
                            <span className="px-4 py-2 text-sm font-medium min-w-[40px] text-center">
                              {getQuantity(item.id)}
                            </span>
                            <button 
                              className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-4 w-4 text-[#526D82]" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
        
        <div className="text-center mt-16 mb-16">
          <p className="text-3xl font-serif italic text-white mb-8">
            "Dari Suapan Pertama, Tersimpul Memori Yang Tak Terlupa"
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Find Delicious Favorite Foods at NgeMEAL!!!
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Enjoy a wide selection of menus from the best tenants at FILKOM UB.
              <br />
              Check menus, prices, opening hours, and the latest promos easily - all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodListPage;