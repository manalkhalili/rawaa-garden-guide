
import React, { useEffect, useState } from 'react';
import { useSearch } from '../contexts/SearchContext';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantCard from '../components/PlantCard';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock plant data that would typically come from an API
const allPlants = [
  // Indoor plants
  {
    id: 'i1',
    name: 'نبات البوثوس',
    image: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787',
    shortDescription: 'نبات داخلي سهل العناية، يمتاز بأوراقه الخضراء المتدلية.',
    category: 'indoor' as const
  },
  {
    id: 'i2',
    name: 'النخيل الأريكا',
    image: 'https://images.unsplash.com/photo-1517848568502-d03fa74e1964',
    shortDescription: 'نبات داخلي يضفي مظهراً استوائياً للمنزل، سهل العناية.',
    category: 'indoor' as const
  },
  // Outdoor plants
  {
    id: 'o1',
    name: 'زهرة الياسمين',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    shortDescription: 'نبات خارجي عطري، يضفي رائحة زكية ومظهر جميل للحدائق.',
    category: 'outdoor' as const
  },
  {
    id: 'o2',
    name: 'الجهنمية',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    shortDescription: 'شجيرة مزهرة بألوان زاهية، تتحمل الحرارة وتزدهر في الصيف.',
    category: 'outdoor' as const
  },
  // Seeds
  {
    id: 's1',
    name: 'بذور الريحان',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    shortDescription: 'بذور عشبية عطرية سهلة الزراعة، تستخدم في الطهي والعلاج.',
    category: 'seed' as const
  },
  {
    id: 's2',
    name: 'بذور الطماطم',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    shortDescription: 'بذور خضروات مثالية للزراعة المنزلية، سهلة النمو وغنية بالفوائد.',
    category: 'seed' as const
  }
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { searchQuery, setSearchQuery, performSearch } = useSearch();
  const [searchResults, setSearchResults] = useState<typeof allPlants>([]);
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  useEffect(() => {
    const queryParam = searchParams.get('q') || '';
    setSearchQuery(queryParam);
    setLocalSearchQuery(queryParam);
    
    if (queryParam) {
      const filteredResults = allPlants.filter(plant => 
        plant.name.includes(queryParam) || 
        plant.shortDescription.includes(queryParam)
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchParams, setSearchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(localSearchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-rawaa-primary py-12">
          <div className="container mx-auto px-4 rtl">
            <div className="flex items-center">
              <SearchIcon className="text-white h-12 w-12 ml-4" />
              <div>
                <h1 className="text-3xl font-bold text-white">نتائج البحث</h1>
                <p className="text-white opacity-80">
                  {searchResults.length 
                    ? `تم العثور على ${searchResults.length} نتيجة لـ "${searchQuery}"`
                    : `لم يتم العثور على نتائج لـ "${searchQuery}"`
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search form */}
        <section className="bg-white py-6 border-b">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSearch} className="flex items-center justify-center">
              <div className="relative w-full max-w-xl">
                <Input
                  type="text"
                  placeholder="ابحث عن نبات..."
                  className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-rawaa-primary"
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                  dir="rtl"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <button type="submit" className="absolute left-3 top-2.5 opacity-0">بحث</button>
              </div>
            </form>
          </div>
        </section>
        
        {/* Search Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {searchResults.map((plant) => (
                  <PlantCard 
                    key={plant.id}
                    id={plant.id}
                    name={plant.name}
                    image={plant.image}
                    shortDescription={plant.shortDescription}
                    category={plant.category}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-2xl text-gray-400">لم يتم العثور على نتائج</p>
                <p className="text-gray-500 mt-2">جرب استخدام كلمات بحث مختلفة</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
