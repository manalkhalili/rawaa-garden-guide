
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantCard from '../components/PlantCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flower } from 'lucide-react';
import { plantsData } from '../data/plantsData';

const AllPlants = () => {
  // Filter plants by category
  const indoorPlants = plantsData.filter(plant => plant.category === 'indoor');
  const outdoorPlants = plantsData.filter(plant => plant.category === 'outdoor');
  const seeds = plantsData.filter(plant => plant.category === 'seed');

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
                  <TabsTrigger value="all" className="px-6">الكل ({plantsData.length})</TabsTrigger>
                  <TabsTrigger value="indoor" className="px-6">داخلي ({indoorPlants.length})</TabsTrigger>
                  <TabsTrigger value="outdoor" className="px-6">خارجي ({outdoorPlants.length})</TabsTrigger>
                  <TabsTrigger value="seeds" className="px-6">بذور ({seeds.length})</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {plantsData.map((plant) => (
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
