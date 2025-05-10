
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-rawaa-light to-white py-16">
      <div className="container mx-auto px-4 rtl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-rawaa-dark mb-4">
              تعلّم أسرار الزراعة مع <span className="text-rawaa-primary">رواء</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              نقدم لك دليلاً شاملاً للعناية بالنباتات وزراعتها بطرق سهلة ومبسطة، لتنعم بمساحة خضراء في منزلك وحديقتك.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-rawaa-primary hover:bg-rawaa-primary/90 text-white px-6 py-6 rounded-md">
                استكشف النباتات
              </Button>
              <Button variant="outline" className="border-rawaa-primary text-rawaa-primary hover:bg-rawaa-primary/10 px-6 py-6 rounded-md mr-4">
                تعلم المزيد
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                alt="مجموعة نباتات منزلية" 
                className="rounded-lg shadow-xl animate-float"
              />
              <div className="absolute -bottom-4 -left-4 bg-rawaa-primary text-white p-4 rounded-lg shadow-lg rtl">
                <p className="text-lg font-bold">+500 نوع من النباتات</p>
                <p className="text-sm">دليل كامل للعناية والزراعة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
