
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Soup } from 'lucide-react';

// Food item type definition
interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'food' | 'drink';
}

const FoodListPage = () => {
  // Food items data
  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Onigiri",
      description: "Onigiri Nenek Sumi dari Kampung Jambu, dibentuk dengan doa dan cinta. Nasi kepal isi tuna pedas, dibungkus nori, konon resepnya dari leluhur pelaut, kini hadir di kantin ini.",
      price: "Rp7.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 2,
      name: "Mie Lidi",
      description: "Mie Lidi Kang Udin dari Gang Mawar, camilan renyah yang tercipta dari eksperimen malam di warung kecil. Mie tipis digoreng krispi dengan taburan bumbu pedas manis, kini jadi favorit di kantin ini.",
      price: "Rp10.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "food"
    },
    {
      id: 3,
      name: "Tahu Isi",
      description: "Tahu isi goreng adalah camilan berbahan dasar tahu yang diisi sayuran, lalu dibalut adonan tepung dan digoreng hingga renyah.",
      price: "Rp5.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 4, 
      name: "Sushi",
      description: "Sushi adalah makanan Jepang yang terdiri dari nasi yang dibentuk bersama lauk (neta) berupa makanan laut, daging, sayuran mentah atau sudah dimasak.",
      price: "Rp15.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 5,
      name: "Martabak Mini",
      description: "Martabak manis mini adalah kue berbentuk kecil dengan tekstur lembut dan empuk, biasanya diisi cokelat, keju, atau kacang, lalu dilipat dan disajikan sebagai camilan manis.",
      price: "Rp8.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 6,
      name: "Kue",
      description: "Cake Slice Sang Penutup dari Gang Seruni. Potongan kue cokelat lembut dengan taburan kacang rahasia, konon diracik sosok misterius yang hanya muncul saat bulan purnama, kini hadir di kantin ini.",
      price: "Rp8.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 7,
      name: "Donat",
      description: "Donat adalah kue goreng berbentuk cincin atau bulat, terbuat dari adonan manis dan sering diberi topping seperti gula atau cokelat.",
      price: "Rp6.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 8,
      name: "Nasi + Ayam crispy",
      description: "Nasi ayam crispy, nasi hangat dengan ayam goreng renyah berbumbu gurih. Lezat, mengenyangkan, dan pas untuk temani kegiatan kuliahmu!",
      price: "Rp15.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 9,
      name: "Nasi + Jamur crispy",
      description: "Nasi jamur crispy, nasi hangat dengan jamur goreng renyah berbumbu gurih. Lezat, sehat, dan mengenyangkan!",
      price: "Rp12.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 10,
      name: "Nasi + Tahu Tempe",
      description: "Nasi tahu tempe, kombinasi nasi hangat dengan tahu dan tempe goreng yang gurih. Lezat, bergizi, dan cocok untuk santap siang yang mengenyangkan!",
      price: "Rp10.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 11,
      name: "Air Mineral",
      description: "Air Mineral Mbok Darmi dari Kampung Cempaka, kesegaran murni dari mata air desa. Dibotolkan dengan tangan penuh doa sejak zaman krisis air, kini hadir menyejukkan di kantin ini.",
      price: "Rp3.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "drink"
    },
    {
      id: 12,
      name: "Iced Tea",
      description: "Iced Tea Pak Tarmo dari Jalan Wijaya, racikan legenda yang lahir dari warung pinggir sawah. Teh hitam segar dicampur gula asli dan es batu, menyegarkan jiwa sejak tiga dekade, kini ada di kantin ini.",
      price: "Rp5.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "drink"
    },
    {
      id: 13,
      name: "Pop ice taro",
      description: "Pop Ice Taro Juragan Muda dari Pasar Lama, minuman serbuk legendaris yang lahir dari kios kecil di tepi gang. Rasa talas manis nan creamy, diblender dengan es hingga menyegarkan, kini jadi andalan di kantin ini.",
      price: "Rp10.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "drink"
    },
    {
      id: 14,
      name: "Ice Coffee",
      description: "Ice Coffee Mbah Joyo dari Kampung Duren, racikan kopi dingin yang tercipta dari biji pilihan pasar tradisional. Kopi hitam pekat dicampur es dan sedikit gula aren, menyegarkan sejak zaman kakek buyut, kini hadir di kantin ini.",
      price: "Rp10.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "drink"
    },
    {
      id: 15,
      name: "Iced Lemon Tea",
      description: "Iced Lemon Tea Mak Sari dari Jalan Kenanga, minuman segar yang lahir dari resep warisan nenek di tepi kebun jeruk. Teh dingin dipadu perasan lemon asli dan madu liar, kini menyejukkan di kantin ini.",
      price: "Rp10.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "drink"
    },
    {
      id: 16,
      name: "Ice Matcha",
      description: "Ice Matcha Neng Lilis dari Kampung Mawar, racikan teh hijau halus yang lahir dari rahasia dapur pinggir sawah. Matcha asli diblender dengan es dan susu kental, menyegarkan jiwa, kini hadir di kantin ini.",
      price: "Rp10.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "drink"
    },
    {
      id: 17,
      name: "Ice Chocolate",
      description: "Ice Chocolate Pak Darto dari Gang Melati, minuman manis yang lahir dari cokelat bubuk warisan keluarga. Diblender dengan es, susu, dan sedikit rahasia malam pasar, kini memanjakan lidah di kantin ini.",
      price: "Rp10.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "drink"
    },
    {
      id: 18,
      name: "Indomie goreng",
      description: "Indomie Goreng Bu Tuti dari Pasar Rebo, legenda mie instan yang diracik dengan bumbu rahasia sejak zaman warung kelontong. Mie kenyal dipadu telur, kol, dan sambal pedas, kini menggugah selera di kantin ini.",
      price: "Rp7.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
    },
    {
      id: 19,
      name: "Indomie Kuah",
      description: "Lagi butuh yang hangat dan mengenyangkan? Indomie Kuah jawabannya! Mi lembut dengan kuah gurih yang bikin nyaman di tengah padatnya kuliah. Tambah telur atau sayur biar makin mantap. Langsung ke kantin, siap saji dan pas di kantong!",
      price: "Rp7.000",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "food"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 to-teal-600">
      {/* Navbar */}
      <div className="bg-[#005364] h-[42px] w-full">
        <Navbar />
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Restaurant Categories */}
        {restaurants.map((restaurant, index) => (
          <div key={restaurant.id} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#4C4C4C] font-[Sansation] text-center md:text-left">
              {restaurant.name}
            </h2>

            {/* Food Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {foodItems
                .filter((_, idx) => idx % restaurants.length === index)
                .map((item) => (
                  <Card key={item.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-40 md:w-1/3 overflow-hidden">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className={`h-full w-full object-cover ${
                            item.category === "drink" ? "transform -rotate-[15deg] scale-110" : ""
                          }`}
                        />
                      </div>
                      <CardContent className="p-4 md:p-6 md:w-2/3">
                        <h3 className="text-2xl md:text-3xl font-normal mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                        <div className="flex justify-between items-center mt-auto">
                          <p className="text-xl md:text-2xl font-bold">{item.price}</p>
                          <div className="flex items-center bg-white rounded">
                            <button className="p-1">
                              <Minus className="h-5 w-5 text-[#526D82]" />
                            </button>
                            <span className="px-2 text-sm">0</span>
                            <button className="p-1">
                              <Plus className="h-5 w-5 text-[#526D82]" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-16 mb-16">
          <p className="text-3xl font-[Rochester],serif italic">
            "Dari Suapan Pertama, Tersimpul Memori Yang Tak Terlupa"
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-8">
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

export default FoodListPage;
