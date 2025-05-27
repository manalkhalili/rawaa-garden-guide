
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Flower, Sprout, Leaf, ExternalLink, ThermometerSun, Droplets, Sun, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import PlantCard from '../components/PlantCard';
import { plantsData } from '../data/plantsData';

const PlantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  // Find the plant based on the ID parameter
  const plant = plantsData.find(p => p.id === id);

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
  const relatedPlants = plantsData
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
              <div className="flex items-center mt-3 gap-3">
                <Badge className={`shadow-md ${categoryClass[plant.category as keyof typeof categoryClass]}`}>
                  {categoryMap[plant.category as keyof typeof categoryMap]}
                </Badge>
                {plant.scientificName && (
                  <Badge variant="outline" className="bg-white/90 text-gray-700">
                    {plant.scientificName}
                  </Badge>
                )}
                {plant.difficulty && (
                  <Badge variant="outline" className="bg-white/90 text-gray-700">
                    صعوبة: {plant.difficulty}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Plant Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rtl">
            {/* Main Image and Gallery */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="overflow-hidden shadow-lg border-none mb-6">
                  <CardContent className="p-0">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src={activeImage || plant.image} 
                        alt={plant.name} 
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                {/* Thumbnail Gallery */}
                {plant.images && plant.images.length > 1 && (
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
                )}
              </div>
            </div>
            
            {/* Plant Information */}
            <div className="lg:col-span-2">
              {/* Basic Info Card */}
              <Card className="p-6 shadow-md border-none mb-6 bg-white">
                <h2 className="text-3xl font-bold mb-4 text-rawaa-primary">معلومات عامة</h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">{plant.fullDescription}</p>
                
                {/* Quick Facts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {plant.origin && (
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-800 ml-2">الموطن الأصلي:</span>
                      <span className="text-gray-600">{plant.origin}</span>
                    </div>
                  )}
                  {plant.matureSize && (
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-800 ml-2">الحجم الناضج:</span>
                      <span className="text-gray-600">{plant.matureSize}</span>
                    </div>
                  )}
                  {plant.growthRate && (
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-800 ml-2">معدل النمو:</span>
                      <span className="text-gray-600">{plant.growthRate}</span>
                    </div>
                  )}
                  {plant.toxicity && (
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-800 ml-2">السمية:</span>
                      <span className="text-gray-600">{plant.toxicity}</span>
                    </div>
                  )}
                </div>
              </Card>

              {/* Care Instructions Card */}
              <Card className="p-6 shadow-md border-none mb-6 bg-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-rawaa-primary">
                  <Leaf className="h-6 w-6 ml-2 text-green-600" />
                  تعليمات العناية
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">{plant.careInstructions}</p>
                
                {/* Care Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {plant.sunlight && (
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Sun className="h-5 w-5 text-yellow-600 ml-2" />
                        <span className="font-semibold text-gray-800">الإضاءة</span>
                      </div>
                      <span className="text-gray-600">{plant.sunlight}</span>
                    </div>
                  )}
                  {plant.wateringFrequency && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Droplets className="h-5 w-5 text-blue-600 ml-2" />
                        <span className="font-semibold text-gray-800">الري</span>
                      </div>
                      <span className="text-gray-600">{plant.wateringFrequency}</span>
                    </div>
                  )}
                  {plant.temperature && (
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <ThermometerSun className="h-5 w-5 text-red-600 ml-2" />
                        <span className="font-semibold text-gray-800">درجة الحرارة</span>
                      </div>
                      <span className="text-gray-600">{plant.temperature}</span>
                    </div>
                  )}
                  {plant.humidity && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-green-600 ml-2" />
                        <span className="font-semibold text-gray-800">الرطوبة</span>
                      </div>
                      <span className="text-gray-600">{plant.humidity}</span>
                    </div>
                  )}
                </div>
                
                {/* Soil and Fertilizing */}
                {(plant.soilType || plant.fertilizing) && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {plant.soilType && (
                      <div>
                        <span className="font-semibold text-gray-800">نوع التربة:</span>
                        <p className="text-gray-600 mt-1">{plant.soilType}</p>
                      </div>
                    )}
                    {plant.fertilizing && (
                      <div>
                        <span className="font-semibold text-gray-800">التسميد:</span>
                        <p className="text-gray-600 mt-1">{plant.fertilizing}</p>
                      </div>
                    )}
                  </div>
                )}
              </Card>

              {/* Benefits and Problems */}
              {(plant.benefits || plant.commonProblems) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {plant.benefits && (
                    <Card className="p-6 shadow-md border-none bg-white">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-green-600">
                        <CheckCircle className="h-5 w-5 ml-2" />
                        الفوائد
                      </h3>
                      <ul className="space-y-2">
                        {plant.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}
                  
                  {plant.commonProblems && (
                    <Card className="p-6 shadow-md border-none bg-white">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-orange-600">
                        <AlertTriangle className="h-5 w-5 ml-2" />
                        المشاكل الشائعة
                      </h3>
                      <ul className="space-y-2">
                        {plant.commonProblems.map((problem, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full ml-2"></div>
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}
                </div>
              )}

              {/* Seasonal Care */}
              {plant.seasonalCare && (
                <Card className="p-6 shadow-md border-none bg-white">
                  <h3 className="text-xl font-bold mb-4 text-rawaa-primary">العناية الموسمية</h3>
                  <p className="text-gray-700 leading-relaxed">{plant.seasonalCare}</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Carousel */}
      {plant.images && plant.images.length > 1 && (
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
      )}
      
      {/* Related Plants Section */}
      {relatedPlants.length > 0 && (
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
      )}
      
      <Footer />
    </div>
  );
};

export default PlantDetails;
