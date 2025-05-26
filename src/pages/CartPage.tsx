import React, { useState, createContext, useContext } from 'react';
import Navbar from '@/components/Navbar';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from 'lucide-react';

// Food item type definition (same as FoodListPage)
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

// Food items data (same as FoodListPage)
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Onigiri",
    description: "Onigiri Nenek Sumi dari Kampung Jambu, dibentuk dengan doa dan cinta. Nasi kepal isi tuna pedas, dibungkus nori, konon resepnya dari leluhur pelaut, kini hadir di kantin ini.",
    price: "Rp7.000",
    priceNumber: 7000,
    image: "/Image-Upload/png/image 139.png",
    category: "food",
    restaurantId: 1
  },
  {
    id: 2,
    name: "Mie Lidi",
    description: "Mie Lidi Kang Udin dari Gang Mawar, camilan renyah yang tercipta dari eksperimen malam di warung kecil. Mie tipis digoreng krispi dengan taburan bumbu pedas manis, kini jadi favorit di kantin ini.",
    price: "Rp10.000",
    priceNumber: 10000,
    image: "/Image-Upload/png/image 141.png",
    category: "food",
    restaurantId: 1
  },
  {
    id: 3,
    name: "Tahu Isi",
    description: "Tahu isi goreng adalah camilan berbahan dasar tahu yang diisi sayuran, lalu dibalut adonan tepung dan digoreng hingga renyah.",
    price: "Rp5.000",
    priceNumber: 5000,
    image: "/Image-Upload/png/image 149.png",
    category: "food",
    restaurantId: 1
  },
  {
    id: 4, 
    name: "Sushi",
    description: "Sushi adalah makanan Jepang yang terdiri dari nasi yang dibentuk bersama lauk (neta) berupa makanan laut, daging, sayuran mentah atau sudah dimasak.",
    price: "Rp15.000",
    priceNumber: 15000,
    image: "/Image-Upload/png/image 138.png",
    category: "food",
    restaurantId: 1
  },
  {
    id: 5,
    name: "Air Mineral",
    description: "Air Mineral Mbok Darmi dari Kampung Cempaka, kesegaran murni dari mata air desa. Dibotolkan dengan tangan penuh doa sejak zaman krisis air, kini hadir menyejukkan di kantin ini.",
    price: "Rp3.000",
    priceNumber: 3000,
    image: "/Image-Upload/png/image 146.png",
    category: "drink",
    restaurantId: 2
  },
  {
    id: 6,
    name: "Iced Tea",
    description: "Iced Tea Pak Tarmo dari Jalan Wijaya, racikan legenda yang lahir dari warung pinggir sawah. Teh hitam segar dicampur gula asli dan es batu, menyegarkan jiwa sejak tiga dekade, kini ada di kantin ini.",
    price: "Rp5.000",
    priceNumber: 5000,
    image: "/Image-Upload/png/Screenshot 2025-04-10 152100 2.png",
    category: "drink",
    restaurantId: 2
  },
  {
    id: 7,
    name: "Pop Ice Taro",
    description: "Pop Ice Taro Juragan Muda dari Pasar Lama, minuman serbuk legendaris yang lahir dari kios kecil di tepi gang. Rasa talas manis nan creamy, diblender dengan es hingga menyegarkan, kini jadi andalan di kantin ini.",
    price: "Rp10.000",
    priceNumber: 10000,
    image: "/Image-Upload/png/Screenshot 2025-04-10 152119 2.png",
    category: "drink",
    restaurantId: 2
  },
  {
    id: 8,
    name: "Ice Coffee",
    description: "Ice Coffee Mbah Joyo dari Kampung Duren, racikan kopi dingin yang tercipta dari biji pilihan pasar tradisional. Kopi hitam pekat dicampur es dan sedikit gula aren, menyegarkan sejak zaman kakek buyut, kini hadir di kantin ini.",
    price: "Rp10.000",
    priceNumber: 10000,
    image: "/Image-Upload/png/Screenshot 2025-04-10 153828 2.png",
    category: "drink",
    restaurantId: 2
  },
  {
    id: 9,
    name: "Nasi + Ayam Crispy",
    description: "Nasi ayam crispy, nasi hangat dengan ayam goreng renyah berbumbu gurih. Lezat, mengenyangkan, dan pas untuk temani kegiatan kuliahmu!",
    price: "Rp15.000",
    priceNumber: 15000,
    image: "/Image-Upload/png/image 153.png",
    category: "food",
    restaurantId: 3
  },
  {
    id: 10,
    name: "Nasi + Jamur Crispy",
    description: "Nasi jamur crispy, nasi hangat dengan jamur goreng renyah berbumbu gurih. Lezat, sehat, dan mengenyangkan!",
    price: "Rp12.000",
    priceNumber: 12000,
    image: "/Image-Upload/png/image 154.png",
    category: "food",
    restaurantId: 3
  },
  {
    id: 11,
    name: "Indomie Goreng",
    description: "Indomie Goreng Bu Tuti dari Pasar Rebo, legenda mie instan yang diracik dengan bumbu rahasia sejak zaman warung kelontong. Mie kenyal dipadu telur, kol, dan sambal pedas, kini menggugah selera di kantin ini.",
    price: "Rp7.000",
    priceNumber: 7000,
    image: "/Image-Upload/png/image 151.png",
    category: "food",
    restaurantId: 4
  },
  {
    id: 12,
    name: "Indomie Kuah",
    description: "Lagi butuh yang hangat dan mengenyangkan? Indomie Kuah jawabannya! Mi lembut dengan kuah gurih yang bikin nyaman di tengah padatnya kuliah. Tambah telur atau sayur biar makin mantap.",
    price: "Rp7.000",
    priceNumber: 7000,
    image: "/Image-Upload/png/image 155.png",
    category: "food",
    restaurantId: 4
  },
  {
    id: 15,
    name: "Martabak Mini",
    description: "Martabak manis mini adalah kue berbentuk kecil dengan tekstur lembut dan empuk, biasanya diisi cokelat, keju, atau kacang, lalu dilipat dan disajikan sebagai camilan manis.",
    price: "Rp8.000",
    priceNumber: 8000,
    image: "/Image-Upload/png/image 166.png",
    category: "food",
    restaurantId: 1
  }
];

