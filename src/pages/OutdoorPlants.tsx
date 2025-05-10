
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantCard from '../components/PlantCard';
import { Flower } from 'lucide-react';

const OutdoorPlants = () => {
  // Outdoor plants data
  const outdoorPlants = [
    {
      id: '1',
      name: 'زهرة الياسمين',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      shortDescription: 'نبات خارجي عطري، يضفي رائحة زكية ومظهر جميل للحدائق.',
      category: 'outdoor' as const
    },
    {
      id: '2',
      name: 'الجهنمية',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      shortDescription: 'شجيرة مزهرة بألوان زاهية، تتحمل الحرارة وتزدهر في الصيف.',
      category: 'outdoor' as const
    },
    {
      id: '3',
      name: 'الورد الجوري',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
      shortDescription: 'زهور جميلة بألوان متنوعة، تضفي جمالاً ورائحة عطرة للحدائق.',
      category: 'outdoor' as const
    },
    {
      id: '4',
      name: 'الكازورينا',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      shortDescription: 'شجرة سريعة النمو، مقاومة للجفاف، مثالية للمناطق الحارة.',
      category: 'outdoor' as const
    },
    {
      id: '5',
      name: 'النخيل',
      image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      shortDescription: 'شجرة تضفي مظهراً استوائياً للحديقة، تتحمل الحرارة والجفاف.',
      category: 'outdoor' as const
    },
    {
      id: '6',
      name: 'الفل',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      shortDescription: 'نبات متسلق ذو رائحة عطرية مميزة، يمكن زراعته بجانب الأسوار.',
      category: 'outdoor' as const
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-rawaa-secondary py-12">
          <div className="container mx-auto px-4 rtl">
            <div className="flex items-center">
              <Flower className="text-white h-12 w-12 ml-4" />
              <div>
                <h1 className="text-3xl font-bold text-white">النباتات الخارجية</h1>
                <p className="text-white opacity-80">نباتات تضيف جمالاً للحدائق والمساحات الخارجية وتتحمل الظروف المختلفة</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filter options (placeholder) */}
        <section className="bg-white py-4 border-b">
          <div className="container mx-auto px-4 rtl">
            <div className="flex flex-wrap items-center justify-between">
              <div className="mb-2 md:mb-0">
                <span className="text-gray-600">6 نباتات</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 ml-2">تصفية حسب:</span>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>الكل</option>
                  <option>مقاومة للجفاف</option>
                  <option>مزهرة</option>
                  <option>تحتاج ضوء كامل</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Plants Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </section>
        
        {/* Care Tips */}
        <section className="bg-rawaa-light py-12 rtl">
          <div className="container mx-auto px-4">
            <h2 className="section-title">نصائح للعناية بالنباتات الخارجية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-secondary">الري المناسب</h3>
                <p className="text-gray-600">
                  النباتات الخارجية بحاجة إلى ري منتظم، خاصة خلال فصل الصيف. استخدم نظام ري بالتنقيط لتوفير المياه والحفاظ على رطوبة التربة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-secondary">التقليم</h3>
                <p className="text-gray-600">
                  قم بتقليم النباتات الخارجية بانتظام لتشجيع النمو الصحي والحفاظ على شكلها. أزل الفروع الميتة أو التالفة لمنع انتشار الأمراض.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-secondary">التسميد</h3>
                <p className="text-gray-600">
                  استخدم الأسمدة العضوية أو المركبة للنباتات الخارجية خلال موسم النمو. تأكد من اتباع التعليمات الموجودة على العبوة لتجنب الإفراط في التسميد.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-secondary">مكافحة الآفات</h3>
                <p className="text-gray-600">
                  راقب نباتاتك بانتظام للكشف عن أي علامات للآفات أو الأمراض. استخدم الطرق الطبيعية لمكافحة الآفات قبل اللجوء إلى المبيدات الكيميائية.
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

export default OutdoorPlants;
