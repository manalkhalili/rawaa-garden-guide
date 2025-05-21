
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Flower, Sprout, Leaf, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import PlantCard from '../components/PlantCard';
import * as constants from "node:constants";

const PlantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  // Combined plants data from all categories (this would ideally come from a database or API)
  const allPlants = [
    // Indoor plants
    {
      id: '1',
      name: 'الورد الجوري',
      image: 'assets/img_14.png',
      shortDescription: 'الورد الجوري نبات خارجي سهل العناية، مثالي لمن يبحث عن إضافة لمسة من الجمال الطبيعي في حديقته.',
      category: 'indoor' as const,
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
      category: 'indoor' as const,
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
      category: 'indoor' as const,
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
      category: 'indoor' as const,
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
    {
      id: '6',
      name: 'وردة الكالا',
      image: 'assets/img_21.png',
      shortDescription: 'نبتة أنيقة تزهر في الربيع أو الصيف، قابلة للزراعة داخلًا أو خارجًا، تفضل الضوء الساطع غير المباشر وتربة جيدة التصريف. رمز للنقاء وتُستخدم كثيرًا في تنسيقات الزهور.' ,
      category: 'indoor' as const ,
      fullDescription: 'وردة الكالا، نبتة أنيقة تُزرع داخليًا أو خارجيًا، وتُعرف بأزهارها الجميلة التي ترمز للنقاء. تُستخدم كثيرًا في تنسيقات الزهور، خاصة في الأعراس والجنازات حسب اللون. تزهر عادة في الربيع أو بداية الصيف، ويمكن أن تعيش لسنوات وتتجدد سنويًا من الجذور إذا توفرت لها الظروف المناسبة.',
      careInstructions: 'تحتاج الكالا إلى ضوء ساطع غير مباشر، ودرجة حرارة معتدلة بين 15–25 مئوية. يُفضل ريها مرة أو مرتين أسبوعيًا دون ترك التربة مبلولة جدًا، مع إزالة الأوراق الذابلة بانتظام. تحب التهوية الجيدة وتُزرع في إناء متوسط العمق (20–30 سم) أو في الحديقة مع ترك مسافة 30 سم بين كل نبتة. يُنصح باستخدام سماد سائل متوازن (10-10-10 NPK) كل أسبوعين خلال موسم النمو، وتقليل التسميد بعد الإزهار. يجب تجنب الرياح القوية والشمس المباشرة طوال اليوم. في حال ظهور مشاكل، يمكن استخدام مبيد فطري لعفن الجذور أو بقع الأوراق، ومبيد حشري خفيف عند ظهور الذبابة البيضاء أو المنّ.'
    },
    {
      id: '7',
      name: ' الغلونيميا',
      image: 'assets/img_22.png',
      shortDescription: 'نبتة داخلية تحب الإضاءة الهادئة. ري معتدل وتربة جيدة التصريف. لا تتحمل البرد أو التيارات الهوائية. تنظّف أوراقها بانتظام وتُسمد كل 4–6 أسابيع.' ,
      category: 'indoor' as const,

    },
    {
      id: '8',
      name: 'الكروتون',
      image: 'assets/img_23.png',
      shortDescription: 'يعشق الإضاءة القوية غير المباشرة. ألوانه تصبح أجمل بالشمس. يحتاج ري منتظم ورطوبة جيدة. لا يحب التغيير المفاجئ في المكان أو البرودة.\n' +
          '\n' ,
      category: 'indoor' as const

    },
    {
      id: '9',
      name: 'الأريكا',
      image: 'assets/img_24.png',
      shortDescription: 'نخلة داخلية ناعمة، تحب الإضاءة الساطعة غير المباشرة. ري معتدل وتربة جيدة التصريف. لا تتحمل البرد. تُسمد شهريًا في الربيع والصيف.\n' +
          '\n' ,
      category: 'indoor' as const

    },
    {
      id: '10',
      name: 'المونستيرا',
      image: 'assets/img_25.png',
      shortDescription: 'نبتة استوائية كبيرة تحب الضوء غير المباشر والرطوبة العالية. ري معتدل وتربة جيدة التصريف. تنمو بسرعة وتحتاج دعم عمودي ومساحة واسعة.\n' +
          '\n' ,
      category: 'indoor' as const

    },
    {
      id: '11',
      name: 'الديفنباخيا',
      image: 'assets/img_26.png',
      shortDescription: 'نبتة داخلية محبة للرطوبة، ذات أوراق جذابة. تحتاج ضوء ساطع غير مباشر، وري معتدل. سامة إذا تم لمس عصارتها، فاحذري منها.\n' +
          '\n' ,
      category: 'indoor' as const

    },
    {
      id: '12',
      name: 'نبتة الشمعة (هويا)',
      image: 'assets/img_27.png',
      shortDescription: 'تحب الضوء الساطع غير المباشر والرطوبة المعتدلة. تُروى عند جفاف التربة من الأعلى، وتُزهر أكثر في ظروف دافئة. لا تحب النقل أو التقليم الزائد، ويمكن تعليقها أو دعمها كمتسلقة.\n' +
          '\n' ,
      category: 'indoor' as const

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
      id: '5',
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
      id: '6',
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
      id: '7',
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
      id: '8',
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

  // Set active image to main image if not already set
  if (!activeImage) {
    setActiveImage(plant.image);
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

  // Get background style by category
  const getBgGradient = (category: string) => {
    switch(category) {
      case 'indoor':
        return 'bg-gradient-to-b from-rawaa-primary/90 to-rawaa-primary/60';
      case 'outdoor':
        return 'bg-gradient-to-b from-rawaa-secondary/90 to-rawaa-secondary/60';
      case 'seed':
        return 'bg-gradient-to-b from-rawaa-accent/90 to-rawaa-accent/60';
      default:
        return 'bg-rawaa-primary';
    }
  };

  // Map category to icon
  const CategoryIcon = () => {
    switch(plant.category) {
      case 'indoor':
        return <Leaf className="h-8 w-8 text-white ml-3 drop-shadow-lg" />;
      case 'outdoor':
        return <Flower className="h-8 w-8 text-white ml-3 drop-shadow-lg" />;
      case 'seed':
        return <Sprout className="h-8 w-8 text-white ml-3 drop-shadow-lg" />;
      default:
        return null;
    }
  };

  // Get related plants
  const relatedPlants = allPlants
    .filter(p => p.category === plant.category && p.id !== plant.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section className={`py-16 md:py-24 relative overflow-hidden ${getBgGradient(plant.category)}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="w-full h-full opacity-15 blur-sm"
            style={{
              backgroundImage: `url(${plant.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.1)'
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center rtl">
            <CategoryIcon />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                {plant.name}
              </h1>
              <div className="flex items-center mt-3">
                <span className={`text-sm px-3 py-1 rounded-full shadow-md ${categoryClass[plant.category as keyof typeof categoryClass]}`}>
                  {categoryMap[plant.category as keyof typeof categoryMap]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Plant Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rtl">
            {/* Main Image and Gallery */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <Card className="overflow-hidden shadow-lg border-none mb-6">
                  <CardContent className="p-0">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src={activeImage || plant.image} 
                        alt={plant.name} 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {plant.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`overflow-hidden rounded-md cursor-pointer border-2 transition-all ${
                        activeImage === img ? 'border-rawaa-primary scale-105' : 'border-transparent'
                      }`}
                      onClick={() => setActiveImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${plant.name} - ${index + 1}`} 
                        className="w-full h-16 object-cover hover:opacity-90 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Plant Information */}
            <div className="md:col-span-2">
              <Card className="p-6 md:p-8 shadow-md border-none mb-8 bg-white">
                <h2 className="text-3xl font-bold mb-6 text-rawaa-primary">معلومات عن {plant.name}</h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">{plant.fullDescription}</p>
                
                <div className="mb-8 bg-green-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-rawaa-primary">
                    <Leaf className="h-6 w-6 ml-2 text-green-600" />
                    تعليمات العناية
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{plant.careInstructions}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 rtl">
          <h2 className="text-3xl font-bold mb-8 text-center text-rawaa-primary">معرض صور</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {plant.images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-md">
                      <CardContent className="p-0">
                        <img 
                          src={image} 
                          alt={`${plant.name} - ${index + 1}`} 
                          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>
      
      {/* Related Plants Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 rtl">
          <h2 className="text-3xl font-bold mb-8 text-center text-rawaa-primary">نباتات ذات صلة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedPlants.map(relatedPlant => (
              <PlantCard 
                key={relatedPlant.id}
                id={relatedPlant.id}
                name={relatedPlant.name}
                image={relatedPlant.image}
                shortDescription={relatedPlant.shortDescription}
                category={relatedPlant.category as 'indoor' | 'outdoor' | 'seed'}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default PlantDetails;
