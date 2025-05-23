
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Yellow background with rotation */}
      <div className="w-[1829px] h-[1631px] absolute -left-[731px] -top-[405px] -rotate-14 bg-[#FFC737] shadow-[19px_62px_4px_rgba(0,0,0,0.25)] border-3 border-black z-0"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile image */}
            <div className="flex flex-col items-center">
              <div className="w-[300px] h-[300px] bg-black/20 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800" 
                  alt="User Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <Button 
                variant="outline" 
                className="mt-10 w-[149px] h-[49px] border border-black hover:bg-black/10"
              >
                Buy now
              </Button>
            </div>
            
            {/* User information */}
            <div className="col-span-2">
              {/* User form fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-black text-base font-normal mb-2 block">Nama:</label>
                  <div className="w-full md:w-[419px] h-[49px] bg-white border border-black flex items-center">
                    <span className="px-4 text-black text-base">Booming Raka</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-black text-base font-normal mb-2 block">NIM:</label>
                  <div className="w-full md:w-[419px] h-[49px] bg-white border border-black flex items-center">
                    <span className="px-4 text-black text-base">1237087654432</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-black text-base font-normal mb-2 block">Email:</label>
                  <div className="w-full md:w-[419px] h-[49px] bg-white border border-black flex items-center">
                    <span className="px-4 text-black text-base">Boomingraka@student.ub.ac.d</span>
                  </div>
                </div>
              </div>
              
              {/* Transactions section */}
              <h2 className="text-black text-3xl font-normal font-['Righteous'] mt-10">Transaction</h2>
              
              <div className="flex flex-wrap gap-4 mt-4">
                {/* Store 1 */}
                <div className="w-[167px] h-[91px] bg-[#27374D] rounded-[87px] relative flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#FFC93C] rounded-full absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8">
                    <p className="text-white text-3xl font-['Righteous']">3</p>
                    <p className="text-[#FFC93C] text-base font-['Righteous']">Store 1</p>
                  </div>
                </div>
                
                {/* Store 2 */}
                <div className="w-[167px] h-[91px] bg-[#27374D] rounded-[87px] relative flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#FFC93C] rounded-full absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8">
                    <p className="text-white text-3xl font-['Righteous']">0</p>
                    <p className="text-[#FFC93C] text-base font-['Righteous']">Store 2</p>
                  </div>
                </div>
                
                {/* Store 3 */}
                <div className="w-[167px] h-[91px] bg-[#27374D] rounded-[87px] relative flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#FFC93C] rounded-full absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8">
                    <p className="text-white text-3xl font-['Righteous']">2</p>
                    <p className="text-[#FFC93C] text-base font-['Righteous']">Store 3</p>
                  </div>
                </div>
                
                {/* Store 4 */}
                <div className="w-[167px] h-[91px] bg-[#27374D] rounded-[87px] relative flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#FFC93C] rounded-full absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8">
                    <p className="text-white text-3xl font-['Righteous']">1</p>
                    <p className="text-[#FFC93C] text-base font-['Righteous']">Store 4</p>
                  </div>
                </div>
                
                {/* Store 5 */}
                <div className="w-[167px] h-[91px] bg-[#27374D] rounded-[87px] relative flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#FFC93C] rounded-full absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8">
                    <p className="text-white text-3xl font-['Righteous']">4</p>
                    <p className="text-[#FFC93C] text-base font-['Righteous']">Store 5</p>
                  </div>
                </div>
              </div>
              
              {/* Preference section */}
              <h2 className="text-black text-3xl font-normal font-['Righteous'] mt-10">Preference</h2>
              
              {/* Logout button */}
              <div className="mt-4">
                <Button 
                  className="w-full md:w-[571px] h-[67px] bg-[#526D82] hover:bg-[#3e5060] rounded-full flex items-center"
                >
                  <div className="w-[57px] h-[54px] bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  </div>
                  <span className="text-red-600 text-3xl font-['Righteous']">Logout</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
