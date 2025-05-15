
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlantCard from '../components/PlantCard';
import TeamMember from '../components/TeamMember';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import {Flower, Sprout, Leaf, BookOpenText, Sparkles, Target} from 'lucide-react';

const Index = () => {
  // Featured plants data
  const featuredPlants = [
    {
      id: '1',
      name: 'العدس',
      image: 'assets/img_28.png',
      shortDescription: 'من البقوليات التي تنمو في الأجواء المعتدلة. يزرع بالخارج في تربة جيدة التصريف، ويحتاج ري منتظم دون إغراق. لا يحتاج لتقليم ويثبت النيتروجين طبيعيًا في التربة.\n' +
          '\n',
      category: 'seed' as const
    },
    {
      id: '2',
      name: 'نبتة الفراولة',
      image: 'assets/img_17.png',
      shortDescription: 'نبات خارجي يحب الشمس وبيحتاج تربة جيدة التصريف. يُزرع في الأماكن المشمسة مع عناية بالتسميد والتقيلم. يُصاب ببعض الأمراض الفطرية والبكتيرية، ويحتاج لمكافحة دورية.\n' +
          '\n',
      category: 'outdoor' as const
    },
    {
      id: '6',
      name: 'وردة الكالا',
      image: 'assets/img_21.png',
      shortDescription: 'نبتة أنيقة تزهر في الربيع أو الصيف، قابلة للزراعة داخلًا أو خارجًا، تفضل الضوء الساطع غير المباشر وتربة جيدة التصريف. رمز للنقاء وتُستخدم كثيرًا في تنسيقات الزهور.' ,
      category: 'indoor' as const

    }
  ];
  
  // Team members data
  const teamMembers = [
    {
      name: 'بشرى صبحي',
      role: 'المديرة التنفيذية',
      image: 'src/assets/img.png',
      bio: 'تقود بشرى الفريق برؤية مميزة وروح ملهمة، وتسهم بأفكار مبتكرة في تطوير المشروع وتحقيق أهدافه، مما يجعلها عنصرًا أساسيًا في نجاح العمل.'
    },
    {
      name: 'لجين',
      role: 'المدير المالي',
      image: 'src/assets/img_1.png',
      bio: 'تتولى لجين مسؤولية التخطيط المالي وإدارة الميزانية، وتحرص على تنظيم الموارد بكفاءة لضمان استدامة المشروع وتحقيق أفضل النتائج الاقتصادية.'
    },
    {
      name: ' منار',
      role: ' مديرة تطوير المنتجات',
      image: 'src/assets/img_4.png',
      bio: 'تتولى منار مسؤولية الإشراف على تطوير المنتجات الزراعية وتحسين تجربة الزبائن، من خلال متابعة الابتكار في تصميم محتوى البوكس الزراعي وضمان تلبية احتياجات العملاء بشكل مستمر.'
    }
  ];
  
  // Featured product data
  const featuredProduct = {
    name: 'منتجنا',
    price: '135 شيكل',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    description: 'مجموعة كاملة من نبتة وأدوات الزراعة المنزلية، تشمل مجرفة، مقص، قفازات، وأواني زراعة.'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 rtl">
            {/* Title */}
            <h2 className="section-title text-center mb-10 text-3xl font-bold text-rawaa-primary">
              من نحن
            </h2>

            {/* About Us Card with Background Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 max-w-xl mx-auto">
              <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(src/assets/back.png)',
                    backgroundSize: 'contain',  // لتغطية الكارد بشكل كامل
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
              >
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-700 text-right leading-relaxed">
                  "رواء" — حيث تروى الأرض وتنبت الفكرة. شركة زراعية تجمع بين أصالة الطبيعة وحداثة التقنية.
                  لا نزرع محاصيل فقط، بل نزرع حلولاً ذكية، ونروي التربة بالمعرفة، لنحصد الابتكار والدعم المستدام
                  للمزارعين والمستهلكين.
                </p>
              </div>
            </div>

            {/* Cards for Vision, Message, Goals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Vision Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-rawaa-primary flex items-center justify-center">
                  <Sparkles className="h-20 w-20 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-rawaa-primary">الرؤية</h3>
                  <p className="text-gray-700">
                    أن نصنع من فلسطين منارة للزراعة الذكية، تجمع بين أصالة الأرض وروح الابتكار، لنقود
                    مستقبلًا مستدامًا يرتقي بجودة الحياة.
                  </p>
                </div>
              </div>

              {/* Message Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-rawaa-secondary flex items-center justify-center">
                  <BookOpenText className="h-20 w-20 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-rawaa-secondary">الرسالة</h3>
                  <p className="text-gray-700">
                    توفير بيئة زراعية تعليمية وإبداعية تشمل المعرفة، الأدوات، والتجربة العملية لجعل الزراعة
                    أسلوب حياة يبدأ من البيت ويكبر مع الأطفال.
                  </p>
                </div>
              </div>

              {/* Goals Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-rawaa-accent flex items-center justify-center">
                  <Target className="h-20 w-20 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-rawaa-accent">الأهداف</h3>
                  <ul className="list-disc text-gray-700 pr-4 space-y-2 text-sm">
                    <li>تطوير حلول زراعية ذكية ومستدامة لتحسين الإنتاج.</li>
                    <li>دعم الاقتصاد المحلي عبر متجر إلكتروني زراعي.</li>
                    <li>تحفيز الأطفال على الزراعة عبر صندوق زراعي تعليمي.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Plant Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 rtl">
            <h2 className="section-title">أقسام النباتات</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Indoor Plants Category */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-rawaa-primary flex items-center justify-center">
                  <Flower className="h-24 w-24 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">النباتات الداخلية</h3>
                  <p className="text-gray-600 mb-4">
                    اكتشف مجموعة متنوعة من النباتات المنزلية التي تناسب مختلف الأجواء والإضاءة.
                  </p>
                  <Button asChild className="w-full bg-rawaa-primary hover:bg-rawaa-primary/90">
                    <a href="/indoor-plants">استكشاف النباتات الداخلية</a>
                  </Button>
                </div>
              </div>
              
              {/* Outdoor Plants Category */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-rawaa-secondary flex items-center justify-center">
                  <Flower className="h-24 w-24 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">النباتات الخارجية</h3>
                  <p className="text-gray-600 mb-4">
                    استعرض نباتات الحدائق والأشجار والزهور التي تزيد من جمال مساحتك الخارجية.
                  </p>
                  <Button asChild className="w-full bg-rawaa-secondary hover:bg-rawaa-secondary/90">
                    <a href="/outdoor-plants">استكشاف النباتات الخارجية</a>
                  </Button>
                </div>
              </div>
              
              {/* Seeds Category */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-rawaa-accent flex items-center justify-center">
                  <Sprout className="h-24 w-24 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">البذور</h3>
                  <p className="text-gray-600 mb-4">
                    مجموعة من البذور المتنوعة لزراعة الخضروات والفواكه والزهور والأعشاب.
                  </p>
                  <Button asChild className="w-full bg-rawaa-accent hover:bg-rawaa-accent/90 text-white">
                    <a href="/seeds">استكشاف البذور</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Plants Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 rtl">
            <h2 className="section-title">النباتات المميزة</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
                <a href="/indoor-plants">عرض المزيد من النباتات</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 rtl">
            <h2 className="section-title">فريق العمل</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {teamMembers.map((member, index) => (
                  <TeamMember
                      key={index}
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      bio={member.bio}
                  />
              ))}
            </div>

            {/* زر في الأسفل بالوسط */}
            <div className="flex justify-center mt-10">
              <a
                  href="/About" // عدلي الرابط حسب المسار المناسب
                  className="bg-rawaa-primary text-white px-6 py-2 rounded-full hover:bg-rawaa-dark transition duration-300"
              >
                تعرف على فريقنا
              </a>
            </div>
          </div>
        </section>


        {/* Featured Product Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center bg-rawaa-light rounded-2xl overflow-hidden shadow-xl rtl">
              <div className="md:w-1/2">
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="inline-block px-3 py-1 bg-rawaa-primary text-white rounded-full text-sm font-semibold mb-4">
                  منتج مميز
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredProduct.name}</h3>
                <p className="text-gray-600 mb-6">
                  {featuredProduct.description}
                </p>
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-rawaa-primary">{featuredProduct.price}</span>
                </div>

              </div>
            </div>
          </div>
        </section>
        
        {/* Game Banner Section */}
        <section className="py-12 bg-rawaa-accent">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between rtl">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">لعبة الأطفال التعليمية</h2>
                <p className="text-white opacity-90">اكتشف لعبة تعليمية ممتعة تساعد أطفالك على التعرف على النباتات بطريقة مسلية!</p>
              </div>
              <Button asChild className="bg-white text-rawaa-primary hover:bg-white/90 px-8">
                <a href="/game">العب الآن!</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
