
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
      name: 'نبات الصبار',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      shortDescription: 'نبات داخلي سهل العناية، مثالي للمبتدئين في عالم الزراعة المنزلية.',
      category: 'indoor' as const
    },
    {
      id: '2',
      name: 'نخيل الأريكا',
      image: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787',
      shortDescription: 'نبات داخلي يضيف لمسة استوائية، يفضل الإضاءة غير المباشرة والرطوبة العالية.',
      category: 'indoor' as const
    },
    {
      id: '3',
      name: 'زنبق السلام',
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b',
      shortDescription: 'نبات منزلي جميل مع أزهار بيضاء، يعيش جيدًا في الظل الجزئي والرطوبة المتوسطة.',
      category: 'indoor' as const
    },
    // Outdoor plants
    {
      id: '4',
      name: 'زهرة الياسمين',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      shortDescription: 'نبات خارجي عطري، يضفي رائحة زكية ومظهر جميل للحدائق.',
      category: 'outdoor' as const
    },
    {
      id: '5',
      name: 'شجرة الزيتون',
      image: 'https://images.unsplash.com/photo-1445264618000-f1e069c5920f',
      shortDescription: 'شجرة معمرة تتحمل الظروف القاسية، رمز للسلام وتنتج ثمارًا مفيدة.',
      category: 'outdoor' as const
    },
    {
      id: '6',
      name: 'ورد جوري',
      image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac',
      shortDescription: 'زهرة خارجية جميلة تضيف ألوانًا زاهية للحدائق مع رائحة عطرة.',
      category: 'outdoor' as const
    },
    // Seeds
    {
      id: '7',
      name: 'بذور الريحان',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      shortDescription: 'بذور عشبية عطرية سهلة الزراعة، تستخدم في الطهي والعلاج.',
      category: 'seed' as const
    },
    {
      id: '8',
      name: 'بذور الطماطم',
      image: 'https://images.unsplash.com/photo-1592818868295-f5e5c2643e14',
      shortDescription: 'بذور خضروات شهيرة يمكن زراعتها في المنزل للحصول على طماطم طازجة.',
      category: 'seed' as const
    },
    {
      id: '9',
      name: 'بذور زهرة عباد الشمس',
      image: 'https://images.unsplash.com/photo-1567425928496-51d64c9f1a56',
      shortDescription: 'بذور جميلة تنتج زهورًا كبيرة تتبع الشمس وتوفر بذورًا صالحة للأكل.',
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
