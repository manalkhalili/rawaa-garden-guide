
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantCard from '../components/PlantCard';
import { Leaf } from 'lucide-react';

const IndoorPlants = () => {
  // Indoor plants data
  const indoorPlants = [
    {
      id: '1',
      name: 'الورد الجوري',
      image: 'src/assets/img_14.png',
      shortDescription: 'الورد الجوري نبات خارجي سهل العناية، مثالي لمن يبحث عن إضافة لمسة من الجمال الطبيعي في حديقته.',
      category: 'indoor' as const
    },
    {
      id: '2',
      name: 'القرنفل',
      image: 'src/assets/img_15.png',
      shortDescription: 'نبات خارجي مزهر يزدهر في ضوء الشمس الجزئي، مثالي للحدائق ذات الإضاءة المعتدلة ويتميز بأزهاره الجميلة التي تزهر في الربيع وقد تمتد طوال العام مع العناية المنتظمة.' ,
      category: 'indoor' as const
    },
    {
      id: '3',
      name: 'البوتس',
      image: 'src/assets/img_18.png',
      shortDescription: 'نبتة داخلية سهلة العناية، تنمو جيدًا في الإضاءة غير المباشرة وتتحمل الأماكن المظللة. مثالية للمكاتب والبيوت، ولا تحتاج لمساحة كبيرة. تنقي الهواء وتضفي لمسة خضراء جميلة.' ,
      category: 'indoor' as const
    },
    {
      id: '4',
      name: 'الكلافيا',
      image: 'src/assets/img_19.png',
      shortDescription: 'نبتة داخلية مزهرة بألوان برتقالية زاهية، تحب الضوء الساطع غير المباشر والرطوبة المعتدلة. مثالية للأماكن الهادئة داخل المنزل، وتُزهر في الربيع إذا اعتُني بها جيدًا.' ,
      category: 'indoor' as const
    },
    {
      id: '5',
      name: 'الشراع',
      image: 'src/assets/img_20.png',
      shortDescription: 'نبتة داخلية أنيقة بأزهار بيضاء، تنمو في الضوء غير المباشر وتحب الرطوبة المعتدلة. سهلة العناية، تنقي الهواء، لكنها سامة للحيوانات الأليفة.' ,
      category: 'indoor' as const
    },
    {
      id: '6',
      name: 'وردة الكالا',
      image: 'src/assets/img_21.png',
      shortDescription: 'نبتة أنيقة تزهر في الربيع أو الصيف، قابلة للزراعة داخلًا أو خارجًا، تفضل الضوء الساطع غير المباشر وتربة جيدة التصريف. رمز للنقاء وتُستخدم كثيرًا في تنسيقات الزهور.' ,
      category: 'indoor' as const

    },
    {
      id: '7',
      name: ' الغلونيميا',
      image: 'src/assets/img_22.png',
      shortDescription: 'نبتة داخلية تحب الإضاءة الهادئة. ري معتدل وتربة جيدة التصريف. لا تتحمل البرد أو التيارات الهوائية. تنظّف أوراقها بانتظام وتُسمد كل 4–6 أسابيع.' ,
      category: 'indoor' as const

    },
    {
      id: '8',
      name: 'الكروتون',
      image: 'src/assets/img_23.png',
      shortDescription: 'يعشق الإضاءة القوية غير المباشرة. ألوانه تصبح أجمل بالشمس. يحتاج ري منتظم ورطوبة جيدة. لا يحب التغيير المفاجئ في المكان أو البرودة.\n' +
          '\n' ,
      category: 'indoor' as const

    },
    {
      id: '9',
      name: 'الأريكا',
      image: 'src/assets/img_24.png',
      shortDescription: 'نخلة داخلية ناعمة، تحب الإضاءة الساطعة غير المباشرة. ري معتدل وتربة جيدة التصريف. لا تتحمل البرد. تُسمد شهريًا في الربيع والصيف.\n' +
          '\n' ,
      category: 'indoor' as const

    },
    {
      id: '10',
      name: 'المونستيرا',
      image: 'src/assets/img_25.png',
      shortDescription: 'نبتة استوائية كبيرة تحب الضوء غير المباشر والرطوبة العالية. ري معتدل وتربة جيدة التصريف. تنمو بسرعة وتحتاج دعم عمودي ومساحة واسعة.\n' +
          '\n' ,
      category: 'indoor' as const

    },
    {
      id: '11',
      name: 'الديفنباخيا',
      image: 'src/assets/img_26.png',
      shortDescription: 'نبتة داخلية محبة للرطوبة، ذات أوراق جذابة. تحتاج ضوء ساطع غير مباشر، وري معتدل. سامة إذا تم لمس عصارتها، فاحذري منها.\n' +
          '\n' ,
      category: 'indoor' as const

    },
    {
      id: '12',
      name: 'نبتة الشمعة (هويا)',
      image: 'src/assets/img_27.png',
      shortDescription: 'تحب الضوء الساطع غير المباشر والرطوبة المعتدلة. تُروى عند جفاف التربة من الأعلى، وتُزهر أكثر في ظروف دافئة. لا تحب النقل أو التقليم الزائد، ويمكن تعليقها أو دعمها كمتسلقة.\n' +
          '\n' ,
      category: 'indoor' as const

    },

  ];

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
