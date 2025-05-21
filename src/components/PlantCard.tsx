
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface PlantCardProps {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  category: 'indoor' | 'outdoor' | 'seed';
}

const PlantCard: React.FC<PlantCardProps> = ({ id, name, image, shortDescription, category }) => {
  const categoryMap = {
    'indoor': 'داخلي',
    'outdoor': 'خارجي',
    'seed': 'بذور'
  };

  const categoryClass = {
    'indoor': 'bg-green-100 text-green-800',
    'outdoor': 'bg-blue-100 text-blue-800',
    'seed': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <Card className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-none">
      <div className="relative overflow-hidden w-full h-48 bg-white flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-500"
        />
        <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full rtl shadow-sm ${categoryClass[category]}`}>
          {categoryMap[category]}
        </span>
      </div>
      <CardContent className="p-5 rtl">
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-rawaa-primary transition-colors">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{shortDescription}</p>
        <Link 
          to={`/plant/${id}`} 
          className="inline-block bg-rawaa-primary text-white px-4 py-2 rounded-md transition-all hover:bg-rawaa-primary/90 hover:scale-105"
        >
          اقرأ المزيد
        </Link>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
