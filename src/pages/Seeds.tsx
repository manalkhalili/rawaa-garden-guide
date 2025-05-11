
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantCard from '../components/PlantCard';
import { Sprout } from 'lucide-react';

const Seeds = () => {
  // Seeds data
  const seeds = [
    {
      id: '1',
      name: 'الحمص',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      shortDescription: 'يُنقع قبل الزراعة لتسريع الإنبات، ويزرع في الخارج فقط تحت الشمس المباشرة. يفضل التربة جيدة التصريف، ولا يحتاج الكثير من التسميد النيتروجيني لأنه يثبّت النيتروجين بنفسه.\n' +
          '\n',
      category: 'seed' as const
    },
    {
      id: '2',
      name: 'القمح',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      shortDescription: 'محصول شتوي يحتاج لمساحات واسعة وتربة خصبة. يفضل الزراعة في الخريف تحت أشعة الشمس، مع ري معتدل وتسميد متدرج حسب مراحل النمو.\n' +
          '\n',
      category: 'seed' as const
    },
    {
      id: '3',
      name: 'العدس',
      image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      shortDescription: 'من البقوليات التي تنمو في الأجواء المعتدلة. يزرع بالخارج في تربة جيدة التصريف، ويحتاج ري منتظم دون إغراق. لا يحتاج لتقليم ويثبت النيتروجين طبيعيًا في التربة.\n' +
          '\n',
      category: 'seed' as const
    },

  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-rawaa-accent py-12">
          <div className="container mx-auto px-4 rtl">
            <div className="flex items-center">
              <Sprout className="text-white h-12 w-12 ml-4" />
              <div>
                <h1 className="text-3xl font-bold text-white">البذور</h1>
                <p className="text-white opacity-80">مجموعة متنوعة من البذور لزراعة الخضروات والفواكه والزهور والأعشاب</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filter options (placeholder) */}
        <section className="bg-white py-4 border-b">
          <div className="container mx-auto px-4 rtl">
            <div className="flex flex-wrap items-center justify-between">
              <div className="mb-2 md:mb-0">
                <span className="text-gray-600">6 أنواع من البذور</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 ml-2">تصفية حسب:</span>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>الكل</option>
                  <option>أعشاب</option>
                  <option>خضروات</option>
                  <option>زهور</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seeds Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seeds.map((seed) => (
                <PlantCard 
                  key={seed.id}
                  id={seed.id}
                  name={seed.name}
                  image={seed.image}
                  shortDescription={seed.shortDescription}
                  category={seed.category}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Planting Guide */}
        <section className="bg-rawaa-light py-12 rtl">
          <div className="container mx-auto px-4">
            <h2 className="section-title">دليل زراعة البذور</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-accent">تجهيز التربة</h3>
                <p className="text-gray-600">
                  قبل زراعة البذور، قم بتحضير التربة المناسبة. استخدم خليطاً من التربة العضوية والبيرلايت للحصول على تربة جيدة التصريف وغنية بالعناصر الغذائية.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-accent">طريقة الزراعة</h3>
                <p className="text-gray-600">
                  ضع البذور في التربة بعمق يعادل ضعف حجم البذرة. غطِها برفق بالتربة واسقها برفق. حافظ على رطوبة التربة حتى تنبت البذور.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-accent">الري والعناية</h3>
                <p className="text-gray-600">
                  بعد الإنبات، اسقِ النباتات الصغيرة بانتظام مع تجنب الإفراط في الري. وفر لها ضوء الشمس المناسب حسب نوع النبات.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-rawaa-accent">النقل والزراعة</h3>
                <p className="text-gray-600">
                  بعد نمو 4-6 أوراق حقيقية، يمكنك نقل الشتلات إلى أوعية أكبر أو إلى الأرض مباشرة. تأكد من توفير مساحة كافية بين النباتات للنمو.
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

export default Seeds;
