
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Phone, Mail, Home } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('تم إرسال رسالتك بنجاح، سنتواصل معك قريباً', {
      position: 'top-center'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-rawaa-primary py-12">
          <div className="container mx-auto px-4 rtl">
            <div className="flex items-center">
              <Phone className="text-white h-12 w-12 ml-4" />
              <div>
                <h1 className="text-3xl font-bold text-white">تواصل معنا</h1>
                <p className="text-white opacity-80">نحن هنا للإجابة على استفساراتك ومساعدتك</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-12">
          <div className="container mx-auto px-4 rtl">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Contact Form */}
              <div className="md:w-2/3">
                <h2 className="section-title">أرسل لنا رسالة</h2>
                
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">الاسم</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rawaa-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rawaa-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">الموضوع</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rawaa-primary"
                      required
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استفسار عام">استفسار عام</option>
                      <option value="مشكلة فنية">مشكلة فنية</option>
                      <option value="اقتراح">اقتراح</option>
                      <option value="طلب تعاون">طلب تعاون</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">الرسالة</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rawaa-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="bg-rawaa-primary hover:bg-rawaa-primary/90 w-full py-6">
                    إرسال الرسالة
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="md:w-1/3">
                <h2 className="section-title">معلومات التواصل</h2>
                
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-rawaa-primary/10 p-3 rounded-full ml-4">
                        <Mail className="h-6 w-6 text-rawaa-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">البريد الإلكتروني</h3>
                        <p className="text-gray-600">info@rawaa.com</p>
                        <p className="text-gray-600">support@rawaa.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-rawaa-primary/10 p-3 rounded-full ml-4">
                        <Phone className="h-6 w-6 text-rawaa-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">رقم الهاتف</h3>
                        <p className="text-gray-600">+966 50 123 4567</p>
                        <p className="text-gray-600">+966 55 987 6543</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-rawaa-primary/10 p-3 rounded-full ml-4">
                        <Home className="h-6 w-6 text-rawaa-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">العنوان</h3>
                        <p className="text-gray-600">
                          طريق الملك عبدالله، حي الملقا،
                          <br />
                          الرياض، المملكة العربية السعودية
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-gray-800 mb-4">تابعنا على وسائل التواصل</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-500 p-3 rounded-full text-white hover:bg-blue-600 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-500 transition-colors mr-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-colors mr-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="bg-white p-2 rounded-lg shadow-lg overflow-hidden">
              {/* This would be replaced by an actual map component */}
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <p className="text-gray-500">هنا سيتم عرض الخريطة</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-12 bg-rawaa-light rtl">
          <div className="container mx-auto px-4">
            <h2 className="section-title">الأسئلة الشائعة</h2>
            
            <div className="space-y-4 mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-rawaa-primary">كيف يمكنني الاشتراك في النشرة البريدية؟</h3>
                <p className="text-gray-600">
                  يمكنك الاشتراك في نشرتنا البريدية من خلال إدخال بريدك الإلكتروني في نموذج الاشتراك الموجود في أسفل الصفحة الرئيسية.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-rawaa-primary">هل تقدمون استشارات خاصة للعناية بالنباتات؟</h3>
                <p className="text-gray-600">
                  نعم، نقدم استشارات خاصة للعناية بالنباتات. يمكنك التواصل معنا عبر البريد الإلكتروني أو ملء نموذج الاتصال في هذه الصفحة.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-rawaa-primary">هل يمكنني المساهمة بمقالات في موقعكم؟</h3>
                <p className="text-gray-600">
                  نرحب بالمساهمات من الخبراء وهواة الزراعة. يرجى إرسال مقترحاتك أو مقالاتك إلى بريدنا الإلكتروني وسنتواصل معك في أقرب وقت.
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

export default Contact;
