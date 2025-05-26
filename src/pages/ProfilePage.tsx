import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const ProfilePage: React.FC = () => {
  // Template untuk SVG backgrounds - ganti dengan path file SVG Anda
  const svgBackgrounds = {
    mainBackground: "../public/image-Upload/svg/Profile.svg", // Ganti dengan path SVG utama
    profileSection: "/path/to/your/profile-section.svg", // Ganti dengan path SVG untuk bagian profile
    transactionSection: "/path/to/your/transaction-section.svg", // Ganti dengan path SVG untuk bagian transaksi
    decorativePattern: "/path/to/your/decorative-pattern.svg" // Ganti dengan path SVG untuk dekorasi
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Image Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url(${svgBackgrounds.mainBackground})` 
        }}
      ></div>
      
      {/* Optional: Overlay untuk mengatur brightness jika gambar terlalu terang */}
      <div className="absolute inset-0 bg-black/10 z-1"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile image section */}
            <div className="flex flex-col items-center relative">
              
              <div className="w-[300px] h-[300px] bg-black/20 rounded-lg overflow-hidden relative z-10">
                <img 
                  src="../public/image-Upload/jpg/Profile.JPG" 
                  alt="User Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <Button 
                variant="outline" 
                className="mt-10 w-[149px] h-[49px] border border-black hover:bg-black/10 relative z-10"
              >
                Buy now
              </Button>
            </div>
            
            {/* User information */}
            <div className="col-span-2 relative">
              {/* User form fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-black text-base font-normal mb-2 block">Nama:</label>
                  <div className="w-full md:w-[419px] h-[49px] bg-white border border-black flex items-center">
                    <span className="px-4 text-black text-base">GOPA GOPI</span>
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
                    <span className="px-4 text-black text-base">GOPA GOPI@student.ub.ac.d</span>
                  </div>
                </div>
              </div>
              
              {/* Transactions section */}
              <div className="relative mt-10">
                
                <h2 className="text-black text-3xl font-normal font-['Righteous'] relative z-10">Transaction</h2>
                
                <div className="flex flex-wrap gap-4 mt-4 relative z-10">
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
              </div>
              
              {/* Preference section */}
              <h2 className="text-black text-3xl font-normal font-['Righteous'] mt-10 relative z-10">Preference</h2>
              
              {/* Logout button */}
              <div className="mt-4 relative z-10">
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