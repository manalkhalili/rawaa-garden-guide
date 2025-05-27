
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantCard from '../components/PlantCard';
import { Leaf } from 'lucide-react';
import { plantsData } from '../data/plantsData';

const IndoorPlants = () => {
  // Filter indoor plants from the data
  const indoorPlants = plantsData.filter(plant => plant.category === 'indoor');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-rawaa-primary py-12">
          <div className="container mx-auto px-4 rtl">
            <div className="flex items-center">
              <Leaf className="text-white h-12 w-12 ml-4" />
              <div>
                <h1 className="text-3xl font-bold text-white">النباتات الداخلية</h1>
                <p className="text-white opacity-80">نباتات مميزة تضفي جمالاً على المساحات الداخلية في منزلك أو مكتبك</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filter options */}
        <section className="bg-white py-4 border-b">
          <div className="container mx-auto px-4 rtl">
            <div className="flex flex-wrap items-center justify-between">
              <div className="mb-2 md:mb-0">
                <span className="text-gray-600">{indoorPlants.length} نباتات</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 ml-2">تصفية حسب:</span>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>الكل</option>
                  <option>سهلة العناية</option>
                  <option>تحتاج ضوء منخفض</option>
                  <option>تحتاج ضوء عالي</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Plants Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </section>
        
        {/* Care Tips */}
        <section className="bg-rawaa-light py-12 rtl">
          <div className="container mx-auto px-4">
            <h2 className="section-title">نصائح للعناية بالنباتات الداخلية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">الري المناسب</h3>
                <p className="text-gray-600">
                  معظم النباتات الداخلية تفضل أن تجف التربة قليلاً بين فترات الري. تحقق من رطوبة التربة بإدخال إصبعك فيها، وإذا كانت جافة حتى عمق 2-3 سم، فهذا يعني أنها بحاجة للري.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">الإضاءة المناسبة</h3>
                <p className="text-gray-600">
                  تختلف احتياجات النباتات للضوء، لكن معظم النباتات المنزلية تفضل الضوء الساطع غير المباشر. تجنب وضع النباتات في أشعة الشمس المباشرة لفترات طويلة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">التسميد</h3>
                <p className="text-gray-600">
                  استخدم الأسمدة المناسبة للنباتات الداخلية خلال موسم النمو (الربيع والصيف). تجنب التسميد خلال فصل الشتاء عندما تكون معظم النباتات في حالة سكون.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">التنظيف والعناية</h3>
                <p className="text-gray-600">
                  نظف أوراق النباتات من الغبار بانتظام باستخدام قطعة قماش مبللة. هذا يساعد النباتات على التنفس بشكل أفضل ويحافظ على مظهرها الجميل.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndoorPlants;
