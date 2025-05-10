
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlantCard from '../components/PlantCard';
import TeamMember from '../components/TeamMember';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Plant, Seed, Leaf } from 'lucide-react';

const Index = () => {
  // Featured plants data
  const featuredPlants = [
    {
      id: '1',
      name: 'نبات الصبار',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      shortDescription: 'نبات داخلي سهل العناية، مثالي للمبتدئين في عالم الزراعة المنزلية.',
      category: 'indoor' as const
    },
    {
      id: '2',
      name: 'زهرة الياسمين',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      shortDescription: 'نبات خارجي عطري، يضفي رائحة زكية ومظهر جميل للحدائق.',
      category: 'outdoor' as const
    },
    {
      id: '3',
      name: 'بذور الريحان',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      shortDescription: 'بذور عشبية عطرية سهلة الزراعة، تستخدم في الطهي والعلاج.',
      category: 'seed' as const
    }
  ];
  
  // Team members data
  const teamMembers = [
    {
      name: 'سارة الأحمد',
      role: 'مؤسسة ومديرة',
      image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      bio: 'خبيرة في مجال الزراعة المنزلية مع أكثر من 10 سنوات من الخبرة في تعليم الزراعة.'
    },
    {
      name: 'لينا محمد',
      role: 'خبيرة نباتات داخلية',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      bio: 'متخصصة في النباتات المنزلية والعناية بها، حاصلة على شهادة في البستنة التخصصية.'
    },
    {
      name: 'نورة العلي',
      role: 'مسؤولة التسويق',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
      bio: 'تمتلك خبرة واسعة في التسويق وإدارة المحتوى المتخصص في مجال النباتات والزراعة.'
    }
  ];
  
  // Featured product data
  const featuredProduct = {
    name: 'طقم أدوات زراعة منزلية',
    price: '149 ريال',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    description: 'مجموعة كاملة من أدوات الزراعة المنزلية، تشمل مجرفة، مقص، قفازات، وأواني زراعة.'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Plant Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 rtl">
            <h2 className="section-title">أقسام النباتات</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Indoor Plants Category */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-rawaa-primary flex items-center justify-center">
                  <Plant className="h-24 w-24 text-white" />
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
                  <Plant className="h-24 w-24 text-white" />
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
                  <Seed className="h-24 w-24 text-white" />
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
                  <span className="text-gray-500 mr-2 line-through">199 ريال</span>
                </div>
                <Button className="bg-rawaa-primary hover:bg-rawaa-primary/90 text-white px-8 py-6">
                  اشتري الآن
                </Button>
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
