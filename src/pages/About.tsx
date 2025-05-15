
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';
import { Info, Leaf, Flower, Sprout, MessageSquare, Eye } from 'lucide-react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'بشرى صبحي',
      role: 'المديرة التنفيذية',
      image: 'assets/img.png',
      bio: ''

    },
    {
      name: 'لجين',
      role: 'المدير المالي',
      image: 'assets/img_1.png',
      bio: ''

    },
    {
      name: 'ليان شهاب',
      role: 'مدير العمليات',
      image: 'assets/img_3.png',
      bio: ''

    },
    {
      name: 'لارا محمد',
      role: 'رئيس قسم الموارد البشرية',
      image: 'assets/img_2.png',
      bio: ''
    }
    ,
    {
      name: 'سارة محمد',
      role: 'رئيس ادارة المشاريع',
      image: 'assets/img_5.png',
      bio: ''
    }
    ,
    {
      name: 'يقين ابو هنية ',
      role: 'مدير قسم التسويق',
      image: 'assets/img_6.png',
      bio: ''
    }
    ,
    {
      name: 'الاء سامي',
      role: 'مدير قسم المبيعات',
      image: 'assets/img_7.png',
      bio: ''
    }
    ,
    {
      name: 'منار',
      role: 'مديرة تطوير المنتجات',
      image: 'assets/img_4.png',
      bio: ''
    }
    ,
    {
      name: 'دانا\n',
      role: '',
      image: 'src/assets/img_8.png',
      bio: ''
    }
    ,
    {
      name: 'ابتسام',
      role: '',
      image: 'assets/img_9.png',
      bio: ''
    }
    ,
    {
      name: 'رؤى\n',
      role: '',
      image: 'assets/img_10.png',
      bio: ''
    }
    ,
    {
      name: 'روعة',
      role: '',
      image: 'assets/img_11.png',
      bio: ''
    }
    ,
    {
      name: 'نور الهدى\n',
      role: 'رئيس قسم الموارد البشرية',
      image: 'assets/img_12.png',
      bio: ''
    }
    ,
    {
      name: 'لمار حسن',
      role: '',
      image: 'assets/img_13.png',
      bio: ''
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
                  src="assets/logo2..jpg"
                  alt="قصة رواء"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="section-title">قصتنا في رَوْاء</h2>
                <p className="mb-4 text-gray-600">
                  في أرضٍ طالما نبضت بالحياة رغم التحديات، وُلدت فكرتنا. رأينا أطفالنا يكبرون بعيدًا عن التربة، لا يعرفون كيف تنبت الحبة ولا كيف تُروى الأرض. في زمنٍ كثرت فيه الشاشات وقلّت البذور، قررنا أن نعيد الزراعة إلى قلوبهم، وإلى بيوتنا.                </p>
                <p className="mb-4 text-gray-600">
                  في أرضٍ طالما نبضت بالحياة رغم التحديات، وُلدت فكرتنا. رأينا أطفالنا يكبرون بعيدًا عن التربة، لا يعرفون كيف تنبت الحبة ولا كيف تُروى الأرض. في زمنٍ كثرت فيه الشاشات وقلّت البذور، قررنا أن نعيد الزراعة إلى قلوبهم، وإلى بيوتنا.                </p>
                <p className="text-gray-600">
                  من خلال بوكساتنا التعليمية، يتعلّم الطفل كيف يزرع، كيف يعتني، وكيف يحصد. وفي كل بذرة يضعها، تترسّخ فيه قيم الصبر والانتماء للأرض. أما الأم، فتحصل على محتوى موثوق يرافقها خطوة بخطوة، لتكون جزءًا من هذه الرحلة، شريكة في التربية والزراعة معًا.

                  "رَواء" وُجدت لتقول: ما زال في الأرض حياة، وفي أطفالنا أمل، وفي أمهاتنا القوّة التي تُنبت الأجيال.                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision & Mission Sections */}
        <section className="py-12 bg-rawaa-light rtl">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-rawaa-primary/10 p-4 rounded-full inline-flex items-center justify-center mr-4">
                    <Eye className="h-8 w-8 text-rawaa-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">رؤيتنا</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  قيادة ثورة زراعية تكنولوجية من قلب فلسطين، تجمع بين الإبداع وجودة الإنتاج، لبناء اقتصاد أخضر ومستقبل معرفي مستدام.                </p>
              </div>
              
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-rawaa-secondary/10 p-4 rounded-full inline-flex items-center justify-center mr-4">
                    <MessageSquare className="h-8 w-8 text-rawaa-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">رسالتنا</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  نقدّم في "رَواء" منصة زراعية توعوية وإبداعية مخصصة لـ الأمهات والأطفال، تجمع بين محتوى إرشادي للأمهات حول المزروعات وألعاب زراعية تفاعلية للأطفال، لتنشئة جيل مرتبط بالأرض، واعٍ بأهمية الزراعة، وقادر على تبنيها كأسلوب حياة داخل البيت منذ الصغر. نهدف لتبسيط المعرفة الزراعية، وتحفيز الفضول والاكتشاف بأسلوب ممتع وعملي.                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-12 bg-white rtl">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-8">أهدافنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-rawaa-light p-6 rounded-lg shadow-lg text-center">
                <div className="bg-rawaa-primary/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-rawaa-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">نشر المعرفة</h3>
                <p className="text-gray-600">
                  نهدف إلى نشر ثقافة الزراعة بين الأمهات والأطفال، وتعزيز الوعي بأهمية الزراعة وفوائدها البيئية والصحية، لنزرع جيلًا يقدر الطبيعة ويحترمها.                </p>
              </div>
              <div className="bg-rawaa-light p-6 rounded-lg shadow-lg text-center">
                <div className="bg-rawaa-secondary/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Flower className="h-8 w-8 text-rawaa-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">تشجيع الزراعة المنزلية</h3>
                <p className="text-gray-600">
                  نؤمن بأن الزراعة المنزلية هي بداية الطريق نحو حياة صحية ومستدامة. نقدم الأدوات والموارد اللازمة لتحفيز الأمهات والأطفال على زرع نباتاتهم الخاصة في المنزل."                </p>
              </div>
              <div className="bg-rawaa-light p-6 rounded-lg shadow-lg text-center">
                <div className="bg-rawaa-accent/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Sprout className="h-8 w-8 text-rawaa-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">دعم الاستدامة</h3>
                <p className="text-gray-600">
                  نلتزم بدعم ممارسات الزراعة المستدامة التي تحترم البيئة وتقلل من الأثر البيئي. من خلال بوكساتنا التعليمية، نساعد الأمهات والأطفال على فهم أهمية الحفاظ على مواردنا الطبيعية.                </p>
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
                  نقدّم محتوى زراعيًا موثوقًا مبنيًا على مصادر علمية دقيقة، لضمان وصول الأمهات والأطفال إلى معلومات صحيحة وفعّالة في رحلتهم نحو الزراعة الواعية.                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-rawaa-primary">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">التبسيط</h3>
                <p className="text-gray-600">
                  نحوّل المفاهيم الزراعية المعقدة إلى محتوى سهل، ممتع، وملائم لعقول الصغار واهتمامات الكبار، لتكون الزراعة تجربة أقرب لكل بيت.                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-rawaa-primary">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">الشمولية</h3>
                <p className="text-gray-600">
                  من التوعية للأم إلى التفاعل مع الطفل، يغطي موقعنا الجوانب التعليمية، البيئية، والعملية للزراعة المنزلية بطريقة متكاملة.                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-rawaa-primary">
                <h3 className="text-xl font-bold mb-3 text-rawaa-primary">المجتمعية</h3>
                <p className="text-gray-600">
                  نبني مجتمعًا من الأمهات والأطفال المحبين للزراعة، حيث المشاركة، الدعم، والتجارب المشتركة تُثمر وعيًا جماعيًا ومحبةً للأرض.                </p>
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
