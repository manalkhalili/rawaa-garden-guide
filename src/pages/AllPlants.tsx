
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

    // Outdoor plants
    {
      id: '4',
      name: 'نبتة العنب',
      image: 'src/assets/img_16.png',
      shortDescription: 'نبتة خارجية محبة للشمس، تحتاج دعم لتتسلق وتقليم لتحفيز الثمار. تُروى بانتظام وتُسمّد حسب الموسم. تُصاب أحيانًا بفطريات أو حشرات، لذا يُنصح بالرش الوقائي.\n' +
          '\n',
      category: 'outdoor' as const
    },
    {
      id: '5',
      name: 'نبتة الفراولة',
      image: 'src/assets/img_17.png',
      shortDescription: 'نبات خارجي يحب الشمس وبيحتاج تربة جيدة التصريف. يُزرع في الأماكن المشمسة مع عناية بالتسميد والتقيلم. يُصاب ببعض الأمراض الفطرية والبكتيرية، ويحتاج لمكافحة دورية.\n' +
          '\n',
      category: 'outdoor' as const
    },

    // Seeds
    {
      id: '6',
      name: 'الحمص',
      image: 'src/assets/img_29.png',
      shortDescription: 'يُنقع قبل الزراعة لتسريع الإنبات، ويزرع في الخارج فقط تحت الشمس المباشرة. يفضل التربة جيدة التصريف، ولا يحتاج الكثير من التسميد النيتروجيني لأنه يثبّت النيتروجين بنفسه.\n' +
          '\n',
      category: 'seed' as const
    },
    {
      id: '7',
      name: 'القمح',
      image: 'src/assets/img_30.png',
      shortDescription: 'محصول شتوي يحتاج لمساحات واسعة وتربة خصبة. يفضل الزراعة في الخريف تحت أشعة الشمس، مع ري معتدل وتسميد متدرج حسب مراحل النمو.\n' +
          '\n',
      category: 'seed' as const
    },
    {
      id: '8',
      name: 'العدس',
      image: 'src/assets/img_28.png',
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
