
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';
import { Info, Leaf } from 'lucide-react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'سارة الأحمد',
      role: 'مؤسسة ومديرة',
      image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      bio: 'خبيرة في مجال الزراعة المنزلية مع أكثر من 10 سنوات من الخبرة في تعليم الزراعة. حاصلة على شهادة في البستنة من جامعة الملك سعود.'
    },
    {
      name: 'لينا محمد',
      role: 'خبيرة نباتات داخلية',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      bio: 'متخصصة في النباتات المنزلية والعناية بها، حاصلة على شهادة في البستنة التخصصية. لديها خبرة 7 سنوات في تنسيق النباتات الداخلية.'
    },
    {
      name: 'نورة العلي',
      role: 'مسؤولة التسويق',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
      bio: 'تمتلك خبرة واسعة في التسويق وإدارة المحتوى المتخصص في مجال النباتات والزراعة. خريجة إدارة أعمال مع شغف كبير للنباتات.'
    },
    {
      name: 'هدى الزهراني',
      role: 'مستشارة الحدائق',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      bio: 'مهندسة زراعية متخصصة في تصميم وتنفيذ الحدائق الخارجية. لديها خبرة 9 سنوات في إنشاء حدائق متكاملة تجمع بين الجمال والاستدامة.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-rawaa-primary py-12">
          <div className="container mx-auto px-4 rtl">
            <div className="flex items-center">
              <Info className="text-white h-12 w-12 ml-4" />
              <div>
                <h1 className="text-3xl font-bold text-white">من نحن</h1>
                <p className="text-white opacity-80">تعرف على فريق رواء وقصتنا مع عالم النباتات</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-12 rtl">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                  alt="قصة رواء" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="section-title">قصتنا</h2>
                <p className="mb-4 text-gray-600">
                  بدأت رحلة "رواء" في عام 2018 عندما قررت سارة الأحمد، مؤسسة الموقع، مشاركة شغفها بالنباتات مع الآخرين. بعد سنوات من الخبرة والدراسة في مجال الزراعة، أدركت سارة أن هناك نقصاً في المحتوى العربي المتخصص في مجال الزراعة المنزلية والعناية بالنباتات.
                </p>
                <p className="mb-4 text-gray-600">
                  انطلقت "رواء" كمدونة صغيرة تقدم نصائح بسيطة للعناية بالنباتات، ومع الوقت تطور المشروع ليصبح منصة تعليمية متكاملة تضم فريقاً من الخبراء المتخصصين في مختلف مجالات الزراعة والبستنة.
                </p>
                <p className="text-gray-600">
                  اليوم، تسعى "رواء" إلى نشر الثقافة الزراعية وحب الطبيعة في المجتمع العربي، وتوفير معلومات موثوقة ومبسطة تساعد الجميع على الاستمتاع بزراعة النباتات والعناية بها، سواء في المنزل أو الحديقة.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-12 bg-rawaa-light rtl">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-8">مهمتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-rawaa-primary/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-rawaa-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">نشر المعرفة</h3>
                <p className="text-gray-600">
                  توفير محتوى عربي موثوق وسهل الفهم في مجال الزراعة والعناية بالنباتات.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-rawaa-secondary/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Plant className="h-8 w-8 text-rawaa-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">تشجيع الزراعة المنزلية</h3>
                <p className="text-gray-600">
                  مساعدة الناس على إنشاء مساحات خضراء في منازلهم وتعزيز الارتباط بالطبيعة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-rawaa-accent/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Seed className="h-8 w-8 text-rawaa-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">دعم الاستدامة</h3>
                <p className="text-gray-600">
                  تعزيز ممارسات الزراعة المستدامة والصديقة للبيئة للمساهمة في مستقبل أفضل.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 rtl">
            <h2 className="section-title">فريق العمل</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
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
        
        {/* Values */}
        <section className="py-12 bg-rawaa-primary/5 rtl">
          <div className="container mx-auto px-4">
            <h2 className="section-title">قيمنا</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-rawaa-primary">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">الدقة العلمية</h3>
                <p className="text-gray-600">
                  نلتزم بتقديم معلومات دقيقة وموثوقة، مبنية على أسس علمية وخبرات عملية.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-rawaa-primary">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">التبسيط</h3>
                <p className="text-gray-600">
                  نسعى لتبسيط المعلومات المعقدة وتقديمها بطريقة سهلة الفهم والتطبيق.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-rawaa-primary">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">الشمولية</h3>
                <p className="text-gray-600">
                  نغطي مختلف جوانب العناية بالنباتات والزراعة لتلبية احتياجات جميع المهتمين.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-rawaa-primary">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">المجتمعية</h3>
                <p className="text-gray-600">
                  نؤمن بأهمية بناء مجتمع من محبي النباتات لتبادل الخبرات والمعرفة.
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

export default About;
