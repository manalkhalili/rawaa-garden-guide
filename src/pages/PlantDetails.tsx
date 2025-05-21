
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Flower, Sprout, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PlantDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Combined plants data from all categories (this would ideally come from a database or API)
  const allPlants = [
    // Indoor plants
    {
      id: '1',
      name: 'الورد الجوري',
      image: 'assets/img_14.png',
      shortDescription: 'الورد الجوري نبات خارجي سهل العناية، مثالي لمن يبحث عن إضافة لمسة من الجمال الطبيعي في حديقته.',
      category: 'indoor',
      fullDescription: 'الورد الجوري من أشهر وأجمل أنواع الورود، يتميز بألوانه الزاهية ورائحته العطرة. يحتاج إلى عناية معتدلة وري منتظم. يمكن زراعته في الحدائق والأواني، ويفضل وضعه في مكان يتلقى ضوء الشمس لعدة ساعات يومياً. يزهر عادة في فصلي الربيع والصيف.',
      careInstructions: 'يحتاج الورد الجوري إلى تربة غنية جيدة التصريف، وري منتظم مع تجنب تجمع الماء حول الجذور. قم بتقليمه بانتظام لتشجيع نمو الأزهار الجديدة، وإزالة الأوراق والأزهار الذابلة للحفاظ على صحة النبات.',
      images: [
        'assets/img_14.png',
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'
      ]
    },
    {
      id: '2',
      name: 'القرنفل',
      image: 'assets/img_15.png',
      shortDescription: 'نبات خارجي مزهر يزدهر في ضوء الشمس الجزئي، مثالي للحدائق ذات الإضاءة المعتدلة ويتميز بأزهاره الجميلة التي تزهر في الربيع وقد تمتد طوال العام مع العناية المنتظمة.',
      category: 'indoor',
      fullDescription: 'القرنفل نبات مزهر جميل يتميز بألوانه المتنوعة وأزهاره العطرية. ينمو بشكل جيد في المناطق ذات المناخ المعتدل، ويمكن زراعته في الحدائق أو في أواني داخل المنزل. يزهر في فصل الربيع وقد يستمر حتى الخريف إذا توفرت له الظروف المناسبة.',
      careInstructions: 'يحتاج القرنفل إلى تربة جيدة التصريف وغنية بالمواد العضوية. يجب ريه بانتظام مع تجنب الإفراط في الري. يفضل تعريضه لضوء الشمس المباشر لعدة ساعات يومياً، وتسميده بشكل منتظم خلال موسم النمو.',
      images: [
        'assets/img_15.png',
        'https://images.unsplash.com/photo-1518495973542-4542c06a5843'
      ]
    },
    {
      id: '3',
      name: 'البوتس',
      image: 'assets/img_18.png',
      shortDescription: 'نبتة داخلية سهلة العناية، تنمو جيدًا في الإضاءة غير المباشرة وتتحمل الأماكن المظللة. مثالية للمكاتب والبيوت، ولا تحتاج لمساحة كبيرة. تنقي الهواء وتضفي لمسة خضراء جميلة.',
      category: 'indoor',
      fullDescription: 'البوتس من النباتات المتسلقة الجميلة التي تتميز بأوراقها الخضراء اللامعة، وقدرتها على التكيف مع مختلف الظروف البيئية. يمكن زراعته في أواني معلقة أو تركه ليتسلق على دعامات. يعتبر من أكثر النباتات المنزلية شيوعاً لسهولة العناية به وجماله.',
      careInstructions: 'يحتاج البوتس إلى ري معتدل، مع ترك التربة تجف قليلاً بين مرات الري. يفضل وضعه في مكان به إضاءة غير مباشرة، ويمكن أن ينمو أيضاً في الإضاءة الاصطناعية. تسميده مرة كل شهرين كافٍ للحفاظ على نموه بشكل جيد.',
      images: [
        'assets/img_18.png',
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9'
      ]
    },
    // More indoor plants
    {
      id: '4',
      name: 'الكلافيا',
      image: 'assets/img_19.png',
      shortDescription: 'نبتة داخلية مزهرة بألوان برتقالية زاهية، تحب الضوء الساطع غير المباشر والرطوبة المعتدلة. مثالية للأماكن الهادئة داخل المنزل، وتُزهر في الربيع إذا اعتُني بها جيدًا.',
      category: 'indoor',
      fullDescription: 'الكلافيا نبات داخلي مزهر يتميز بأزهاره البرتقالية أو الصفراء الزاهية التي تشبه المشاعل. تعتبر من النباتات التي تضفي لمسة من الألوان الدافئة على المنزل. تزهر عادة في فصل الربيع وأوائل الصيف.',
      careInstructions: 'تحتاج الكلافيا إلى إضاءة ساطعة غير مباشرة، وتربة خفيفة جيدة التصريف. يجب ريها باعتدال، وتركها تجف بين الريات. تفضل الرطوبة المعتدلة، ولا تحب التيارات الهوائية الباردة.',
      images: [
        'assets/img_19.png',
        'https://images.unsplash.com/photo-1518495973542-4542c06a5843'
      ]
    },
    {
      id: '5',
      name: 'الشراع',
      image: 'assets/img_20.png',
      shortDescription: 'نبتة داخلية أنيقة بأزهار بيضاء، تنمو في الضوء غير المباشر وتحب الرطوبة المعتدلة. سهلة العناية، تنقي الهواء، لكنها سامة للحيوانات الأليفة.',
      category: 'indoor',
      fullDescription: 'الشراع أو زنبق السلام، نبات داخلي أنيق يتميز بأوراقه الخضراء اللامعة وأزهاره البيضاء الجميلة التي تشبه الأشرعة. يعتبر من النباتات التي تجلب الهدوء والسكينة للمكان، ويساعد في تنقية الهواء من بعض الملوثات.',
      careInstructions: 'يحتاج الشراع إلى إضاءة متوسطة غير مباشرة، وتربة رطبة باستمرار مع تجنب تجمع الماء. يفضل البيئة الرطبة، لذا يمكن رش أوراقه بالماء من وقت لآخر. تجنب وضعه في أماكن باردة أو في تيارات هوائية مباشرة.',
      images: [
        'assets/img_20.png',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
      ]
    },

    // Outdoor plants
    {
      id: '6',
      name: 'نبتة العنب',
      image: 'assets/img_16.png',
      shortDescription: 'نبتة خارجية محبة للشمس، تحتاج دعم لتتسلق وتقليم لتحفيز الثمار. تُروى بانتظام وتُسمّد حسب الموسم. تُصاب أحيانًا بفطريات أو حشرات، لذا يُنصح بالرش الوقائي.',
      category: 'outdoor',
      fullDescription: 'نبات العنب من النباتات المتسلقة التي تنتج فاكهة لذيذة وصحية. يتميز بأوراقه الخضراء الكبيرة وثماره العنقودية. يمكن زراعته بغرض إنتاج الثمار أو لتغطية المعرشات والأسوار بمظهر جمالي. تختلف أصنافه بين العنب الأحمر والأبيض والأسود.',
      careInstructions: 'يحتاج العنب إلى تربة عميقة جيدة التصريف وغنية بالمغذيات. يجب تعريضه لأشعة الشمس الكاملة، وريه بانتظام، خاصة في فترة نمو الثمار. التقليم المنتظم ضروري لتحفيز إنتاج الثمار وتشكيل النبات.',
      images: [
        'assets/img_16.png',
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9'
      ]
    },
    {
      id: '7',
      name: 'نبتة الفراولة',
      image: 'assets/img_17.png',
      shortDescription: 'نبات خارجي يحب الشمس وبيحتاج تربة جيدة التصريف. يُزرع في الأماكن المشمسة مع عناية بالتسميد والتقيلم. يُصاب ببعض الأمراض الفطرية والبكتيرية، ويحتاج لمكافحة دورية.',
      category: 'outdoor',
      fullDescription: 'الفراولة من النباتات المثمرة اللذيذة التي يمكن زراعتها بسهولة في الحديقة أو في أواني. تتميز بأزهارها البيضاء وثمارها الحمراء الجميلة. تعتبر من المحاصيل سريعة النمو نسبياً، ويمكن أن تبدأ في إنتاج الثمار خلال موسم واحد من الزراعة.',
      careInstructions: 'تحتاج الفراولة إلى تربة غنية جيدة التصريف، وضوء شمس كامل أو جزئي. يجب ريها بانتظام مع الحرص على عدم تبليل الأوراق والثمار لتجنب الأمراض الفطرية. التسميد المنتظم خلال موسم النمو يعزز إنتاج الثمار.',
      images: [
        'assets/img_17.png',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
      ]
    },

    // Seeds
    {
      id: '8',
      name: 'الحمص',
      image: 'assets/img_29.png',
      shortDescription: 'يُنقع قبل الزراعة لتسريع الإنبات، ويزرع في الخارج فقط تحت الشمس المباشرة. يفضل التربة جيدة التصريف، ولا يحتاج الكثير من التسميد النيتروجيني لأنه يثبّت النيتروجين بنفسه.',
      category: 'seed',
      fullDescription: 'الحمص من البقوليات المهمة والتي تعتبر مصدراً غذائياً غنياً بالبروتين. يتميز نبات الحمص بأوراقه الريشية وزهوره الصغيرة البيضاء أو الوردية، وقرونه المنتفخة التي تحتوي على البذور. يُزرع عادة في الربيع ويُحصد في أواخر الصيف.',
      careInstructions: 'يحتاج الحمص إلى تربة خفيفة جيدة التصريف، وضوء شمس كامل. يجب نقع البذور قبل الزراعة لتسريع الإنبات. الري المعتدل كافٍ خاصة بعد الإنبات، حيث يعتبر الحمص من النباتات المقاومة نسبياً للجفاف.',
      images: [
        'assets/img_29.png',
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'
      ]
    },
    {
      id: '9',
      name: 'القمح',
      image: 'assets/img_30.png',
      shortDescription: 'محصول شتوي يحتاج لمساحات واسعة وتربة خصبة. يفضل الزراعة في الخريف تحت أشعة الشمس، مع ري معتدل وتسميد متدرج حسب مراحل النمو.',
      category: 'seed',
      fullDescription: 'القمح من أهم المحاصيل الغذائية في العالم، وهو نبات عشبي حولي ينتمي إلى عائلة النجيليات. يتميز بسنابله الذهبية التي تحتوي على حبوب القمح. يُزرع عادة في الخريف ويُحصد في أواخر الربيع أو بداية الصيف، حسب المنطقة والصنف.',
      careInstructions: 'يحتاج القمح إلى تربة خصبة وعميقة، وضوء شمس كامل. الري المنتظم مهم خاصة في مراحل النمو الأولى وفترة تكوين السنابل. التسميد المتوازن يساعد على زيادة المحصول وتحسين جودة الحبوب.',
      images: [
        'assets/img_30.png',
        'https://images.unsplash.com/photo-1518495973542-4542c06a5843'
      ]
    },
    {
      id: '10',
      name: 'العدس',
      image: 'assets/img_28.png',
      shortDescription: 'من البقوليات التي تنمو في الأجواء المعتدلة. يزرع بالخارج في تربة جيدة التصريف، ويحتاج ري منتظم دون إغراق. لا يحتاج لتقليم ويثبت النيتروجين طبيعيًا في التربة.',
      category: 'seed',
      fullDescription: 'العدس من البقوليات المهمة غذائياً والتي تحتوي على نسبة عالية من البروتين والألياف. يتميز نبات العدس بحجمه الصغير، وأوراقه المركبة، وزهوره الصغيرة البيضاء أو الزرقاء الفاتحة، وقرونه المسطحة التي تحتوي على بذور العدس. يُزرع عادة في الشتاء أو أوائل الربيع.',
      careInstructions: 'يحتاج العدس إلى تربة متوسطة الخصوبة جيدة التصريف، وضوء شمس كامل. الري المعتدل كافٍ، حيث يعتبر العدس من النباتات المقاومة نسبياً للجفاف. لا يحتاج إلى تسميد نيتروجيني مكثف لأنه قادر على تثبيت النيتروجين من الهواء بمساعدة البكتيريا المتعايشة مع جذوره.',
      images: [
        'assets/img_28.png',
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9'
      ]
    }
  ];

  // Find the plant based on the ID parameter
  const plant = allPlants.find(p => p.id === id);

  if (!plant) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center rtl">
            <h1 className="text-3xl font-bold text-gray-800">النبات غير موجود</h1>
            <p className="mt-4 text-gray-600">لم نتمكن من العثور على النبات المطلوب</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Map category to Arabic
  const categoryMap = {
    'indoor': 'داخلي',
    'outdoor': 'خارجي',
    'seed': 'بذور'
  };

  // Map category to color
  const categoryClass = {
    'indoor': 'bg-green-100 text-green-800',
    'outdoor': 'bg-blue-100 text-blue-800',
    'seed': 'bg-yellow-100 text-yellow-800'
  };

  // Map category to icon
  const CategoryIcon = () => {
    switch(plant.category) {
      case 'indoor':
        return <Leaf className="h-6 w-6 text-green-600 ml-2" />;
      case 'outdoor':
        return <Flower className="h-6 w-6 text-blue-600 ml-2" />;
      case 'seed':
        return <Sprout className="h-6 w-6 text-yellow-600 ml-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Plant Header */}
        <section className={`py-8 ${plant.category === 'indoor' ? 'bg-rawaa-primary' : plant.category === 'outdoor' ? 'bg-rawaa-secondary' : 'bg-rawaa-accent'}`}>
          <div className="container mx-auto px-4 rtl">
            <div className="flex items-center">
              <CategoryIcon />
              <div>
                <h1 className="text-3xl font-bold text-white">{plant.name}</h1>
                <div className="flex items-center mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${categoryClass[plant.category as keyof typeof categoryClass]}`}>
                    {categoryMap[plant.category as keyof typeof categoryMap]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Plant Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rtl">
              {/* Main Image */}
              <div className="md:col-span-1">
                <div className="sticky top-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={plant.image} 
                          alt={plant.name} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Plant Information */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">معلومات عن {plant.name}</h2>
                <p className="text-gray-700 leading-relaxed mb-8">{plant.fullDescription}</p>
                
                <h3 className="text-xl font-bold mb-3">تعليمات العناية</h3>
                <p className="text-gray-700 leading-relaxed mb-8">{plant.careInstructions}</p>
              
                {/* Additional Images Gallery */}
                <h3 className="text-xl font-bold mb-4">معرض صور</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {plant.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${plant.name} - ${index + 1}`} 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Plants Section (placeholder) */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 rtl">
            <h2 className="text-2xl font-bold mb-6">نباتات ذات صلة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {allPlants
                .filter(p => p.category === plant.category && p.id !== plant.id)
                .slice(0, 3)
                .map(relatedPlant => (
                  <Card key={relatedPlant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPlant.image} 
                        alt={relatedPlant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{relatedPlant.name}</h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{relatedPlant.shortDescription}</p>
                      <a href={`/plant/${relatedPlant.id}`} className="text-rawaa-primary font-semibold hover:underline mt-3 inline-block">
                        اقرأ المزيد
                      </a>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlantDetails;
