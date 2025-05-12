
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantCard from '../components/PlantCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flower, Leaf, Sprout } from 'lucide-react';

const AllPlants = () => {
  // Combined plants data from all categories
  const allPlants = [
    // Indoor plants
    {
      id: '1',
      name: 'الورد الجوري',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      shortDescription: 'الورد الجوري نبات خارجي سهل العناية، مثالي لمن يبحث عن إضافة لمسة من الجمال الطبيعي في حديقته.',
      category: 'indoor' as const
    },
    {
      id: '2',
      name: 'القرنفل',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      shortDescription: 'نبات خارجي مزهر يزدهر في ضوء الشمس الجزئي، مثالي للحدائق ذات الإضاءة المعتدلة ويتميز بأزهاره الجميلة التي تزهر في الربيع وقد تمتد طوال العام مع العناية المنتظمة.' ,
      category: 'indoor' as const
    },
    {
      id: '3',
      name: 'البوتس',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      shortDescription: 'نبتة داخلية سهلة العناية، تنمو جيدًا في الإضاءة غير المباشرة وتتحمل الأماكن المظللة. مثالية للمكاتب والبيوت، ولا تحتاج لمساحة كبيرة. تنقي الهواء وتضفي لمسة خضراء جميلة.' ,
      category: 'indoor' as const
    },
    // Outdoor plants
    {
      id: '4',
      name: 'نبتة العنب',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      shortDescription: 'نبتة خارجية محبة للشمس، تحتاج دعم لتتسلق وتقليم لتحفيز الثمار. تُروى بانتظام وتُسمّد حسب الموسم. تُصاب أحيانًا بفطريات أو حشرات، لذا يُنصح بالرش الوقائي.\n' +
          '\n',
      category: 'outdoor' as const
    },
    {
      id: '5',
      name: 'نبتة الفراولة',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      shortDescription: 'نبات خارجي يحب الشمس وبيحتاج تربة جيدة التصريف. يُزرع في الأماكن المشمسة مع عناية بالتسميد والتقيلم. يُصاب ببعض الأمراض الفطرية والبكتيرية، ويحتاج لمكافحة دورية.\n' +
          '\n',
      category: 'outdoor' as const
    },

    // Seeds
    {
      id: '6',
      name: 'الحمص',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      shortDescription: 'يُنقع قبل الزراعة لتسريع الإنبات، ويزرع في الخارج فقط تحت الشمس المباشرة. يفضل التربة جيدة التصريف، ولا يحتاج الكثير من التسميد النيتروجيني لأنه يثبّت النيتروجين بنفسه.\n' +
          '\n',
      category: 'seed' as const
    },
    {
      id: '7',
      name: 'القمح',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      shortDescription: 'محصول شتوي يحتاج لمساحات واسعة وتربة خصبة. يفضل الزراعة في الخريف تحت أشعة الشمس، مع ري معتدل وتسميد متدرج حسب مراحل النمو.\n' +
          '\n',
      category: 'seed' as const
    },
    {
      id: '8',
      name: 'العدس',
      image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      shortDescription: 'من البقوليات التي تنمو في الأجواء المعتدلة. يزرع بالخارج في تربة جيدة التصريف، ويحتاج ري منتظم دون إغراق. لا يحتاج لتقليم ويثبت النيتروجين طبيعيًا في التربة.\n' +
          '\n',
      category: 'seed' as const
    }
  ];

  const indoorPlants = allPlants.filter(plant => plant.category === 'indoor');
  const outdoorPlants = allPlants.filter(plant => plant.category === 'outdoor');
  const seeds = allPlants.filter(plant => plant.category === 'seed');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-rawaa-primary py-12">
          <div className="container mx-auto px-4 rtl">
            <div className="flex items-center">
              <Flower className="text-white h-12 w-12 ml-4" />
              <div>
                <h1 className="text-3xl font-bold text-white">جميع النباتات</h1>
                <p className="text-white opacity-80">تصفح مجموعتنا المتنوعة من النباتات والبذور</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Plants Tabs Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 rtl">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-4 w-fit">
                  <TabsTrigger value="all" className="px-6">الكل</TabsTrigger>
                  <TabsTrigger value="indoor" className="px-6">داخلي</TabsTrigger>
                  <TabsTrigger value="outdoor" className="px-6">خارجي</TabsTrigger>
                  <TabsTrigger value="seeds" className="px-6">بذور</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {allPlants.map((plant) => (
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
              </TabsContent>
              
              <TabsContent value="indoor">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {indoorPlants.map((plant) => (
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
                <div className="text-center mt-10">
                  <Button asChild className="bg-rawaa-primary hover:bg-rawaa-primary/90">
                    <a href="/indoor-plants">عرض المزيد من النباتات الداخلية</a>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="outdoor">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {outdoorPlants.map((plant) => (
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
                <div className="text-center mt-10">
                  <Button asChild className="bg-rawaa-secondary hover:bg-rawaa-secondary/90">
                    <a href="/outdoor-plants">عرض المزيد من النباتات الخارجية</a>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="seeds">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {seeds.map((plant) => (
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
                <div className="text-center mt-10">
                  <Button asChild className="bg-rawaa-accent hover:bg-rawaa-accent/90 text-white">
                    <a href="/seeds">عرض المزيد من البذور</a>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllPlants;
