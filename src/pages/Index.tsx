import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import PlantCard from '../components/PlantCard';
import { Button } from '@/components/ui/button';
import { Leaf, Sprout, TreePine } from 'lucide-react';
import { plantsData } from '../data/plantsData';

const Index = () => {
  const featuredPlants = plantsData.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title rtl">النباتات المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredPlants.map((plant) => (
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
              <a href="/all-plants">عرض جميع النباتات</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-rawaa-light rtl">
        <div className="container mx-auto px-4">
          <h2 className="section-title">تصفح حسب الفئة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
              <Leaf className="h-16 w-16 text-rawaa-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">النباتات الداخلية</h3>
              <p className="text-gray-600 mb-4">نباتات مثالية لتزيين المنزل والمكتب</p>
              <Button asChild className="bg-rawaa-primary hover:bg-rawaa-primary/90">
                <a href="/indoor-plants">تصفح النباتات الداخلية</a>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
              <TreePine className="h-16 w-16 text-rawaa-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">النباتات الخارجية</h3>
              <p className="text-gray-600 mb-4">نباتات مثالية للحدائق والمساحات الخارجية</p>
              <Button asChild className="bg-rawaa-secondary hover:bg-rawaa-secondary/90">
                <a href="/outdoor-plants">تصفح النباتات الخارجية</a>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
              <Sprout className="h-16 w-16 text-rawaa-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">البذور</h3>
              <p className="text-gray-600 mb-4">ابدأ رحلتك مع الزراعة من البذور</p>
              <Button asChild className="bg-rawaa-accent hover:bg-rawaa-accent/90 text-white">
                <a href="/seeds">تصفح البذور</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
