
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
    name: 'الورد الجوري',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    shortDescription: 'الورد الجوري نبات خارجي سهل العناية، مثالي لمن يبحث عن إضافة لمسة من الجمال الطبيعي في حديقته.',
    category: 'indoor' as const
  },
  {
    id: 'i2',
    name: 'القرنفل',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    shortDescription: 'نبات خارجي مزهر يزدهر في ضوء الشمس الجزئي، مثالي للحدائق ذات الإضاءة المعتدلة ويتميز بأزهاره الجميلة التي تزهر في الربيع وقد تمتد طوال العام مع العناية المنتظمة.' ,
    category: 'indoor' as const
  },
  {
    id: 'i3',
    name: 'البوتس',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    shortDescription: 'نبتة داخلية سهلة العناية، تنمو جيدًا في الإضاءة غير المباشرة وتتحمل الأماكن المظللة. مثالية للمكاتب والبيوت، ولا تحتاج لمساحة كبيرة. تنقي الهواء وتضفي لمسة خضراء جميلة.' ,
    category: 'indoor' as const
  },
  {
    id: 'i4',
    name: 'الكلافيا',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    shortDescription: 'نبتة داخلية مزهرة بألوان برتقالية زاهية، تحب الضوء الساطع غير المباشر والرطوبة المعتدلة. مثالية للأماكن الهادئة داخل المنزل، وتُزهر في الربيع إذا اعتُني بها جيدًا.' ,
    category: 'indoor' as const
  },
  {
    id: 'i5',
    name: 'الشراع',
    image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
    shortDescription: 'نبتة داخلية أنيقة بأزهار بيضاء، تنمو في الضوء غير المباشر وتحب الرطوبة المعتدلة. سهلة العناية، تنقي الهواء، لكنها سامة للحيوانات الأليفة.' ,
    category: 'indoor' as const
  },
  {
    id: 'i6',
    name: 'وردة الكالا',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    shortDescription: 'نبتة أنيقة تزهر في الربيع أو الصيف، قابلة للزراعة داخلًا أو خارجًا، تفضل الضوء الساطع غير المباشر وتربة جيدة التصريف. رمز للنقاء وتُستخدم كثيرًا في تنسيقات الزهور.' ,
    category: 'indoor' as const
  },
  {
    id: 'i7',
    name: ' الغلونيميا',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    shortDescription: 'نبتة داخلية تحب الإضاءة الهادئة. ري معتدل وتربة جيدة التصريف. لا تتحمل البرد أو التيارات الهوائية. تنظّف أوراقها بانتظام وتُسمد كل 4–6 أسابيع.' ,
    category: 'indoor' as const
  },
  {
    id: 'i8',
    name: 'الكروتون',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    shortDescription: 'يعشق الإضاءة القوية غير المباشرة. ألوانه تصبح أجمل بالشمس. يحتاج ري منتظم ورطوبة جيدة. لا يحب التغيير المفاجئ في المكان أو البرودة.\n' +
        '\n' ,
    category: 'indoor' as const
  },
  {
    id: 'i9',
    name: 'الأريكا',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    shortDescription: 'نخلة داخلية ناعمة، تحب الإضاءة الساطعة غير المباشرة. ري معتدل وتربة جيدة التصريف. لا تتحمل البرد. تُسمد شهريًا في الربيع والصيف.\n' +
        '\n' ,
    category: 'indoor' as const

  },
  {
    id: 'i10',
    name: 'المونستيرا',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    shortDescription: 'نبتة استوائية كبيرة تحب الضوء غير المباشر والرطوبة العالية. ري معتدل وتربة جيدة التصريف. تنمو بسرعة وتحتاج دعم عمودي ومساحة واسعة.\n' +
        '\n' ,
    category: 'indoor' as const
  },
  {
    id: 'i11',
    name: 'الديفنباخيا',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    shortDescription: 'نبتة داخلية محبة للرطوبة، ذات أوراق جذابة. تحتاج ضوء ساطع غير مباشر، وري معتدل. سامة إذا تم لمس عصارتها، فاحذري منها.\n' +
        '\n' ,
    category: 'indoor' as const
  },
  {
    id: 'i12',
    name: 'نبتة الشمعة (هويا)',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    shortDescription: 'تحب الضوء الساطع غير المباشر والرطوبة المعتدلة. تُروى عند جفاف التربة من الأعلى، وتُزهر أكثر في ظروف دافئة. لا تحب النقل أو التقليم الزائد، ويمكن تعليقها أو دعمها كمتسلقة.\n' +
        '\n' ,
    category: 'indoor' as const
  },
  // Seeds

  {
    id: 's1',
    name: 'الحمص',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    shortDescription: 'يُنقع قبل الزراعة لتسريع الإنبات، ويزرع في الخارج فقط تحت الشمس المباشرة. يفضل التربة جيدة التصريف، ولا يحتاج الكثير من التسميد النيتروجيني لأنه يثبّت النيتروجين بنفسه.\n' +
        '\n',
    category: 'seed' as const
  },
  {
    id: 's2',
    name: 'القمح',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    shortDescription: 'محصول شتوي يحتاج لمساحات واسعة وتربة خصبة. يفضل الزراعة في الخريف تحت أشعة الشمس، مع ري معتدل وتسميد متدرج حسب مراحل النمو.\n' +
        '\n',
    category: 'seed' as const
  },
  {
    id: 's3',
    name: 'العدس',
    image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
    shortDescription: 'من البقوليات التي تنمو في الأجواء المعتدلة. يزرع بالخارج في تربة جيدة التصريف، ويحتاج ري منتظم دون إغراق. لا يحتاج لتقليم ويثبت النيتروجين طبيعيًا في التربة.\n' +
        '\n',
    category: 'seed' as const
  },
  // Outdoor plants

  {
    id: 'o1',
    name: 'نبتة العنب',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    shortDescription: 'نبتة خارجية محبة للشمس، تحتاج دعم لتتسلق وتقليم لتحفيز الثمار. تُروى بانتظام وتُسمّد حسب الموسم. تُصاب أحيانًا بفطريات أو حشرات، لذا يُنصح بالرش الوقائي.\n' +
        '\n',
    category: 'outdoor' as const
  },
  {
    id: 'o2',
    name: 'نبتة الفراولة',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    shortDescription: 'نبات خارجي يحب الشمس وبيحتاج تربة جيدة التصريف. يُزرع في الأماكن المشمسة مع عناية بالتسميد والتقيلم. يُصاب ببعض الأمراض الفطرية والبكتيرية، ويحتاج لمكافحة دورية.\n' +
        '\n',
    category: 'outdoor' as const
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
