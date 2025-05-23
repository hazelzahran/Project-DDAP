
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const CartPage: React.FC = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const cartItems = [
    { id: '1', name: 'Martabak Mini', price: 8000, quantity: 1, image: "https://placehold.co/204x136" },
    { id: '2', name: 'Iced Tea', price: 5000, quantity: 2, image: "https://placehold.co/98x121" },
    { id: '3', name: 'Indomie goreng', price: 7000, quantity: 1, image: "https://placehold.co/130x191" }
  ];

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
      setSelectAll(false);
    } else {
      const newSelected = [...selectedItems, id];
      setSelectedItems(newSelected);
      if (newSelected.length === cartItems.length) {
        setSelectAll(true);
      }
    }
  };

  const handleQuantityChange = (id: string, change: number) => {
    // This would update the quantity in a real application
    console.log(`Changing quantity for ${id} by ${change}`);
  };

  return (
    <div className="min-h-screen bg-[#EFC03E]">
      <Navbar />
      
      <div className="p-6 pt-16">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-t-2xl p-4 flex items-center">
              <Checkbox 
                checked={selectAll} 
                onCheckedChange={handleSelectAll}
                className="h-[33px] w-[33px] border-black rounded-md"
              />
              <span className="ml-8 text-2xl">Pilih Semua ({cartItems.length})</span>
            </div>
            
            <div className="bg-white rounded-b-2xl mt-5 p-4 space-y-10">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center">
                  <Checkbox 
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={() => handleSelectItem(item.id)}
                    className="h-[33px] w-[33px] border-black rounded-md"
                  />
                  <div className="ml-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[130px] h-[130px] object-cover"
                    />
                  </div>
                  <div className="flex-1 ml-6">
                    <h3 className="text-3xl font-normal">{item.name}</h3>
                  </div>
                  <div className="text-3xl font-bold text-red-600">
                    Rp{item.price.toLocaleString()}
                  </div>
                  <div className="ml-6 flex items-center border border-black rounded-full p-2 w-[133px]">
                    <button 
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 text-3xl"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="flex-1 text-center text-3xl">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 text-3xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="md:w-[574px]">
            <div className="bg-white rounded-2xl p-6">
              <h2 className="text-3xl font-semibold mb-6">Ringkasan Belanja</h2>
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl">Total</span>
                <span className="text-3xl font-bold text-red-600">Rp{totalPrice.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-center mt-16">
                <img
                  src="https://placehold.co/260x260"
                  alt="QR Code"
                  className="w-[260px] h-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-40 flex justify-center">
          <p className="text-5xl font-normal font-['Allura']">
            Terimakasih sudah berbelanja di gkmeal
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