const CartPage: React.FC = () => {
  // Sample cart data - in real app this would come from global state/context
  const [cart, setCart] = useState<CartItem[]>([
    { id: 15, quantity: 1 }, // Martabak Mini
    { id: 6, quantity: 2 },  // Iced Tea
    { id: 11, quantity: 1 }  // Indomie Goreng
  ]);
  
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Get cart items with full details
  const cartItemsWithDetails = cart.map(cartItem => {
    const foodItem = foodItems.find(item => item.id === cartItem.id);
    return {
      ...cartItem,
      ...foodItem
    };
  }).filter(item => item.name); // Filter out items that don't exist in foodItems

  const totalPrice = cartItemsWithDetails.reduce((total, item) => 
    total + (item.priceNumber * item.quantity), 0
  );

  const selectedTotalPrice = cartItemsWithDetails
    .filter(item => selectedItems.includes(item.id))
    .reduce((total, item) => total + (item.priceNumber * item.quantity), 0);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItemsWithDetails.map(item => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
      setSelectAll(false);
    } else {
      const newSelected = [...selectedItems, id];
      setSelectedItems(newSelected);
      if (newSelected.length === cartItemsWithDetails.length) {
        setSelectAll(true);
      }
    }
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + change;
        if (newQuantity <= 0) {
          return prevCart.filter(item => item.id !== id);
        }
        return prevCart.map(item =>
          item.id === id 
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      return prevCart;
    });
  };

  const handleRemoveItem = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
    setSelectedItems(prevSelected => prevSelected.filter(itemId => itemId !== id));
  };

  const handleCheckout = () => {
    const selectedCartItems = cartItemsWithDetails.filter(item => selectedItems.includes(item.id));
    if (selectedCartItems.length === 0) {
      alert('Pilih minimal satu item untuk checkout!');
      return;
    }
    
    // In real app, this would navigate to checkout page or process payment
    console.log('Checkout items:', selectedCartItems);
    alert(`Checkout berhasil! Total: Rp${selectedTotalPrice.toLocaleString()}`);
  };

  if (cartItemsWithDetails.length === 0) {
    return (
      <div className="min-h-screen bg-[#EFC03E]">
        <div className="bg-[#005364] h-[42px] w-full">
          <Navbar />
        </div>
        
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-3xl font-bold mb-2">Keranjang Kosong</h2>
            <p className="text-xl text-gray-600">Yuk mulai belanja makanan favoritmu!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EFC03E]">
      <div className="bg-[#005364] h-[42px] w-full">
        <Navbar />
      </div>
      
      <div className="p-6 pt-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-t-2xl p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox 
                  checked={selectAll} 
                  onCheckedChange={handleSelectAll}
                  className="h-[33px] w-[33px] border-black rounded-md"
                />
                <span className="ml-8 text-2xl">Pilih Semua ({cartItemsWithDetails.length})</span>
              </div>
              <div className="text-xl font-semibold">
                Total: Rp{totalPrice.toLocaleString()}
              </div>
            </div>
            
            <div className="bg-white rounded-b-2xl mt-5 p-4 space-y-6">
              {cartItemsWithDetails.map((item) => (
                <div key={item.id} className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <Checkbox 
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={() => handleSelectItem(item.id)}
                    className="h-[33px] w-[33px] border-black rounded-md"
                  />
                  
                  <div className="ml-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[100px] h-[100px] object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop";
                      }}
                    />
                  </div>
                  
                  <div className="flex-1 ml-6">
                    <h3 className="text-2xl font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    <div className="text-2xl font-bold text-red-600 mt-2">
                      {item.price}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-white border border-gray-300 rounded-lg">
                      <button 
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 text-lg font-medium min-w-[60px] text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Hapus item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-[400px]">
            <div className="bg-white rounded-2xl p-6 sticky top-20">
              <h2 className="text-3xl font-semibold mb-6">Ringkasan Belanja</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-lg">Items Dipilih</span>
                  <span className="text-lg font-medium">{selectedItems.length} item</span>
                </div>
                <div className="flex justify-between text-xl">
                  <span>Subtotal</span>
                  <span className="font-bold">Rp{selectedTotalPrice.toLocaleString()}</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-2xl">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-red-600">Rp{selectedTotalPrice.toLocaleString()}</span>
                </div>
              </div>
              
              <Button 
                onClick={handleCheckout}
                className="w-full bg-[#005364] hover:bg-[#004454] text-white text-lg py-3 rounded-lg"
                disabled={selectedItems.length === 0}
              >
                Checkout ({selectedItems.length} item)
              </Button>
              
              <div className="flex justify-center mt-8">
                <div className="w-[200px] h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <p className="text-sm text-gray-600">QR Code untuk<br />pembayaran</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center">
          <p className="text-4xl font-normal italic text-center">
            "Terimakasih sudah berbelanja di GKMeal"
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;